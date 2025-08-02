import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Smartphone, Globe, Database, Palette, Zap, Shield, Search, ShoppingCart, Users, Settings, CheckCircle } from "lucide-react";

export default function Services() {
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
              <Zap className="w-3 h-3 mr-2" />
              Our Services
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Complete{" "}
              <span className="bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Digital Solutions
              </span>{" "}
              for Your Business
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              From concept to deployment, we provide end-to-end web development services 
              that help your business thrive in the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Custom Websites */}
            <Card className="group border border-primary/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-primary/5 dark:from-gray-900 dark:to-primary/5 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors text-xl">Custom Websites</CardTitle>
                <CardDescription className="text-base">
                  Beautiful, responsive websites that perfectly represent your brand and convert visitors into customers.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-3 text-primary" />
                    Responsive design for all devices
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-3 text-primary" />
                    SEO optimization for better rankings
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-3 text-primary" />
                    Fast loading speeds (90+ PageSpeed)
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-3 text-primary" />
                    Content management system
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-3 text-primary" />
                    Analytics and tracking setup
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Web Applications */}
            <Card className="group border border-purple-600/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-purple-600/5 dark:from-gray-900 dark:to-purple-600/5 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="group-hover:text-purple-600 transition-colors text-xl">Web Applications</CardTitle>
                <CardDescription className="text-base">
                  Powerful, scalable web applications that streamline your business processes and engage users.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-3 text-purple-600" />
                    Custom functionality and features
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-3 text-purple-600" />
                    User authentication & management
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-3 text-purple-600" />
                    Database integration & management
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-3 text-purple-600" />
                    REST API development
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-3 text-purple-600" />
                    Real-time features & notifications
                  </div>
                </div>
                <Button variant="outline" className="w-full border-purple-600/20 hover:bg-purple-600/5 hover:border-purple-600/30">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* E-commerce Solutions */}
            <Card className="group border border-blue-600/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-blue-600/5 dark:from-gray-900 dark:to-blue-600/5 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="group-hover:text-blue-600 transition-colors text-xl">E-commerce Solutions</CardTitle>
                <CardDescription className="text-base">
                  Complete online stores that drive sales with seamless shopping experiences and secure payments.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-3 text-blue-600" />
                    Secure payment gateway integration
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-3 text-blue-600" />
                    Inventory management system
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-3 text-blue-600" />
                    Order tracking & management
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-3 text-blue-600" />
                    Customer account dashboard
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 mr-3 text-blue-600" />
                    Analytics & sales reporting
                  </div>
                </div>
                <Button variant="outline" className="w-full border-blue-600/20 hover:bg-blue-600/5 hover:border-blue-600/30">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions to support your digital presence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-green-500/5 dark:from-gray-900 dark:to-green-500/5">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">Mobile Optimization</CardTitle>
                <CardDescription className="text-sm">
                  Ensure your site works perfectly on all mobile devices
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-orange-500/5 dark:from-gray-900 dark:to-orange-500/5">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">SEO Services</CardTitle>
                <CardDescription className="text-sm">
                  Improve your search engine rankings and visibility
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-pink-500/5 dark:from-gray-900 dark:to-pink-500/5">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">UI/UX Design</CardTitle>
                <CardDescription className="text-sm">
                  Beautiful, user-friendly designs that convert visitors
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-indigo-500/5 dark:from-gray-900 dark:to-indigo-500/5">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">Maintenance</CardTitle>
                <CardDescription className="text-sm">
                  Ongoing support and updates to keep your site running
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach that ensures your project is delivered on time and exceeds expectations
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl shadow-lg">
                1
              </div>
              <h3 className="font-semibold text-foreground mb-2">Discovery</h3>
              <p className="text-muted-foreground text-sm">
                We learn about your business, goals, and requirements
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl shadow-lg">
                2
              </div>
              <h3 className="font-semibold text-foreground mb-2">Planning</h3>
              <p className="text-muted-foreground text-sm">
                We create a detailed project plan and timeline
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl shadow-lg">
                3
              </div>
              <h3 className="font-semibold text-foreground mb-2">Development</h3>
              <p className="text-muted-foreground text-sm">
                We build your solution with regular updates and feedback
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl shadow-lg">
                4
              </div>
              <h3 className="font-semibold text-foreground mb-2">Launch</h3>
              <p className="text-muted-foreground text-sm">
                We deploy your site and provide ongoing support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/10 via-purple-500/10 to-blue-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss your project and find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg hover:shadow-xl transition-all">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/consultation">
                <Button variant="outline" size="lg" className="text-lg px-8 border-primary/20 hover:bg-primary/5">
                  Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
