const APPS_SCRIPT_URL =
  process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;

async function sendAppsScriptRequest(payload) {
  if (!APPS_SCRIPT_URL) {
    throw new Error(
      "Apps Script URL is not configured."
    );
  }

  const response = await fetch(
    APPS_SCRIPT_URL,
    {
      method: "POST",
      body: JSON.stringify(payload),
    }
  );

  const responseText =
    await response.text();

  let result;

  try {
    result = JSON.parse(responseText);
  } catch (error) {
    console.error(
      "Invalid Apps Script response:",
      responseText
    );

    throw new Error(
      "Booking server returned an invalid response."
    );
  }

  if (!result.success) {
    throw new Error(
      result.message ||
        "Booking request failed."
    );
  }

  return result;
}

export async function getAvailableSlots(
  bookingDate
) {
  if (!bookingDate) {
    throw new Error(
      "Booking date is required."
    );
  }

  return sendAppsScriptRequest({
    action: "getAvailableSlots",
    bookingDate,
  });
}

export async function createBooking({
  customerName,
  phone,
  email,
  bookingDate,
  sessionId,
  purpose,
  notes,
}) {
  if (
    !customerName ||
    !phone ||
    !email ||
    !bookingDate ||
    !sessionId
  ) {
    throw new Error(
      "Missing required booking information."
    );
  }

  return sendAppsScriptRequest({
    action: "createBooking",
    customerName,
    phone,
    email,
    bookingDate,
    sessionId,
    purpose:
      purpose || "Stadium Booking",
    notes: notes || "",
  });
}


export async function verifyAcademyPin(
  pin
) {
  if (!pin) {
    throw new Error(
      "Academy staff PIN is required."
    );
  }

  return sendAppsScriptRequest({
    action:
      "verifyAcademyPin",
    pin,
  });
}

export async function createAcademyBooking({
  token,
  bookingDate,
  sessionId,
  reason,
}) {
  if (
    !token ||
    !bookingDate ||
    !sessionId
  ) {
    throw new Error(
      "Missing academy booking information."
    );
  }

  return sendAppsScriptRequest({
    action:
      "createAcademyBooking",
    token,
    bookingDate,
    sessionId,
    reason:
      reason ||
      "Academy internal reservation",
  });
}