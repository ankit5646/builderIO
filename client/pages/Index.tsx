import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Smartphone, Zap, Globe, Users, Award, Mail, Phone, MapPin, Layers, Database, Palette, Rocket, Shield, Star } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/5 rounded-full blur-lg"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-500/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 bg-green-500/5 rounded-full blur-lg"></div>
        
        {/* Floating icons */}
        <div className="absolute top-32 left-1/4 text-primary/10 transform rotate-12">
          <Code2 size={48} />
        </div>
        <div className="absolute top-64 right-1/3 text-purple-500/10 transform -rotate-12">
          <Database size={36} />
        </div>
        <div className="absolute bottom-32 left-1/3 text-blue-500/10 transform rotate-45">
          <Layers size={42} />
        </div>
        <div className="absolute bottom-64 right-1/4 text-green-500/10 transform -rotate-45">
          <Rocket size={40} />
        </div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>



      {/* Hero Section */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <Badge variant="secondary" className="mb-4 border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-colors">
              <Zap className="w-3 h-3 mr-2" />
              Professional Web Development
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              We Build{" "}
              <span className="bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Stunning Websites
              </span>{" "}
              & Web Apps for Your Business
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your digital presence with custom websites and web applications that drive results. 
              From concept to launch, we create solutions that grow with your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/consultation">
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

      {/* Tech Stack Marquee */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-blue-500/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 relative z-10">
          <div className="text-center">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Technologies We Master
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap">
            <div className="flex items-center space-x-16 px-8">
              <div className="flex items-center space-x-3 bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-[#61DAFB]/20 rounded-full px-4 py-2 shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-[#61DAFB] to-[#61DAFB]/80 rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-sm">R</span>
                </div>
                <span className="text-lg font-semibold text-foreground">React.js</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-black/20 rounded-full px-4 py-2 shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-black to-gray-800 rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-sm">N</span>
                </div>
                <span className="text-lg font-semibold text-foreground">Next.js</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-[#06B6D4]/20 rounded-full px-4 py-2 shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-[#06B6D4] to-[#0891B2] rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-sm">T</span>
                </div>
                <span className="text-lg font-semibold text-foreground">Tailwind CSS</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-[#E34F26]/20 rounded-full px-4 py-2 shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-[#E34F26] to-[#F16529] rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-sm">H</span>
                </div>
                <span className="text-lg font-semibold text-foreground">HTML5</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-[#3178C6]/20 rounded-full px-4 py-2 shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-[#3178C6] to-[#235A97] rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-sm">TS</span>
                </div>
                <span className="text-lg font-semibold text-foreground">TypeScript</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-[#339933]/20 rounded-full px-4 py-2 shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-[#339933] to-[#68A063] rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-sm">N</span>
                </div>
                <span className="text-lg font-semibold text-foreground">Node.js</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-[#8B5CF6]/20 rounded-full px-4 py-2 shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <span className="text-lg font-semibold text-foreground">Vue.js</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-[#FF6B6B]/20 rounded-full px-4 py-2 shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-[#FF6B6B] to-[#EE5A52] rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-lg font-semibold text-foreground">Angular</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-[#F7DF1E]/20 rounded-full px-4 py-2 shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-[#F7DF1E] to-[#F0DB4F] rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-black font-bold text-sm">JS</span>
                </div>
                <span className="text-lg font-semibold text-foreground">JavaScript</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-[#E10098]/20 rounded-full px-4 py-2 shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-[#E10098] to-[#E535AB] rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <span className="text-lg font-semibold text-foreground">GraphQL</span>
              </div>
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex items-center space-x-16 px-8">
              <div className="flex items-center space-x-3 bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-[#61DAFB]/20 rounded-full px-4 py-2 shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-[#61DAFB] to-[#61DAFB]/80 rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-sm">R</span>
                </div>
                <span className="text-lg font-semibold text-foreground">React.js</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-black/20 rounded-full px-4 py-2 shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-black to-gray-800 rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-sm">N</span>
                </div>
                <span className="text-lg font-semibold text-foreground">Next.js</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-[#06B6D4]/20 rounded-full px-4 py-2 shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-[#06B6D4] to-[#0891B2] rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-sm">T</span>
                </div>
                <span className="text-lg font-semibold text-foreground">Tailwind CSS</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-[#E34F26]/20 rounded-full px-4 py-2 shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-[#E34F26] to-[#F16529] rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-sm">H</span>
                </div>
                <span className="text-lg font-semibold text-foreground">HTML5</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-[#3178C6]/20 rounded-full px-4 py-2 shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-[#3178C6] to-[#235A97] rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-sm">TS</span>
                </div>
                <span className="text-lg font-semibold text-foreground">TypeScript</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-[#339933]/20 rounded-full px-4 py-2 shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-[#339933] to-[#68A063] rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-sm">N</span>
                </div>
                <span className="text-lg font-semibold text-foreground">Node.js</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-[#8B5CF6]/20 rounded-full px-4 py-2 shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <span className="text-lg font-semibold text-foreground">Vue.js</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-[#FF6B6B]/20 rounded-full px-4 py-2 shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-[#FF6B6B] to-[#EE5A52] rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-lg font-semibold text-foreground">Angular</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-[#F7DF1E]/20 rounded-full px-4 py-2 shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-[#F7DF1E] to-[#F0DB4F] rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-black font-bold text-sm">JS</span>
                </div>
                <span className="text-lg font-semibold text-foreground">JavaScript</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-[#E10098]/20 rounded-full px-4 py-2 shadow-lg">
                <div className="w-8 h-8 bg-gradient-to-br from-[#E10098] to-[#E535AB] rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <span className="text-lg font-semibold text-foreground">GraphQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-muted/20 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We specialize in creating digital solutions that help businesses thrive online
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group border border-primary/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-primary/5 dark:from-gray-900 dark:to-primary/5 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">Custom Websites</CardTitle>
                <CardDescription>
                  Beautiful, responsive websites tailored to your brand and business goals
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center"><Star className="w-3 h-3 mr-2 text-primary" />• Responsive design for all devices</li>
                  <li className="flex items-center"><Star className="w-3 h-3 mr-2 text-primary" />• SEO optimization</li>
                  <li className="flex items-center"><Star className="w-3 h-3 mr-2 text-primary" />• Fast loading speeds</li>
                  <li className="flex items-center"><Star className="w-3 h-3 mr-2 text-primary" />• Content management systems</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group border border-purple-600/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-purple-600/5 dark:from-gray-900 dark:to-purple-600/5 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="group-hover:text-purple-600 transition-colors">Web Applications</CardTitle>
                <CardDescription>
                  Powerful web apps that streamline your business processes and engage users
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center"><Star className="w-3 h-3 mr-2 text-purple-600" />• Custom functionality</li>
                  <li className="flex items-center"><Star className="w-3 h-3 mr-2 text-purple-600" />• User authentication</li>
                  <li className="flex items-center"><Star className="w-3 h-3 mr-2 text-purple-600" />• Database integration</li>
                  <li className="flex items-center"><Star className="w-3 h-3 mr-2 text-purple-600" />• API development</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group border border-blue-600/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-blue-600/5 dark:from-gray-900 dark:to-blue-600/5 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="group-hover:text-blue-600 transition-colors">Mobile-First Design</CardTitle>
                <CardDescription>
                  Optimized experiences that work perfectly on any device or screen size
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center"><Star className="w-3 h-3 mr-2 text-blue-600" />• Mobile-first approach</li>
                  <li className="flex items-center"><Star className="w-3 h-3 mr-2 text-blue-600" />• Touch-friendly interfaces</li>
                  <li className="flex items-center"><Star className="w-3 h-3 mr-2 text-blue-600" />• Progressive web apps</li>
                  <li className="flex items-center"><Star className="w-3 h-3 mr-2 text-blue-600" />• Cross-browser compatibility</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Why Choose WebCraft?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We combine technical expertise with creative design to deliver websites and web applications 
                that not only look great but perform exceptionally.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 shadow-lg group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Expert Team</h3>
                    <p className="text-muted-foreground">Experienced developers and designers who stay current with latest technologies</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 shadow-lg group-hover:scale-110 transition-transform">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Fast Delivery</h3>
                    <p className="text-muted-foreground">Efficient project management ensures your website launches on time</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 shadow-lg group-hover:scale-110 transition-transform">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Ongoing Support</h3>
                    <p className="text-muted-foreground">We're here to help maintain and grow your digital presence</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 via-purple-500/10 to-blue-500/10 rounded-3xl p-8 lg:p-12 backdrop-blur-sm border border-primary/10 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:scale-105 transition-transform">
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-1">Latest</div>
                      <div className="text-sm text-muted-foreground">Tech Stack</div>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:scale-105 transition-transform">
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent mb-1">100%</div>
                      <div className="text-sm text-muted-foreground">Quality Focused</div>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:scale-105 transition-transform">
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent mb-1">Fresh</div>
                      <div className="text-sm text-muted-foreground">Modern Approach</div>
                    </CardContent>
                  </Card>
                  <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:scale-105 transition-transform">
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent mb-1">Fast</div>
                      <div className="text-sm text-muted-foreground">Delivery Time</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-muted/20 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with a custom website or web application
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border border-primary/10 shadow-2xl bg-gradient-to-br from-white to-primary/5 dark:from-gray-900 dark:to-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-primary" />
                  Get in Touch
                </CardTitle>
                <CardDescription>
                  Ready to get started? Contact us today for a free consultation.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">hello@webcraft.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-muted-foreground">+97 85274-54525</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-muted-foreground">Noida, Greater Noida & Gurugram</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card className="border border-primary/10 shadow-2xl bg-gradient-to-br from-primary/5 to-purple-500/5 hover:shadow-3xl transition-all group">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Rocket className="w-6 h-6 text-primary mr-3 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold">Free Consultation</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Schedule a free 30-minute consultation to discuss your project requirements and goals.
                  </p>
                  <Link to="/consultation">
                    <Button className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg hover:shadow-xl" size="lg">
                      Schedule Consultation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="border border-purple-600/10 shadow-2xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 hover:shadow-3xl transition-all group">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Palette className="w-6 h-6 text-purple-600 mr-3 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold">Quick Quote</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Get a preliminary project estimate based on your requirements within 24 hours.
                  </p>
                  <Link to="/contact">
                    <Button variant="outline" className="w-full border-purple-600/20 hover:bg-purple-600/5" size="lg">
                      Request Quote
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background/95 backdrop-blur-sm relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">WebCraft</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Professional web development services for businesses looking to establish 
                a strong digital presence and drive growth online.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 flex items-center">
                <Shield className="w-4 h-4 mr-2 text-primary" />
                Services
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/services" className="hover:text-foreground transition-colors">Custom Websites</Link></li>
                <li><Link to="/services" className="hover:text-foreground transition-colors">Web Applications</Link></li>
                <li><Link to="/services" className="hover:text-foreground transition-colors">E-commerce Solutions</Link></li>
                <li><Link to="/services" className="hover:text-foreground transition-colors">Business page</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 flex items-center">
                <Users className="w-4 h-4 mr-2 text-primary" />
                Company
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
                <li><Link to="/services" className="hover:text-foreground transition-colors">Our Process</Link></li>
                <li><Link to="/portfolio" className="hover:text-foreground transition-colors">Portfolio</Link></li>
                <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 WebCraft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
