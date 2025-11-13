import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  EnvelopeSimple,
  Phone,
  User,
  CalendarBlank,
  ChatCircleDots,
  CheckCircle,
  Warning,
  WhatsappLogo
} from "@phosphor-icons/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

const Contact = () => {
  const { t, language } = useLanguage();
  const [selectedDateTime, setSelectedDateTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    subject?: string;
    message?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const isEnglish = language === 'en';

  const maxMessageLength = 500;

  // Format phone number as user types
  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 5) return `${numbers.slice(0, 3)} ${numbers.slice(3)}`;
    if (numbers.length <= 8) return `${numbers.slice(0, 3)} ${numbers.slice(3, 5)} ${numbers.slice(5)}`;
    return `${numbers.slice(0, 3)} ${numbers.slice(3, 5)} ${numbers.slice(5, 8)} ${numbers.slice(8, 12)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: {
      name?: string;
      email?: string;
      phone?: string;
      subject?: string;
      message?: string;
    } = {};

    if (!email.trim()) {
      newErrors.email = isEnglish ? "Email is required" : "Sähköposti vaaditaan";
    } else if (!validateEmail(email)) {
      newErrors.email = isEnglish ? "Please enter a valid email" : "Syötä kelvollinen sähköpostiosoite";
    }

    if (!subject) {
      newErrors.subject = isEnglish ? "Subject is required" : "Aihe vaaditaan";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear errors
    setErrors({});
    setIsSubmitting(true);

    // Submit to Web3Forms
    try {
      // Get subject label from value
      const subjectLabel = subjectOptions.find(opt => opt.value === subject)?.label || subject;

      // Prepare form data
      const formData = new FormData();
      formData.append('access_key', '2836fb7b-e299-46ac-bceb-bfdf2fac41bd');
      formData.append('to', 'funectapp@gmail.com');
      formData.append('name', name || 'Not provided');
      formData.append('email', email);
      formData.append('phone', phone || 'Not provided');
      formData.append('subject', subjectLabel);
      formData.append('message', message || 'No message');
      formData.append('preferred_datetime', selectedDateTime || 'Not specified');
      formData.append('from_name', 'Golfbooker Contact Form');

      // Submit to Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');

        // Reset form after success
        setTimeout(() => {
          setName("");
          setEmail("");
          setPhone("");
          setSubject("");
          setMessage("");
          setSelectedDateTime("");
          setSubmitStatus('idle');
        }, 3000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const subjectOptions = isEnglish
    ? [
        { value: "general", label: "General Inquiry" },
        { value: "demo", label: "Request Demo" },
        { value: "partnership", label: "Partnership Opportunity" },
        { value: "support", label: "Technical Support" },
        { value: "pricing", label: "Pricing Information" },
        { value: "other", label: "Other" },
      ]
    : [
        { value: "general", label: "Yleinen kysely" },
        { value: "demo", label: "Pyydä esittely" },
        { value: "partnership", label: "Yhteistyömahdollisuus" },
        { value: "support", label: "Tekninen tuki" },
        { value: "pricing", label: "Hintatiedot" },
        { value: "other", label: "Muu" },
      ];

  return (
    <div className="relative min-h-screen bg-background">
      {/* Animated Fluid Background with Glassmorphism */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Overlay at top for text readability - adapts to theme */}
        <div className="absolute top-0 left-0 right-0 h-[500px] z-10 bg-gradient-to-b from-background/95 via-background/70 to-background/30" />

        {/* Large Primary Blob - Top Right (pushed down) */}
        <div
          className="gradient-blob-1 absolute top-32 -right-32 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 180, 216, 0.15), rgba(72, 202, 228, 0.12), rgba(144, 224, 239, 0.1))',
            filter: 'blur(60px)',
          }}
        />

        {/* Large Secondary Blob - Left Center */}
        <div
          className="gradient-blob-2 absolute top-1/3 -left-64 w-[900px] h-[900px] rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 206, 209, 0.15), rgba(64, 224, 208, 0.12), rgba(127, 255, 212, 0.1))',
            filter: 'blur(65px)',
          }}
        />

        {/* Extra Large Bottom Blob */}
        <div
          className="gradient-blob-3 absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full"
          style={{
            background: 'linear-gradient(135deg, rgba(32, 178, 170, 0.15), rgba(72, 209, 204, 0.12), rgba(175, 238, 238, 0.1))',
            filter: 'blur(70px)',
          }}
        />

        {/* Medium Accent Blob - Upper Left (reduced) */}
        <div
          className="gradient-blob-drift absolute top-64 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 191, 255, 0.12), rgba(135, 206, 250, 0.1), rgba(176, 224, 230, 0.08))',
            filter: 'blur(55px)',
            animationDelay: '5s',
          }}
        />

        {/* Medium Teal Blob - Right Center */}
        <div
          className="gradient-blob-1 absolute top-1/2 right-1/4 w-[650px] h-[650px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(0, 139, 139, 0.12), rgba(72, 209, 204, 0.1), rgba(175, 238, 238, 0.08))',
            filter: 'blur(58px)',
            animationDelay: '10s',
          }}
        />

        {/* Small Accent Blob - Bottom Right */}
        <div
          className="gradient-blob-drift absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(64, 224, 208, 0.12), rgba(127, 255, 212, 0.1), rgba(175, 238, 238, 0.08))',
            filter: 'blur(52px)',
            animationDelay: '15s',
          }}
        />
      </div>

      <div className="relative z-10">
        <Navigation />

      <main className="pt-16 pb-0">
        {/* Header Section */}
        <section className="py-8 md:py-12 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              {t('contact.title')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </div>
        </section>

        {/* Form Section */}
        <section className="py-4 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card className="glass p-5 relative overflow-hidden">
                <div className="mb-4">
                  <h2 className="text-2xl font-semibold">{t('contact.formTitle')}</h2>
                </div>

                {/* Success/Error Messages */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
                    >
                      <CheckCircle size={24} weight="fill" className="text-green-600" />
                      <p className="text-green-800">
                        {isEnglish
                          ? "Thank you! We'll get back to you soon."
                          : "Kiitos! Palaamme asiaan pian."}
                      </p>
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3"
                    >
                      <Warning size={24} weight="fill" className="text-red-600" />
                      <p className="text-red-800">
                        {isEnglish
                          ? "Something went wrong. Please try again."
                          : "Jokin meni pieleen. Yritä uudelleen."}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form className="space-y-3" onSubmit={handleSubmit}>
                  {/* Name Field */}
                  <div>
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User size={16} weight="light" />
                      {isEnglish ? "Name" : "Nimi"}
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={isEnglish ? "Your full name" : "Koko nimesi"}
                      className={`mt-1 ${errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <EnvelopeSimple size={16} weight="light" />
                      {t('contact.email')} <span className="text-foreground">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t('contact.emailPlaceholder')}
                      className={`mt-1 ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone size={16} weight="light" />
                      {isEnglish ? "Phone" : "Puhelin"} <span className="text-muted-foreground/60 text-xs ml-1">({isEnglish ? "optional" : "valinnainen"})</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={handlePhoneChange}
                      placeholder={isEnglish ? "+358 XX XXX XXXX" : "+358 XX XXX XXXX"}
                      className="mt-1"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {/* Date & Time Field */}
                    <div>
                      <Label htmlFor="datetime" className="flex items-center gap-2">
                        <CalendarBlank size={16} weight="light" />
                        {isEnglish ? "Preferred Date & Time" : "Toivottu ajankohta"}
                        <span className="text-muted-foreground/60 text-xs ml-1">({isEnglish ? "optional" : "valinnainen"})</span>
                      </Label>
                      <Input
                        id="datetime"
                        type="datetime-local"
                        step="300"
                        value={selectedDateTime}
                        onChange={(e) => setSelectedDateTime(e.target.value)}
                        className="mt-1"
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Subject Field */}
                    <div>
                      <Label htmlFor="subject" className="flex items-center gap-2">
                        <ChatCircleDots size={16} weight="light" />
                        {t('contact.subject')} <span className="text-foreground">*</span>
                      </Label>
                      <Select value={subject} onValueChange={setSubject} disabled={isSubmitting}>
                        <SelectTrigger className={`mt-1 ${errors.subject ? 'border-red-500' : ''}`}>
                          <SelectValue placeholder={isEnglish ? "Select a topic" : "Valitse aihe"} />
                        </SelectTrigger>
                        <SelectContent>
                          {subjectOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.subject && (
                        <p className="text-sm text-red-500 mt-1">{errors.subject}</p>
                      )}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <div className="flex justify-between items-center">
                      <Label htmlFor="message" className="flex items-center gap-2">
                        <ChatCircleDots size={16} weight="light" />
                        {t('contact.message')}
                      </Label>
                      <span className={`text-xs ${message.length > maxMessageLength ? 'text-red-500' : 'text-muted-foreground'}`}>
                        {message.length}/{maxMessageLength}
                      </span>
                    </div>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => {
                        if (e.target.value.length <= maxMessageLength) {
                          setMessage(e.target.value);
                        }
                      }}
                      placeholder={t('contact.messagePlaceholder')}
                      className={`mt-1 min-h-[100px] ${errors.message ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full neumorphic glow-hover relative"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        />
                        {isEnglish ? "Sending..." : "Lähetetään..."}
                      </span>
                    ) : (
                      t('contact.send')
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Information Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3 lg:mt-0 mt-4 lg:border-0 border-t border-border/50 lg:pt-0 pt-4"
            >
              {/* Phone Card */}
              <Card className="glass p-4 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={24} weight="light" className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{t('contact.phoneLabel')}</h3>

                    {/* Sales Number */}
                    <div className="mb-3">
                      <p className="text-xs font-medium text-muted-foreground mb-1">
                        {isEnglish ? "Sales" : "Myynti"}
                      </p>
                      <a href="tel:+358407377397" className="text-primary hover:underline block">
                        +358 40 737 7397
                      </a>
                    </div>

                    {/* Technical Support Number */}
                    <div className="mb-2">
                      <p className="text-xs font-medium text-muted-foreground mb-1">
                        {isEnglish ? "Technical Support" : "Tekninen tuki"}
                      </p>
                      <a href="tel:+358440582663" className="text-primary hover:underline block">
                        +358 44 058 2663
                      </a>
                    </div>

                    <p className="text-sm text-muted-foreground mb-2">{t('contact.phoneHours')}</p>
                    <a
                      href="https://wa.me/358407377397"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-lg transition-colors duration-300 text-sm font-medium"
                    >
                      <WhatsappLogo size={20} weight="fill" />
                      {isEnglish ? "Message on WhatsApp" : "Viesti WhatsAppissa"}
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
        </section>
      </main>

      <Footer />
      </div>
    </div>
  );
};

export default Contact;
