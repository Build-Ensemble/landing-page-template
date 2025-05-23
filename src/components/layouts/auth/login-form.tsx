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
import { useState } from 'react';

export function LoginForm({
  onLogin,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  onLogin: (email: string, password: string) => Promise<void>;
}) {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    try {
      await onLogin(email, password);
      
      // error by default remove when adding login
      setErrorMessage("Account not found. Please sign up.");
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{' '}
              <Link
                href="/sign-up"
                className="underline underline-offset-4"
              >
                Sign up
              </Link>
            </div>
            {/* <div className="mt-4 text-center text-sm">
              Forgot your password?{' '}
              <Link
                href="/reset-password"
                className="underline underline-offset-4"
              >
                Reset it here
              </Link>
            </div> */}
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center gap-4">
          <p className="text-sm text-red-500">
            {errorMessage ? errorMessage : ''}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
