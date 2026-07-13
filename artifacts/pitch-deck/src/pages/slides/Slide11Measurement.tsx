export default function Slide11Measurement() {
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
          08 — Pilot
        </div>

        <div style={{
          fontFamily: 'var(--font-display-family)',
          fontSize: '4vw',
          color: 'hsl(215, 28%, 17%)',
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          marginBottom: '1.5vh',
        }}>
          What We Measure
        </div>

        <div style={{
          fontFamily: 'var(--font-body-family)',
          fontSize: '2vw',
          color: 'hsl(215, 16%, 47%)',
          marginBottom: '4vh',
        }}>
          These are hypotheses to test, not published outcomes.
        </div>

        {/* 2x2 grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr',
          gap: '2vw',
          flex: 1,
        }}>
          {/* Card 1 */}
          <div style={{
            background: 'hsl(40, 25%, 92%)',
            borderRadius: '4px',
            padding: '2.8vh 2.5vw',
            borderTop: '3px solid hsl(189, 72%, 21%)',
          }}>
            <div style={{
              fontFamily: 'var(--font-display-family)',
              fontSize: '2.4vw',
              color: 'hsl(189, 72%, 21%)',
              fontWeight: 700,
              marginBottom: '1.5vh',
            }}>
              Response Timeliness
            </div>
            <div style={{
              fontFamily: 'var(--font-body-family)',
              fontSize: '2vw',
              color: 'hsl(215, 28%, 17%)',
              lineHeight: 1.5,
            }}>
              Time from structured request submission to clinician disposition. Compared against prior informal baseline.
            </div>
          </div>

          {/* Card 2 */}
          <div style={{
            background: 'hsl(40, 25%, 92%)',
            borderRadius: '4px',
            padding: '2.8vh 2.5vw',
            borderTop: '3px solid hsl(189, 65%, 32%)',
          }}>
            <div style={{
              fontFamily: 'var(--font-display-family)',
              fontSize: '2.4vw',
              color: 'hsl(189, 65%, 32%)',
              fontWeight: 700,
              marginBottom: '1.5vh',
            }}>
              Referral Clarity
            </div>
            <div style={{
              fontFamily: 'var(--font-body-family)',
              fontSize: '2vw',
              color: 'hsl(215, 28%, 17%)',
              lineHeight: 1.5,
            }}>
              Proportion of cases with a clear documented next step at closure. Clinician-assessed quality rating.
            </div>
          </div>

          {/* Card 3 */}
          <div style={{
            background: 'hsl(40, 25%, 92%)',
            borderRadius: '4px',
            padding: '2.8vh 2.5vw',
            borderTop: '3px solid hsl(189, 55%, 40%)',
          }}>
            <div style={{
              fontFamily: 'var(--font-display-family)',
              fontSize: '2.4vw',
              color: 'hsl(189, 55%, 40%)',
              fontWeight: 700,
              marginBottom: '1.5vh',
            }}>
              Data Minimization
            </div>
            <div style={{
              fontFamily: 'var(--font-body-family)',
              fontSize: '2vw',
              color: 'hsl(215, 28%, 17%)',
              lineHeight: 1.5,
            }}>
              Fields collected per case against minimum-necessary threshold. Audit of unnecessary identifiers transmitted.
            </div>
          </div>

          {/* Card 4 */}
          <div style={{
            background: 'hsl(40, 25%, 92%)',
            borderRadius: '4px',
            padding: '2.8vh 2.5vw',
            borderTop: '3px solid hsl(215, 28%, 40%)',
          }}>
            <div style={{
              fontFamily: 'var(--font-display-family)',
              fontSize: '2.4vw',
              color: 'hsl(215, 28%, 40%)',
              fontWeight: 700,
              marginBottom: '1.5vh',
            }}>
              Safety Incidents
            </div>
            <div style={{
              fontFamily: 'var(--font-body-family)',
              fontSize: '2vw',
              color: 'hsl(215, 28%, 17%)',
              lineHeight: 1.5,
            }}>
              Count and classification of adverse events. Reviewed by host organization and independent evaluator.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
