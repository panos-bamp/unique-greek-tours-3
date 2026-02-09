import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formType, formData } = body;

    let subject = '';
    let htmlContent = '';

    // Build email based on form type
    switch (formType) {
      case 'contact':
        subject = `New Contact Form - ${formData.name}`;
        htmlContent = `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                h2 { color: #1a4d6d; border-bottom: 3px solid #c9a86a; padding-bottom: 10px; }
                .section { margin: 20px 0; padding: 15px; background: #f9f5ed; border-left: 4px solid #c9a86a; }
                .label { font-weight: bold; color: #1a4d6d; }
                .value { margin-left: 10px; }
              </style>
            </head>
            <body>
              <div class="container">
                <h2>📧 New Contact Form Submission</h2>
                
                <div class="section">
                  <p><span class="label">Name:</span><span class="value">${formData.name}</span></p>
                  <p><span class="label">Email:</span><span class="value"><a href="mailto:${formData.email}">${formData.email}</a></span></p>
                  <p><span class="label">Phone:</span><span class="value">${formData.phone || 'Not provided'}</span></p>
                  <p><span class="label">Subject:</span><span class="value">${formData.subject}</span></p>
                </div>
                
                <div class="section">
                  <p class="label">Message:</p>
                  <p>${formData.message.replace(/\n/g, '<br>')}</p>
                </div>
              </div>
            </body>
          </html>
        `;
        break;

      case 'tour-request':
        subject = `New Tour Request - ${formData.tourType || 'Custom Tour'}`;
        htmlContent = `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                h2 { color: #1a4d6d; border-bottom: 3px solid #c9a86a; padding-bottom: 10px; }
                h3 { color: #1a4d6d; margin-top: 20px; }
                .section { margin: 20px 0; padding: 15px; background: #f9f5ed; border-left: 4px solid #c9a86a; }
                .label { font-weight: bold; color: #1a4d6d; }
                .value { margin-left: 10px; }
              </style>
            </head>
            <body>
              <div class="container">
                <h2>🎫 New Tour Request</h2>
                
                <h3>Contact Information</h3>
                <div class="section">
                  <p><span class="label">Name:</span><span class="value">${formData.name}</span></p>
                  <p><span class="label">Email:</span><span class="value"><a href="mailto:${formData.email}">${formData.email}</a></span></p>
                  <p><span class="label">Phone:</span><span class="value">${formData.phone || 'Not provided'}</span></p>
                </div>
                
                <h3>Tour Details</h3>
                <div class="section">
                  <p><span class="label">Tour Type:</span><span class="value">${formData.tourType}</span></p>
                  <p><span class="label">Preferred Date:</span><span class="value">${formData.date}</span></p>
                  <p><span class="label">Number of People:</span><span class="value">${formData.numberOfPeople}</span></p>
                  <p><span class="label">Pickup Location:</span><span class="value">${formData.pickupLocation || 'Not specified'}</span></p>
                </div>
                
                ${formData.additionalInfo ? `
                <h3>Additional Information</h3>
                <div class="section">
                  <p>${formData.additionalInfo.replace(/\n/g, '<br>')}</p>
                </div>
                ` : ''}
              </div>
            </body>
          </html>
        `;
        break;

      case 'plan-trip':
        subject = `New Custom Trip Request - ${formData.name}`;
        htmlContent = `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                h2 { color: #1a4d6d; border-bottom: 3px solid #c9a86a; padding-bottom: 10px; }
                h3 { color: #1a4d6d; margin-top: 20px; }
                .section { margin: 20px 0; padding: 15px; background: #f9f5ed; border-left: 4px solid #c9a86a; }
                .label { font-weight: bold; color: #1a4d6d; }
                .value { margin-left: 10px; }
              </style>
            </head>
            <body>
              <div class="container">
                <h2>✈️ New Custom Multi-Day Trip Request</h2>
                
                <h3>Contact Information</h3>
                <div class="section">
                  <p><span class="label">Name:</span><span class="value">${formData.name}</span></p>
                  <p><span class="label">Email:</span><span class="value"><a href="mailto:${formData.email}">${formData.email}</a></span></p>
                  <p><span class="label">Phone:</span><span class="value">${formData.phone || 'Not provided'}</span></p>
                </div>
                
                <h3>Trip Preferences</h3>
                <div class="section">
                  <p><span class="label">Destinations:</span><span class="value">${formData.destinations}</span></p>
                  <p><span class="label">Duration:</span><span class="value">${formData.duration}</span></p>
                  <p><span class="label">Travel Dates:</span><span class="value">${formData.travelDates || 'Flexible'}</span></p>
                  <p><span class="label">Number of Travelers:</span><span class="value">${formData.travelers}</span></p>
                  <p><span class="label">Accommodation:</span><span class="value">${formData.accommodation || 'Not specified'}</span></p>
                </div>
                
                ${formData.interests ? `
                <h3>Interests</h3>
                <div class="section">
                  <p>${formData.interests.replace(/\n/g, '<br>')}</p>
                </div>
                ` : ''}
                
                ${formData.budget ? `
                <h3>Budget Range</h3>
                <div class="section">
                  <p>${formData.budget}</p>
                </div>
                ` : ''}
                
                ${formData.specialRequests ? `
                <h3>Special Requests</h3>
                <div class="section">
                  <p>${formData.specialRequests.replace(/\n/g, '<br>')}</p>
                </div>
                ` : ''}
              </div>
            </body>
          </html>
        `;
        break;

      default:
        return NextResponse.json(
          { success: false, error: 'Invalid form type' },
          { status: 400 }
        );
    }

    // Send email using Resend
    await resend.emails.send({
      from: 'Unique Greek Tours <bookings@uniquegreektours.com>',
      to: ['info@uniquegreektours.com'],
      replyTo: formData.email,
      subject: subject,
      html: htmlContent,
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully'
    });

  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || 'Failed to send email' 
      },
      { status: 500 }
    );
  }
}
