import { RequestHandler } from "express";
import { z } from "zod";

// Validation schemas
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, "Service selection is required"),
  message: z.string().min(1, "Message is required")
});

const consultationFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(1, "Phone number is required"),
  company: z.string().optional(),
  projectType: z.string().min(1, "Project type is required"),
  consultationType: z.string().optional(),
  preferredTime: z.string().optional(),
  message: z.string().min(1, "Message is required")
});

// In-memory storage (replace with database in production)
interface FormSubmission {
  id: string;
  type: 'contact' | 'consultation';
  data: any;
  submittedAt: Date;
  status: 'new' | 'read' | 'responded';
}

let formSubmissions: FormSubmission[] = [];

// Simple email notification function (replace with actual email service)
const sendEmailNotification = async (type: string, data: any) => {
  // For now, we'll just log - in production, use nodemailer, SendGrid, etc.
  console.log(`\n🔔 NEW ${type.toUpperCase()} FORM SUBMISSION:`);
  console.log('='.repeat(50));
  console.log(`📧 Email: ${data.email}`);
  console.log(`👤 Name: ${data.name}`);
  console.log(`📱 Phone: ${data.phone || 'Not provided'}`);
  if (data.company) console.log(`🏢 Company: ${data.company}`);
  if (data.service) console.log(`🛠️ Service: ${data.service}`);
  if (data.projectType) console.log(`📋 Project Type: ${data.projectType}`);
  console.log(`💬 Message: ${data.message}`);
  console.log(`⏰ Submitted: ${new Date().toLocaleString()}`);
  console.log('='.repeat(50));
  
  // TODO: Replace with actual email sending
  // Example using nodemailer:
  /*
  const transporter = nodemailer.createTransporter({
    service: 'gmail', // or your email provider
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
  
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: 'your-business-email@example.com',
    subject: `New ${type} Form Submission from ${data.name}`,
    html: `
      <h2>New ${type} Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
      <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `
  });
  */
};

export const handleContactForm: RequestHandler = async (req, res) => {
  try {
    // Validate the form data
    const validatedData = contactFormSchema.parse(req.body);
    
    // Create submission record
    const submission: FormSubmission = {
      id: Date.now().toString(),
      type: 'contact',
      data: validatedData,
      submittedAt: new Date(),
      status: 'new'
    };
    
    // Store submission
    formSubmissions.push(submission);
    
    // Send email notification
    await sendEmailNotification('contact', validatedData);
    
    // Respond to client
    res.status(200).json({
      success: true,
      message: "Thank you for your message! We'll get back to you within 24 hours.",
      submissionId: submission.id
    });
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields correctly.",
        errors: error.errors
      });
    }
    
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later."
    });
  }
};

export const handleConsultationForm: RequestHandler = async (req, res) => {
  try {
    // Validate the form data
    const validatedData = consultationFormSchema.parse(req.body);
    
    // Create submission record
    const submission: FormSubmission = {
      id: Date.now().toString(),
      type: 'consultation',
      data: validatedData,
      submittedAt: new Date(),
      status: 'new'
    };
    
    // Store submission
    formSubmissions.push(submission);
    
    // Send email notification
    await sendEmailNotification('consultation', validatedData);
    
    // Respond to client
    res.status(200).json({
      success: true,
      message: "Consultation request received! We'll contact you within 24 hours to schedule your free session.",
      submissionId: submission.id
    });
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields correctly.",
        errors: error.errors
      });
    }
    
    console.error('Consultation form error:', error);
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later."
    });
  }
};

// Admin endpoint to view submissions
export const getFormSubmissions: RequestHandler = (req, res) => {
  const { type, status } = req.query;
  
  let filteredSubmissions = formSubmissions;
  
  if (type) {
    filteredSubmissions = filteredSubmissions.filter(sub => sub.type === type);
  }
  
  if (status) {
    filteredSubmissions = filteredSubmissions.filter(sub => sub.status === status);
  }
  
  // Sort by newest first
  filteredSubmissions.sort((a, b) => b.submittedAt.getTime() - a.submittedAt.getTime());
  
  res.json({
    success: true,
    count: filteredSubmissions.length,
    submissions: filteredSubmissions
  });
};

// Mark submission as read
export const markSubmissionAsRead: RequestHandler = (req, res) => {
  const { id } = req.params;
  const submission = formSubmissions.find(sub => sub.id === id);
  
  if (!submission) {
    return res.status(404).json({
      success: false,
      message: "Submission not found"
    });
  }
  
  submission.status = 'read';
  
  res.json({
    success: true,
    message: "Submission marked as read"
  });
};
