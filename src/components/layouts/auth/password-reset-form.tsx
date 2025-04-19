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
import { useAuth } from '@/app/admin/context/auth-context';

export function PasswordResetForm({
  onPasswordReset,
  onSendResetLink,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  onPasswordReset: (newPassword: string) => Promise<void>;
  onSendResetLink: (email: string) => Promise<void>;
}) {
  const { user } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSendResetLink = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    try {
      await onSendResetLink(email);
      setErrorMessage(null);
      setSuccessMessage(
        'If an activated account exists for that email, a reset link has been sent.',
      );
    } catch (error: any) {
      setErrorMessage(error.message);
      setSuccessMessage(null);
    }
  };

  const handlePasswordReset = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    try {
      await onPasswordReset(password);
      setErrorMessage(null);
      setSuccessMessage('Password has been reset successfully.');
    } catch (error: any) {
      setErrorMessage(error.message);
      setSuccessMessage(null);
    }
  };

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Reset Password</CardTitle>
          <CardDescription>
            {user
              ? 'Enter your new password below to reset your password'
              : 'Enter your email below to receive a password reset link'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={user ? handlePasswordReset : handleSendResetLink}>
            <div className="flex flex-col gap-6">
              {user ? (
                <>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={user.email}
                      readOnly
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">New Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter your new password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </>
              ) : (
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@cpafirm.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              )}
              <Button type="submit" className="w-full">
                {user ? 'Reset Password' : 'Send Reset Link'}
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
