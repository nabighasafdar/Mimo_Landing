# Mimo landing page

The download page for the Mimo Android app, built with Next.js from the "Landing page · APK
download" design.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build, catches type and lint errors
```

## Publishing a new APK

1. Build a signed release APK in the app project (`Mimo/android`: `./gradlew assembleRelease`).
2. Upload `app-release.apk` as **Mimo.apk** to a new GitHub Release (or Supabase Storage).
3. Set these on the host (Vercel → Settings → Environment Variables) and redeploy:

| Variable | Example |
|---|---|
| `NEXT_PUBLIC_APK_URL` | `https://github.com/<you>/mimo/releases/download/v1.0/Mimo.apk` |
| `NEXT_PUBLIC_APK_VERSION` | `1.0` |
| `NEXT_PUBLIC_APK_SIZE` | `48 MB` |
| `NEXT_PUBLIC_SITE_URL` | `https://your-domain.com` |

Without `NEXT_PUBLIC_APK_URL` the page shows "Coming soon" instead of a download link.

To test locally, copy the APK to `public/Mimo.apk` and put `NEXT_PUBLIC_APK_URL=/Mimo.apk` in
`.env.local`. Keep APKs out of git: they're large and every version would stay in the history.

## Where things are

- `src/app/page.tsx`: the page, section by section.
- `src/app/globals.css`: all styles and the scrapbook colours.
- `src/site.ts`: APK link, file name, version and size.
- `public/art/`: textures and stickers from the design.
- `public/screens/`: screenshots of the app shown in the phone frames
  (`home`, `voice`, `goals`, `stats`). Replace them with new screenshots when the app changes.
