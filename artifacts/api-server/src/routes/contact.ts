import { Router, type IRouter } from "express";
import {
  SubmitPartnerInquiryBody,
  SubmitAdvisorInterestBody,
  SubmitGeneralContactBody,
} from "@workspace/api-zod";
import { logger } from "../lib/logger";

const router: IRouter = Router();

// ── Simple email regex for server-side format validation ───────────────────
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ── In-memory rate limiting (per IP, 5 submissions / 15 min) ──────────────
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

// ── Honeypot check ─────────────────────────────────────────────────────────
function hasHoneypot(body: Record<string, unknown>): boolean {
  const v = body["honeypot"];
  return typeof v === "string" && v.length > 0;
}

// ── Redact free-text fields before logging ─────────────────────────────────
function safeLog(
  data: Record<string, unknown>,
  redactKeys: string[],
): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(data)) {
    if (redactKeys.includes(k)) {
      out[k] = "[REDACTED]";
    } else if (typeof v === "string" && v.length > 100) {
      out[k] = "[LONG_TEXT]";
    } else {
      out[k] = v;
    }
  }
  return out;
}

const OK = { ok: true, message: "Inquiry received." } as const;
const validationError = (error: string) => ({ ok: false, error });

// ── POST /api/contact/partner ──────────────────────────────────────────────
router.post("/contact/partner", (req, res) => {
  const ip =
    (req.headers["x-forwarded-for"] as string | undefined)
      ?.split(",")[0]
      ?.trim() ??
    req.socket.remoteAddress ??
    "unknown";

  if (isRateLimited(ip)) {
    res
      .status(429)
      .json(validationError("Too many requests. Please try again later."));
    return;
  }

  if (hasHoneypot(req.body as Record<string, unknown>)) {
    res.json(OK);
    return;
  }

  const result = SubmitPartnerInquiryBody.safeParse(req.body);
  if (!result.success) {
    res
      .status(400)
      .json(
        validationError(
          "Please check the highlighted fields and try again.",
        ),
      );
    return;
  }

  const data = result.data;

  if (!emailRegex.test(data.workEmail)) {
    res.status(400).json(validationError("Please enter a valid work email address."));
    return;
  }

  if (!data.consentGiven || !data.noSensitiveDataConfirmed) {
    res.status(400).json(validationError("Both consent checkboxes are required."));
    return;
  }

  logger.info(
    {
      type: "partner_inquiry",
      fields: safeLog(data as unknown as Record<string, unknown>, [
        "workflowChallenge",
        "preferredNextStep",
        "howHeardAbout",
        "workEmail",
        "fullName",
        "linkedinProfile",
        "publicProgramPage",
      ]),
    },
    "Partner inquiry received",
  );

  res.json(OK);
});

// ── POST /api/contact/advisor ──────────────────────────────────────────────
router.post("/contact/advisor", (req, res) => {
  const ip =
    (req.headers["x-forwarded-for"] as string | undefined)
      ?.split(",")[0]
      ?.trim() ??
    req.socket.remoteAddress ??
    "unknown";

  if (isRateLimited(ip)) {
    res
      .status(429)
      .json(validationError("Too many requests. Please try again later."));
    return;
  }

  if (hasHoneypot(req.body as Record<string, unknown>)) {
    res.json(OK);
    return;
  }

  const result = SubmitAdvisorInterestBody.safeParse(req.body);
  if (!result.success) {
    res
      .status(400)
      .json(
        validationError(
          "Please check the highlighted fields and try again.",
        ),
      );
    return;
  }

  const data = result.data;

  if (!emailRegex.test(data.professionalEmail)) {
    res.status(400).json(validationError("Please enter a valid professional email address."));
    return;
  }

  if (!data.consentGiven || !data.noSensitiveDataConfirmed) {
    res.status(400).json(validationError("Both consent checkboxes are required."));
    return;
  }

  logger.info(
    {
      type: "advisor_interest",
      fields: safeLog(data as unknown as Record<string, unknown>, [
        "experienceSummary",
        "conflictDisclosure",
        "professionalEmail",
        "fullName",
        "professionalProfile",
      ]),
    },
    "Advisor interest received",
  );

  res.json(OK);
});

// ── POST /api/contact/general ──────────────────────────────────────────────
router.post("/contact/general", (req, res) => {
  const ip =
    (req.headers["x-forwarded-for"] as string | undefined)
      ?.split(",")[0]
      ?.trim() ??
    req.socket.remoteAddress ??
    "unknown";

  if (isRateLimited(ip)) {
    res
      .status(429)
      .json(validationError("Too many requests. Please try again later."));
    return;
  }

  if (hasHoneypot(req.body as Record<string, unknown>)) {
    res.json(OK);
    return;
  }

  const result = SubmitGeneralContactBody.safeParse(req.body);
  if (!result.success) {
    res
      .status(400)
      .json(
        validationError(
          "Please check the highlighted fields and try again.",
        ),
      );
    return;
  }

  const data = result.data;

  if (!emailRegex.test(data.workEmail)) {
    res.status(400).json(validationError("Please enter a valid work email address."));
    return;
  }

  if (!data.consentGiven || !data.noSensitiveDataConfirmed) {
    res.status(400).json(validationError("Both consent checkboxes are required."));
    return;
  }

  logger.info(
    {
      type: "general_contact",
      fields: safeLog(data as unknown as Record<string, unknown>, [
        "message",
        "workEmail",
        "name",
      ]),
    },
    "General contact received",
  );

  res.json(OK);
});

export default router;
