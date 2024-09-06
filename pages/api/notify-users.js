import { sendEmail } from '../../utils/emailService';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { companyName, users } = req.body;

    try {
      for (const userEmail of users) {
        await sendEmail(
          userEmail,
          'New Company Added',
          `A new company "${companyName}" has been added to our platform!`
        );
      }
      res.status(200).json({ message: 'Notifications sent successfully' });
    } catch (error) {
      console.error('Error sending notifications:', error);
      res.status(500).json({ error: 'Error sending notifications' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}