
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const VideoGenerator = () => {
  const [concept, setConcept] = useState('');
  const [style, setStyle] = useState('modern');
  const [duration, setDuration] = useState('30');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedVideos, setGeneratedVideos] = useState<string[]>([]);

  const handleGenerate = async () => {
    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockVideos = [
        'https://via.placeholder.com/640x360/8b5cf6/ffffff?text=Generated+Video+1',
        'https://via.placeholder.com/640x360/06b6d4/ffffff?text=Generated+Video+2',
        'https://via.placeholder.com/640x360/ec4899/ffffff?text=Generated+Video+3'
      ];
      setGeneratedVideos(mockVideos);
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Video Generator</h1>
        <p className="text-gray-600 text-lg">Create amazing videos with AI-powered editing and generation tools.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Panel */}
        <Card>
          <CardHeader>
            <CardTitle>Generate Video</CardTitle>
            <CardDescription>
              Describe your video concept and our AI will create stunning visuals for you.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="concept">Video Concept</Label>
              <Textarea
                id="concept"
                placeholder="e.g., A promotional video for a tech startup with modern animations, showing people collaborating and innovative technology"
                value={concept}
                onChange={(e) => setConcept(e.target.value)}
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Duration (seconds)</Label>
              <Input
                id="duration"
                type="number"
                min="15"
                max="300"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="style">Video Style</Label>
              <select
                id="style"
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full p-2 border rounded-md bg-white"
              >
                <option value="modern">Modern & Clean</option>
                <option value="cinematic">Cinematic</option>
                <option value="animated">Animated</option>
                <option value="documentary">Documentary</option>
                <option value="promotional">Promotional</option>
                <option value="educational">Educational</option>
                <option value="social">Social Media</option>
              </select>
            </div>

            <Button 
              onClick={handleGenerate}
              disabled={!concept.trim() || isGenerating}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
              size="lg"
            >
              {isGenerating ? 'Generating...' : 'Generate Video'}
            </Button>
          </CardContent>
        </Card>

        {/* Results Panel */}
        <Card>
          <CardHeader>
            <CardTitle>Generated Videos</CardTitle>
            <CardDescription>
              {generatedVideos.length > 0 
                ? 'Your videos are ready! Click to preview or download.'
                : 'Your generated videos will appear here.'
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            {generatedVideos.length > 0 ? (
              <div className="space-y-4">
                {generatedVideos.map((video, index) => (
                  <div 
                    key={index}
                    className="relative group cursor-pointer rounded-lg overflow-hidden hover:scale-102 transition-transform duration-200"
                  >
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-4 rounded-lg">
                      <div className="flex items-center justify-between text-white">
                        <div>
                          <h3 className="font-semibold">Video {index + 1}</h3>
                          <p className="text-sm opacity-90">{duration}s • {style} style</p>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" className="bg-white text-indigo-600 hover:bg-gray-100">
                            Preview
                          </Button>
                          <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600">
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <div className="w-16 h-16 mx-auto mb-4 opacity-50 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎬</span>
                </div>
                <p>No videos generated yet. Fill out the form and click generate!</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VideoGenerator;
