import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: '/#features',
    label: 'Features',
  },
  {
    href: '/#faq',
    label: 'FAQ',
  },
  {
    href: '/pricing',
    label: 'Pricing',
  }
  
];

export const Navbar = ({
  className,
  login,
  signUp,
  pricing,
  getDemo,
  clientPortal,
  hideAll = false,
}: {
  className?: string;
  login?: () => void;
  signUp?: () => void;
  getDemo?: () => void;
  pricing?: () => void; 
  clientPortal?: () => void;
  hideAll: boolean;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleNavigation = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      document
        .getElementById(href.substring(2))
        ?.scrollIntoView({ behavior: 'smooth' });
    } else if (href === '/pricing' && pricing) {
      pricing();
    }
  };

  return (
    <div
      className={cn('flex justify-between items-center p-4 w-full', className)}
    >
      <div className="flex items-center">
        <a href="/">
          <div className="flex items-center gap-2">
            <div className="flex aspect-square size-6 items-center justify-center">
              <Icons.logo />
            </div>
            <span className="text-base font-semibold">Ensemble</span>
          </div>
        </a>
        {!hideAll && (
          <nav className="ml-6">
            <ul className="hidden md:flex gap-4">
              {routeList.map((route) => (
                <li key={route.label}>
                  <a
                    className="hover:underline text-sm"
                    onClick={() => handleNavigation(route.href)} 

                  >
                    {route.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
      {!hideAll && (
        <div className="flex items-center gap-2">
          {/* Desktop Buttons (hidden on mobile) */}
          

          <div className="hidden sm:flex items-center gap-2">
            <Button variant="outline" onClick={login}>
              Log in
            </Button>
            <Button variant="default" onClick={signUp}>
              Sign up
            </Button>
          </div>

          {/* Mobile Menu Button (hidden on desktop) */}
          <Button
            variant="ghost"
            className="sm:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </Button>
          {isOpen && (
            <div className="absolute top-16 right-0 w-48 bg-white shadow-lg rounded-lg p-4">
              <ul className="flex flex-col gap-2">
                <Button
                  variant="ghost"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <a href="/#features">Features</a>
                  <a href="/#faq">FAQ</a>

                </Button>
                <Button variant="outline" onClick={login}>
                  Log in
                </Button>
                <Button variant="default" onClick={signUp}>
                  Sign up
                </Button>
                <Separator />
                <Button variant="default" onClick={clientPortal}>
                  Client Portal
                </Button>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
