import { Button } from '@/components/ui/button';
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectItem, SelectTrigger, SelectContent, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getTranslations } from '@/lib/i18n';
import { useLanguage } from '@/contexts/LanguageContext';

const SignUp = ({ className }: { className?: string }) => {
  const router = useRouter();
  const { language } = useLanguage();
  const t = getTranslations(language).auth.signup;
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [propertySize, setPropertySize] = useState('8+');
  const [location, setLocation] = useState('');
  const [details, setDetails] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState<{
    email?: string;
    phone?: string;
    location?: string;
  }>({});

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const errors: { email?: string; phone?: string; location?: string } = {};

    if (!email) {
      errors.email = t.emailRequired;
    } else if (!validateEmail(email)) {
      errors.email = t.invalidEmail;
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (validationErrors.email) {
      setValidationErrors(prev => ({ ...prev, email: undefined }));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    if (validationErrors.phone) {
      setValidationErrors(prev => ({ ...prev, phone: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          phone,
          propertySize,
          location,
          details,
          timestamp: new Date().toISOString()
        }),
      });
      
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error(t.invalidResponse);
      }

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || t.somethingWentWrong);
      }
      
      // Redirect to success page after successful submission
      router.push('/sign-up/success');
    } catch (err: any) {
      setError(err.message || t.submitError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={cn(
        'background flex flex-col items-center justify-center',
        className,
      )}
    >
      <Card className="w-full max-w-xl mx-auto py-10">
        <CardHeader className="flex flex-col gap-2 mb-4">
          <CardTitle className="text-5xl font-semibold text-center">
            {t.seeInAction}
          </CardTitle>
          <CardDescription className="text-center">
            {t.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label>{t.email}</Label>
              <Input
                type="email"
                placeholder={t.emailPlaceholder}
                value={email}
                onChange={handleEmailChange}
                className={validationErrors.email ? 'border-red-500' : ''}
              />
              {validationErrors.email && (
                <p className="text-sm text-red-500">{validationErrors.email}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label>{t.phone}</Label>
              <Input
                type="tel"
                placeholder={t.phonePlaceholder}
                value={phone}
                onChange={handlePhoneChange}
                className={validationErrors.phone ? 'border-red-500' : ''}
              />
              {validationErrors.phone && (
                <p className="text-sm text-red-500">{validationErrors.phone}</p>
              )}
            </div>
            
            <div className="flex flex-col gap-2">
              <Label>{t.propertySize}</Label>
              <Select 
                defaultValue="8+"
                onValueChange={setPropertySize}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t.selectPropertySize} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="8+">{t.propertySize8}</SelectItem>
                  <SelectItem value="20+">{t.propertySize20}</SelectItem>
                  <SelectItem value="50+">{t.propertySize50}</SelectItem>
                  <SelectItem value="100+">{t.propertySize100}</SelectItem>
                  <SelectItem value="other">{t.propertySizeOther}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <Label>{t.location}</Label>
              <Input
                type="text"
                placeholder={t.locationPlaceholder}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className={validationErrors.location ? 'border-red-500' : ''}
              />
              {validationErrors.location && (
                <p className="text-sm text-red-500">{validationErrors.location}</p>
              )}
              <p className="text-sm text-gray-500">{t.locationHelp}</p>
            </div>

            <div className="flex flex-col gap-2">
              <Label>{t.additionalDetails}</Label>
              <Textarea
                placeholder={t.detailsPlaceholder}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />
            </div>

            <Button type="submit" disabled={loading} className="mt-4">
              {loading ? t.submitting : t.getStarted}
            </Button>
          </form>
          {error && <p className="text-red-500">{error}</p>}
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
