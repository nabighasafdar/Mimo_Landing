// Everything about the current APK release lives here, so a new version only means changing
// these values (or the matching env vars on the host) and redeploying.
//
// NEXT_PUBLIC_APK_URL: where the APK is hosted, e.g. a GitHub Releases asset link. Until it is
// set the page shows "Coming soon" instead of a link, so nobody downloads a 404 page as an APK.
export const site = {
  apkUrl: process.env.NEXT_PUBLIC_APK_URL || '',
  fileName: 'Mimo.apk',
  version: process.env.NEXT_PUBLIC_APK_VERSION || '1.0',
  /** e.g. "48 MB"; shown next to the version when set. */
  apkSize: process.env.NEXT_PUBLIC_APK_SIZE || '',
  // Public values, the same ones shipped in the app; row level security protects the data.
  supabaseUrl: 'https://ybvuqihcidyhufrqicgb.supabase.co',
  supabasePublishableKey: 'sb_publishable_f3AFQiH830CIkZ1iRhg04g_M690cOlU',
};
