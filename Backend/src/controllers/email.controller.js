import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendEmail = async (req, res) => {
  try {
    const { to, subject, text } = req.body;
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send email", error });
  }
};

export const replyEmail = async (req, res) => {
  try {
    const { to, subject, text, inReplyTo } = req.body;
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject: `Re: ${subject}`,
      text,
      references: inReplyTo,
      inReplyTo,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Reply sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send reply", error });
  }
};

export const getEmails = async (req, res) => {
  try {
    // Placeholder for email fetching logic
    res
      .status(200)
      .json({
        message: "Email fetch functionality requires IMAP implementation",
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch emails", error });
  }
};

export const deleteEmail = async (req, res) => {
  try {
    const { messageId } = req.params;
    // Placeholder for email deletion logic
    res
      .status(200)
      .json({
        message: "Email deletion functionality requires IMAP implementation",
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete email", error });
  }
};
