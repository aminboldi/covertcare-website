export default function Slide05Workflow() {
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
          03 — Model
        </div>

        <div style={{
          fontFamily: 'var(--font-display-family)',
          fontSize: '4vw',
          color: 'hsl(215, 28%, 17%)',
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          marginBottom: '2vh',
        }}>
          Care Relay Workflow
        </div>

        <div style={{
          fontFamily: 'var(--font-body-family)',
          fontSize: '2vw',
          color: 'hsl(215, 16%, 47%)',
          marginBottom: '5vh',
          lineHeight: 1.5,
        }}>
          A host organization operates each stage. CovertCare provides the minimum-data layer between field and clinic.
        </div>

        {/* SVG Diagram */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <svg viewBox="0 0 900 240" style={{ width: '86vw', maxHeight: '42vh' }} xmlns="http://www.w3.org/2000/svg">
            {/* Node 1: Field Intermediary */}
            <rect x="0" y="60" width="175" height="80" rx="4" fill="hsl(40,25%,91%)" stroke="hsl(189,72%,21%)" strokeWidth="1.5" />
            <text x="87" y="94" textAnchor="middle" fill="hsl(215,28%,17%)" fontSize="14" fontFamily="Fraunces, serif" fontWeight="600">Field</text>
            <text x="87" y="114" textAnchor="middle" fill="hsl(215,28%,17%)" fontSize="14" fontFamily="Fraunces, serif" fontWeight="600">Intermediary</text>

            {/* Arrow 1 */}
            <line x1="175" y1="100" x2="225" y2="100" stroke="hsl(189,72%,21%)" strokeWidth="2" />
            <polygon points="225,94 238,100 225,106" fill="hsl(189,72%,21%)" />

            {/* Node 2: CovertCare Relay (highlighted) */}
            <rect x="238" y="35" width="205" height="130" rx="4" fill="hsl(189,72%,21%)" />
            <text x="340" y="85" textAnchor="middle" fill="white" fontSize="15" fontFamily="Fraunces, serif" fontWeight="700">CovertCare</text>
            <text x="340" y="107" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="12" fontFamily="Plus Jakarta Sans, sans-serif">Structured intake</text>
            <text x="340" y="124" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="12" fontFamily="Plus Jakarta Sans, sans-serif">Minimum-data relay</text>
            <text x="340" y="141" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="12" fontFamily="Plus Jakarta Sans, sans-serif">Governed routing</text>

            {/* Arrow 2 */}
            <line x1="443" y1="100" x2="490" y2="100" stroke="hsl(189,72%,21%)" strokeWidth="2" />
            <polygon points="490,94 503,100 490,106" fill="hsl(189,72%,21%)" />

            {/* Node 3: Qualified Clinician */}
            <rect x="503" y="60" width="175" height="80" rx="4" fill="hsl(40,25%,91%)" stroke="hsl(189,72%,21%)" strokeWidth="1.5" />
            <text x="590" y="94" textAnchor="middle" fill="hsl(215,28%,17%)" fontSize="14" fontFamily="Fraunces, serif" fontWeight="600">Qualified</text>
            <text x="590" y="114" textAnchor="middle" fill="hsl(215,28%,17%)" fontSize="14" fontFamily="Fraunces, serif" fontWeight="600">Clinician</text>

            {/* Arrow 3 */}
            <line x1="678" y1="100" x2="725" y2="100" stroke="hsl(189,72%,21%)" strokeWidth="2" />
            <polygon points="725,94 738,100 725,106" fill="hsl(189,72%,21%)" />

            {/* Node 4: Disposition + Referral */}
            <rect x="738" y="60" width="162" height="80" rx="4" fill="hsl(40,25%,91%)" stroke="hsl(189,72%,21%)" strokeWidth="1.5" />
            <text x="819" y="94" textAnchor="middle" fill="hsl(215,28%,17%)" fontSize="14" fontFamily="Fraunces, serif" fontWeight="600">Disposition</text>
            <text x="819" y="114" textAnchor="middle" fill="hsl(215,28%,17%)" fontSize="14" fontFamily="Fraunces, serif" fontWeight="600">+ Referral</text>

            {/* Bottom labels */}
            <text x="87" y="185" textAnchor="middle" fill="hsl(215,16%,47%)" fontSize="11" fontFamily="Plus Jakarta Sans, sans-serif">Submits structured request</text>
            <text x="340" y="185" textAnchor="middle" fill="hsl(189,72%,21%)" fontSize="11" fontFamily="Plus Jakarta Sans, sans-serif">Host-operated</text>
            <text x="590" y="185" textAnchor="middle" fill="hsl(215,16%,47%)" fontSize="11" fontFamily="Plus Jakarta Sans, sans-serif">Reviews case, provides guidance</text>
            <text x="819" y="185" textAnchor="middle" fill="hsl(215,16%,47%)" fontSize="11" fontFamily="Plus Jakarta Sans, sans-serif">Clear next step + referral</text>
          </svg>
        </div>

        {/* Principles footer */}
        <div style={{
          display: 'flex',
          gap: '4vw',
          justifyContent: 'center',
          paddingTop: '2vh',
          borderTop: '1px solid hsl(215,15%,88%)',
        }}>
          <div style={{
            fontFamily: 'var(--font-body-family)',
            fontSize: '1.9vw',
            color: 'hsl(189, 72%, 21%)',
            fontWeight: 600,
          }}>
            Minimum necessary data
          </div>
          <div style={{
            color: 'hsl(215,15%,80%)',
            fontSize: '1.9vw',
          }}>·</div>
          <div style={{
            fontFamily: 'var(--font-body-family)',
            fontSize: '1.9vw',
            color: 'hsl(189, 72%, 21%)',
            fontWeight: 600,
          }}>
            Clinical accountability
          </div>
          <div style={{
            color: 'hsl(215,15%,80%)',
            fontSize: '1.9vw',
          }}>·</div>
          <div style={{
            fontFamily: 'var(--font-body-family)',
            fontSize: '1.9vw',
            color: 'hsl(189, 72%, 21%)',
            fontWeight: 600,
          }}>
            Governed referral closure
          </div>
        </div>
      </div>
    </div>
  );
}
