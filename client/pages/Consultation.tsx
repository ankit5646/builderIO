import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, Users, CheckCircle, Video, Phone, MessageSquare, X } from "lucide-react";
import { useState } from "react";
import { sendConsultationEmail, sendEmailViaMailto, createConsultationEmailBody } from "@/lib/emailService";

export default function Consultation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    consultationType: "",
    preferredTime: "",
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
    if (!formData.name || !formData.email || !formData.phone || !formData.projectType || !formData.message) {
      setSubmitStatus('error');
      setSubmitMessage("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Try sending via EmailJS first
      const emailSent = await sendConsultationEmail(formData);

      if (emailSent) {
        setSubmitStatus('success');
        setSubmitMessage("Consultation request received! We'll contact you within 24 hours to schedule your free session.");
        // Reset form on success
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          projectType: "",
          consultationType: "",
          preferredTime: "",
          message: ""
        });
      } else {
        // Fallback to mailto if EmailJS fails
        setSubmitStatus('error');
        setSubmitMessage("Unable to send automatically. Click below to send via your email client.");

        // Provide mailto fallback
        setTimeout(() => {
          const subject = `Consultation Request from ${formData.name}`;
          const body = createConsultationEmailBody(formData);
          sendEmailViaMailto(subject, body);
        }, 2000);
      }
    } catch (error) {
      console.error('Consultation form error:', error);
      setSubmitStatus('error');
      setSubmitMessage("Unable to send automatically. Click below to send via your email client.");

      // Provide mailto fallback
      setTimeout(() => {
        const subject = `Consultation Request from ${formData.name}`;
        const body = createConsultationEmailBody(formData);
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
              <Calendar className="w-3 h-3 mr-2" />
              Free Consultation
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Book Your{" "}
              <span className="bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Free Strategy
              </span>{" "}
              Session
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Schedule a 30-minute consultation with our team to discuss your project, 
              get expert advice, and receive a custom proposal - completely free.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Benefits */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What You'll Get
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our consultation is designed to provide maximum value and clarity for your project
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-primary/5 dark:from-gray-900 dark:to-primary/5">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Expert Guidance</CardTitle>
                <CardDescription>
                  Get personalized advice from experienced developers who understand your industry
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-purple-600/5 dark:from-gray-900 dark:to-purple-600/5">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Custom Proposal</CardTitle>
                <CardDescription>
                  Receive a detailed proposal with timeline, features, and transparent pricing
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-blue-600/5 dark:from-gray-900 dark:to-blue-600/5">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <CardTitle>No Commitment</CardTitle>
                <CardDescription>
                  Free consultation with no strings attached - take time to make the right decision
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="border border-primary/10 shadow-2xl bg-gradient-to-br from-white to-primary/5 dark:from-gray-900 dark:to-primary/5">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Calendar className="w-6 h-6 mr-3 text-primary" />
                    Schedule Your Consultation
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll reach out within 24 hours to schedule your session.
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
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+97 XXXXX-XXXXX"
                          required
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
                      <Label htmlFor="projectType">Project Type *</Label>
                      <Select onValueChange={(value) => handleInputChange("projectType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="website">Business Website</SelectItem>
                          <SelectItem value="ecommerce">E-commerce Store</SelectItem>
                          <SelectItem value="webapp">Web Application</SelectItem>
                          <SelectItem value="redesign">Website Redesign</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="consultationType">Consultation Type</Label>
                      <Select onValueChange={(value) => handleInputChange("consultationType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="How would you like to meet?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="video">Video Call (Zoom/Meet)</SelectItem>
                          <SelectItem value="phone">Phone Call</SelectItem>
                          <SelectItem value="inperson">In-Person Meeting</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="preferredTime">Preferred Time</Label>
                      <Select onValueChange={(value) => handleInputChange("preferredTime", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="When works best for you?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                          <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                          <SelectItem value="flexible">I'm flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Tell Us About Your Project *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Describe your project goals, challenges, and what you hope to achieve..."
                        className="min-h-[100px]"
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
                          Booking...
                        </>
                      ) : (
                        <>
                          Book Free Consultation
                          <Calendar className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Consultation Info */}
            <div className="space-y-6">
              <Card className="border border-primary/10 shadow-lg bg-gradient-to-br from-white to-primary/5 dark:from-gray-900 dark:to-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    Session Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Duration: 30 minutes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Cost: Completely free</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Response: Within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">No commitment required</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-purple-600/10 shadow-lg bg-gradient-to-br from-purple-500/5 to-blue-500/5">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Video className="w-6 h-6 text-purple-600 mr-3" />
                    <h3 className="text-lg font-semibold">Meeting Options</h3>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Video className="w-4 h-4 mr-2 text-purple-600" />
                      Video call (recommended)
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-green-600" />
                      Phone call
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-blue-600" />
                      In-person (if local)
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-green-600/10 shadow-lg bg-gradient-to-br from-green-500/5 to-emerald-500/5">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <MessageSquare className="w-6 h-6 text-green-600 mr-3" />
                    <h3 className="text-lg font-semibold">Questions?</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Need to speak with someone first? We're here to help.
                  </p>
                  <Link to="/contact">
                    <Button variant="outline" className="w-full border-green-600/20 hover:bg-green-600/5">
                      Contact Us
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
