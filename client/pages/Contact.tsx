import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Phone, MapPin, Clock, Send, MessageCircle, Calendar, Users, CheckCircle, X } from "lucide-react";
import { useState } from "react";
import { sendContactEmail, sendEmailViaMailto, createContactEmailBody } from "@/lib/emailService";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Validate required fields
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      setSubmitStatus('error');
      setSubmitMessage("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Try sending via EmailJS first
      const emailSent = await sendContactEmail(formData);

      if (emailSent) {
        setSubmitStatus('success');
        setSubmitMessage("Thank you for your message! We'll get back to you within 24 hours.");
        // Reset form on success
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: ""
        });
      } else {
        // Fallback to mailto if EmailJS fails
        setSubmitStatus('error');
        setSubmitMessage("Unable to send automatically. Click below to send via your email client.");

        // Provide mailto fallback
        setTimeout(() => {
          const subject = `Contact Form Submission from ${formData.name}`;
          const body = createContactEmailBody(formData);
          sendEmailViaMailto(subject, body);
        }, 2000);
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
      setSubmitMessage("Unable to send automatically. Click below to send via your email client.");

      // Provide mailto fallback
      setTimeout(() => {
        const subject = `Contact Form Submission from ${formData.name}`;
        const body = createContactEmailBody(formData);
        sendEmailViaMailto(subject, body);
      }, 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/5 rounded-full blur-xl"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 border border-primary/20 bg-primary/5">
              <MessageCircle className="w-3 h-3 mr-2" />
              Get In Touch
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Let's Build Something{" "}
              <span className="bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to start your project? Contact us today and let's discuss how we can 
              help bring your vision to life with a custom web solution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border border-primary/10 shadow-2xl bg-gradient-to-br from-white to-primary/5 dark:from-gray-900 dark:to-primary/5">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Send className="w-6 h-6 mr-3 text-primary" />
                    Tell Us About Your Project
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+97 XXXXX-XXXXX"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          placeholder="Your company name"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Needed *</Label>
                      <Select onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="website">Custom Website</SelectItem>
                          <SelectItem value="webapp">Web Application</SelectItem>
                          <SelectItem value="ecommerce">E-commerce Store</SelectItem>
                          <SelectItem value="redesign">Website Redesign</SelectItem>
                          <SelectItem value="maintenance">Maintenance & Support</SelectItem>
                          <SelectItem value="consultation">Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                    
                    {submitStatus === 'success' && (
                      <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-700 dark:text-green-400 mb-4">
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 mr-2" />
                          {submitMessage}
                        </div>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-700 dark:text-red-400 mb-4">
                        <div className="flex items-center">
                          <X className="w-5 h-5 mr-2" />
                          {submitMessage}
                        </div>
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg hover:shadow-xl text-lg py-6 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border border-primary/10 shadow-lg bg-gradient-to-br from-white to-primary/5 dark:from-gray-900 dark:to-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-primary" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-muted-foreground text-sm">hello@webcraft.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Phone</div>
                      <div className="text-muted-foreground text-sm">+97 85274-54525</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-muted-foreground text-sm">Noida, Greater Noida & Gurugram</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium">Response Time</div>
                      <div className="text-muted-foreground text-sm">Within 24 hours</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-purple-600/10 shadow-lg bg-gradient-to-br from-purple-500/5 to-blue-500/5">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Calendar className="w-6 h-6 text-purple-600 mr-3" />
                    <h3 className="text-lg font-semibold">Free Consultation</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Schedule a free 30-minute consultation to discuss your project in detail.
                  </p>
                  <Link to="/consultation">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-600/90 hover:to-blue-600/90">
                      Book Consultation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="border border-green-600/10 shadow-lg bg-gradient-to-br from-green-500/5 to-emerald-500/5">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Users className="w-6 h-6 text-green-600 mr-3" />
                    <h3 className="text-lg font-semibold">Why Choose Us?</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Fast response time (24 hours)</li>
                    <li>• Transparent pricing</li>
                    <li>• Quality-focused approach</li>
                    <li>• Ongoing support included</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our services and process
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">How long does a typical project take?</h3>
                <p className="text-muted-foreground text-sm">Most websites take 2-4 weeks, while complex web applications can take 6-12 weeks depending on requirements.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Do you provide ongoing maintenance?</h3>
                <p className="text-muted-foreground text-sm">Yes, we offer ongoing maintenance and support packages to keep your website secure and up-to-date.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">What's included in the project cost?</h3>
                <p className="text-muted-foreground text-sm">Our quotes include design, development, testing, deployment, and basic training. Hosting and domain are separate.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Can you work with existing designs?</h3>
                <p className="text-muted-foreground text-sm">Absolutely! We can work with your existing designs, Figma files, or create new designs from scratch.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
