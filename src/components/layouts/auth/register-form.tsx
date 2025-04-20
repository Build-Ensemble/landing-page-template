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
import Link from 'next/link';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

export function RegisterForm({
  onRegister,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  onRegister: (
    email: string,
    fullName: string,
    password: string,
    company: string,
    phoneNumber: string,
  ) => Promise<void>;
}) {
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const fullName = (formData.get('fullName') as string) || email;
    const phoneNumber = (formData.get('phoneNumber') as string) || '';
    const password = 'SecurePassword123!';
    const company = formData.get('organizationName') as string;
    if (onRegister) {
      try {
        setIsLoading(true);
        await onRegister(email, fullName, password, company, phoneNumber);
        setErrorMessage('');
        setIsLoading(false);
        router.push('/sign-up');
      } catch (error: any) {
        console.log(error);
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Register</CardTitle>
          <CardDescription>
            Enter your email below to register to your account
          </CardDescription>
          <div className="mt-4 text-left text-sm">
            Already have an account?{' '}
            <Link href="/login" className="underline underline-offset-4">
              Login
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} ref={formRef}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="organizationName">Company Name *</Label>
                <Input
                  id="organizationName"
                  name="organizationName"
                  type="string"
                  placeholder="Acme Inc."
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="fullName">Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="string"
                  placeholder="John Doe"
                />
              </div>
              {/* <div className="grid gap-2">
                <Label htmlFor="password">Password *</Label>
               <Input id="password" name="password" type="password" required/>
              </div> */}
              <Button type="submit" className="w-full" disabled={isLoading}>
                Register
              </Button>
            </div>

            <p className="p-4 text-center text-sm text-muted-foreground">
              By clicking register, you agree to our{' '}
              <Link
                href="/terms"
                className="hover:text-brand underline underline-offset-4"
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                href="/privacy"
                className="hover:text-brand underline underline-offset-4"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center gap-2">
          <p className="text-sm text-red-500">
            {errorMessage ? errorMessage : ''}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
