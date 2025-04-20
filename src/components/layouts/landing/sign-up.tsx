import { Button } from '@/components/ui/button';
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import  GoogleAuthService  from "@/services/gmail";

const SignUp = ({ className }: { className?: string }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
      
      setSuccess(true);
    } catch (err: any) {
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
            See Ensemble in action
          </CardTitle>
          <CardDescription className="text-center">
            We'd love to show you how Ensemble can transform your accounting
            firm.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <Input
              type="email"
              placeholder="Company email"
              value={email}
              onChange={handleEmailChange}
            />
            <Button type="submit">Get Started</Button>
          </form>
          {success && (
            <p className="text-green-500">
              Registered successfully, we will be in touch soon!
            </p>
          )}
          {error && <p className="text-red-500">{error}</p>}
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
