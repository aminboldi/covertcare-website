export default function Slide02Problem() {
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{
      background: 'hsl(40, 20%, 97%)',
      fontFamily: 'var(--font-body-family)',
    }}>
      {/* Teal left accent bar */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '0.5vw',
        height: '100%',
        background: 'hsl(189, 72%, 21%)',
      }} />

      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        padding: '6vh 6vw 6vh 7vw',
      }}>
        {/* Label */}
        <div style={{
          fontFamily: 'var(--font-body-family)',
          fontSize: '1.5vw',
          color: 'hsl(189, 72%, 21%)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          fontWeight: 600,
          marginBottom: '1.2vh',
        }}>
          01 — Context
        </div>

        {/* Title */}
        <div style={{
          fontFamily: 'var(--font-display-family)',
          fontSize: '4vw',
          color: 'hsl(215, 28%, 17%)',
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          marginBottom: '4vh',
        }}>
          The Problem
        </div>

        {/* Two columns */}
        <div style={{
          display: 'flex',
          gap: '5vw',
          flex: 1,
          alignItems: 'flex-start',
        }}>
          {/* Left: pull quote */}
          <div style={{ flex: '0 0 44%' }}>
            <div style={{
              fontFamily: 'var(--font-display-family)',
              fontSize: '2.6vw',
              color: 'hsl(215, 28%, 17%)',
              fontWeight: 300,
              lineHeight: 1.35,
              marginBottom: '3vh',
            }}>
              In high-risk settings, people can reach a trusted intermediary — but not the right clinician.
            </div>
            <div style={{
              fontFamily: 'var(--font-body-family)',
              fontSize: '2vw',
              color: 'hsl(215, 16%, 47%)',
              fontWeight: 400,
              lineHeight: 1.6,
            }}>
              The result is fragmented consultation over informal channels, with no clinical governance and no minimum-data standard.
            </div>
          </div>

          {/* Right: three problem areas */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '3vh' }}>
            {/* Problem 1 */}
            <div style={{
              paddingLeft: '1.8vw',
              borderLeft: '2px solid hsl(189, 72%, 21%)',
            }}>
              <div style={{
                fontFamily: 'var(--font-display-family)',
                fontSize: '2.2vw',
                color: 'hsl(189, 72%, 21%)',
                fontWeight: 600,
                marginBottom: '0.6vh',
              }}>
                Fragmented channels
              </div>
              <div style={{
                fontFamily: 'var(--font-body-family)',
                fontSize: '2vw',
                color: 'hsl(215, 28%, 17%)',
                fontWeight: 400,
                lineHeight: 1.5,
              }}>
                Consultation requests travel through personal messaging with no structure, no routing, and no audit trail.
              </div>
            </div>

            {/* Problem 2 */}
            <div style={{
              paddingLeft: '1.8vw',
              borderLeft: '2px solid hsl(189, 72%, 21%)',
            }}>
              <div style={{
                fontFamily: 'var(--font-display-family)',
                fontSize: '2.2vw',
                color: 'hsl(189, 72%, 21%)',
                fontWeight: 600,
                marginBottom: '0.6vh',
              }}>
                Unnecessary data exposure
              </div>
              <div style={{
                fontFamily: 'var(--font-body-family)',
                fontSize: '2vw',
                color: 'hsl(215, 28%, 17%)',
                fontWeight: 400,
                lineHeight: 1.5,
              }}>
                Case details spread across multiple parties without data minimization or defined retention.
              </div>
            </div>

            {/* Problem 3 */}
            <div style={{
              paddingLeft: '1.8vw',
              borderLeft: '2px solid hsl(189, 72%, 21%)',
            }}>
              <div style={{
                fontFamily: 'var(--font-display-family)',
                fontSize: '2.2vw',
                color: 'hsl(189, 72%, 21%)',
                fontWeight: 600,
                marginBottom: '0.6vh',
              }}>
                No disposition framework
              </div>
              <div style={{
                fontFamily: 'var(--font-body-family)',
                fontSize: '2vw',
                color: 'hsl(215, 28%, 17%)',
                fontWeight: 400,
                lineHeight: 1.5,
              }}>
                Without a clear next step, cases stall, get repeated, or fall through with no clinical accountability.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
