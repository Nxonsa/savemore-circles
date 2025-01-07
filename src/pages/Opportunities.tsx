import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Opportunities = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    skills: "",
    experience: "",
    education: "",
    portfolio: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to generate a one-page CV
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Opportunities</h1>
        <p className="text-muted-foreground">Create your professional one-page CV</p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>CV Generator</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="fullName">Full Name</label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="phone">Phone Number</label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="skills">Skills</label>
              <Textarea
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="List your key skills..."
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="experience">Work Experience</label>
              <Textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Describe your work experience..."
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="education">Education</label>
              <Textarea
                id="education"
                name="education"
                value={formData.education}
                onChange={handleChange}
                placeholder="List your educational background..."
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="portfolio">Portfolio URL (optional)</label>
              <Input
                id="portfolio"
                name="portfolio"
                type="url"
                value={formData.portfolio}
                onChange={handleChange}
                placeholder="https://..."
              />
            </div>

            <Button type="submit" className="w-full">Generate CV</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Opportunities;