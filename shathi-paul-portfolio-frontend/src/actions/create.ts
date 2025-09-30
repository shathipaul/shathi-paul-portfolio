"use server";
export const create = async (formData: FormData) => {
  // Convert FormData to a plain object (assumes simple string fields)
  const entries = Array.from(formData.entries());
  const contactInfo: Record<string, string> = {};
  for (const [key, value] of entries) {
    // If a File/Blob is sent, skip it here — this action expects simple text fields
    if (typeof value === "string") {
      contactInfo[key] = value;
    }
  }

  // Prefer server-only env vars (do not expose secret keys to client). Fall back
  // to NEXT_PUBLIC_* only for compatibility if the project currently uses them.
  const serviceId =
    process.env.EMAILJS_SERVICE_ID ||
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId =
    process.env.EMAILJS_TEMPLATE_ID ||
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey =
    process.env.EMAILJS_PUBLIC_KEY ||
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY; // also called user_id in EmailJS REST API

  if (!serviceId || !templateId || !publicKey) {
    throw new Error("Missing EmailJS configuration variables.");
  }

  const payload = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: contactInfo,
  };

  try {
    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      // Try to parse error details if available
      let text = await res.text();
      try {
        const json = JSON.parse(text);
        text = json.error || JSON.stringify(json);
      } catch {
        // ignore parse error
      }
      throw new Error(
        `EmailJS request failed: ${res.status} ${res.statusText} - ${text}`
      );
    }

    return { success: true };
  } catch (error) {
    // Rethrow so the client action handler can show a toast
    throw error instanceof Error ? error : new Error(String(error));
  }
};
