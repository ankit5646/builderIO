import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Heart, Target, Zap, Users, Award, Lightbulb, Shield, Star } from "lucide-react";

export default function About() {
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
              <Heart className="w-3 h-3 mr-2" />
              Our Story
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Building Digital{" "}
              <span className="bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Excellence
              </span>{" "}
              Together
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're a passionate team of developers and designers dedicated to creating 
              exceptional web experiences that help businesses grow and succeed online.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Our Journey
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Burmuda Technologies was founded with a simple yet powerful vision: to democratize access to 
                  high-quality web development services for businesses of all sizes. We believe that 
                  every business deserves a professional online presence that truly represents their 
                  brand and values.
                </p>
                <p>
                  Starting as a small team of passionate developers, we've grown by focusing on what 
                  matters most - delivering exceptional results that exceed our clients' expectations. 
                  Our approach combines cutting-edge technology with timeless design principles to 
                  create websites and applications that stand the test of time.
                </p>
                <p>
                  Today, we continue to push the boundaries of what's possible in web development, 
                  always staying ahead of the curve with the latest technologies and best practices.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 via-purple-500/10 to-blue-500/10 rounded-3xl p-8 lg:p-12 backdrop-blur-sm border border-primary/10 shadow-2xl">
                <div className="grid grid-cols-1 gap-6">
                  <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <Target className="w-6 h-6 text-primary" />
                        <h3 className="font-semibold text-foreground">Our Mission</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        To empower businesses with innovative web solutions that drive growth and success.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <Lightbulb className="w-6 h-6 text-purple-600" />
                        <h3 className="font-semibold text-foreground">Our Vision</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        To be the leading web development agency known for quality, innovation, and client success.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group border border-primary/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-primary/5 dark:from-gray-900 dark:to-primary/5">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">Quality First</CardTitle>
                <CardDescription>
                  We never compromise on quality. Every line of code, every design element is crafted with precision and care.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group border border-purple-600/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-purple-600/5 dark:from-gray-900 dark:to-purple-600/5">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="group-hover:text-purple-600 transition-colors">Innovation</CardTitle>
                <CardDescription>
                  We stay at the forefront of technology, constantly learning and implementing the latest solutions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group border border-blue-600/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-blue-600/5 dark:from-gray-900 dark:to-blue-600/5">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="group-hover:text-blue-600 transition-colors">Client Partnership</CardTitle>
                <CardDescription>
                  We build lasting relationships with our clients, working together as partners in their success.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group border border-green-600/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-green-600/5 dark:from-gray-900 dark:to-green-600/5">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="group-hover:text-green-600 transition-colors">Passion</CardTitle>
                <CardDescription>
                  We love what we do, and it shows in every project we deliver. Passion drives excellence.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group border border-orange-600/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-orange-600/5 dark:from-gray-900 dark:to-orange-600/5">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="group-hover:text-orange-600 transition-colors">Excellence</CardTitle>
                <CardDescription>
                  We strive for excellence in everything we do, from the smallest detail to the biggest picture.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group border border-pink-600/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-pink-600/5 dark:from-gray-900 dark:to-pink-600/5">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="group-hover:text-pink-600 transition-colors">Growth Mindset</CardTitle>
                <CardDescription>
                  We believe in continuous learning and improvement, both for ourselves and our clients.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/10 via-purple-500/10 to-blue-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's bring your vision to life with a custom web solution that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg hover:shadow-xl transition-all">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" size="lg" className="text-lg px-8 border-primary/20 hover:bg-primary/5">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
