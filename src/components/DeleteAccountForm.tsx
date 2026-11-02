'use client';

import {createClient} from '@supabase/supabase-js';
import {type FormEvent, useMemo, useState} from 'react';
import {site} from '@/site';

// Logs in with email and password, then calls delete_my_account (supabase/schema.sql in the
// Mimo project), which removes the auth user and, by cascade, everything they own.
export default function DeleteAccountForm() {
  const supabase = useMemo(
    () =>
      createClient(site.supabaseUrl, site.supabasePublishableKey, {
        auth: {persistSession: false},
      }),
    [],
  );
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [done, setDone] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setDeleting(true);
    setError(null);
    const {error: loginError} = await supabase.auth.signInWithPassword({email: email.trim(), password});
    const {error: failed} = loginError ? {error: loginError} : await supabase.rpc('delete_my_account');
    setDeleting(false);
    if (failed) {
      setError(loginError ? 'That email and password do not match.' : 'Could not delete the account. Try again.');
      return;
    }
    await supabase.auth.signOut({scope: 'local'});
    setDone(true);
  };

  if (done) {
    return <p>Your account and data are deleted.</p>;
  }
  return (
    <form className="form" onSubmit={submit}>
      <label>
        Email
        <input
          type="email"
          autoComplete="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </label>
      <label className="form-check">
        <input type="checkbox" required />
        I understand this deletes everything for good.
      </label>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="btn btn-p" type="submit" disabled={deleting}>
        {deleting ? 'Deleting…' : 'Delete my account'}
      </button>
    </form>
  );
}
