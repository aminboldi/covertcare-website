export default function Slide09PilotStructure() {
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
          06 — Pilot
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
          Eight-Week Pilot Structure
        </div>

        {/* Four-phase timeline */}
        <div style={{ display: 'flex', gap: '1.8vw', flex: 1 }}>
          {/* Phase 1 */}
          <div style={{
            flex: 1,
            background: 'hsl(40, 25%, 92%)',
            borderRadius: '4px',
            padding: '3vh 2.5vw',
            borderTop: '4px solid hsl(189, 72%, 21%)',
          }}>
            <div style={{
              fontFamily: 'var(--font-body-family)',
              fontSize: '1.6vw',
              color: 'hsl(189, 72%, 21%)',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '1vh',
            }}>
              Weeks 1 – 2
            </div>
            <div style={{
              fontFamily: 'var(--font-display-family)',
              fontSize: '2.4vw',
              color: 'hsl(215, 28%, 17%)',
              fontWeight: 700,
              marginBottom: '2.5vh',
              lineHeight: 1.2,
            }}>
              Discovery
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2vh' }}>
              <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.45 }}>Governance design with host</div>
              <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.45 }}>Threat model review</div>
              <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.45 }}>Clinical scope definition</div>
              <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.45 }}>Data minimization plan</div>
            </div>
          </div>

          {/* Phase 2 */}
          <div style={{
            flex: 1,
            background: 'hsl(40, 25%, 92%)',
            borderRadius: '4px',
            padding: '3vh 2.5vw',
            borderTop: '4px solid hsl(189, 65%, 32%)',
          }}>
            <div style={{
              fontFamily: 'var(--font-body-family)',
              fontSize: '1.6vw',
              color: 'hsl(189, 65%, 32%)',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '1vh',
            }}>
              Weeks 3 – 4
            </div>
            <div style={{
              fontFamily: 'var(--font-display-family)',
              fontSize: '2.4vw',
              color: 'hsl(215, 28%, 17%)',
              fontWeight: 700,
              marginBottom: '2.5vh',
              lineHeight: 1.2,
            }}>
              Simulation
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2vh' }}>
              <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.45 }}>Workflow training for all roles</div>
              <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.45 }}>Synthetic case exercises</div>
              <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.45 }}>Safety gate verification</div>
              <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.45 }}>Measure baseline established</div>
            </div>
          </div>

          {/* Phase 3 */}
          <div style={{
            flex: 1,
            background: 'hsl(40, 25%, 92%)',
            borderRadius: '4px',
            padding: '3vh 2.5vw',
            borderTop: '4px solid hsl(189, 55%, 40%)',
          }}>
            <div style={{
              fontFamily: 'var(--font-body-family)',
              fontSize: '1.6vw',
              color: 'hsl(189, 55%, 40%)',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '1vh',
            }}>
              Weeks 5 – 6
            </div>
            <div style={{
              fontFamily: 'var(--font-display-family)',
              fontSize: '2.4vw',
              color: 'hsl(215, 28%, 17%)',
              fontWeight: 700,
              marginBottom: '2.5vh',
              lineHeight: 1.2,
            }}>
              Supervised Operation
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2vh' }}>
              <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.45 }}>Live workflow, bounded scope</div>
              <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.45 }}>Weekly clinical review</div>
              <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.45 }}>Safety monitoring active</div>
              <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.45 }}>Data minimization audit</div>
            </div>
          </div>

          {/* Phase 4 */}
          <div style={{
            flex: 1,
            background: 'hsl(40, 25%, 92%)',
            borderRadius: '4px',
            padding: '3vh 2.5vw',
            borderTop: '4px solid hsl(215, 20%, 55%)',
          }}>
            <div style={{
              fontFamily: 'var(--font-body-family)',
              fontSize: '1.6vw',
              color: 'hsl(215, 20%, 55%)',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '1vh',
            }}>
              Weeks 7 – 8
            </div>
            <div style={{
              fontFamily: 'var(--font-display-family)',
              fontSize: '2.4vw',
              color: 'hsl(215, 28%, 17%)',
              fontWeight: 700,
              marginBottom: '2.5vh',
              lineHeight: 1.2,
            }}>
              Evaluation
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2vh' }}>
              <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.45 }}>Independent review of measures</div>
              <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.45 }}>Open learning report</div>
              <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.45 }}>Continue, pivot, or stop decision</div>
              <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.45 }}>No premature scale</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
