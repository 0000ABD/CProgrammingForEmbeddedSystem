/*export async function POST(req) {
  const body = await req.json();

  const text = `
NEW STUDENT INQUIRY

Name: ${body.name}
Phone: ${body.phone}
Email: ${body.email}
Message: ${body.message}
`;
console.log("BOT:", process.env.BOT_TOKEN);
  const url = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: process.env.CHAT_ID,
      text,
    }),
  });

  const data = await res.json();

  return Response.json(data);
}*/

/*import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();

  const { name, phone, email, message } = body;

  // 1. Telegram message
  const text = `
NEW STUDENT INQUIRY

Name: ${name}
Phone: ${phone}
Email: ${email}
Message: ${message}
`;

  await fetch(
    `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: process.env.CHAT_ID,
        text,
      }),
    }
  );

  // 2. Email confirmation to user
  await resend.emails.send({
    from: "C Programming For Embedded Systems <onboarding@resend.dev>",
    to: email,
    subject: "C Programming For Embedded Systems : Registration Received ✔",
    html: `
      <h2>Thank you ${name}</h2>
      <p>We have received your inquiry.</p>
      <p>Our team will contact you soon.</p>
       <p></p>
       <p></p>
      <p>Thanks & Regards</p>
      <p>C Programming For Embedded Systems</p>
    `,
  });

  return Response.json({ success: true });
}*/
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// 🔁 retry helper
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function retry(fn, retries = 3, delay = 1000) {
  let lastError;

  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      console.log(`Retry ${i + 1} failed`);
      await sleep(delay * (i + 1)); // exponential backoff
    }
  }

  throw lastError;
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone, email, message } = body;

    // -----------------------------
    // 1. Telegram (critical)
    // -----------------------------
    const text = `
NEW STUDENT INQUIRY

Name: ${name}
Phone: ${phone}
Email: ${email}
Message: ${message}
`;

    try {
      await fetch(
        `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: process.env.CHAT_ID,
            text,
          }),
        }
      );
    } catch (err) {
      console.log("Telegram failed:", err);
    }

    // -----------------------------
    // 2. Email (with retry)
    // -----------------------------
    try {
      const emailResult = await retry(async () => {
        return await resend.emails.send({
          from: "C Programming For Embedded Systems <onboarding@resend.dev>",
          to: email,
          subject:
            "C Programming For Embedded Systems: Registration Received ✔",
          replyTo: "yourgmail@gmail.com",
          html: `
            <h2>Thank you ${name}</h2>
            <p>We have received your inquiry.</p>
            <p>Our team will contact you soon.</p>
            <br/>
            <p>Thanks & Regards</p>
            <p><b>C Programming For Embedded Systems</b></p>
          `,
        });
      });

      console.log("EMAIL SENT:", emailResult);
    } catch (err) {
      console.log("Email failed after retries:", err);
    }

    // -----------------------------
    // 3. Response (always success)
    // -----------------------------
    return Response.json({
      success: true,
      message: "Request processed",
    });
  } catch (err) {
    console.log("API ERROR:", err);

    return Response.json(
      {
        success: false,
        message: "Server error",
      },
      { status: 500 }
    );
  }
}