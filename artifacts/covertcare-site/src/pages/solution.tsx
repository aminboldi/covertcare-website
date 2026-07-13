import { usePageMeta } from "@/hooks/use-page-meta";
import { Link } from "wouter";
import { ShieldAlert, CheckCircle2, CircleSlash, ArrowRight } from "lucide-react";

export default function Solution() {
  usePageMeta(
    "CovertCare Solution | Minimal-Data Care Relay",
    "See the proposed minimum-data consultation, clinician-review, disposition, and referral workflow for humanitarian and community-health partners."
  );

  return (
    <div className="flex flex-col w-full pb-24">
      <section className="bg-background pt-16 pb-20 border-b border-border/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-4 block">
            The proposed care relay
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-primary mb-6 leading-tight">
            A structured path from trusted intermediary to qualified clinician
          </h1>
          <p className="text-xl text-foreground/80 leading-relaxed mb-8">
            CovertCare is developing a partner-operated workflow for situations where ordinary care access is disrupted and informal consultation may spread more personal information than necessary.
          </p>
        </div>
      </section>

      {/* Field photo — context */}
      <section className="relative overflow-hidden border-b border-border/40" style={{ height: "280px" }}>
        <img
          src="/images/vaccine-refugee.jpg"
          alt="An International Medical Corps volunteer administers a COVID-19 vaccine to a Syrian refugee in Jordan"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <p className="absolute bottom-3 right-4 text-white/60 text-xs" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}>Photo: IMC / N. Bseiso — Jordan</p>
      </section>

      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="mb-16">
            <h2 className="text-2xl font-bold font-serif mb-6 border-b border-border pb-4">The problem being solved</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              In low-resource or high-risk settings, community intermediaries often rely on ad-hoc networks (WhatsApp, Signal, phone calls) to seek clinical guidance for beneficiaries. While these tools protect communication in transit, they lack structured clinical intake, defined responsibility, and clear outcome tracking. Patient information, including names, locations, and images, is often over-shared to multiple contacts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" /> What the solution includes
              </h2>
              <ul className="space-y-4">
                {[
                  { title: "Partner-controlled roles", desc: "Host organizations issue and revoke access." },
                  { title: "Minimum-data schema", desc: "No default collection of name or exact location." },
                  { title: "Low-bandwidth consultation", desc: "Asynchronous text and minimal attachments." },
                  { title: "Human clinical judgement", desc: "Qualified practitioners review cases." },
                  { title: "Referral and follow-up", desc: "Structured next-step communication." },
                  { title: "Configurable retention", desc: "Data minimised or deleted post-referral." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <span className="font-semibold text-sm">{item.title}:</span>{" "}
                      <span className="text-sm text-muted-foreground">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-destructive">
                <CircleSlash className="w-5 h-5" /> What it is not
              </h2>
              <ul className="space-y-3">
                {[
                  "Public anonymous doctor access",
                  "Emergency-response network",
                  "AI diagnosis tool",
                  "Ungoverned prescribing service",
                  "Public patient accounts",
                  "Covert logistics platform",
                  "General telemedicine app",
                  "Perfect anonymity solution",
                  "Replacement for in-person care"
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="text-destructive font-bold">✗</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-2xl font-bold font-serif mb-6 border-b border-border pb-4">Who it serves</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded border border-border">
                <h3 className="font-bold text-primary mb-2">Humanitarian Orgs</h3>
                <p className="text-sm text-muted-foreground">Operating in areas where care is disrupted, requiring a governed consultation pathway without exposing operations.</p>
              </div>
              <div className="bg-card p-6 rounded border border-border">
                <h3 className="font-bold text-primary mb-2">Refugee-led Networks</h3>
                <p className="text-sm text-muted-foreground">Trusted intermediaries connecting displaced individuals to remote clinical expertise safely.</p>
              </div>
              <div className="bg-card p-6 rounded border border-border">
                <h3 className="font-bold text-primary mb-2">Community Health Workers</h3>
                <p className="text-sm text-muted-foreground">Operating beyond the edge of formal systems, needing reliable, structured back-up without heavy connectivity.</p>
              </div>
              <div className="bg-card p-6 rounded border border-border">
                <h3 className="font-bold text-primary mb-2">Clinical Volunteers</h3>
                <p className="text-sm text-muted-foreground">Professionals operating under a host organization who need bounded scopes and clear intake to be effective.</p>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 p-8 rounded-lg mb-12">
            <h2 className="text-xl font-bold font-serif mb-4 text-primary">Alternatives and Positioning</h2>
            <p className="text-sm text-foreground/80 mb-6 leading-relaxed">
              Existing tools solve important parts of the problem. Signal is excellent for encrypted messaging. Tella protects high-risk data capture. Hikma Health and Medic support community health workflows. 
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed font-medium">
              CovertCare's proposed specialization is the <span className="text-primary">minimum-data, intermediary-centred consultation and referral layer</span> — filling the gap between unstructured secure messaging and full-scale electronic medical records.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-bold font-serif mb-6 text-white">Does your organization have this workflow problem?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Discuss a bounded discovery program without sharing patient or sensitive operational data.
          </p>
          <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-sm bg-white px-8 text-base font-medium text-primary shadow hover:bg-white/90 transition-colors">
            Start an institutional conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
