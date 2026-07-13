export default function Slide14Contact() {
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{
      background: 'hsl(189, 72%, 21%)',
      fontFamily: 'var(--font-body-family)',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(160deg, hsl(189,72%,18%) 0%, hsl(189,60%,25%) 100%)',
        opacity: 0.75,
      }} />

      {/* Decorative rings */}
      <svg style={{ position: 'absolute', right: '-5vw', top: '-10vh', height: '80%', opacity: 0.07 }}
        viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="400" cy="250" r="380" stroke="white" strokeWidth="60" />
        <circle cx="400" cy="250" r="220" stroke="white" strokeWidth="30" />
      </svg>

      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '6vh 8vw 3vh',
      }}>
        <div style={{
          fontFamily: 'var(--font-body-family)',
          fontSize: '1.5vw',
          color: 'rgba(255,255,255,0.45)',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          fontWeight: 500,
          marginBottom: '2vh',
        }}>
          Begin the Conversation
        </div>

        <div style={{
          fontFamily: 'var(--font-display-family)',
          fontSize: '5vw',
          color: '#ffffff',
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: '-0.025em',
          marginBottom: '1.5vh',
        }}>
          Two ways to engage
        </div>

        <div style={{
          width: '4vw',
          height: '2px',
          background: 'rgba(255,255,255,0.30)',
          marginBottom: '4vh',
        }} />

        {/* Two inquiry paths */}
        <div style={{ display: 'flex', gap: '3vw', marginBottom: '4vh' }}>
          <div style={{
            flex: 1,
            background: 'rgba(255,255,255,0.10)',
            borderRadius: '4px',
            padding: '3vh 2.8vw',
            borderTop: '3px solid rgba(255,255,255,0.50)',
          }}>
            <div style={{
              fontFamily: 'var(--font-display-family)',
              fontSize: '2.4vw',
              color: '#ffffff',
              fontWeight: 600,
              marginBottom: '1.5vh',
            }}>
              Partner or Pilot Inquiry
            </div>
            <div style={{
              fontFamily: 'var(--font-body-family)',
              fontSize: '2vw',
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.55,
            }}>
              For humanitarian, refugee-health, and community-health organizations with a real consultation problem to address. Discuss a governed discovery process.
            </div>
          </div>

          <div style={{
            flex: 1,
            background: 'rgba(255,255,255,0.10)',
            borderRadius: '4px',
            padding: '3vh 2.8vw',
            borderTop: '3px solid rgba(255,255,255,0.28)',
          }}>
            <div style={{
              fontFamily: 'var(--font-display-family)',
              fontSize: '2.4vw',
              color: '#ffffff',
              fontWeight: 600,
              marginBottom: '1.5vh',
            }}>
              Advisory Interest
            </div>
            <div style={{
              fontFamily: 'var(--font-body-family)',
              fontSize: '2vw',
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.55,
            }}>
              For qualified clinical, humanitarian, security, privacy, legal, and evaluation professionals. Offer expertise for a bounded advisory role.
            </div>
          </div>
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Footer */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.15)',
          paddingTop: '2vh',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-body-family)',
              fontSize: '1.8vw',
              color: 'rgba(255,255,255,0.55)',
              marginBottom: '0.5vh',
            }}>
              Contact via the inquiry form at covertcare.org/contact
            </div>
            <div style={{
              fontFamily: 'var(--font-body-family)',
              fontSize: '1.5vw',
              color: 'rgba(255,255,255,0.35)',
            }}>
              Do not submit patient, medical, or sensitive operational information through any public channel.
            </div>
          </div>
          <div style={{
            fontFamily: 'var(--font-display-family)',
            fontSize: '1.8vw',
            color: 'rgba(255,255,255,0.40)',
            fontWeight: 400,
            textAlign: 'right',
            flexShrink: 0,
            marginLeft: '4vw',
          }}>
            CovertCare · Concept / Pilot Design · 2026
          </div>
        </div>
      </div>
    </div>
  );
}
