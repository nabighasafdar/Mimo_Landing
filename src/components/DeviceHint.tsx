'use client';

import {useEffect, useState} from 'react';

type OS = 'android' | 'ios' | 'other';

function useOS(): OS | null {
  const [os, setOS] = useState<OS | null>(null);
  useEffect(() => {
    const ua = navigator.userAgent;
    setOS(/android/i.test(ua) ? 'android' : /iphone|ipad|ipod/i.test(ua) ? 'ios' : 'other');
  }, []);
  return os;
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
