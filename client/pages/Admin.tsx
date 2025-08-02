import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RefreshCw, Mail, Phone, Building, Calendar, MessageSquare, CheckCircle, Eye } from "lucide-react";
import { useEffect, useState } from "react";

interface FormSubmission {
  id: string;
  type: 'contact' | 'consultation';
  data: any;
  submittedAt: string;
  status: 'new' | 'read' | 'responded';
}

export default function Admin() {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/submissions");
      const result = await response.json();
      
      if (result.success) {
        setSubmissions(result.submissions);
        setError("");
      } else {
        setError("Failed to load submissions");
      }
    } catch (err) {
      setError("Network error while loading submissions");
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (id: string) => {
    try {
      const response = await fetch(`/api/submissions/${id}/read`, {
        method: 'PUT'
      });
      
      if (response.ok) {
        setSubmissions(prev => 
          prev.map(sub => 
            sub.id === id ? { ...sub, status: 'read' as const } : sub
          )
        );
      }
    } catch (err) {
      console.error('Failed to mark as read:', err);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const contactSubmissions = submissions.filter(sub => sub.type === 'contact');
  const consultationSubmissions = submissions.filter(sub => sub.type === 'consultation');

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-red-500/10 text-red-700 border-red-500/20';
      case 'read': return 'bg-blue-500/10 text-blue-700 border-blue-500/20';
      case 'responded': return 'bg-green-500/10 text-green-700 border-green-500/20';
      default: return 'bg-gray-500/10 text-gray-700 border-gray-500/20';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 animate-spin rounded-full border-2 border-primary border-t-transparent mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading submissions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage form submissions and inquiries</p>
          </div>
          <Button onClick={fetchSubmissions} variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>

        {error && (
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-700 dark:text-red-400 mb-6">
            {error}
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Submissions</p>
                  <p className="text-2xl font-bold">{submissions.length}</p>
                </div>
                <MessageSquare className="w-8 h-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">New Submissions</p>
                  <p className="text-2xl font-bold text-red-600">
                    {submissions.filter(sub => sub.status === 'new').length}
                  </p>
                </div>
                <Mail className="w-8 h-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Consultations</p>
                  <p className="text-2xl font-bold text-purple-600">{consultationSubmissions.length}</p>
                </div>
                <Calendar className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList>
            <TabsTrigger value="all">All ({submissions.length})</TabsTrigger>
            <TabsTrigger value="contact">Contact ({contactSubmissions.length})</TabsTrigger>
            <TabsTrigger value="consultation">Consultation ({consultationSubmissions.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {submissions.map((submission) => (
              <Card key={submission.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <CardTitle className="text-lg">{submission.data.name}</CardTitle>
                      <Badge variant="outline" className={getStatusColor(submission.status)}>
                        {submission.status}
                      </Badge>
                      <Badge variant="secondary">
                        {submission.type}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-muted-foreground">
                        {formatDate(submission.submittedAt)}
                      </span>
                      {submission.status === 'new' && (
                        <Button size="sm" onClick={() => markAsRead(submission.id)}>
                          <Eye className="w-4 h-4 mr-1" />
                          Mark Read
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{submission.data.email}</span>
                    </div>
                    {submission.data.phone && (
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{submission.data.phone}</span>
                      </div>
                    )}
                    {submission.data.company && (
                      <div className="flex items-center space-x-2">
                        <Building className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{submission.data.company}</span>
                      </div>
                    )}
                    {submission.data.service && (
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{submission.data.service}</span>
                      </div>
                    )}
                    {submission.data.projectType && (
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{submission.data.projectType}</span>
                      </div>
                    )}
                  </div>
                  <div className="bg-muted/30 rounded-lg p-3">
                    <p className="text-sm text-muted-foreground mb-1">Message:</p>
                    <p className="text-sm">{submission.data.message}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {submissions.length === 0 && (
              <Card>
                <CardContent className="p-12 text-center">
                  <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">No submissions yet</h3>
                  <p className="text-muted-foreground">Form submissions will appear here when users contact you.</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="contact" className="space-y-4">
            {contactSubmissions.map((submission) => (
              <Card key={submission.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <CardTitle className="text-lg">{submission.data.name}</CardTitle>
                      <Badge variant="outline" className={getStatusColor(submission.status)}>
                        {submission.status}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-muted-foreground">
                        {formatDate(submission.submittedAt)}
                      </span>
                      {submission.status === 'new' && (
                        <Button size="sm" onClick={() => markAsRead(submission.id)}>
                          <Eye className="w-4 h-4 mr-1" />
                          Mark Read
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{submission.data.email}</span>
                    </div>
                    {submission.data.phone && (
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{submission.data.phone}</span>
                      </div>
                    )}
                    {submission.data.company && (
                      <div className="flex items-center space-x-2">
                        <Building className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{submission.data.company}</span>
                      </div>
                    )}
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{submission.data.service}</span>
                    </div>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-3">
                    <p className="text-sm text-muted-foreground mb-1">Message:</p>
                    <p className="text-sm">{submission.data.message}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="consultation" className="space-y-4">
            {consultationSubmissions.map((submission) => (
              <Card key={submission.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <CardTitle className="text-lg">{submission.data.name}</CardTitle>
                      <Badge variant="outline" className={getStatusColor(submission.status)}>
                        {submission.status}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-muted-foreground">
                        {formatDate(submission.submittedAt)}
                      </span>
                      {submission.status === 'new' && (
                        <Button size="sm" onClick={() => markAsRead(submission.id)}>
                          <Eye className="w-4 h-4 mr-1" />
                          Mark Read
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{submission.data.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{submission.data.phone}</span>
                    </div>
                    {submission.data.company && (
                      <div className="flex items-center space-x-2">
                        <Building className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{submission.data.company}</span>
                      </div>
                    )}
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{submission.data.projectType}</span>
                    </div>
                    {submission.data.consultationType && (
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{submission.data.consultationType}</span>
                      </div>
                    )}
                    {submission.data.preferredTime && (
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{submission.data.preferredTime}</span>
                      </div>
                    )}
                  </div>
                  <div className="bg-muted/30 rounded-lg p-3">
                    <p className="text-sm text-muted-foreground mb-1">Message:</p>
                    <p className="text-sm">{submission.data.message}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
