# Troubleshooting Email Notifications

## Step 1: Check if Edge Function is Deployed

1. Go to Supabase Dashboard > Edge Functions
2. Look for `send-booking-email` in the list
3. Click on it to see details
4. Check the status - it should show as "Active" or "Deployed"
5. Click "Logs" to see if there are any errors

## Step 2: Check Edge Function Environment Variables

1. On the Edge Function page, click "Environment Variables"
2. Verify `RESEND_API_KEY` is set to: `re_6VDvofGK_M6KgRd1c3icaw7j5aSFCEtNg`
3. If missing, add it and save

## Step 3: Test Edge Function Directly

1. On the Edge Function page, look for "Invoke" or "Test" button
2. Send a test payload:
```json
{
  "record": {
    "name": "Test User",
    "email": "test@example.com",
    "company": "Test Company",
    "service": "Security Audit",
    "preferred_date": "2024-01-01",
    "preferred_time": "10:00",
    "message": "Test message",
    "status": "pending"
  }
}
```
3. Check the response - should return `{"success": true}`
4. Check the logs for any errors
5. Check if email arrives at info@cerenth.org

## Step 4: Check Webhook Configuration

1. Go to Supabase Dashboard > Database > Webhooks
2. Find `booking-notification` webhook
3. Check status - should be "Active"
4. Click on it to view details
5. Verify:
   - Table: `bookings`
   - Events: `INSERT`
   - URL: `https://gafpajgfcopuuexjixxh.supabase.co/functions/v1/send-booking-email`
   - Headers are correct

## Step 5: Test Webhook Trigger

1. Go to Supabase Dashboard > SQL Editor
2. Run this SQL to manually insert a test booking:
```sql
INSERT INTO bookings (name, email, company, service, preferred_date, preferred_time, message, status)
VALUES ('Test User', 'test@example.com', 'Test Company', 'Security Audit', '2024-01-01', '10:00', 'Test message', 'pending');
```
3. Immediately check the Webhook logs in Dashboard > Database > Webhooks
4. Check if the webhook was triggered
5. Check Edge Function logs

## Step 6: Check Resend API Issues

### Verify Domain is Verified
1. Go to https://resend.com/domains
2. Check if `cerenth.org` is verified
3. If not verified, you need to verify the domain first (add DNS records)

### Test Resend API Directly
Run this in your terminal:
```bash
curl -X POST https://api.resend.com/emails \
  -H "Authorization: Bearer re_6VDvofGK_M6KgRd1c3icaw7j5aSFCEtNg" \
  -H "Content-Type: application/json" \
  -d '{
    "from": "Cerenth <noreply@cerenth.org>",
    "to": ["info@cerenth.org"],
    "subject": "Test Email",
    "html": "<h1>Test</h1>"
  }'
```

## Step 7: Check Email Spam Folder

1. Check your spam/junk folder in Zoho Mail
2. Check if emails are being filtered

## Step 8: Alternative - Use Resend Verified Domain

If `cerenth.org` is not verified in Resend, use `onboarding@resend.dev` instead:

Update the Edge Function code:
```typescript
from: 'Cerenth <onboarding@resend.dev>',
```

This is a Resend-provided domain that works without verification.

## Common Issues and Solutions

### Issue: "RESEND_API_KEY not set"
**Solution**: Add the environment variable in Edge Function settings

### Issue: Webhook not triggering
**Solution**: Check if webhook is active, verify table name is exactly `bookings`

### Issue: Edge Function returns error
**Solution**: Check Edge Function logs for detailed error messages

### Issue: Resend API returns error
**Solution**: Verify your API key is valid, check if domain is verified

### Issue: No error but no email
**Solution**: Check spam folder, verify Resend domain is verified, try using `onboarding@resend.dev`
