import { usePageMeta } from "@/hooks/use-page-meta";
import { Link } from "wouter";

export default function Terms() {
  usePageMeta("Website Terms | CovertCare", "Read the informational, medical, pilot-stage, security, form-use, and trademark terms for the CovertCare website.");

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-20 pb-32">
      <div className="mb-12">
        <h1 className="text-4xl font-bold font-serif text-primary mb-4">Website Terms of Use</h1>
        <p className="text-muted-foreground">Effective date: [Placeholder Date]</p>
      </div>

      <div className="prose prose-sm md:prose-base prose-slate dark:prose-invert max-w-none text-foreground/80">
        <h3>1. Informational Purpose</h3>
        <p>This website is provided for informational purposes only. It describes CovertCare, a proposed public-interest digital health initiative currently in the concept and pilot-design stage.</p>

        <h3 className="text-destructive">2. No Medical Service</h3>
        <p><strong>This website does not provide medical advice, diagnosis, treatment, prescribing, emergency response, or access to a clinician. Do not delay or change care based on this website.</strong> CovertCare is not a hospital, clinic, or medical provider.</p>

        <h3>3. No Reliance</h3>
        <p>The information on this website, including workflows, security concepts, and governance structures, represents proposed designs. You should not rely on these concepts as proven facts or operational realities until verified pilot evidence is published.</p>

        <h3>4. No Product Availability</h3>
        <p>CovertCare does not currently offer a live product, network, or service to the public. The interfaces shown are illustrative prototypes.</p>

        <h3>5. Pilot Stage Disclaimer</h3>
        <p>A proposed pilot would proceed only under an approved host organization, clinical scope, legal and privacy review, referral pathway, threat model, training, and stop criteria. Submission of an inquiry does not guarantee pilot selection.</p>

        <h3>6. Illustrative Data</h3>
        <p>All case codes, interfaces, metrics, and scenarios shown are synthetic and illustrative unless explicitly identified as verified pilot evidence.</p>

        <h3>7. Form Restrictions</h3>
        <p>You agree NOT to submit patient details, symptoms, medical records, injury images, incident evidence, precise locations, political information, or urgent requests through the contact forms on this website.</p>

        <h3>8. No Security Guarantee</h3>
        <p>While the proposed product aims to improve security over ad-hoc networks, no system can guarantee perfect security or anonymity. This website itself is a standard public site and is not designed to receive secure or high-risk communications.</p>

        <h3>9. Intellectual Property</h3>
        <p>The concepts, design, and original content on this website are the property of the CovertCare project team. Open-source code licenses will be applied to software repositories when published.</p>

        <h3>10. Third-Party References</h3>
        <p>Third-party names and trademarks referenced for research or comparison belong to their respective owners. Their mention does not imply partnership, endorsement, or integration.</p>

        <h3>11. External Links</h3>
        <p>This site links to external research and reports. CovertCare does not endorse, maintain, or assume responsibility for the content on external websites.</p>

        <h3>12. Limitation of Liability</h3>
        <p>To the maximum extent permitted by law, CovertCare and its contributors shall not be liable for any damages arising from your use of this informational website.</p>

        <h3>13. Governing Law and Contact</h3>
        <p>These terms are governed by [Jurisdiction Placeholder]. For questions, please use the <Link href="/contact" className="text-primary hover:underline">Contact page</Link>.</p>
      </div>
    </div>
  );
}
