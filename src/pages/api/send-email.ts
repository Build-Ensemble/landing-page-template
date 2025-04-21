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
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    await GoogleAuthService.sendEmail(
      'hello@findre.co',
      'hello@findre.co',
      'New registration on Findre',
      `New registration on Findre ReWeekly: ${email}`
    );
    
    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('Email error:', error);
    return res.status(500).json({ error: error.message || 'Failed to send email' });
  }
}