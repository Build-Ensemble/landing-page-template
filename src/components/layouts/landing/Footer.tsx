import { Icons } from '@/components/icons';
import { Linkedin, Twitter } from 'lucide-react';
export const Footer = ({ className }: { className?: string }) => {
  return (
    <footer id="footer" className={className}>
      <hr className="w-11/12 mx-auto" />

      <section className="container py-8 border-t border-gray-200 mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8 ">
          <div className="col-span-full xl:col-span-2 flex items-center gap-3 mb-6 xl:mb-0 size-10">
            <Icons.logo className="h-10 w-auto" />
            <a
              rel="noreferrer noopener"
              href="/"
              className="font-bold text-2xl text-primary hover:opacity-90 transition-opacity"
            >
              Findre
            </a>
          </div>

          <div className="hidden xl:block xl:col-span-2"></div>

          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg mb-2">Connect With Us</h3>
            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/company/goFindre/"
              target="_blank"
              className="opacity-70 hover:opacity-100 transition-opacity flex items-center gap-2 text-sm hover:text-primary"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg mb-2">Company</h3>

            <a
              href="mailto:hello@findre.co?subject=Findre%20inquiry"
              className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-opacity"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-8 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Findre. All rights reserved.
        </p>
      </section>
    </footer>
  );
};
