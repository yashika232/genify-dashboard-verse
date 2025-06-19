
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const ThumbnailGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [style, setStyle] = useState('modern');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedThumbnails, setGeneratedThumbnails] = useState<string[]>([]);

  const handleGenerate = async () => {
    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockThumbnails = [
        'https://via.placeholder.com/400x225/6366f1/ffffff?text=Thumbnail+1',
        'https://via.placeholder.com/400x225/8b5cf6/ffffff?text=Thumbnail+2',
        'https://via.placeholder.com/400x225/06b6d4/ffffff?text=Thumbnail+3',
        'https://via.placeholder.com/400x225/ec4899/ffffff?text=Thumbnail+4'
      ];
      setGeneratedThumbnails(mockThumbnails);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Thumbnail Generator</h1>
        <p className="text-gray-600 text-lg">Create eye-catching thumbnails that boost your click-through rates.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Panel */}
        <Card>
          <CardHeader>
            <CardTitle>Generate Thumbnail</CardTitle>
            <CardDescription>
              Describe what you want your thumbnail to look like, and our AI will create multiple options for you.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="prompt">Thumbnail Description</Label>
              <Textarea
                id="prompt"
                placeholder="e.g., A tech tutorial thumbnail with bright colors, bold text saying 'How to Code', and a laptop in the background"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="style">Style</Label>
              <select
                id="style"
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full p-2 border rounded-md bg-white"
              >
                <option value="modern">Modern</option>
                <option value="minimalist">Minimalist</option>
                <option value="bold">Bold & Colorful</option>
                <option value="professional">Professional</option>
                <option value="gaming">Gaming</option>
                <option value="educational">Educational</option>
              </select>
            </div>

            <Button 
              onClick={handleGenerate}
              disabled={!prompt.trim() || isGenerating}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              size="lg"
            >
              {isGenerating ? 'Generating...' : 'Generate Thumbnails'}
            </Button>
          </CardContent>
        </Card>

        {/* Results Panel */}
        <Card>
          <CardHeader>
            <CardTitle>Generated Thumbnails</CardTitle>
            <CardDescription>
              {generatedThumbnails.length > 0 
                ? 'Click on any thumbnail to download or edit it further.'
                : 'Your generated thumbnails will appear here.'
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            {generatedThumbnails.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {generatedThumbnails.map((thumbnail, index) => (
                  <div 
                    key={index}
                    className="relative group cursor-pointer rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200"
                  >
                    <img 
                      src={thumbnail} 
                      alt={`Generated thumbnail ${index + 1}`}
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                      <Button size="sm" className="bg-white text-black hover:bg-gray-100">
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <LayoutDashboard className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>No thumbnails generated yet. Fill out the form and click generate!</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ThumbnailGenerator;
