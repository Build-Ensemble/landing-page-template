import { OAuth2Client } from 'google-auth-library';
import { google, gmail_v1 } from 'googleapis';
import Gmail = gmail_v1.Gmail;
class GoogleAuthService {
  // Get the Google client using the refresh token
  static getOAuth2Client(refreshToken: string) {
    const CLIENT_ID = process.env.GOOGLE_OAUTH2_CLIENT_ID;
    const CLIENT_SECRET = process.env.GOOGLE_OAUTH2_CLIENT_SECRET;
    const oAuth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET);
    oAuth2Client.setCredentials({ refresh_token: refreshToken });
    return oAuth2Client;
  }

  static getGmailClient(refreshToken: string) {
    let oAuth2Client = GoogleAuthService.getOAuth2Client(refreshToken);
    return google.gmail({ version: 'v1', auth: oAuth2Client });
  }

  /**
   * Send an email from the admin account to the specified recipient
   */
  static async sendEmail(
    sender: string,
    recipient: string,
    subject: string,
    body: string,
  ) {

    console.log("Available env vars:", Object.keys(process.env).filter(key => key.includes('GOOGLE')));
    console.log("Refresh token value:", process.env.GOOGLE_OAUTH_REFRESH_TOKEN ? 'exists' : 'missing');
    let adminEmailAddress = process.env.ADMIN_EMAIL_ADDRESS || 'admin@Findre-technologies.com';
    let adminRefreshToken = process.env.GOOGLE_OAUTH_REFRESH_TOKEN;
    
    if (!adminRefreshToken) {
      throw new Error('Admin refresh token is not configured');
    }
    
    const gmail: Gmail = GoogleAuthService.getGmailClient(adminRefreshToken);
    
    const email = [
      `From: "${sender}" <${adminEmailAddress}>`,
      `To: ${recipient}`,
      `Subject: ${subject}`,
      '',
      body,
    ].join('\n');
    
    const base64EncodedEmail = Buffer.from(email)
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');
    
    return await gmail.users.messages.send({
      userId: 'me',
      requestBody: {
        raw: base64EncodedEmail,
      },
    });
  }
}

export default GoogleAuthService;