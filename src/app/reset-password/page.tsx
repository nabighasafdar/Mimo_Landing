import type {Metadata} from 'next';
import ResetPasswordForm from '@/components/ResetPasswordForm';

export const metadata: Metadata = {
  title: 'Reset your password – Mimo',
  robots: {index: false},
};

export default function ResetPassword() {
  return (
    <div className="lp">
      <div className="scal-t" />
      <main className="doc">
        <h1>Reset your password</h1>
        <ResetPasswordForm />
      </main>
    </div>
  );
}
