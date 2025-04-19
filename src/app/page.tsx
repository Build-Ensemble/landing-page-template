'use client';

import { DemoAuthProvider } from './context/demo-auth-context';
import Landing from '../components/layouts/landing/landing';
const Home = () => {
  return (
    <DemoAuthProvider>
      <Landing />
    </DemoAuthProvider>
  );
};

export default Home;
