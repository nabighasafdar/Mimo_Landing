import Image from 'next/image';
import type {CSSProperties} from 'react';
import {DeviceNote, HeroLabel} from '@/components/DeviceHint';
import {site} from '@/site';

// Ported from the "Landing page · APK download" artboard of the Mimo design canvas.

const sizeTxt = site.apkSize ? ` · ${site.apkSize}` : '';
// With no APK published yet, download buttons scroll to the card that says so.
const apkLink = site.apkUrl ? {href: site.apkUrl, download: site.fileName} : {href: '#download'};

function Phone({src, alt, style}: {src: string; alt: string; style?: CSSProperties}) {
  return (
    <div className="phone" style={style}>
      <div className="phone-scr">
        <Image src={src} alt={alt} fill sizes="281px" />
      </div>
    </div>
  );
}

/** A decorative scrapbook sticker, positioned absolutely by `style`. `className` can hide or shrink it on phones. */
function Sticker({src, w, h, style, alt = '', className = ''}: {src: string; w: number; h: number; style: CSSProperties; alt?: string; className?: string}) {
  return <Image className={`stk ${className}`} src={src} alt={alt} width={w} height={h} style={{width: w, height: h, ...style}} />;
}

function DownloadIcon({size = 18}: {size?: number}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="lp">
      <div className="scal-t" />

      <header className="wrap header">
        <a href="#top" aria-label="Mimo home" className="logo">
          <Image src="/art/logo-m.png" alt="" width={48} height={36} style={{transform: 'rotate(-5deg)'}} />
          <Image src="/art/logo-i.png" alt="" width={21} height={36} style={{transform: 'rotate(4deg)'}} />
          <Image src="/art/logo-m.png" alt="" width={48} height={36} style={{transform: 'rotate(3deg)'}} />
          <Image src="/art/logo-o.png" alt="" width={35} height={35} style={{transform: 'rotate(-6deg)'}} />
        </a>
        <nav aria-label="Page" className="nav">
          <a className="navl hide-sm" href="#features">Features</a>
          <a className="navl hide-sm" href="#install">How to install</a>
          <a className="navl hide-sm" href="#faq">FAQ</a>
          <a className="btn btn-p btn-sm" {...apkLink}>
            <DownloadIcon size={17} />
            Download APK
          </a>
        </nav>
      </header>

      <section id="top" className="wrap hero">
        <div className="hero-copy">
          <div className="hand" style={{fontSize: 28, fontWeight: 700, color: '#8F4A30', transform: 'rotate(-2deg)', display: 'inline-block'}}>
            your little budget journal ~
          </div>
          <h1>
            Track your money, <em>one tiny carrot</em> at a time.
          </h1>
          <p className="hero-lead">
            Mimo is a cosy budget app with a bunny who listens. Say what you spent or snap a receipt,
            and Mimo adds it to your list for you. Pick how much you want to save each month, and
            Mimo warns you before your spending eats into it.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-p" {...apkLink}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7.2 9.3h9.6v8.2a1.3 1.3 0 0 1-1.3 1.3h-.8v2.4a1.1 1.1 0 0 1-2.2 0v-2.4h-1v2.4a1.1 1.1 0 0 1-2.2 0v-2.4h-.8a1.3 1.3 0 0 1-1.3-1.3zM5.1 9.3a1.1 1.1 0 0 1 1.1 1.1v4.7a1.1 1.1 0 0 1-2.2 0v-4.7a1.1 1.1 0 0 1 1.1-1.1zm13.8 0a1.1 1.1 0 0 1 1.1 1.1v4.7a1.1 1.1 0 0 1-2.2 0v-4.7a1.1 1.1 0 0 1 1.1-1.1zM15.5 3.6l1-1.5a.25.25 0 0 0-.4-.3l-1 1.6a6 6 0 0 0-6.2 0l-1-1.6a.25.25 0 0 0-.4.3l1 1.5A5 5 0 0 0 7.2 8.3h9.6a5 5 0 0 0-1.3-4.7zM9.7 6.4a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2zm4.6 0a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2z" />
              </svg>
              <HeroLabel />
            </a>
            <a className="btn btn-g" href="#install">How to install</a>
          </div>
          <div className="hero-meta">
            <span>Free</span><span aria-hidden="true">·</span><span>Android only</span><span aria-hidden="true">·</span><span>Version {site.version}</span>
          </div>
          <DeviceNote />
        </div>

        <div className="hero-art">
          <div className="burlap hero-burlap" />
          <Phone src="/screens/home.png" alt="Mimo's home screen: money left to spend this month and a list of what you bought" style={{marginTop: 26, transform: 'rotate(2deg)'}} />
          <Sticker src="/art/bunny.png" alt="Mimo the bunny" w={118} h={250} style={{left: '2%', bottom: 10}} className="stk-bunny" />
          <Sticker src="/art/sticker-hero-top.png" w={96} h={99} style={{right: '4%', top: 0, transform: 'rotate(16deg)'}} className="stk-small" />
          <Sticker src="/art/sticker-hero-bottom.png" w={140} h={203} style={{right: 0, bottom: 0, transform: 'rotate(12deg)'}} className="stk-small" />
          <Sticker src="/art/seal.png" w={78} h={78} style={{left: '10%', top: 40, transform: 'rotate(-14deg)'}} className="hide-sm" />
        </div>
      </section>

      <div className="scal-s" />
      <section id="features" className="features">
        <div className="wrap">
          <div className="center">
            <div className="kicker">what Mimo does</div>
            <h2 className="h2" style={{marginTop: 6}}>Budgeting that feels like journaling</h2>
            <Sticker src="/art/deco-features-left.png" w={46} h={128} style={{left: '6%', top: -20, transform: 'rotate(-16deg)'}} className="hide-sm" />
            <Sticker src="/art/deco-features-right.png" w={52} h={128} style={{right: '6%', top: -26, transform: 'rotate(14deg)'}} className="hide-sm" />
          </div>
          <div className="feat-grid">
            <article className="feat">
              <div className="ficon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></svg>
              </div>
              <h3>Just say it</h3>
              <p>“450 on lunch and 200 on a rickshaw.” Mimo hears you, splits it into two expenses, names each one and files it for you. Misheard? Clear it and say it again.</p>
            </article>
            <article className="feat">
              <div className="ficon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 8h3l2-3h6l2 3h3v11H4z" /><circle cx="12" cy="13" r="3.5" /></svg>
              </div>
              <h3>Snap a receipt</h3>
              <p>Take a photo of any bill. Mimo reads every item and its price and adds them to your list. Tap to fix anything before you save.</p>
            </article>
            <article className="feat">
              <div className="ficon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 6h10M10 12h10M10 18h10" /><path d="M3.5 6l1.5 1.5 2.5-3M3.5 12l1.5 1.5 2.5-3M3.5 18l1.5 1.5 2.5-3" /></svg>
              </div>
              <h3>A bucket list that saves</h3>
              <p>Write what you want: a new phone, a trip, a winter jacket. Pick 1, 3 or 6 months and Mimo tells you how much to put aside each month.</p>
            </article>
            <article className="feat">
              <div className="ficon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" aria-hidden="true"><path d="M6 20V12M12 20V5M18 20v-9" /></svg>
              </div>
              <h3>A ledger, not a mess</h3>
              <p>Every item you bought this month in one simple list with a running total, plus a monthly ring chart, week-by-week spending and gentle tips from the bunny.</p>
            </article>
          </div>
        </div>
      </section>
      <div className="scal-s flip" />

      <section className="wrap sec">
        <div className="center">
          <div className="kicker">a peek inside</div>
          <h2 className="h2" style={{marginTop: 6}}>Every page is a little scrapbook</h2>
        </div>
        <div className="peek" aria-label="App screenshots">
          <Phone src="/screens/voice.png" alt="Telling Mimo what you spent by voice" style={{transform: 'rotate(-3deg)'}} />
          <Phone src="/screens/goals.png" alt="The bucket list with savings goals" style={{transform: 'translateY(-24px)'}} />
          <Phone src="/screens/stats.png" alt="Monthly spending stats with a ring chart" style={{transform: 'rotate(3deg)'}} />
          <Sticker src="/art/deco-peek-left.png" w={96} h={168} style={{left: 0, bottom: -40, transform: 'rotate(-14deg)'}} className="hide-sm" />
          <Sticker src="/art/deco-peek-right.png" w={130} h={161} style={{right: 0, top: -40, transform: 'rotate(12deg)'}} className="hide-sm" />
        </div>
      </section>

      <div className="scal-b" />
      <section id="install" className="burlap install">
        <div className="wrap">
          <div className="center">
            <div className="parch3 install-title">
              <div className="hand" style={{fontSize: 24, fontWeight: 700, color: '#8F4A30'}}>it only takes a minute</div>
              <h2 className="h2" style={{marginTop: 4, fontSize: 'clamp(28px,3.4vw,40px)'}}>How to install Mimo</h2>
            </div>
          </div>
          <ol className="steps">
            <li className="step" style={{transform: 'rotate(-1.5deg)'}}>
              <span className="pin" /><span className="n">1</span>
              <h3>Download the APK</h3>
              <p>Tap the download button on your Android phone. The file is called <b>{site.fileName}</b>.</p>
            </li>
            <li className="step" style={{transform: 'rotate(1deg)'}}>
              <span className="pin" /><span className="n">2</span>
              <h3>Open the file</h3>
              <p>Open it from your notifications or the Downloads folder.</p>
            </li>
            <li className="step" style={{transform: 'rotate(-.5deg)'}}>
              <span className="pin" /><span className="n">3</span>
              <h3>Allow the install</h3>
              <p>Android will ask if your browser can install apps. Tap <b>Settings</b>, turn on <b>Allow from this source</b>, then go back.</p>
            </li>
            <li className="step" style={{transform: 'rotate(1.5deg)'}}>
              <span className="pin" /><span className="n">4</span>
              <h3>Tap Install</h3>
              <p>Open Mimo and say hi to the bunny. That&apos;s it!</p>
            </li>
          </ol>
          <div className="notice">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8F4A30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{flex: 'none', marginTop: 2}} aria-hidden="true"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M9 12l2 2 4-4" /></svg>
            <p>Android shows a warning for any app that isn&apos;t from the Play Store yet. That&apos;s normal. Only download Mimo from this page, so you always get the real file.</p>
          </div>
        </div>
      </section>
      <div className="scal-b flip" />

      <section id="download" className="wrap sec">
        <div className="center">
          <div className="kicker">pick your phone</div>
          <h2 className="h2" style={{marginTop: 6}}>Download Mimo</h2>
        </div>
        <div className="plats">
          <div className="plat on">
            <div className="plat-head">
              <span className="plat-name">Android</span>
              <span className="tag" style={{background: 'rgba(138,148,112,.25)', color: '#3F4A2C'}}>
                {site.apkUrl ? 'AVAILABLE' : 'COMING SOON'}
              </span>
            </div>
            <p>APK file · version {site.version}{sizeTxt}</p>
            {site.apkUrl ? (
              <a className="btn btn-p" href={site.apkUrl} download={site.fileName} style={{marginTop: 6}}>
                <DownloadIcon />
                Download {site.fileName}
              </a>
            ) : (
              <button className="btn btn-g" disabled style={{marginTop: 6, cursor: 'not-allowed'}}>Coming soon</button>
            )}
            <p className="hand hide-sm">On a laptop? Open this page on your Android phone instead.</p>
          </div>
          <div className="plat off">
            <div className="plat-head">
              <span className="plat-name">iPhone</span>
              <span className="tag" style={{background: 'rgba(107,84,70,.14)', color: '#5B4232'}}>NOT YET</span>
            </div>
            <p>Mimo is Android only for now.</p>
            <button className="btn btn-g" disabled style={{marginTop: 6, cursor: 'not-allowed'}}>Coming later</button>
            <p className="hand">The bunny is still learning to hop over.</p>
          </div>
        </div>
      </section>

      <section id="faq" className="wrap sec-faq">
        <div className="center">
          <h2 className="h2">Questions</h2>
        </div>
        <div className="faq">
          <Sticker src="/art/deco-faq-left.png" w={80} h={114} style={{left: -110, top: 10, transform: 'rotate(-10deg)'}} className="hide-sm" />
          <Sticker src="/art/deco-faq-right.png" w={90} h={126} style={{right: -110, bottom: 0, transform: 'rotate(12deg)'}} className="hide-sm" />
          <details open>
            <summary>Why isn&apos;t Mimo on the Play Store?</summary>
            <p>Not yet! For now you can download the app straight from this page. When Mimo arrives on the Play Store, we&apos;ll link it here.</p>
          </details>
          <details>
            <summary>Is Mimo free?</summary>
            <p>Yes, downloading Mimo from this page is free.</p>
          </details>
          <details>
            <summary>Android says the app is from an &quot;unknown source&quot;. Is that okay?</summary>
            <p>Android says this about every app installed outside the Play Store. As long as you downloaded the file from this page, you can allow it and continue.</p>
          </details>
          <details>
            <summary>How do I update Mimo?</summary>
            <p>Come back to this page, download the newest APK and install it over the old one.</p>
          </details>
          <details>
            <summary>Is there an iPhone version?</summary>
            <p>Not yet. Mimo is Android only for now.</p>
          </details>
        </div>
      </section>

      <div className="scal-t flip" />
      <footer className="footer">
        <div className="wrap footer-in">
          <div style={{display: 'flex', alignItems: 'center', gap: 14}}>
            <Image src="/art/bunny.png" alt="" width={34} height={72} />
            <div>
              <div style={{font: '600 24px var(--serif)', color: '#3B2A1F'}}>Mimo</div>
              <div className="hand" style={{fontSize: 19, color: '#3B2A1F'}}>one tiny carrot at a time</div>
            </div>
          </div>
          <nav aria-label="Footer" style={{display: 'flex', gap: 22, flexWrap: 'wrap'}}>
            <a href="#features">Features</a>
            <a href="#install">Install</a>
            <a href="#faq">FAQ</a>
            <a href="/privacy">Privacy</a>
            <a href="/delete-account">Delete account</a>
          </nav>
          <div style={{fontSize: 13, fontWeight: 800, color: '#3B2A1F'}}>© {new Date().getFullYear()} Mimo</div>
        </div>
      </footer>
    </div>
  );
}
