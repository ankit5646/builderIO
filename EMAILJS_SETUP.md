# EmailJS Setup Guide

Your website now sends form submissions directly to your email using EmailJS - no backend required!

## Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Copy the Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Templates
Create two templates for your forms:

#### Contact Form Template:
1. Go to "Email Templates" → "Create New Template"
2. Template name: "Contact Form"
3. Subject: `New Contact: {{from_name}}`
4. Content:
```
New contact form submission from your website!

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}
Service Needed: {{service}}

Message:
{{message}}

Submitted: {{submitted_date}}
Form Type: {{form_type}}
```
5. **Copy the Template ID** (e.g., `template_contact123`)

#### Consultation Form Template:
1. Create another template: "Consultation Request"
2. Subject: `Consultation Request: {{from_name}}`
3. Content:
```
New consultation request from your website!

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}
Project Type: {{project_type}}
Consultation Type: {{consultation_type}}
Preferred Time: {{preferred_time}}

Message:
{{message}}

Submitted: {{submitted_date}}
Form Type: {{form_type}}
```
4. **Copy the Template ID** (e.g., `template_consultation123`)

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. **Copy the Public Key** (e.g., `user_abc123xyz`)

### Step 5: Update Configuration
Edit the file `client/lib/emailService.ts` and update these values:

```typescript
const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id_here',           // From Step 2
  TEMPLATE_ID_CONTACT: 'your_contact_template_id',     // From Step 3
  TEMPLATE_ID_CONSULTATION: 'your_consultation_template_id', // From Step 3
  PUBLIC_KEY: 'your_public_key_here',           // From Step 4
  TO_EMAIL: 'your-business-email@example.com'   // Your email address
};
```

### Step 6: Test Your Forms
1. Save the file and restart your development server
2. Fill out the contact or consultation form
3. Check your email inbox for the form submission

## Free Plan Limits
- 200 emails per month
- EmailJS branding in emails
- Perfect for small businesses

## Pro Plan ($15/month)
- 1000+ emails per month  
- Remove EmailJS branding
- Better deliverability

## Troubleshooting

### Email not receiving?
1. Check spam/junk folder
2. Verify email service setup in EmailJS
3. Test templates in EmailJS dashboard
4. Check browser console for errors

### Want to change email address?
Just update `TO_EMAIL` in the config file!

### Using Gmail?
You might need to:
1. Enable 2-factor authentication
2. Create an "App Password" for EmailJS
3. Use the app password instead of your regular password

## Alternative: Simple Mailto Fallback
If EmailJS fails, the forms automatically fall back to opening your default email client with the form data pre-filled. This ensures you never miss a submission!

---

**That's it!** Your forms now send emails directly without any backend complexity. 🎉
