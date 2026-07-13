const base = import.meta.env.BASE_URL;

export default function Slide01Cover() {
  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <img
        src={`${base}hero.jpg`}
        crossOrigin="anonymous"
        alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(140deg, hsl(189,72%,13%) 0%, hsl(189,65%,19%) 60%, hsl(189,55%,22%) 100%)',
        opacity: 0.88,
      }} />

      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        padding: '0 7vw',
      }}>
        <div style={{
          fontFamily: 'var(--font-body-family)',
          fontSize: '1.5vw',
          color: 'rgba(255,255,255,0.55)',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          fontWeight: 500,
          marginBottom: '2.8vh',
        }}>
          Concept / Pilot Design · 2026
        </div>

        <div style={{
          fontFamily: 'var(--font-display-family)',
          fontSize: '7vw',
          color: '#ffffff',
          fontWeight: 700,
          lineHeight: 1.0,
          letterSpacing: '-0.025em',
          marginBottom: '2.5vh',
        }}>
          CovertCare
        </div>

        <div style={{
          fontFamily: 'var(--font-display-family)',
          fontSize: '2.2vw',
          color: 'rgba(255,255,255,0.80)',
          fontWeight: 300,
          lineHeight: 1.4,
          maxWidth: '52vw',
        }}>
          Clinical guidance with less unnecessary exposure
        </div>

        <div style={{
          width: '4vw',
          height: '1px',
          background: 'rgba(255,255,255,0.30)',
          margin: '3.5vh 0',
        }} />

        <div style={{
          fontFamily: 'var(--font-body-family)',
          fontSize: '1.9vw',
          color: 'rgba(255,255,255,0.62)',
          fontWeight: 400,
          lineHeight: 1.55,
          maxWidth: '48vw',
        }}>
          A partner-operated care relay for trained field intermediaries and qualified clinicians in high-risk, low-connectivity settings.
        </div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: '4.5vh',
        right: '6vw',
        fontFamily: 'var(--font-body-family)',
        fontSize: '1.5vw',
        color: 'rgba(255,255,255,0.35)',
        fontWeight: 400,
        letterSpacing: '0.06em',
      }}>
        Partner Pitch Deck
      </div>
    </div>
  );
}
