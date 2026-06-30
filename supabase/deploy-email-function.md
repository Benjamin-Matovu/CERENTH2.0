# Deploy Email Notification Edge Function (GUI Method)

## 1. Create Edge Function in Supabase Dashboard

1. Go to https://supabase.com/dashboard/project/gafpajgfcopuuexjixxh/edge-functions
2. Click "New Edge Function"
3. Name it: `send-booking-email`
4. Paste this code:

```typescript
Deno.serve(async (req: Request) => {
  try {
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

    if (!RESEND_API_KEY) {
      return new Response(JSON.stringify({ error: 'RESEND_API_KEY not set' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    const { record } = await req.json()
    console.log('New booking received:', record)

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Cerenth <onboarding@resend.dev>',
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
        headers: { 'Content-Type': 'application/json' },
      })
    }

    console.log('Email sent successfully')
    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    })

  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    console.error('Error processing booking:', message)
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
})
```

5. Click "Deploy"

## 2. Set Environment Variables (Detailed)

1. After deploying the Edge Function, you'll be on the Edge Function details page
2. Look for a tab or button labeled "Environment Variables" (usually near the top or in a settings menu)
3. Click "Add Environment Variable" or the "+" button
4. A modal or form will appear with two fields:
   - **Name**: Enter `RESEND_API_KEY` (exactly as shown, case-sensitive)
   - **Value**: Enter `re_6VDvofGK_M6KgRd1c3icaw7j5aSFCEtNg`
5. Click "Save" or "Add" to save the environment variable
6. You should see the variable listed in your environment variables section
7. The Edge Function will now have access to this key via `Deno.env.get('RESEND_API_KEY')`

**Why this is needed:** The Edge Function needs your Resend API key to send emails. We store it as an environment variable for security (it's not hardcoded in the function code).

## 3. Create Webhook (Detailed)

1. Navigate to the Supabase Dashboard for your project
2. In the left sidebar, click on **"Database"**
3. Under Database, look for **"Webhooks"** (it might be under a "Replication" or "Extensions" submenu)
4. Click the **"New Webhook"** button
5. Fill in the webhook configuration:

   **Basic Settings:**
   - **Name**: Enter `booking-notification` (this is just for your reference)
   - **Table**: Click the dropdown and select `bookings`
   - **Events**: Check the box for `INSERT` (this means the webhook triggers when a new row is added)
   
   **HTTP Settings:**
   - **Method**: Select `POST`
   - **URL**: Enter `https://gafpajgfcopuuexjixxh.supabase.co/functions/v1/send-booking-email`
   
   **Headers:**
   - Click "Add Header" or the "+" button to add headers
   - First header:
     - Key: `Authorization`
     - Value: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdhZnBhamdmY29wdXVleGppeHhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI2MzczMTYsImV4cCI6MjA5ODIxMzMxNn0.pAHIkBTWEqQJabKl6Eqg4ODhxAieLXTJMDODBpQDgIM`
   - Second header:
     - Key: `Content-Type`
     - Value: `application/json`

6. Click **"Activate"** or **"Create"** to enable the webhook
7. You should see the webhook listed as "Active" in your webhooks list

**How this works:**
- When someone submits the contact form on your website, a new row is inserted into the `bookings` table
- The webhook detects this INSERT event
- It automatically sends the new booking data to your Edge Function via HTTP POST
- Your Edge Function receives the data and sends an email via Resend to `info@cerenth.org`

**Testing:**
- After setting up, submit a test booking through your contact form
- Check the Supabase Dashboard > Database > Webhooks to see if the webhook was triggered
- Check the Edge Function logs to see if it received the request
- Check your email at `info@cerenth.org` to confirm the email was sent
