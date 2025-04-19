'use client';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import supabase from '@/lib/supabaseClient';
import Link from 'next/link';

export function MagicLinkForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMagicLink = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      console.log(
        'sending magic link with redirect to',
        `${process.env.NEXT_PUBLIC_BASE_URL}client`,
      );
      const { error } = await supabase.auth.signInWithOtp({
        email: email,
        options: {
          emailRedirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}client`,
          data: {
            initializedPassword: true,
          },
        },
      });
      if (error) {
        throw new Error(error.message);
      }
      setErrorMessage(null);
      setSuccessMessage(`A magic link has been sent to ${email}.`);
    } catch (error: any) {
      setErrorMessage(error.message);
      setSuccessMessage(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Sign in with email</CardTitle>
          <CardDescription>
            test Enter your email below to receive a magic link to sign in to
            your portal.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSendMagicLink}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send Magic Link'}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center gap-4">
          <p className="text-sm text-red-500">
            {errorMessage ? errorMessage : ''}
          </p>
          <p className="text-sm text-green-500">
            {successMessage ? successMessage : ''}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
