export default function Slide08PilotDivider() {
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{
      background: 'hsl(189, 72%, 21%)',
      fontFamily: 'var(--font-body-family)',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(160deg, hsl(189,72%,18%) 0%, hsl(189,65%,24%) 100%)',
        opacity: 0.7,
      }} />

      <svg style={{ position: 'absolute', left: 0, bottom: 0, height: '70%', opacity: 0.06 }}
        viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="0" cy="500" r="350" stroke="white" strokeWidth="70" />
        <circle cx="0" cy="500" r="180" stroke="white" strokeWidth="35" />
      </svg>

      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        padding: '0 9vw',
      }}>
        <div style={{
          fontFamily: 'var(--font-body-family)',
          fontSize: '1.5vw',
          color: 'rgba(255,255,255,0.45)',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          fontWeight: 500,
          marginBottom: '3.5vh',
        }}>
          Section 02
        </div>

        <div style={{
          fontFamily: 'var(--font-display-family)',
          fontSize: '6.5vw',
          color: '#ffffff',
          fontWeight: 700,
          lineHeight: 1.0,
          letterSpacing: '-0.025em',
          marginBottom: '3.5vh',
        }}>
          The Pilot Offer
        </div>

        <div style={{
          width: '4vw',
          height: '2px',
          background: 'rgba(255,255,255,0.35)',
          marginBottom: '3.5vh',
        }} />

        <div style={{
          fontFamily: 'var(--font-body-family)',
          fontSize: '2.2vw',
          color: 'rgba(255,255,255,0.70)',
          fontWeight: 400,
          letterSpacing: '0.02em',
        }}>
          Eight weeks · One partner · Governed scope · Clear stop criteria
        </div>
      </div>
    </div>
  );
}
