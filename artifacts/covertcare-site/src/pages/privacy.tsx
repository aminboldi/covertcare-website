import { usePageMeta } from "@/hooks/use-page-meta";
import { Link } from "wouter";

export default function Privacy() {
  usePageMeta("Website Privacy | CovertCare", "Learn how the CovertCare promotional website handles institutional inquiry and analytics data.");

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-20 pb-32">
      <div className="mb-12">
        <h1 className="text-4xl font-bold font-serif text-primary mb-4">Website Privacy Policy</h1>
        <p className="text-muted-foreground">Effective date: [Placeholder Date]</p>
      </div>

      <div className="prose prose-sm md:prose-base prose-slate dark:prose-invert max-w-none text-foreground/80">
        <div className="bg-muted p-4 rounded-sm border border-border mb-8 text-sm">
          <strong>Note:</strong> This is a website-only privacy policy governing interaction with the CovertCare promotional site. It is <em>not</em> a clinical product privacy policy, as CovertCare is in concept stage and no live clinical data is collected.
        </div>

        <h3>1. Information We Collect</h3>
        <p>When you use the contact forms on this website, we collect the information you voluntarily provide, such as your name, professional email, organization, role, and inquiry details.</p>

        <h3>2. How We Use Your Information</h3>
        <p>We use your information solely to evaluate potential partnerships, review advisory interest, and respond to institutional inquiries regarding the CovertCare concept.</p>

        <h3>3. Medical and Sensitive Data</h3>
        <p>We explicitly prohibit the submission of patient details, medical records, symptoms, precise locations, or other sensitive personal data through this website. If such data is submitted, it will be deleted immediately upon discovery.</p>

        <h3>4. Data Sharing</h3>
        <p>We do not sell, rent, or trade your personal information. We may share information with trusted team members or advisors strictly for the purpose of evaluating your inquiry, under confidentiality obligations.</p>

        <h3>5. Analytics</h3>
        <p>This website may use minimal privacy-preserving analytics to understand aggregate visitor trends. We do not use cross-site trackers or advertising cookies.</p>

        <h3>6. Data Security</h3>
        <p>We implement basic security measures appropriate for a public informational website to protect your inquiries from unauthorized access.</p>

        <h3>7. Data Retention</h3>
        <p>We retain inquiry information only as long as necessary to fulfill the purpose of the communication or to establish a formal relationship.</p>

        <h3>8. Third-Party Links</h3>
        <p>This website contains links to external research sources. We are not responsible for the privacy practices of those organizations.</p>

        <h3>9. Legal Entities</h3>
        <p>This initiative is currently operating as [Legal Entity Placeholder], a [Jurisdiction Placeholder] organization.</p>

        <h3>10. International Transfers</h3>
        <p>By submitting an inquiry, you acknowledge that your information may be processed in jurisdictions outside your residence.</p>

        <h3>11. Your Rights</h3>
        <p>Depending on your jurisdiction, you may have rights to access, correct, or request deletion of the personal data you submitted. Contact us to exercise these rights.</p>

        <h3>12. Changes to Policy</h3>
        <p>We may update this policy as the project moves from concept to pilot. Updates will be posted on this page.</p>

        <h3>13. Contact Us</h3>
        <p>For privacy inquiries regarding this website, please use the <Link href="/contact" className="text-primary hover:underline">Contact page</Link> or email [privacy@covertcare.org placeholder].</p>
      </div>
    </div>
  );
}
