'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Rating } from "@/components/layouts/landing/rating"

const avatars = [
  { 
    src: "/public/lovable-uploads/c31431e0-bcfc-4039-a271-e2d436830d6a.png", 
    alt: "Avatar 1", 
    fallback: "A1" 
  },
  { 
    src: "/public/lovable-uploads/c31431e0-bcfc-4039-a271-e2d436830d6a.png", 
    alt: "Avatar 2", 
    fallback: "A2" 
  },
  { 
    src: "/public/lovable-uploads/c31431e0-bcfc-4039-a271-e2d436830d6a.png", 
    alt: "Avatar 3", 
    fallback: "A3" 
  }
]

export const Cta = ({
  className,
  signUp,
}: {
  className: string;
  signUp: () => void;
}) => {
  const router = useRouter();
  return (
    <section className="relative pt-20 md:pt-60 pb-32 overflow-visible bg-gradient-to-b from-accent to-white background">
      <Card className={cn('container', className)}>
        <CardHeader>
          <CardTitle></CardTitle>
        </CardHeader>
        {/* <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-circle"></div> */}
        <CardContent>
          <div className="lg:col-start-1">
            <h2 className="text-3xl md:text-4xl font-bold ">
              Your
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                {` `}COMPLETE {` `}
              </span>
              accounting practice, in one place
            </h2>
            <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
              Let us customize your experience
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <div className="space-y-4 lg:col-start-2">
           
            <Button
              variant="outline"
              className="w-full md:w-auto"
              onClick={signUp}
            >
              Sign up for free
            </Button>
          </div>

        </CardFooter>
      </Card>
    </section>
  );
};
