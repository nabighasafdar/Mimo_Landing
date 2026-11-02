import type {Metadata} from 'next';
import Link from 'next/link';
import DeleteAccountForm from '@/components/DeleteAccountForm';

export const metadata: Metadata = {
  title: 'Delete your account – Mimo',
  description: 'Permanently delete your Mimo account and everything in it.',
};

export default function DeleteAccount() {
  return (
    <div className="lp">
      <div className="scal-t" />
      <main className="doc">
        <Link className="doc-back" href="/">← Back to Mimo</Link>
        <h1>Delete your Mimo account</h1>
        <p>
          This permanently deletes your account, profile, expenses, goals and usage record. It
          cannot be undone.
        </p>
        <p>
          <b>Easiest way:</b> open Mimo, go to <b>Me</b> and tap <b>Delete account</b>. This also works
          if you joined with Google.
        </p>
        <p>
          <b>No longer have the app?</b> If you joined with email, log in here. If you joined with
          Google and can&apos;t open the app, ask on{' '}
          <a href="https://github.com/nabighasafdar/Mimo/issues">GitHub Issues</a>, without posting
          personal details.
        </p>
        <DeleteAccountForm />
      </main>
    </div>
  );
}
