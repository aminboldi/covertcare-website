import { Resend } from "resend";
import { logger } from "./logger.js";

// ── Resend client ──────────────────────────────────────────────────────────
// Set RESEND_API_KEY in your environment (Coolify dashboard → Environment).
// The server will still start without it, but email delivery will be skipped
// and a warning logged on each submission.
const apiKey = process.env.RESEND_API_KEY;
const resend = apiKey ? new Resend(apiKey) : null;

// ── Destination ────────────────────────────────────────────────────────────
// Submissions go here until an organisational inbox is ready.
// Once covertcare.ir is live, change to "info@covertcare.ir" and update
// FROM_ADDRESS below.
const DESTINATION_EMAIL = "aminboldy@gmail.com";

// ── Sending address ────────────────────────────────────────────────────────
// Requires covertcare.ir to be verified as a sending domain in Resend.
// Until then, use "onboarding@resend.dev" (Resend's shared sandbox sender —
// works immediately but shows "via resend.dev" in Gmail headers).
const FROM_ADDRESS = "CovertCare <onboarding@resend.dev>";

// ── Shared HTML helpers ────────────────────────────────────────────────────
function row(label: string, value: string | null | undefined): string {
  if (!value) return "";
  const safe = value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br/>");
  return `
    <tr>
      <td style="padding:8px 12px;font-weight:600;color:#4a5568;white-space:nowrap;vertical-align:top;width:200px;border-bottom:1px solid #edf2f7;">${label}</td>
      <td style="padding:8px 12px;color:#1a202c;vertical-align:top;border-bottom:1px solid #edf2f7;">${safe}</td>
    </tr>`;
}

function wrapHtml(title: string, rows: string): string {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f7fafc;margin:0;padding:32px 16px;">
  <div style="max-width:640px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
    <div style="background:#0f3f4a;padding:24px 28px;">
      <p style="margin:0;font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:rgba(255,255,255,0.6);">CovertCare · Website Inquiry</p>
      <h1 style="margin:6px 0 0;font-size:20px;font-weight:700;color:#fff;">${title}</h1>
    </div>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      ${rows}
    </table>
    <div style="padding:20px 28px;background:#f7fafc;border-top:1px solid #edf2f7;">
      <p style="margin:0;font-size:12px;color:#718096;">
        Forwarded from covertcare.ir · Do not reply to this notification directly.<br/>
        Routed to ${DESTINATION_EMAIL}.
      </p>
    </div>
  </div>
</body>
</html>`;
}

// ── Low-level send — fire-and-forget, errors logged not thrown ─────────────
async function sendEmail(subject: string, html: string): Promise<void> {
  if (!resend) {
    logger.warn({ subject }, "RESEND_API_KEY not set — email delivery skipped");
    return;
  }
  const { error } = await resend.emails.send({
    from: FROM_ADDRESS,
    to: [DESTINATION_EMAIL],
    subject,
    html,
  });
  if (error) {
    logger.error({ error, subject }, "Resend delivery failed");
  } else {
    logger.info({ subject }, "Email delivered via Resend");
  }
}

// ── Partner inquiry ────────────────────────────────────────────────────────
export function sendPartnerInquiryEmail(data: {
  fullName: string;
  workEmail: string;
  organization: string;
  role: string;
  organizationType: string;
  country: string;
  organizationWebsite?: string | null;
  inquiryType: string;
  workflowChallenge: string;
  hasClinicalOwner: string;
  hasIntermediaries: string;
  hasReferralPathway: string;
  caseVolumeBand: string;
  preferredNextStep: string;
  targetPilotTiming?: string | null;
  fundingStatus?: string | null;
  linkedinProfile?: string | null;
  publicProgramPage?: string | null;
  howHeardAbout?: string | null;
}): void {
  const rows =
    row("Organisation", data.organization) +
    row("Type", data.organizationType) +
    row("Website", data.organizationWebsite) +
    row("Country", data.country) +
    row("Contact name", data.fullName) +
    row("Role", data.role) +
    row("Work email", data.workEmail) +
    row("Inquiry type", data.inquiryType) +
    row("Has clinical owner?", data.hasClinicalOwner) +
    row("Has intermediaries?", data.hasIntermediaries) +
    row("Has referral pathway?", data.hasReferralPathway) +
    row("Case volume band", data.caseVolumeBand) +
    row("Funding status", data.fundingStatus) +
    row("Target pilot timing", data.targetPilotTiming) +
    row("Preferred next step", data.preferredNextStep) +
    row("Workflow challenge", data.workflowChallenge) +
    row("How they heard", data.howHeardAbout) +
    row("LinkedIn / profile", data.linkedinProfile) +
    row("Public programme page", data.publicProgramPage);

  void sendEmail(
    `CovertCare Partner Inquiry — ${data.organization}`,
    wrapHtml("New Partner Inquiry", rows),
  );
}

// ── Advisor interest ───────────────────────────────────────────────────────
export function sendAdvisorInterestEmail(data: {
  fullName: string;
  professionalEmail: string;
  currentRole: string;
  organization: string;
  expertiseArea: string;
  country: string;
  experienceSummary: string;
  availabilityBand: string;
  interestType: string;
  conflictDisclosure: string;
  professionalProfile?: string | null;
}): void {
  const rows =
    row("Name", data.fullName) +
    row("Professional email", data.professionalEmail) +
    row("Current role", data.currentRole) +
    row("Organisation", data.organization) +
    row("Country", data.country) +
    row("Expertise area", data.expertiseArea) +
    row("Interest type", data.interestType) +
    row("Availability", data.availabilityBand) +
    row("Experience summary", data.experienceSummary) +
    row("Conflict disclosure", data.conflictDisclosure) +
    row("Professional profile", data.professionalProfile);

  void sendEmail(
    `CovertCare Advisor Interest — ${data.fullName}`,
    wrapHtml("New Advisor Interest", rows),
  );
}

// ── General contact ────────────────────────────────────────────────────────
export function sendGeneralContactEmail(data: {
  name: string;
  workEmail: string;
  organization?: string | null;
  inquiryType: string;
  message: string;
}): void {
  const rows =
    row("Name", data.name) +
    row("Email", data.workEmail) +
    row("Organisation", data.organization) +
    row("Inquiry type", data.inquiryType) +
    row("Message", data.message);

  void sendEmail(
    `CovertCare Contact — ${data.inquiryType} from ${data.name}`,
    wrapHtml("New General Contact", rows),
  );
}
