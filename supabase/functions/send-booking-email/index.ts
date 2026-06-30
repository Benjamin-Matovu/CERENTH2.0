import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')!

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
      },
    })
  }

  try {
    const { record } = await req.json()
    
    console.log('New booking received:', record)

    // Initialize Supabase client using the built-in environment variables
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey)

    // Insert into bookings table
    const { data: insertData, error: insertError } = await supabase
      .from('bookings')
      .insert([record])
      .select()

    if (insertError) {
      console.error('Supabase insert error:', insertError)
      return new Response(JSON.stringify({ error: 'Failed to save booking', details: insertError.message }), {
        status: 500,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
    }

    console.log('Booking saved to database:', insertData)

    // Send email via Resend
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
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
    })

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text()
      console.error('Resend API error:', errorText)
      return new Response(JSON.stringify({ error: 'Failed to send email', details: errorText }), {
        status: 500,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
    }

    console.log('Email sent successfully')
    
    return new Response(JSON.stringify({ success: true, data: insertData }), {
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
  } catch (error) {
    console.error('Error processing booking:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
  }
})
