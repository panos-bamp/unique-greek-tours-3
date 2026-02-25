import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formType, formData } = body;

    // Build email content based on form type
    let subject = '';
    let htmlContent = '';

    if (formType === 'contact') {
      subject = `New Contact Form Submission - ${formData.firstName} ${formData.lastName}`;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #2B5876; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
          </div>
          <div style="padding: 20px; background: #f9f9f9;">
            <h3 style="color: #2B5876; border-bottom: 2px solid #d4a373; padding-bottom: 8px;">Contact Information</h3>
            <p><strong>First Name:</strong> ${formData.firstName || 'Not provided'}</p>
            <p><strong>Last Name:</strong> ${formData.lastName || 'Not provided'}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            
            <h3 style="color: #2B5876; border-bottom: 2px solid #d4a373; padding-bottom: 8px;">Message</h3>
            <p>${(formData.message || '').replace(/\n/g, '<br>')}</p>
          </div>
          <div style="background: #2B5876; padding: 10px; text-align: center;">
            <p style="color: white; margin: 0; font-size: 12px;">Sent from uniquegreektours.com contact form</p>
          </div>
        </div>
      `;
    } else if (formType === 'tour-request') {
      subject = `New Tour Request - ${formData.tourType || 'Custom Tour'}`;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #2B5876; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">New Tour Request</h1>
          </div>
          <div style="padding: 20px; background: #f9f9f9;">
            <h3 style="color: #2B5876; border-bottom: 2px solid #d4a373; padding-bottom: 8px;">Contact Information</h3>
            <p><strong>First Name:</strong> ${formData.firstName || 'Not provided'}</p>
            <p><strong>Last Name:</strong> ${formData.lastName || 'Not provided'}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
            
            <h3 style="color: #2B5876; border-bottom: 2px solid #d4a373; padding-bottom: 8px;">Tour Details</h3>
            <p><strong>Selected Tour:</strong> ${formData.tourType || 'Not selected'}</p>
            <p><strong>Preferred Date:</strong> ${formData.date || 'Not specified'}</p>
            <p><strong>Number of People:</strong> ${formData.numberOfPeople || 'Not specified'}</p>
            <p><strong>Pickup Location:</strong> ${formData.pickupLocation || 'Not specified'}</p>
            
            <h3 style="color: #2B5876; border-bottom: 2px solid #d4a373; padding-bottom: 8px;">Additional Information</h3>
            <p>${formData.additionalInfo ? formData.additionalInfo.replace(/\n/g, '<br>') : 'None provided'}</p>
          </div>
          <div style="background: #2B5876; padding: 10px; text-align: center;">
            <p style="color: white; margin: 0; font-size: 12px;">Sent from uniquegreektours.com tour request form</p>
          </div>
        </div>
      `;
    } else if (formType === 'plan-trip') {
      subject = `New Trip Planning Request - ${formData.firstName} ${formData.lastName}`;
      htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #2B5876; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">New Trip Planning Request</h1>
          </div>
          <div style="padding: 20px; background: #f9f9f9;">
            <h3 style="color: #2B5876; border-bottom: 2px solid #d4a373; padding-bottom: 8px;">Contact Information</h3>
            <p><strong>First Name:</strong> ${formData.firstName || 'Not provided'}</p>
            <p><strong>Last Name:</strong> ${formData.lastName || 'Not provided'}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
            
            <h3 style="color: #2B5876; border-bottom: 2px solid #d4a373; padding-bottom: 8px;">Trip Details</h3>
            <p><strong>Travel Dates:</strong> ${formData.travelDates || 'Not specified'}</p>
            <p><strong>Number of Travelers:</strong> ${formData.travelers || 'Not specified'}</p>
            <p><strong>Destinations:</strong> ${formData.destinations ? formData.destinations.join(', ') : 'Not specified'}</p>
            <p><strong>Interests:</strong> ${formData.interests ? formData.interests.join(', ') : 'Not specified'}</p>
            
            <h3 style="color: #2B5876; border-bottom: 2px solid #d4a373; padding-bottom: 8px;">Special Requests</h3>
            <p>${formData.specialRequests ? formData.specialRequests.replace(/\n/g, '<br>') : 'None provided'}</p>
          </div>
          <div style="background: #2B5876; padding: 10px; text-align: center;">
            <p style="color: white; margin: 0; font-size: 12px;">Sent from uniquegreektours.com trip planning form</p>
          </div>
        </div>
      `;
    } else {
      return NextResponse.json(
        { success: false, message: 'Invalid form type' },
        { status: 400 }
      );
    }

    // Send email via Resend
    // IMPORTANT: Use 'onboarding@resend.dev' as from address if your domain is NOT verified in Resend.
    // Once you verify uniquegreektours.com in Resend, change this to 'noreply@uniquegreektours.com'
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Unique Greek Tours <onboarding@resend.dev>',
      to: ['info@uniquegreektours.com'],
      replyTo: formData.email || undefined,
      subject: subject,
      html: htmlContent,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { success: false, message: `Email service error: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Your request has been sent successfully! We will get back to you within 24 hours.',
    });

  } catch (error: unknown) {
    console.error('Send email error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { success: false, message: `Server error: ${errorMessage}` },
      { status: 500 }
    );
  }
}
