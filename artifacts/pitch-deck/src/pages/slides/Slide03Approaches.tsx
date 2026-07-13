export default function Slide03Approaches() {
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
          02 — Context
        </div>

        <div style={{
          fontFamily: 'var(--font-display-family)',
          fontSize: '4vw',
          color: 'hsl(215, 28%, 17%)',
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          marginBottom: '5vh',
        }}>
          Existing Approaches
        </div>

        <div style={{ display: 'flex', gap: '4vw', flex: 1 }}>
          {/* Left column: informal channels */}
          <div style={{
            flex: 1,
            background: 'hsl(40, 25%, 93%)',
            borderRadius: '4px',
            padding: '3.5vh 3vw',
          }}>
            <div style={{
              fontFamily: 'var(--font-display-family)',
              fontSize: '2.4vw',
              color: 'hsl(215, 28%, 17%)',
              fontWeight: 600,
              marginBottom: '2.5vh',
            }}>
              Informal channels
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2vh' }}>
              <div>
                <div style={{
                  fontFamily: 'var(--font-body-family)',
                  fontSize: '2vw',
                  color: 'hsl(215, 28%, 17%)',
                  fontWeight: 600,
                  marginBottom: '0.5vh',
                }}>
                  Encrypted messaging
                </div>
                <div style={{
                  fontFamily: 'var(--font-body-family)',
                  fontSize: '2vw',
                  color: 'hsl(215, 16%, 47%)',
                  lineHeight: 1.5,
                }}>
                  Secure transport only. No structured intake, no role verification, no disposition tracking.
                </div>
              </div>

              <div>
                <div style={{
                  fontFamily: 'var(--font-body-family)',
                  fontSize: '2vw',
                  color: 'hsl(215, 28%, 17%)',
                  fontWeight: 600,
                  marginBottom: '0.5vh',
                }}>
                  Email
                </div>
                <div style={{
                  fontFamily: 'var(--font-body-family)',
                  fontSize: '2vw',
                  color: 'hsl(215, 16%, 47%)',
                  lineHeight: 1.5,
                }}>
                  Widely used. No minimum-data principle, no referral closure, no retention policy.
                </div>
              </div>

              <div>
                <div style={{
                  fontFamily: 'var(--font-body-family)',
                  fontSize: '2vw',
                  color: 'hsl(215, 28%, 17%)',
                  fontWeight: 600,
                  marginBottom: '0.5vh',
                }}>
                  Ad hoc phone or video
                </div>
                <div style={{
                  fontFamily: 'var(--font-body-family)',
                  fontSize: '2vw',
                  color: 'hsl(215, 16%, 47%)',
                  lineHeight: 1.5,
                }}>
                  Personal networks only. No institutional governance, no clinical accountability.
                </div>
              </div>
            </div>
          </div>

          {/* Right column: what is missing */}
          <div style={{
            flex: 1,
            background: 'hsl(189, 72%, 21%)',
            borderRadius: '4px',
            padding: '3.5vh 3vw',
          }}>
            <div style={{
              fontFamily: 'var(--font-display-family)',
              fontSize: '2.4vw',
              color: 'rgba(255,255,255,0.95)',
              fontWeight: 600,
              marginBottom: '2.5vh',
            }}>
              What is missing
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8vh' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1vw' }}>
                <div style={{ width: '0.4vw', height: '0.4vw', borderRadius: '50%', background: 'rgba(255,255,255,0.6)', marginTop: '1vh', flexShrink: 0 }} />
                <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'rgba(255,255,255,0.88)', lineHeight: 1.5 }}>Structured, minimum-data intake</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1vw' }}>
                <div style={{ width: '0.4vw', height: '0.4vw', borderRadius: '50%', background: 'rgba(255,255,255,0.6)', marginTop: '1vh', flexShrink: 0 }} />
                <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'rgba(255,255,255,0.88)', lineHeight: 1.5 }}>Verified roles for intermediaries and clinicians</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1vw' }}>
                <div style={{ width: '0.4vw', height: '0.4vw', borderRadius: '50%', background: 'rgba(255,255,255,0.6)', marginTop: '1vh', flexShrink: 0 }} />
                <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'rgba(255,255,255,0.88)', lineHeight: 1.5 }}>Governed routing to qualified clinical review</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1vw' }}>
                <div style={{ width: '0.4vw', height: '0.4vw', borderRadius: '50%', background: 'rgba(255,255,255,0.6)', marginTop: '1vh', flexShrink: 0 }} />
                <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'rgba(255,255,255,0.88)', lineHeight: 1.5 }}>Clear disposition and referral closure</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1vw' }}>
                <div style={{ width: '0.4vw', height: '0.4vw', borderRadius: '50%', background: 'rgba(255,255,255,0.6)', marginTop: '1vh', flexShrink: 0 }} />
                <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'rgba(255,255,255,0.88)', lineHeight: 1.5 }}>Documented retention and deletion policy</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1vw' }}>
                <div style={{ width: '0.4vw', height: '0.4vw', borderRadius: '50%', background: 'rgba(255,255,255,0.6)', marginTop: '1vh', flexShrink: 0 }} />
                <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'rgba(255,255,255,0.88)', lineHeight: 1.5 }}>Organizational clinical accountability</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          marginTop: '2.5vh',
          fontFamily: 'var(--font-body-family)',
          fontSize: '1.5vw',
          color: 'hsl(215, 16%, 47%)',
          fontStyle: 'italic',
        }}>
          CovertCare is a complement to existing tools, not a replacement. These comparisons indicate gaps, not deficiencies.
        </div>
      </div>
    </div>
  );
}
