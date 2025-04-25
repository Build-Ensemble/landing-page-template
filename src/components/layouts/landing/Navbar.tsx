import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

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
  // {
  //   href: '/pricing',
  //   label: 'Pricing',
  // }
  
];

export const Navbar = ({
  className,
  login,
  signUp,
  pricing,
  hideAll,
}: {
  className?: string;
  login: () => void;
  signUp: () => void;
  pricing: () => void;
  hideAll?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();

  const clientPortal = () => {
    window.location.href = `https://app.findre.co?lang=${language}`;
  };

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
    <div className={cn('w-full', className)}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <a href={`/?lang=${language}`} className="flex items-center gap-2 font-medium">
            <div className="flex size-10 items-center justify-center">
              <Icons.logo />
            </div>
            Findre
          </a>
        </div>

        {!hideAll && (
          <div className="flex items-center gap-2">
            {/* Desktop Buttons (hidden on mobile) */}
            <div className="hidden sm:flex items-center gap-2">
              <LanguageSwitcher />
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
                    <a href={`/#features?lang=${language}`}>Features</a>
                    <a href={`/#faq?lang=${language}`}>FAQ</a>
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
    </div>
  );
};
