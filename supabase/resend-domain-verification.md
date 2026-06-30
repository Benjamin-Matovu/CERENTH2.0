# Verify cerenth.org Domain with Resend

## Step 1: Add Domain to Resend

1. Go to https://resend.com/domains
2. Click "Add Domain"
3. Enter: `cerenth.org`
4. Click "Add Domain"

## Step 2: Add DNS Records

Resend will provide you with DNS records to add. You'll need to add these to your domain's DNS settings (usually at your domain registrar like GoDaddy, Namecheap, etc.).

**Typical DNS records needed:**

### TXT Record (for verification)
- **Name**: `_resend` (or similar)
- **Value**: `resend-verification-code` (provided by Resend)
- **TTL**: 3600 (or default)

### MX Records (for receiving emails)
- **Name**: `@` (or blank)
- **Value**: `resend-mx-server` (provided by Resend)
- **Priority**: 10
- **TTL**: 3600 (or default)

## Step 3: Wait for Verification

1. After adding DNS records, wait for DNS propagation (usually 5-30 minutes, sometimes up to 48 hours)
2. Go back to Resend domains page
3. Click "Verify" or wait for automatic verification
4. Once verified, the domain status will show as "Verified"

## Step 4: Update the API Route

Once the domain is verified, update `app/api/send-email/route.ts`:

Change this line:
```typescript
to: ['mbenjamina0000@gmail.com'], // Testing mode - only verified email
```

To:
```typescript
to: ['info@cerenth.org'], // Production - verified domain
```

And change this line:
```typescript
from: 'Cerenth <onboarding@resend.dev>',
```

To:
```typescript
from: 'Cerenth <noreply@cerenth.org>',
```

## Step 5: Test

1. Submit a booking through your contact form
2. Check email at `info@cerenth.org`
3. Email should arrive successfully

## Important Notes

- **DNS Propagation**: Can take up to 48 hours, but usually much faster
- **Domain Registrar**: You need access to your domain's DNS settings
- **Multiple Records**: Resend may provide multiple DNS records - add all of them
- **Verification**: You can check verification status at https://resend.com/domains

## Alternative: Use a Different Email Service

If you can't verify the domain, you can:
1. Keep using `mbenjamina0000@gmail.com` for now
2. Set up email forwarding from `info@cerenth.org` to `mbenjamina0000@gmail.com` in your email provider (Zoho Mail)
3. This way emails go to your verified address but you still receive them at info@cerenth.org
