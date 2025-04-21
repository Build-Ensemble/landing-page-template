import type { NextApiRequest, NextApiResponse } from 'next';
import GoogleAuthService from '@/services/gmail';  

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, phone, frequency } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    await GoogleAuthService.sendEmail(
      'HeyWeekly',
      'admin@ensemble-technologies.com',
      `New Registration: ${email}`,
      `
        New registration on HeyWeekly:

        Email: ${email}
        Phone: ${phone}
        Newsletter Frequency: ${frequency}

        Timestamp: ${new Date().toLocaleString()}
      `
    );
    
    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('Email error:', error);
    return res.status(500).json({ error: error.message || 'Failed to send email' });
  }
}