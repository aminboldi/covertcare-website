export default function Slide06StakeholderRoles() {
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
          04 — Model
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
          Stakeholder Roles
        </div>

        <div style={{ display: 'flex', gap: '2vw', flex: 1 }}>
          {/* Column 1: Host Organization */}
          <div style={{
            flex: 1,
            borderTop: '3px solid hsl(189, 72%, 21%)',
            paddingTop: '2.5vh',
          }}>
            <div style={{
              fontFamily: 'var(--font-display-family)',
              fontSize: '2.4vw',
              color: 'hsl(189, 72%, 21%)',
              fontWeight: 700,
              marginBottom: '0.8vh',
              lineHeight: 1.2,
            }}>
              Host Organization
            </div>
            <div style={{
              fontFamily: 'var(--font-body-family)',
              fontSize: '1.7vw',
              color: 'hsl(215, 16%, 47%)',
              marginBottom: '2.5vh',
              fontStyle: 'italic',
            }}>
              Institutional partner
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5vh' }}>
              <div style={{ display: 'flex', gap: '0.8vw' }}>
                <div style={{ color: 'hsl(189,72%,21%)', fontWeight: 700, fontSize: '2vw', flexShrink: 0 }}>—</div>
                <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.4 }}>Enrolls intermediaries and clinicians</div>
              </div>
              <div style={{ display: 'flex', gap: '0.8vw' }}>
                <div style={{ color: 'hsl(189,72%,21%)', fontWeight: 700, fontSize: '2vw', flexShrink: 0 }}>—</div>
                <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.4 }}>Defines clinical scope and boundaries</div>
              </div>
              <div style={{ display: 'flex', gap: '0.8vw' }}>
                <div style={{ color: 'hsl(189,72%,21%)', fontWeight: 700, fontSize: '2vw', flexShrink: 0 }}>—</div>
                <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.4 }}>Governs incidents and escalation</div>
              </div>
              <div style={{ display: 'flex', gap: '0.8vw' }}>
                <div style={{ color: 'hsl(189,72%,21%)', fontWeight: 700, fontSize: '2vw', flexShrink: 0 }}>—</div>
                <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.4 }}>Retains clinical accountability</div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{ width: '1px', background: 'hsl(215,15%,88%)', flexShrink: 0 }} />

          {/* Column 2: Trained Intermediary */}
          <div style={{
            flex: 1,
            borderTop: '3px solid hsl(189, 72%, 21%)',
            paddingTop: '2.5vh',
          }}>
            <div style={{
              fontFamily: 'var(--font-display-family)',
              fontSize: '2.4vw',
              color: 'hsl(189, 72%, 21%)',
              fontWeight: 700,
              marginBottom: '0.8vh',
              lineHeight: 1.2,
            }}>
              Trained Intermediary
            </div>
            <div style={{
              fontFamily: 'var(--font-body-family)',
              fontSize: '1.7vw',
              color: 'hsl(215, 16%, 47%)',
              marginBottom: '2.5vh',
              fontStyle: 'italic',
            }}>
              Field-facing role
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5vh' }}>
              <div style={{ display: 'flex', gap: '0.8vw' }}>
                <div style={{ color: 'hsl(189,72%,21%)', fontWeight: 700, fontSize: '2vw', flexShrink: 0 }}>—</div>
                <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.4 }}>Submits structured consultation request</div>
              </div>
              <div style={{ display: 'flex', gap: '0.8vw' }}>
                <div style={{ color: 'hsl(189,72%,21%)', fontWeight: 700, fontSize: '2vw', flexShrink: 0 }}>—</div>
                <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.4 }}>Provides minimum necessary case detail</div>
              </div>
              <div style={{ display: 'flex', gap: '0.8vw' }}>
                <div style={{ color: 'hsl(189,72%,21%)', fontWeight: 700, fontSize: '2vw', flexShrink: 0 }}>—</div>
                <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.4 }}>Relays disposition to the field</div>
              </div>
              <div style={{ display: 'flex', gap: '0.8vw' }}>
                <div style={{ color: 'hsl(189,72%,21%)', fontWeight: 700, fontSize: '2vw', flexShrink: 0 }}>—</div>
                <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.4 }}>Supports referral follow-up</div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{ width: '1px', background: 'hsl(215,15%,88%)', flexShrink: 0 }} />

          {/* Column 3: Qualified Clinician */}
          <div style={{
            flex: 1,
            borderTop: '3px solid hsl(189, 72%, 21%)',
            paddingTop: '2.5vh',
          }}>
            <div style={{
              fontFamily: 'var(--font-display-family)',
              fontSize: '2.4vw',
              color: 'hsl(189, 72%, 21%)',
              fontWeight: 700,
              marginBottom: '0.8vh',
              lineHeight: 1.2,
            }}>
              Qualified Clinician
            </div>
            <div style={{
              fontFamily: 'var(--font-body-family)',
              fontSize: '1.7vw',
              color: 'hsl(215, 16%, 47%)',
              marginBottom: '2.5vh',
              fontStyle: 'italic',
            }}>
              Clinical governance role
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5vh' }}>
              <div style={{ display: 'flex', gap: '0.8vw' }}>
                <div style={{ color: 'hsl(189,72%,21%)', fontWeight: 700, fontSize: '2vw', flexShrink: 0 }}>—</div>
                <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.4 }}>Reviews structured case information</div>
              </div>
              <div style={{ display: 'flex', gap: '0.8vw' }}>
                <div style={{ color: 'hsl(189,72%,21%)', fontWeight: 700, fontSize: '2vw', flexShrink: 0 }}>—</div>
                <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.4 }}>Provides disposition and guidance</div>
              </div>
              <div style={{ display: 'flex', gap: '0.8vw' }}>
                <div style={{ color: 'hsl(189,72%,21%)', fontWeight: 700, fontSize: '2vw', flexShrink: 0 }}>—</div>
                <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.4 }}>Flags appropriate escalation</div>
              </div>
              <div style={{ display: 'flex', gap: '0.8vw' }}>
                <div style={{ color: 'hsl(189,72%,21%)', fontWeight: 700, fontSize: '2vw', flexShrink: 0 }}>—</div>
                <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.4 }}>Operates within defined scope only</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
