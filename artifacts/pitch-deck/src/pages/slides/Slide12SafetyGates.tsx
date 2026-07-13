export default function Slide12SafetyGates() {
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{
      background: 'hsl(40, 20%, 97%)',
      fontFamily: 'var(--font-body-family)',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        padding: '6vh 7vw',
      }}>
        <div style={{
          fontFamily: 'var(--font-body-family)',
          fontSize: '1.5vw',
          color: 'hsl(189, 72%, 21%)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          fontWeight: 600,
          marginBottom: '1.2vh',
        }}>
          09 — Governance
        </div>

        <div style={{
          fontFamily: 'var(--font-display-family)',
          fontSize: '4vw',
          color: 'hsl(215, 28%, 17%)',
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          marginBottom: '4.5vh',
        }}>
          Safety Gates
        </div>

        <div style={{ display: 'flex', gap: '5vw', flex: 1 }}>
          {/* Left: gates */}
          <div style={{ flex: '0 0 54%', display: 'flex', flexDirection: 'column' }}>
            <div style={{
              fontFamily: 'var(--font-display-family)',
              fontSize: '2vw',
              color: 'hsl(215, 16%, 47%)',
              fontWeight: 400,
              marginBottom: '2.8vh',
              fontStyle: 'italic',
            }}>
              Required before any live operation
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2vh' }}>
              <div style={{
                display: 'flex',
                gap: '1.5vw',
                alignItems: 'flex-start',
                paddingBottom: '2vh',
                borderBottom: '1px solid hsl(215,15%,88%)',
              }}>
                <div style={{
                  fontFamily: 'var(--font-body-family)',
                  fontSize: '1.8vw',
                  color: 'hsl(189,72%,21%)',
                  fontWeight: 700,
                  flexShrink: 0,
                  width: '5vw',
                }}>
                  Clinical
                </div>
                <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.45 }}>
                  Scope defined and signed off by a qualified clinical lead within the host organization
                </div>
              </div>

              <div style={{
                display: 'flex',
                gap: '1.5vw',
                alignItems: 'flex-start',
                paddingBottom: '2vh',
                borderBottom: '1px solid hsl(215,15%,88%)',
              }}>
                <div style={{
                  fontFamily: 'var(--font-body-family)',
                  fontSize: '1.8vw',
                  color: 'hsl(189,72%,21%)',
                  fontWeight: 700,
                  flexShrink: 0,
                  width: '5vw',
                }}>
                  Legal
                </div>
                <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.45 }}>
                  Applicable telemedicine, data-protection, and regulatory requirements reviewed and documented
                </div>
              </div>

              <div style={{
                display: 'flex',
                gap: '1.5vw',
                alignItems: 'flex-start',
                paddingBottom: '2vh',
                borderBottom: '1px solid hsl(215,15%,88%)',
              }}>
                <div style={{
                  fontFamily: 'var(--font-body-family)',
                  fontSize: '1.8vw',
                  color: 'hsl(189,72%,21%)',
                  fontWeight: 700,
                  flexShrink: 0,
                  width: '5vw',
                }}>
                  Security
                </div>
                <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.45 }}>
                  Threat model reviewed; technical controls verified against documented risk level
                </div>
              </div>

              <div style={{
                display: 'flex',
                gap: '1.5vw',
                alignItems: 'flex-start',
              }}>
                <div style={{
                  fontFamily: 'var(--font-body-family)',
                  fontSize: '1.8vw',
                  color: 'hsl(189,72%,21%)',
                  fontWeight: 700,
                  flexShrink: 0,
                  width: '5vw',
                }}>
                  Partner
                </div>
                <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.45 }}>
                  All roles trained and simulation exercises passed; incident escalation pathway confirmed
                </div>
              </div>
            </div>
          </div>

          {/* Right: stop criteria */}
          <div style={{
            flex: 1,
            background: 'hsl(189, 72%, 21%)',
            borderRadius: '4px',
            padding: '3vh 2.5vw',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div style={{
              fontFamily: 'var(--font-display-family)',
              fontSize: '2.3vw',
              color: 'rgba(255,255,255,0.95)',
              fontWeight: 600,
              marginBottom: '2.5vh',
            }}>
              Stop Criteria
            </div>
            <div style={{
              fontFamily: 'var(--font-body-family)',
              fontSize: '1.8vw',
              color: 'rgba(255,255,255,0.65)',
              marginBottom: '2.5vh',
              lineHeight: 1.5,
            }}>
              The pilot halts immediately if any of the following occur:
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8vh' }}>
              <div style={{ display: 'flex', gap: '1vw' }}>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '2vw', flexShrink: 0 }}>—</div>
                <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'rgba(255,255,255,0.88)', lineHeight: 1.4 }}>Safety incident without adequate escalation pathway</div>
              </div>
              <div style={{ display: 'flex', gap: '1vw' }}>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '2vw', flexShrink: 0 }}>—</div>
                <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'rgba(255,255,255,0.88)', lineHeight: 1.4 }}>Data minimization breach identified</div>
              </div>
              <div style={{ display: 'flex', gap: '1vw' }}>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '2vw', flexShrink: 0 }}>—</div>
                <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'rgba(255,255,255,0.88)', lineHeight: 1.4 }}>Host clinical governance withdrawn</div>
              </div>
              <div style={{ display: 'flex', gap: '1vw' }}>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '2vw', flexShrink: 0 }}>—</div>
                <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'rgba(255,255,255,0.88)', lineHeight: 1.4 }}>Security compromise detected</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
