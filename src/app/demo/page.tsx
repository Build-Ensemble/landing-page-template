'use client';

import DemoPage from '@/components/layouts/landing/demo';
import '@/app/globals.css';
import { Navbar } from '@/components/layouts/landing/Navbar';

export default function Demo() {
  return (
    <div className="flex flex-col items-center justify-center h-screen background">
      <div className="h-screen max-w-screen-xl mx-auto ">
        <Navbar hideAll={true} />
        <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md py-20 overflow-auto my-auto">
          <DemoPage />
        </div>
      </div>
    </div>
  );
}
