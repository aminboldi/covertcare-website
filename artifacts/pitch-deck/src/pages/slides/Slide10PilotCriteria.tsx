export default function Slide10PilotCriteria() {
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
          07 — Pilot
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
          Partner Criteria
        </div>

        <div style={{ display: 'flex', gap: '4vw', flex: 1 }}>
          {/* Left: Host requirements */}
          <div style={{ flex: 1 }}>
            <div style={{
              fontFamily: 'var(--font-display-family)',
              fontSize: '2.4vw',
              color: 'hsl(189, 72%, 21%)',
              fontWeight: 600,
              marginBottom: '3vh',
              paddingBottom: '1.5vh',
              borderBottom: '2px solid hsl(189, 72%, 21%)',
            }}>
              The host organization brings
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2vh' }}>
              <div style={{ display: 'flex', gap: '1.2vw', alignItems: 'flex-start' }}>
                <div style={{ color: 'hsl(189,72%,21%)', fontSize: '2vw', fontWeight: 700, flexShrink: 0, lineHeight: 1.5 }}>01</div>
                <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.5 }}>Trained community intermediaries with an existing field role</div>
              </div>
              <div style={{ display: 'flex', gap: '1.2vw', alignItems: 'flex-start' }}>
                <div style={{ color: 'hsl(189,72%,21%)', fontSize: '2vw', fontWeight: 700, flexShrink: 0, lineHeight: 1.5 }}>02</div>
                <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.5 }}>Qualified clinicians willing to operate within defined scope</div>
              </div>
              <div style={{ display: 'flex', gap: '1.2vw', alignItems: 'flex-start' }}>
                <div style={{ color: 'hsl(189,72%,21%)', fontSize: '2vw', fontWeight: 700, flexShrink: 0, lineHeight: 1.5 }}>03</div>
                <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.5 }}>Institutional governance and a viable referral pathway</div>
              </div>
              <div style={{ display: 'flex', gap: '1.2vw', alignItems: 'flex-start' }}>
                <div style={{ color: 'hsl(189,72%,21%)', fontSize: '2vw', fontWeight: 700, flexShrink: 0, lineHeight: 1.5 }}>04</div>
                <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.5 }}>Capacity to co-design, supervise, and independently evaluate</div>
              </div>
              <div style={{ display: 'flex', gap: '1.2vw', alignItems: 'flex-start' }}>
                <div style={{ color: 'hsl(189,72%,21%)', fontSize: '2vw', fontWeight: 700, flexShrink: 0, lineHeight: 1.5 }}>05</div>
                <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.5 }}>A real, bounded consultation problem to test against</div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{ width: '1px', background: 'hsl(215,15%,88%)', flexShrink: 0 }} />

          {/* Right: What CovertCare provides */}
          <div style={{ flex: 1 }}>
            <div style={{
              fontFamily: 'var(--font-display-family)',
              fontSize: '2.4vw',
              color: 'hsl(215, 28%, 17%)',
              fontWeight: 600,
              marginBottom: '3vh',
              paddingBottom: '1.5vh',
              borderBottom: '2px solid hsl(215, 15%, 75%)',
            }}>
              CovertCare provides
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2vh' }}>
              <div style={{ display: 'flex', gap: '1.2vw', alignItems: 'flex-start' }}>
                <div style={{ color: 'hsl(215,28%,17%)', fontSize: '2vw', fontWeight: 700, flexShrink: 0, lineHeight: 1.5 }}>—</div>
                <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.5 }}>Minimum-data intake and structured consultation workflow</div>
              </div>
              <div style={{ display: 'flex', gap: '1.2vw', alignItems: 'flex-start' }}>
                <div style={{ color: 'hsl(215,28%,17%)', fontSize: '2vw', fontWeight: 700, flexShrink: 0, lineHeight: 1.5 }}>—</div>
                <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.5 }}>Training for intermediary and clinical roles</div>
              </div>
              <div style={{ display: 'flex', gap: '1.2vw', alignItems: 'flex-start' }}>
                <div style={{ color: 'hsl(215,28%,17%)', fontSize: '2vw', fontWeight: 700, flexShrink: 0, lineHeight: 1.5 }}>—</div>
                <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.5 }}>Governance templates and data retention framework</div>
              </div>
              <div style={{ display: 'flex', gap: '1.2vw', alignItems: 'flex-start' }}>
                <div style={{ color: 'hsl(215,28%,17%)', fontSize: '2vw', fontWeight: 700, flexShrink: 0, lineHeight: 1.5 }}>—</div>
                <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.5 }}>Measurement framework and independent evaluation support</div>
              </div>
              <div style={{ display: 'flex', gap: '1.2vw', alignItems: 'flex-start' }}>
                <div style={{ color: 'hsl(215,28%,17%)', fontSize: '2vw', fontWeight: 700, flexShrink: 0, lineHeight: 1.5 }}>—</div>
                <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.5 }}>Open learning report at eight-week completion</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
