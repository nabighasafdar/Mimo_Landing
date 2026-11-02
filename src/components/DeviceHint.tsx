'use client';

import {useSyncExternalStore} from 'react';

type OS = 'android' | 'ios' | 'other';

// The user agent never changes, so there is nothing to subscribe to.
const subscribe = () => () => {};

function detectOS(): OS {
  const ua = navigator.userAgent;
  return /android/i.test(ua) ? 'android' : /iphone|ipad|ipod/i.test(ua) ? 'ios' : 'other';
}

/** null while prerendering on the server, the visitor's OS once in the browser. */
function useOS(): OS | null {
  return useSyncExternalStore(subscribe, detectOS, () => null);
}

/** The hero button's label: iPhone visitors are told it's the Android file. */
export function HeroLabel() {
  return <>{useOS() === 'ios' ? 'Get the Android APK' : 'Download for Android'}</>;
}

/** One line under the hero buttons that speaks to the visitor's device. */
export function DeviceNote() {
  const os = useOS();
  if (!os) {
    return <p className="hero-note" />;
  }
  return (
    <p className="hero-note">
      {os === 'android'
        ? 'Looks like you’re on Android. You’re all set!'
        : os === 'ios'
        ? 'Mimo is Android only for now. Sorry, iPhone friends!'
        : 'On a laptop? Open this page on your Android phone to install.'}
    </p>
  );
}
