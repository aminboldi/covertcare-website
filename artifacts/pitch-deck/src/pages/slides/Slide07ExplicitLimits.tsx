export default function Slide07ExplicitLimits() {
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
        {/* Left: title + framing */}
        <div style={{ flex: '0 0 38%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{
            fontFamily: 'var(--font-body-family)',
            fontSize: '1.5vw',
            color: 'hsl(189, 72%, 21%)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontWeight: 600,
            marginBottom: '1.5vh',
          }}>
            05 — Model
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
            Explicit Limits
          </div>

          <div style={{
            fontFamily: 'var(--font-display-family)',
            fontSize: '2.2vw',
            color: 'hsl(215, 28%, 17%)',
            fontWeight: 300,
            lineHeight: 1.4,
            marginBottom: '3vh',
          }}>
            Boundaries are structural, not incidental. They are what make responsible deployment possible.
          </div>

          <div style={{
            fontFamily: 'var(--font-body-family)',
            fontSize: '2vw',
            color: 'hsl(215, 16%, 47%)',
            lineHeight: 1.6,
          }}>
            CovertCare does not imply guaranteed safety, perfect anonymity, or emergency availability at any stage.
          </div>
        </div>

        {/* Right: limit statements */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '2.2vh',
        }}>
          <div style={{
            padding: '2vh 2.2vw',
            background: 'hsl(40, 25%, 92%)',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5vw',
          }}>
            <div style={{ color: 'hsl(189,72%,21%)', fontSize: '2vw', fontWeight: 700, flexShrink: 0 }}>—</div>
            <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.4 }}>
              Not an emergency service at any stage of development
            </div>
          </div>

          <div style={{
            padding: '2vh 2.2vw',
            background: 'hsl(40, 25%, 92%)',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5vw',
          }}>
            <div style={{ color: 'hsl(189,72%,21%)', fontSize: '2vw', fontWeight: 700, flexShrink: 0 }}>—</div>
            <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.4 }}>
              Not an anonymous doctor marketplace or direct public service
            </div>
          </div>

          <div style={{
            padding: '2vh 2.2vw',
            background: 'hsl(40, 25%, 92%)',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5vw',
          }}>
            <div style={{ color: 'hsl(189,72%,21%)', fontSize: '2vw', fontWeight: 700, flexShrink: 0 }}>—</div>
            <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.4 }}>
              Does not provide AI diagnosis, AI triage, or medical recommendation
            </div>
          </div>

          <div style={{
            padding: '2vh 2.2vw',
            background: 'hsl(40, 25%, 92%)',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5vw',
          }}>
            <div style={{ color: 'hsl(189,72%,21%)', fontSize: '2vw', fontWeight: 700, flexShrink: 0 }}>—</div>
            <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.4 }}>
              Does not promise anonymity, no logs, or immunity from seizure
            </div>
          </div>

          <div style={{
            padding: '2vh 2.2vw',
            background: 'hsl(40, 25%, 92%)',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5vw',
          }}>
            <div style={{ color: 'hsl(189,72%,21%)', fontSize: '2vw', fontWeight: 700, flexShrink: 0 }}>—</div>
            <div style={{ fontFamily: 'var(--font-body-family)', fontSize: '2vw', color: 'hsl(215, 28%, 17%)', lineHeight: 1.4 }}>
              No live deployment without clinical, legal, and security gates passed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
