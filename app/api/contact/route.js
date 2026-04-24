import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { fullName, email, message } = await req.json();

    if (!fullName || !email || !message) {
      return Response.json(
        { success: false, message: "Missing required fields" },
        { status: 400 },
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Define mail options
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER, // fallback to your own email
      subject: `📨 New Message from Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; ">
    
    <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
      
      <!-- Header -->
      <div style="background:#842929; color:#fff; padding:20px; text-align:center;">
        <h2 style="margin:0;">New Client Message</h2>
      </div>

      <!-- Body -->
      <div style="padding:20px; color:#333;">
        
        <p style="font-size:16px; margin-bottom:15px;">
          You have received a new message from your portfolio.
        </p>

        <div style="margin-bottom:10px;">
          <strong style="color:#842929;">Name:</strong>
          <span>${fullName}</span>
        </div>

        <div style="margin-bottom:10px;">
          <strong style="color:#842929;">Email:</strong>
          <span style="color:#333;">${email}</span>
        </div>

        <div style="">
          <strong style="color:#842929;">Message:</strong>
          <div style="margin-top:10px; padding:15px; background:#f9f9f9; border-left:4px solid #842929; border-radius:5px;">
            ${message}
          </div>
        </div>

      </div>

      <!-- Footer -->
      <div style="background:#f1f1f1; text-align:center; padding:15px; font-size:12px; color:#777;">
        Sent from your Portfolio Contact Form
      </div>

    </div>
  </div>
      `,
    };
    const userMailOptions = {
      from: `"Abdullah Sajjad" <${process.env.EMAIL_USER}>`,
      to: email, 
      subject: `Thanks for contacting me, ${fullName}`,
      html: `
  <div style="font-family: Arial, sans-serif; background:#f6f6f6; padding:20px;">
    
    <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
      
      <!-- Header -->
      <div style="background:#842929; color:#fff; padding:20px; text-align:center;">
        <h2 style="margin:0;">Thank You!</h2>
      </div>

      <!-- Body -->
      <div style="padding:20px; color:#333;">
        
        <p style="font-size:16px;">
          Hi <strong>${fullName}</strong>,
        </p>

        <p style="font-size:15px; line-height:1.6;">
          Thank you for reaching out through my portfolio. I truly appreciate your message and will get back to you as soon as possible.
        </p>

        <div style="margin:20px 0; padding:15px; background:#f9f9f9; border-left:4px solid #842929; border-radius:5px;">
          <strong>What happens next?</strong><br/>
          I usually respond within 24–48 hours.
        </div>

        <p style="font-size:14px; color:#555;">
          If your message is urgent, feel free to reply directly to this email or you can contact me on my whatsapp given below.
        </p>

        <p style="margin-top:30px;">
          Best regards,<br/>
          <strong style="color:#842929;">Abdullah Sajjad <br> <span style="font-weight:400;">+92-325-4412292</span> </strong>
          
        </p>
                                                                                                 
      </div>

      <!-- Footer -->
      <div style="background:#f1f1f1; text-align:center; padding:15px; font-size:12px; color:#777;">
        Feel free to message me on this email.
      </div>
    </div>
  </div>
  `,
    };

    // Send email
    await transporter.sendMail(userMailOptions); 
    await transporter.sendMail(mailOptions);

    return Response.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json(
      { success: false, message: "Failed to send email", error: error.message },
      { status: 500 },
    );
  }
}
