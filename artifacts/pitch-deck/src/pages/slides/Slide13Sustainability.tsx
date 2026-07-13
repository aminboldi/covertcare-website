export default function Slide13Sustainability() {
  return (
    <div className="w-screen h-screen overflow-hidden relative" style={{
      background: 'hsl(40, 20%, 97%)',
      fontFamily: 'var(--font-body-family)',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        padding: '6vh 7vw',
        gap: '5vw',
      }}>
        {/* Left: mission + approach */}
        <div style={{ flex: '0 0 44%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{
            fontFamily: 'var(--font-body-family)',
            fontSize: '1.5vw',
            color: 'hsl(189, 72%, 21%)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontWeight: 600,
            marginBottom: '1.5vh',
          }}>
            10 — Organization
          </div>

          <div style={{
            fontFamily: 'var(--font-display-family)',
            fontSize: '4vw',
            color: 'hsl(215, 28%, 17%)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '3.5vh',
          }}>
            Sustainability Model
          </div>

          <div style={{
            fontFamily: 'var(--font-display-family)',
            fontSize: '2.3vw',
            color: 'hsl(215, 28%, 17%)',
            fontWeight: 300,
            lineHeight: 1.4,
            marginBottom: '3.5vh',
          }}>
            Public-interest infrastructure, not a consumer product. Beneficiary data is never monetized.
          </div>

          <div style={{
            fontFamily: 'var(--font-body-family)',
            fontSize: '2vw',
            color: 'hsl(215, 16%, 47%)',
            lineHeight: 1.6,
          }}>
            CovertCare is designed as a nonprofit or public-interest initiative. The first pilot will generate open learning, not commercial revenue. Longer-term sustainability depends on institutional licensing, grant funding, and accelerator support — not on patient data or user growth.
          </div>
        </div>

        {/* Right: three pillars */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '3vh',
        }}>
          <div style={{
            padding: '3vh 2.5vw',
            background: 'hsl(40, 25%, 92%)',
            borderRadius: '4px',
            borderLeft: '4px solid hsl(189, 72%, 21%)',
          }}>
            <div style={{
              fontFamily: 'var(--font-display-family)',
              fontSize: '2.3vw',
              color: 'hsl(189, 72%, 21%)',
              fontWeight: 700,
              marginBottom: '1vh',
            }}>
              Institutional licensing
            </div>
            <div style={{
              fontFamily: 'var(--font-body-family)',
              fontSize: '2vw',
              color: 'hsl(215, 28%, 17%)',
              lineHeight: 1.5,
            }}>
              Host organizations cover implementation, governance support, and operational costs — not end users or patients.
            </div>
          </div>

          <div style={{
            padding: '3vh 2.5vw',
            background: 'hsl(40, 25%, 92%)',
            borderRadius: '4px',
            borderLeft: '4px solid hsl(189, 65%, 32%)',
          }}>
            <div style={{
              fontFamily: 'var(--font-display-family)',
              fontSize: '2.3vw',
              color: 'hsl(189, 65%, 32%)',
              fontWeight: 700,
              marginBottom: '1vh',
            }}>
              Grant and accelerator funding
            </div>
            <div style={{
              fontFamily: 'var(--font-body-family)',
              fontSize: '2vw',
              color: 'hsl(215, 28%, 17%)',
              lineHeight: 1.5,
            }}>
              Humanitarian innovation, global-health, and public-interest technology programs during pilot and early validation.
            </div>
          </div>

          <div style={{
            padding: '3vh 2.5vw',
            background: 'hsl(40, 25%, 92%)',
            borderRadius: '4px',
            borderLeft: '4px solid hsl(215, 28%, 50%)',
          }}>
            <div style={{
              fontFamily: 'var(--font-display-family)',
              fontSize: '2.3vw',
              color: 'hsl(215, 28%, 50%)',
              fontWeight: 700,
              marginBottom: '1vh',
            }}>
              Open learning
            </div>
            <div style={{
              fontFamily: 'var(--font-body-family)',
              fontSize: '2vw',
              color: 'hsl(215, 28%, 17%)',
              lineHeight: 1.5,
            }}>
              Pilot findings published for the field. Evidence, not scale, is the accelerator goal.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
