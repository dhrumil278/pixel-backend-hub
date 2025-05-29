
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Github, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="glass p-8 scroll-reveal">
            <h3 className="text-2xl font-semibold mb-6">Let's Build Something Amazing</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always excited to work on new projects and collaborate with 
              talented teams. Whether you need a robust API, scalable backend 
              architecture, or technical consultation, I'd love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 magnetic-hover">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-muted-foreground">alex@example.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4 magnetic-hover">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Github className="text-secondary" size={20} />
                </div>
                <div>
                  <div className="font-medium">GitHub</div>
                  <div className="text-muted-foreground">github.com/alexjohnson</div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="glass p-8 scroll-reveal">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 w-full min-h-[120px] px-3 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full magnetic-hover bg-primary hover:bg-primary/90"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
