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

const SignUp = ({ className }: { className?: string }) => {
  const router = useRouter();
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
      errors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      errors.email = 'Please enter a valid email address';
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
        throw new Error('Server returned an invalid response');
      }

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
      
      // Redirect to success page after successful submission
      router.push('/sign-up/success');
    } catch (err: any) {
      setError(err.message || 'Failed to submit form. Please try again.');
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
            See Findre in action
          </CardTitle>
          <CardDescription className="text-center">
            We'd love to show you how Findre's can help you find off-market deals before anyone else.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label>Company email</Label>
              <Input
                type="email"
                placeholder="John@Doe.com"
                value={email}
                onChange={handleEmailChange}
                className={validationErrors.email ? 'border-red-500' : ''}
              />
              {validationErrors.email && (
                <p className="text-sm text-red-500">{validationErrors.email}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label>Phone number</Label>
              <Input
                type="tel"
                placeholder="(123) 456-7890"
                value={phone}
                onChange={handlePhoneChange}
                className={validationErrors.phone ? 'border-red-500' : ''}
              />
              {validationErrors.phone && (
                <p className="text-sm text-red-500">{validationErrors.phone}</p>
              )}
            </div>
            
            <div className="flex flex-col gap-2">
              <Label>Desired Property Size</Label>
              <Select 
                defaultValue="8+"
                onValueChange={setPropertySize}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select property size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="8+">8+ units</SelectItem>
                  <SelectItem value="20+">20+ units</SelectItem>
                  <SelectItem value="50+">50+ units</SelectItem>
                  <SelectItem value="100+">100+ units</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-2">
              <Label>Target Location</Label>
              <Input
                type="text"
                placeholder="e.g., Westmount, Brossard, Laval, ..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className={validationErrors.location ? 'border-red-500' : ''}
              />
              {validationErrors.location && (
                <p className="text-sm text-red-500">{validationErrors.location}</p>
              )}
              <p className="text-sm text-gray-500">Enter city and state, or specific neighborhood</p>
            </div>

            <div className="flex flex-col gap-2">
              <Label>Additional Details (Optional)</Label>
              <Textarea
                placeholder="Tell us more about your property search criteria."
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />
            </div>

            <Button type="submit" disabled={loading} className="mt-4">
              {loading ? 'Submitting...' : 'Get Started'}
            </Button>
          </form>
          {error && <p className="text-red-500">{error}</p>}
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
