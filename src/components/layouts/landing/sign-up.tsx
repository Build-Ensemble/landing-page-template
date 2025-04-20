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
// import { AuthenticationApi } from '@/services/services/authentication-api';

const SignUp = ({ className }: { className?: string }) => {
  // const authenticationApi = new AuthenticationApi();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // authenticationApi
    //   .sendEmail({
    //     emailBody: 'new registration on Ensemble: ' + email,
    //     subject: 'New registration on Ensemble',
    //     recipient: 'admin@ensemble-technologies.com',
    //     sender: 'admin@tryensemble.com',
    //   })
    //   .then((res: any) => {
    //     console.log(res);
    //     setSuccess(true);
    //   })
    //   .catch((err: any) => {
    //     setError(err.message);
    //   });
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
