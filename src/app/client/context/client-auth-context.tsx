'use client';

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';
import supabase from '@/lib/supabaseClient';
import { redirect, usePathname, useRouter } from 'next/navigation';

interface ClientAuthContextType {
  clientEmail: string | null;
  getMagicLink: (email: string) => Promise<void>;
  logout: () => Promise<void>;
}

const ClientAuthContext = createContext<ClientAuthContextType | undefined>(
  undefined,
);

export const ClientAuthProvider = ({ children }: { children: ReactNode }) => {
  const [clientEmail, setClientEmail] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const getClientEmail = async () => {
      const { data, error } = await supabase.auth.getUser();
      const role = data.user?.user_metadata.role;
      if (error || role !== 'client') {
        redirect('/client/login');
      }

      setClientEmail(data.user?.email || null);
    };
    getClientEmail();
  }, [pathname, router]);

  const getMagicLink = async (email: string) => {
    const { data, error } = await supabase.auth.signInWithOtp({
      email,
    });
    if (error) throw new Error(error.message);
    const { user, session } = data;
    if (clientEmail) {
      setClientEmail(clientEmail);
    } else throw new Error("Login failed: this one's on us");
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error(error.message);
    setClientEmail(null);
  };

  return (
    <ClientAuthContext.Provider value={{ clientEmail, getMagicLink, logout }}>
      {children}
    </ClientAuthContext.Provider>
  );
};

export const useClientAuth = (): ClientAuthContextType => {
  const context = useContext(ClientAuthContext);
  if (!context) {
    throw new Error('useClientAuth must be used within a ClientAuthProvider');
  }
  return context;
};
