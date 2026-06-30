import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { record } = body;

    console.log('Processing booking:', record);

    // Initialize Supabase client
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // Insert into bookings table
    const { data: insertData, error: insertError } = await supabase
      .from('bookings')
      .insert([record])
      .select();

    if (insertError) {
      console.error('Supabase insert error:', insertError);
      return NextResponse.json({ error: 'Failed to save booking', details: insertError.message }, { status: 500 });
    }

    console.log('Booking saved to database:', insertData);

    // Send email via Resend
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Cerenth <noreply@cerenth.org>',
        to: ['info@cerenth.org'],
        subject: `New Booking: ${record.name} from ${record.company}`,
        html: `
          <h2>New Booking Received</h2>
          <p><strong>Name:</strong> ${record.name}</p>
          <p><strong>Email:</strong> ${record.email}</p>
          <p><strong>Company:</strong> ${record.company}</p>
          <p><strong>Service:</strong> ${record.service}</p>
          <p><strong>Preferred Date:</strong> ${record.preferred_date || 'Not specified'}</p>
          <p><strong>Preferred Time:</strong> ${record.preferred_time || 'Not specified'}</p>
          <p><strong>Message:</strong></p>
          <p>${record.message}</p>
          <p><strong>Status:</strong> ${record.status}</p>
        `,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error('Resend API error:', errorText);
      return NextResponse.json({ error: 'Failed to send email', details: errorText }, { status: 500 });
    }

    console.log('Email sent successfully');
    return NextResponse.json({ success: true, data: insertData });
  } catch (error) {
    console.error('Error processing booking:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
