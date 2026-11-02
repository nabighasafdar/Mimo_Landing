import type {Metadata} from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy policy – Mimo',
  description: 'What Mimo collects, where it goes and how to delete it.',
};

const ISSUES_URL = 'https://github.com/nabighasafdar/Mimo/issues';

export default function Privacy() {
  return (
    <div className="lp">
      <div className="scal-t" />
      <main className="doc">
        <Link className="doc-back" href="/">← Back to Mimo</Link>
        <h1>Privacy policy</h1>
        <p className="doc-date">Last updated 2 November 2026</p>

        <p>
          Mimo helps you track your spending. This page explains what the app collects, why, and
          what you can do about it.
        </p>

        <h2>What Mimo stores</h2>
        <ul>
          <li><b>Account:</b> your email address and password, or your Google sign-in. Passwords are stored only in hashed form.</li>
          <li><b>Profile:</b> the name, age, income type, income, currency and savings goal you enter.</li>
          <li><b>Budget:</b> your expenses (amount, category, note, date, and the words you said when you logged one by voice) and your savings goals.</li>
          <li><b>Usage:</b> how many AI reads you made each day, used to apply the daily limit.</li>
        </ul>

        <h2>What Mimo does not do</h2>
        <p>Mimo has no ads and no analytics, does not sell your data, and does not connect to your bank.</p>

        <h2>Other services that handle your data</h2>
        <ul>
          <li><b>Supabase</b> hosts your account and budget. Its servers are in Singapore, so your data is processed outside your country if you live elsewhere.</li>
          <li><b>Google Gemini</b> reads the receipt photos and spending text you send to Mimo&apos;s AI. Mimo does not keep the photos, but they are processed by Google under its terms. Please avoid scanning documents with information you would not want processed this way.</li>
          <li><b>Your phone&apos;s speech recognition</b> turns your voice into text. On most Android phones this is provided by Google. Mimo receives the text, not a recording.</li>
          <li><b>Google Sign-In</b> shares your name and email with Mimo if you choose to use it.</li>
        </ul>

        <h2>Stored on your phone</h2>
        <p>
          Mimo keeps a copy of your budget and any changes waiting to be sent, so it can work
          without internet. The copy is removed when you log out. Changes not yet sent stay until
          you next log in.
        </p>

        <h2>Permissions</h2>
        <p>
          The microphone is used only while you log an expense by voice. The camera and photos are
          used only when you scan a receipt.
        </p>

        <h2>Keeping and deleting your data</h2>
        <p>
          Your data stays until you delete your account. You can do that any time in the app under{' '}
          <b>Me → Delete account</b>, or on the <Link href="/delete-account">delete account page</Link>.
          It removes your account, profile, expenses, goals and usage record for good. You can view
          and correct your details in the app at any time.
        </p>

        <h2>Children</h2>
        <p>
          Children should use Mimo with a parent or guardian&apos;s permission. If you believe a child
          has given us data without permission, contact us and we will delete it.
        </p>

        <h2>Changes</h2>
        <p>If this policy changes, the new version will be published here with a new date.</p>

        <h2>Contact</h2>
        <p>
          Questions or requests can be raised on <a href={ISSUES_URL}>GitHub Issues</a>. Issues are
          public, so please do not include personal or financial details.
        </p>
      </main>
    </div>
  );
}
