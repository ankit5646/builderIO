import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Code2, Globe, Smartphone, ShoppingCart, Users, Star, Eye, Calendar } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A fully functional e-commerce platform with modern design, shopping cart functionality, secure checkout, and responsive design across all devices.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Next.js", "Tailwind CSS", "Vercel"],
      type: "E-commerce",
      status: "Live",
      color: "from-green-500 to-emerald-600",
      liveUrl: "https://e-comm-rouge-tau.vercel.app/",
      caseStudy: {
        challenge: "Create a modern, responsive e-commerce platform with seamless shopping experience and secure payment processing.",
        solution: "Built using React and Next.js for optimal performance, implemented responsive design with Tailwind CSS, and deployed on Vercel for fast global delivery.",
        results: ["100% responsive across all devices", "Fast loading times with Next.js optimization", "Modern UI/UX with smooth animations", "Secure shopping cart functionality"]
      }
    },
    {
      id: 2,
      title: "Voxomos AI Platform",
      description: "An innovative AI-powered platform providing advanced voice and conversation analysis solutions for businesses and developers.",
      image: "/api/placeholder/600/400",
      tags: ["React", "AI/ML", "TypeScript", "Modern UI"],
      type: "AI Platform",
      status: "Live",
      color: "from-blue-500 to-cyan-600",
      liveUrl: "https://voxomos.ai/",
      caseStudy: {
        challenge: "Develop a sophisticated AI platform with intuitive user interface for complex voice analysis and conversation insights.",
        solution: "Created a modern, professional website with clean design, integrated AI capabilities showcase, and user-friendly navigation for technical and non-technical users.",
        results: ["Professional AI platform presence", "Intuitive user experience design", "Clear presentation of complex AI features", "Optimized for business conversions"]
      }
    },
    {
      id: 3,
      title: "TaskFlow Project Management",
      description: "Collaborative project management web application with real-time updates, team collaboration, and advanced reporting features.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Firebase", "Material-UI", "PWA"],
      type: "Web Application",
      status: "In Development",
      color: "from-purple-500 to-pink-600"
    }
  ];

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
              <Eye className="w-3 h-3 mr-2" />
              Our Work
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Projects That{" "}
              <span className="bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Drive Results
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore our recent projects and see how we've helped businesses achieve 
              their digital goals with innovative web solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of our recent work across different industries and technologies
            </p>
          </div>
          
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={project.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                    <Card className="relative border-0 shadow-2xl overflow-hidden">
                      <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted/80 flex items-center justify-center">
                        <div className={`w-24 h-24 bg-gradient-to-br ${project.color} rounded-2xl flex items-center justify-center shadow-xl`}>
                          {project.type === "E-commerce" && <ShoppingCart className="w-12 h-12 text-white" />}
                          {project.type === "Business Website" && <Globe className="w-12 h-12 text-white" />}
                          {project.type === "Web Application" && <Code2 className="w-12 h-12 text-white" />}
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="flex items-center space-x-3 mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {project.type}
                    </Badge>
                    <Badge variant={project.status === "Live" ? "default" : "secondary"} className={project.status === "Live" ? "bg-green-500/10 text-green-700 border-green-500/20" : ""}>
                      {project.status}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                    {project.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-primary/20 text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  {project.caseStudy && (
                    <div className="mb-6 p-4 bg-muted/30 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-3">Case Study</h4>
                      <div className="space-y-3 text-sm">
                        <div>
                          <span className="font-medium text-foreground">Challenge: </span>
                          <span className="text-muted-foreground">{project.caseStudy.challenge}</span>
                        </div>
                        <div>
                          <span className="font-medium text-foreground">Solution: </span>
                          <span className="text-muted-foreground">{project.caseStudy.solution}</span>
                        </div>
                        <div>
                          <span className="font-medium text-foreground">Results: </span>
                          <ul className="list-disc list-inside text-muted-foreground mt-1">
                            {project.caseStudy.results.map((result, idx) => (
                              <li key={idx}>{result}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4">
                    {project.liveUrl ? (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Button className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg">
                          View Live Site
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </a>
                    ) : (
                      <Button disabled className="bg-gradient-to-r from-muted to-muted">
                        Coming Soon
                      </Button>
                    )}
                    <Link to="/contact">
                      <Button variant="outline" className="border-primary/20 hover:bg-primary/5">
                        Discuss Similar Project
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Project Insights
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key metrics from our recent projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-center hover:scale-105 transition-transform">
              <CardContent className="p-6">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Average PageSpeed Score</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-center hover:scale-105 transition-transform">
              <CardContent className="p-6">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent mb-2">40%</div>
                <div className="text-sm text-muted-foreground">Average Conversion Increase</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-center hover:scale-105 transition-transform">
              <CardContent className="p-6">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent mb-2">2-4</div>
                <div className="text-sm text-muted-foreground">Weeks Average Delivery</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-center hover:scale-105 transition-transform">
              <CardContent className="p-6">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Technologies We Use
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modern tools and frameworks that power our projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "React & Next.js", icon: "⚛️", color: "from-blue-500 to-cyan-600" },
              { name: "TypeScript", icon: "📘", color: "from-blue-600 to-indigo-600" },
              { name: "Node.js", icon: "🟢", color: "from-green-500 to-emerald-600" },
              { name: "Tailwind CSS", icon: "🎨", color: "from-cyan-500 to-blue-600" },
              { name: "MongoDB", icon: "🍃", color: "from-green-600 to-green-700" },
              { name: "Firebase", icon: "🔥", color: "from-orange-500 to-red-600" },
              { name: "Stripe", icon: "💳", color: "from-purple-500 to-indigo-600" },
              { name: "Vercel", icon: "▲", color: "from-gray-700 to-gray-900" }
            ].map((tech) => (
              <Card key={tech.name} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-lg flex items-center justify-center mx-auto mb-3 text-2xl shadow-lg`}>
                    {tech.icon}
                  </div>
                  <div className="font-medium text-foreground">{tech.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary/10 via-purple-500/10 to-blue-500/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's create something amazing together. Contact us to discuss your project requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg hover:shadow-xl transition-all">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="text-lg px-8 border-primary/20 hover:bg-primary/5">
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
