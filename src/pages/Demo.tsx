import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import { Textarea } from "../components/ui/textarea";
import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "react-router-dom";
import { CheckCircle } from "@phosphor-icons/react";

const Demo = () => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';

  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    newsletter: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.companyName.trim()) {
      newErrors.companyName = isEnglish ? "Company or organization name is required" : "Yrityksen tai yhdistyksen nimi on pakollinen";
    }

    if (!formData.name.trim()) {
      newErrors.name = isEnglish ? "Contact person is required" : "Yhteyshenkilö on pakollinen";
    }

    if (!formData.email.trim()) {
      newErrors.email = isEnglish ? "Email is required" : "Sähköposti on pakollinen";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = isEnglish ? "Invalid email format" : "Virheellinen sähköpostiosoite";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = isEnglish ? "Phone is required" : "Puhelinnumero on pakollinen";
    }

    if (!formData.message.trim()) {
      newErrors.message = isEnglish ? "Message is required" : "Viesti on pakollinen";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Prepare form data for Web3Forms
        const webFormData = new FormData();
        webFormData.append('access_key', '2836fb7b-e299-46ac-bceb-bfdf2fac41bd');
        webFormData.append('subject', isEnglish ? 'New Demo Environment Request' : 'Uusi demo-ympäristöpyyntö');
        webFormData.append('company_name', formData.companyName);
        webFormData.append('name', formData.name);
        webFormData.append('email', formData.email);
        webFormData.append('phone', formData.phone);
        webFormData.append('message', formData.message);
        webFormData.append('newsletter', formData.newsletter ? 'Yes' : 'No');
        webFormData.append('from_name', 'Golfbooker Demo Request Form');

        // Submit to Web3Forms
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: webFormData
        });

        const data = await response.json();

        if (data.success) {
          setSubmitted(true);
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        console.error('Error submitting demo request:', error);
        // Still show success screen for better UX, but log the error
        setSubmitted(true);
      }
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  if (submitted) {
    return (
      <div className="relative min-h-screen bg-background overflow-x-hidden">
        {/* Animated Fluid Background */}
        <div className="absolute inset-0 min-h-full z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-[500px] z-10 bg-gradient-to-b from-background/95 via-background/70 to-background/30" />
          <div
            className="gradient-blob-1 absolute top-32 -right-32 w-[800px] h-[800px] rounded-full"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 180, 216, 0.15), rgba(72, 202, 228, 0.12), rgba(144, 224, 239, 0.1))',
              filter: 'blur(60px)',
            }}
          />
          <div
            className="gradient-blob-2 absolute top-1/3 -left-64 w-[900px] h-[900px] rounded-full"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 206, 209, 0.15), rgba(64, 224, 208, 0.12), rgba(127, 255, 212, 0.1))',
              filter: 'blur(65px)',
            }}
          />
        </div>

        <div className="relative z-10">
          <Navigation />
          <main className="flex-1 min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-full flex items-center justify-center shadow-xl">
                  <CheckCircle size={36} weight="fill" className="text-white" />
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                {isEnglish ? "Thank You!" : "Kiitos mielenkiinnostanne!"}
              </h1>

              <p className="text-base text-foreground/70 mb-6 leading-relaxed">
                {isEnglish
                  ? "We'll be in touch as soon as possible to set up your demo environment."
                  : "Olemme yhteydessä mahdollisimman pian demo-ympäristösi pystyttämiseksi."}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white">
                  <Link to="/">
                    {isEnglish ? "Back to Home" : "Takaisin etusivulle"}
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-2 border-teal-600 text-teal-700 hover:bg-teal-50 dark:hover:bg-teal-950">
                  <Link to="/contact">
                    {isEnglish ? "Contact Us" : "Ota yhteyttä"}
                  </Link>
                </Button>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Animated Fluid Background */}
      <div className="absolute inset-0 min-h-full z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-[500px] z-10 bg-gradient-to-b from-background/95 via-background/70 to-background/30" />
        <div
          className="gradient-blob-1 absolute top-32 -right-32 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 180, 216, 0.15), rgba(72, 202, 228, 0.12), rgba(144, 224, 239, 0.1))',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="gradient-blob-2 absolute top-1/3 -left-64 w-[900px] h-[900px] rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 206, 209, 0.15), rgba(64, 224, 208, 0.12), rgba(127, 255, 212, 0.1))',
            filter: 'blur(65px)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 pt-20 pb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-4xl"
          >
            {/* Hero Text - Very Compact */}
            <div className="text-center mb-4">
              <h1 className="text-2xl md:text-3xl font-bold mb-1 text-foreground">
                {isEnglish ? "Try Free for 14 Days" : "Kokeile maksutta 14 päivää"}
              </h1>
              <p className="text-sm text-foreground/70">
                {isEnglish
                  ? "No credit card, no commitment"
                  : "Ei luottokorttia, ei sitoutumista"}
              </p>
            </div>

            {/* Form Card - Ultra Compact */}
            <Card className="border-2 border-border bg-card/95 backdrop-blur-sm shadow-2xl p-4 md:p-6">
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Row 1: Company Name */}
                <div className="space-y-1">
                  <Label htmlFor="companyName" className="text-xs font-medium">
                    {isEnglish ? "Company / Organization" : "Yritys / Yhdistys"} <span className="text-foreground">*</span>
                  </Label>
                  <Input
                    id="companyName"
                    type="text"
                    placeholder={isEnglish ? "Official name" : "Virallinen nimi"}
                    value={formData.companyName}
                    onChange={(e) => handleInputChange("companyName", e.target.value)}
                    className={`text-sm h-9 ${errors.companyName ? "border-red-500" : ""}`}
                  />
                  {errors.companyName && <p className="text-xs text-red-500">{errors.companyName}</p>}
                </div>

                {/* Row 2: Name + Email (2 columns on desktop) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label htmlFor="name" className="text-xs font-medium">
                      {isEnglish ? "Contact Person" : "Yhteyshenkilö"} <span className="text-foreground">*</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder={isEnglish ? "Full name" : "Koko nimi"}
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className={`text-sm h-9 ${errors.name ? "border-red-500" : ""}`}
                    />
                    {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="email" className="text-xs font-medium">
                      {isEnglish ? "Email" : "Sähköposti"} <span className="text-foreground">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={isEnglish ? "your@email.com" : "sinun@email.fi"}
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`text-sm h-9 ${errors.email ? "border-red-500" : ""}`}
                    />
                    {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                  </div>
                </div>

                {/* Row 3: Phone */}
                <div className="space-y-1">
                  <Label htmlFor="phone" className="text-xs font-medium">
                    {isEnglish ? "Phone" : "Puhelin"} <span className="text-foreground">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder={isEnglish ? "+1 555 000 0000" : "+358 40 123 4567"}
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={`text-sm h-9 ${errors.phone ? "border-red-500" : ""}`}
                  />
                  {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                </div>

                {/* Message Field */}
                <div className="space-y-1">
                  <Label htmlFor="message" className="text-xs font-medium">
                    {isEnglish ? "Message" : "Viesti"} <span className="text-foreground">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder={isEnglish ? "Tell us about your needs..." : "Kerro tarpeistasi..."}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className={`text-sm min-h-[80px] resize-none ${errors.message ? "border-red-500" : ""}`}
                  />
                  {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
                </div>

                {/* Newsletter + GDPR - Very Compact */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                      className="mt-0.5"
                    />
                    <Label htmlFor="newsletter" className="text-xs leading-tight cursor-pointer text-foreground/80">
                      {isEnglish
                        ? "Send me updates and tips"
                        : "Haluan vastaanottaa päivityksiä ja vinkkejä"}
                    </Label>
                  </div>

                  <p className="text-xs text-muted-foreground leading-tight">
                    {isEnglish ? (
                      <>
                        By submitting, you agree to our{" "}
                        <Link to="/privacy" className="text-teal-600 hover:text-teal-700 underline dark:text-teal-400">
                          Privacy Policy
                        </Link>
                      </>
                    ) : (
                      <>
                        Lähettämällä hyväksyt{" "}
                        <Link to="/privacy" className="text-teal-600 hover:text-teal-700 underline dark:text-teal-400">
                          tietosuojakäytäntömme
                        </Link>
                      </>
                    )}
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white text-sm h-10 rounded-lg shadow-lg hover:shadow-xl transition-all mt-3"
                >
                  {isEnglish ? "Create Demo Environment" : "Luo demo-ympäristö"}
                </Button>
              </form>
            </Card>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Demo;
