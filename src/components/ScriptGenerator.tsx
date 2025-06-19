
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const ScriptGenerator = () => {
  const [topic, setTopic] = useState('');
  const [duration, setDuration] = useState('5');
  const [tone, setTone] = useState('professional');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedScript, setGeneratedScript] = useState('');

  const handleGenerate = async () => {
    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockScript = `
# ${topic || 'Your Video Script'}

## Introduction (0:00 - 0:30)
Hello everyone! Welcome back to my channel. Today we're going to dive deep into ${topic || 'an amazing topic'} that I know you've been waiting for.

## Main Content (0:30 - ${Math.floor(parseInt(duration) * 0.8)}:00)
Let me walk you through the key points that will help you understand this better:

1. **First Point**: This is where we establish the foundation of our discussion.
2. **Second Point**: Building on what we just learned, let's explore this further.
3. **Third Point**: Now for the most important part that ties everything together.

## Conclusion (${Math.floor(parseInt(duration) * 0.8)}:00 - ${duration}:00)
That's a wrap! I hope you found this information valuable. Don't forget to like this video if it helped you, subscribe for more content like this, and let me know in the comments what you'd like to see next!

Thanks for watching, and I'll see you in the next one!
      `;
      setGeneratedScript(mockScript);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Script Generator</h1>
        <p className="text-gray-600 text-lg">Generate compelling scripts for your videos, podcasts, and presentations.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Panel */}
        <Card>
          <CardHeader>
            <CardTitle>Generate Script</CardTitle>
            <CardDescription>
              Tell us about your content and we'll create a professional script tailored to your needs.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="topic">Topic/Subject</Label>
              <Input
                id="topic"
                placeholder="e.g., How to Start a YouTube Channel"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Duration (minutes)</Label>
              <Input
                id="duration"
                type="number"
                min="1"
                max="60"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tone">Tone & Style</Label>
              <select
                id="tone"
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full p-2 border rounded-md bg-white"
              >
                <option value="professional">Professional</option>
                <option value="casual">Casual & Friendly</option>
                <option value="educational">Educational</option>
                <option value="entertaining">Entertaining</option>
                <option value="motivational">Motivational</option>
                <option value="storytelling">Storytelling</option>
              </select>
            </div>

            <Button 
              onClick={handleGenerate}
              disabled={!topic.trim() || isGenerating}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
              size="lg"
            >
              {isGenerating ? 'Generating...' : 'Generate Script'}
            </Button>
          </CardContent>
        </Card>

        {/* Results Panel */}
        <Card>
          <CardHeader>
            <CardTitle>Generated Script</CardTitle>
            <CardDescription>
              {generatedScript 
                ? 'Your script is ready! You can copy it or make further edits.'
                : 'Your generated script will appear here.'
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            {generatedScript ? (
              <div className="space-y-4">
                <Textarea
                  value={generatedScript}
                  onChange={(e) => setGeneratedScript(e.target.value)}
                  className="min-h-[400px] font-mono text-sm"
                />
                <div className="flex gap-2">
                  <Button 
                    onClick={() => navigator.clipboard.writeText(generatedScript)}
                    variant="outline"
                    size="sm"
                  >
                    Copy Script
                  </Button>
                  <Button 
                    onClick={() => setGeneratedScript('')}
                    variant="outline"
                    size="sm"
                  >
                    Clear
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <div className="w-16 h-16 mx-auto mb-4 opacity-50 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📝</span>
                </div>
                <p>No script generated yet. Fill out the form and click generate!</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ScriptGenerator;
