// 'use client';

// import React, {
//   createContext,
//   ReactNode,
//   useContext,
//   useEffect,
//   useState,
// } from 'react';
// import { AccountDTO } from '@/services/types/account-dto';
// import supabase from '@/lib/supabaseClient';
// import { redirect } from 'next/navigation';
// interface DemoAuthContextType {
//   user: AccountDTO | null;
//   signInDemo: (email?: string, password?: string) => Promise<void>;
// }

// const DemoAuthContext = createContext<DemoAuthContextType | undefined>(
//   undefined,
// );

// export const DemoAuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<AccountDTO | null>(null);

//   useEffect(() => {
//     signInDemo();
//     return () => {
//       supabase.auth.signOut();
//       setUser(null);
//     };
//   }, []);

//   const signInDemo = async (
//     email: string = 'demo@tryFindre.com',
//     password: string = '123456',
//   ) => {
//     const { data, error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });
//     if (data && data.user && data.user.user_metadata.role === 'client') {
//       redirect('/client');
//     }
//     if (
//       data &&
//       data.user &&
//       data.user.email &&
//       (data.user.user_metadata.role === 'user' ||
//         data.user.user_metadata.role === 'admin') &&
//       data.user.user_metadata.projects
//     ) {
//       console.log('data is: ', data);
//       setUser({
//         _id: data.user.id,
//         email: data.user.email,
//         name: data.user.user_metadata.name,
//         role: data.user.user_metadata.role,
//         projects: [],
//       });
//     }
//     if (error) throw new Error(error.message);
//   };

//   return (
//     <DemoAuthContext.Provider value={{ user, signInDemo }}>
//       {children}
//     </DemoAuthContext.Provider>
//   );
// };

// export const useDemoAuth = () => {
//   const context = useContext(DemoAuthContext);
//   if (!context) {
//     throw new Error('useDemoAuth must be used within an DemoAuthProvider');
//   }
//   return context;
// };
