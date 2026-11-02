'use client';

import {createClient} from '@supabase/supabase-js';
import {type FormEvent, useEffect, useMemo, useState} from 'react';
import {site} from '@/site';

// Same minimum as the app (src/validation.ts in the Mimo project).
const MIN_PASSWORD = 6;

type Stage = 'checking' | 'ready' | 'invalid' | 'done';

// The reset email lands here with a one-time session in the URL. Supabase reads it on load,
// then updateUser sets the new password for that account.
export default function ResetPasswordForm() {
  const supabase = useMemo(
    () =>
      createClient(site.supabaseUrl, site.supabasePublishableKey, {
        auth: {detectSessionInUrl: true, persistSession: false, flowType: 'implicit'},
      }),
    [],
  );
  const [stage, setStage] = useState<Stage>('checking');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const {data} = supabase.auth.onAuthStateChange((event, session) => {
      if (session && (event === 'PASSWORD_RECOVERY' || event === 'SIGNED_IN')) {
        setStage('ready');
      }
    });
    // A link that was already used or has expired never produces a session.
    const timer = setTimeout(() => setStage(s => (s === 'checking' ? 'invalid' : s)), 4000);
    return () => {
      clearTimeout(timer);
      data.subscription.unsubscribe();
    };
  }, [supabase]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (password.length < MIN_PASSWORD) {
      setError(`Use at least ${MIN_PASSWORD} characters.`);
      return;
    }
    if (password !== confirm) {
      setError("Those passwords don't match.");
      return;
    }
    setSaving(true);
    setError(null);
    const {error: failed} = await supabase.auth.updateUser({password});
    setSaving(false);
    if (failed) {
      setError(
        failed.message.toLowerCase().includes('different')
          ? 'Pick a password different from your old one.'
          : "Couldn't save your new password. Try the link in your email again.",
      );
      return;
    }
    await supabase.auth.signOut();
    setStage('done');
  };

  if (stage === 'checking') {
    return <p>Checking your reset link…</p>;
  }
  if (stage === 'invalid') {
    return (
      <p>
        This link has expired or was already used. Open Mimo, tap <b>Forgot password</b> and we&apos;ll
        email you a new one.
      </p>
    );
  }
  if (stage === 'done') {
    return <p>All set! Open Mimo and log in with your new password.</p>;
  }
  return (
    <form className="form" onSubmit={submit}>
      <label>
        New password
        <input
          type="password"
          autoComplete="new-password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </label>
      <label>
        Type it again
        <input
          type="password"
          autoComplete="new-password"
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
          required
        />
      </label>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="btn btn-p" type="submit" disabled={saving}>
        {saving ? 'Saving…' : 'Save new password'}
      </button>
    </form>
  );
}
