import type {Metadata} from 'next';
import Link from 'next/link';
import {site} from '@/site';

export const metadata: Metadata = {
  title: 'Privacy policy – Mimo',
  description: 'What Mimo collects, where it goes and how to delete it.',
};

function Contact() {
  return site.supportEmail ? (
    <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
  ) : (
    <>[support email]</>
  );
}

export default function Privacy() {
  return (
    <div className="lp">
      <div className="scal-t" />
      <main className="doc">
        <Link className="doc-back" href="/">← Back to Mimo</Link>
        <h1>Privacy policy</h1>
        <p className="doc-date">Last updated 30 October 2026</p>

        <p>
          Mimo is a personal budgeting app. This page explains what it collects, who handles that
          information and how you can delete it.
        </p>

        <h2>What Mimo collects</h2>
        <ul>
          <li><b>Your account:</b> your email address and password. Passwords are stored encrypted.</li>
          <li><b>Your profile:</b> name, age, income type and amount, currency and savings goal.</li>
          <li><b>Your spending:</b> each expense&apos;s name, amount, category and date, including the text of what you said for voice entries.</li>
          <li><b>Your bucket list:</b> the goals you add and how much you&apos;ve saved towards them.</li>
          <li><b>Usage counts:</b> how many AI reads you made each day, so we can apply the daily limit.</li>
        </ul>

        <h2>Receipt photos and voice</h2>
        <p>
          When you scan a receipt, the photo is sent to Google&apos;s Gemini AI through our server to
          read the items. When you tell Mimo what you spent, your phone&apos;s speech recognition
          turns your voice into text, and that text is sent to Gemini the same way. Mimo does not
          save your receipt photos or voice recordings, only the expenses you choose to add.
        </p>
        <p>
          Don&apos;t scan documents that show card numbers or other details you wouldn&apos;t want
          shared. Google handles what it receives under its own Gemini API terms.
        </p>

        <h2>Who handles your data</h2>
        <ul>
          <li><b>Supabase</b> hosts the database and login system.</li>
          <li><b>Google</b> provides Gemini (AI reading) and, on most Android phones, speech recognition.</li>
        </ul>
        <p>Mimo has no ads, and we don&apos;t sell your information.</p>

        <h2>Keeping and deleting your data</h2>
        <p>
          Your data is kept while you have an account, so it&apos;s there whenever you log in. You can
          delete any expense or goal in the app. To delete your whole account and everything in it,
          email <Contact /> from your account&apos;s email address.
        </p>

        <h2>Your data on your phone</h2>
        <p>
          The app stores your login session and your alert and tip settings on your phone. It asks
          for the camera and microphone only when you use those features, and you can turn them off
          in Android settings.
        </p>

        <h2>Children</h2>
        <p>Mimo isn&apos;t meant for children under 13, and we don&apos;t knowingly collect their data.</p>

        <h2>Changes and contact</h2>
        <p>
          If this policy changes, we&apos;ll update this page and the date at the top. Questions? Email <Contact />.
        </p>
      </main>
    </div>
  );
}
