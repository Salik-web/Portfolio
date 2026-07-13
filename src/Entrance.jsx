// The landing / chooser page: "pick how you want to see my work".
// Option 01 -> editorial version, Option 02 -> meme version.
export default function Entrance() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: "'Hanken Grotesk', sans-serif" }}>
      {/* header */}
      <div className="ent-header" style={{ textAlign: 'center', padding: '64px 32px 40px', background: '#faf6ec', color: '#2b2622' }}>
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#c0613f', marginBottom: 20 }}>
          Syed Salik Alvi · Gen AI Engineer
        </div>
        <h1 className="ent-title" style={{ fontFamily: "'Newsreader', serif", fontWeight: 300, fontSize: 60, lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0 }}>
          Pick how you want<br />to see my work.
        </h1>
        <p style={{ fontSize: 17, color: '#6b6258', margin: '20px 0 0', fontWeight: 400 }}>
          Same projects, same experience. Different energy.
        </p>
      </div>

      {/* two doors */}
      <div className="ent-doors" style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 520 }}>
        {/* editorial */}
        <a
          href="#/editorial"
          className="door door-classic"
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '64px 48px',
            background: '#fff',
            color: '#0a0a0a',
            borderRight: '1px solid #e5e5e5',
            textDecoration: 'none',
          }}
        >
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8a8078', marginBottom: 28 }}>
            Option 01
          </div>
          <div className="door-classic-title" style={{ fontFamily: "'Newsreader', serif", fontSize: 52, fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.05 }}>
            The Editorial<br />Index
          </div>
          <p style={{ fontSize: 16, color: '#4a4a4a', lineHeight: 1.65, maxWidth: '34ch', margin: '24px 0 0' }}>
            Black and white, minimal, numbered like a printed index. Projects, the product I'm
            building, and experience, no noise.
          </p>
          <span style={{ marginTop: 36, fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, letterSpacing: '0.04em', padding: '14px 30px', border: '1px solid #0a0a0a', borderRadius: 40, color: '#0a0a0a' }}>
            Enter the editorial version →
          </span>
        </a>

        {/* fun / meme */}
        <a
          href="#/meme"
          className="door door-fun"
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '64px 48px',
            background: '#ffe600',
            color: '#0f0f0f',
            overflow: 'hidden',
            textDecoration: 'none',
          }}
        >
          <div style={{ position: 'absolute', top: 24, right: 28, transform: 'rotate(8deg)', background: '#000', color: '#ffe600', fontFamily: "'Comic Neue', cursive", fontWeight: 700, fontSize: 13, padding: '6px 14px', borderRadius: 30, animation: 'wob 3s ease-in-out infinite' }}>
            🔊 has THE FAHHH
          </div>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7a6a00', marginBottom: 28 }}>
            Option 02
          </div>
          <div className="door-fun-title" style={{ fontFamily: "'Anton', Impact, sans-serif", textTransform: 'uppercase', fontSize: 64, lineHeight: 0.9, WebkitTextStroke: '2px #000', color: '#fff', paintOrder: 'stroke fill' }}>
            The Fun<br />Version
          </div>
          <p style={{ fontFamily: "'Comic Neue', cursive", fontWeight: 700, fontSize: 17, color: '#1a1a1a', lineHeight: 1.55, maxWidth: '34ch', margin: '24px 0 0' }}>
            Full meme chaos. Same real projects, greentext lore, deep-fry button, and yes, THE FAHHH. 🗿
          </p>
          <span className="door-fun-cta" style={{ marginTop: 36, fontFamily: "'Anton', Impact, sans-serif", fontSize: 17, letterSpacing: '0.03em', padding: '14px 30px', background: '#000', color: '#ffe600', borderRadius: 12 }}>
            UNLEASH IT →
          </span>
        </a>
      </div>

      {/* footer */}
      <div style={{ textAlign: 'center', padding: 22, background: '#2b2622', color: '#9a8d7b', fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: '0.06em' }}>
        <a href="mailto:saliksyed96@gmail.com" style={{ color: '#d98a6a', textDecoration: 'none' }}>
          saliksyed96@gmail.com
        </a>{' '}
        · Karachi, Pakistan
      </div>
    </div>
  )
}
