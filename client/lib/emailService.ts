import emailjs from '@emailjs/browser';

// EmailJS Configuration - Replace these with your actual EmailJS credentials
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_2nebv1i', // Your EmailJS service ID
  TEMPLATE_ID_CONTACT: 'template_5r01mek', // Contact form template ID
  TEMPLATE_ID_CONSULTATION: 'template_4wp3kng', // Consultation form template ID
  PUBLIC_KEY: 'mjK0-Z2q0p5iCJxog', // Your EmailJS public key
  
  // Your business email where you want to receive submissions
  TO_EMAIL: 'ankityadav564682@gmail.com' // CHANGE THIS TO YOUR EMAIL
};

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
}

interface ConsultationFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  projectType: string;
  consultationType?: string;
  preferredTime?: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // For now, we'll use a simple email template
    // You can customize this template in EmailJS dashboard
    const templateParams = {
      to_email: EMAILJS_CONFIG.TO_EMAIL,
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      company: formData.company || 'Not provided',
      service: formData.service,
      message: formData.message,
      form_type: 'Contact Form',
      submitted_date: new Date().toLocaleString()
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID_CONTACT,
      templateParams
    );

    console.log('Contact email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send contact email:', error);
    return false;
  }
};

export const sendConsultationEmail = async (formData: ConsultationFormData): Promise<boolean> => {
  try {
    const templateParams = {
      to_email: EMAILJS_CONFIG.TO_EMAIL,
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      company: formData.company || 'Not provided',
      project_type: formData.projectType,
      consultation_type: formData.consultationType || 'Not specified',
      preferred_time: formData.preferredTime || 'Flexible',
      message: formData.message,
      form_type: 'Consultation Request',
      submitted_date: new Date().toLocaleString()
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID_CONSULTATION,
      templateParams
    );

    console.log('Consultation email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send consultation email:', error);
    return false;
  }
};

// Alternative: Simple mailto fallback if EmailJS fails
export const sendEmailViaMailto = (subject: string, body: string) => {
  const mailtoLink = `mailto:${EMAILJS_CONFIG.TO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(mailtoLink);
};

export const createContactEmailBody = (formData: ContactFormData): string => {
  return `
New Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Company: ${formData.company || 'Not provided'}
Service Needed: ${formData.service}

Message:
${formData.message}

Submitted: ${new Date().toLocaleString()}
  `.trim();
};

export const createConsultationEmailBody = (formData: ConsultationFormData): string => {
  return `
New Consultation Request

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company || 'Not provided'}
Project Type: ${formData.projectType}
Consultation Type: ${formData.consultationType || 'Not specified'}
Preferred Time: ${formData.preferredTime || 'Flexible'}

Message:
${formData.message}

Submitted: ${new Date().toLocaleString()}
  `.trim();
};
