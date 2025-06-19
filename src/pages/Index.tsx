import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowDown, ArrowUp, LayoutDashboard, LogIn, UserPlus } from 'lucide-react';
import AuthModal from '@/components/AuthModal';
import Dashboard from '@/components/Dashboard';

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  const handleAuthSuccess = (userData: { name: string; email: string }) => {
    setUser(userData);
    setIsLoggedIn(true);
    setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  const openAuthModal = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  if (isLoggedIn && user) {
    return <Dashboard user={user} onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="container mx-auto px-6 py-8 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          Clip<span className="text-purple-400">Gen</span>
        </div>
        <div className="flex gap-4">
          <Button 
            variant="outline" 
            onClick={() => openAuthModal('signin')}
            className="bg-transparent border-white/20 text-white hover:bg-white/10"
          >
            <LogIn className="w-4 h-4 mr-2" />
            Sign In
          </Button>
          <Button 
            onClick={() => openAuthModal('signup')}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
          >
            <UserPlus className="w-4 h-4 mr-2" />
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-white mb-8 leading-tight">
            Create Amazing Content with
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> AI Magic</span>
          </h1>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Generate stunning thumbnails, compelling scripts, and engaging videos with our powerful AI tools. Transform your content creation workflow today.
          </p>
          <Button 
            size="lg"
            onClick={() => openAuthModal('signup')}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
          >
            Start Creating for Free
            <ArrowDown className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Everything You Need to Create
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Our AI-powered tools help you create professional content in minutes, not hours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <LayoutDashboard className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white text-xl">Thumbnail Generation</CardTitle>
              <CardDescription className="text-blue-100">
                Create eye-catching thumbnails that boost your click-through rates with AI-powered design suggestions.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <LayoutDashboard className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white text-xl">Script Generation</CardTitle>
              <CardDescription className="text-blue-100">
                Generate compelling scripts for videos, podcasts, and presentations with intelligent AI writing.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <LayoutDashboard className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white text-xl">Video Generation</CardTitle>
              <CardDescription className="text-blue-100">
                Transform your ideas into stunning videos with AI-powered video creation and editing tools.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Content?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join thousands of creators who are already using ClipGen to create amazing content.
          </p>
          <Button 
            size="lg"
            onClick={() => openAuthModal('signup')}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
          >
            Get Started Now
            <ArrowUp className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onAuthSuccess={handleAuthSuccess}
      />
    </div>
  );
};

export default Index;
