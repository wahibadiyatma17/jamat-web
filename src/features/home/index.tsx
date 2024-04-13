import AppLayout from '@/components/layout';
import { FC } from 'react';
import LandingSection from './landing-section';
import HowItWorksSection from './how-it-works-section';
import HowToOrderSection from './how-to-order-section';
import BusinessOwnerSection from './business-owner-section';

const Home: FC = () => {
  return (
    <AppLayout>
      <div className="flex flex-col gap-[80px]">
        <LandingSection />
        <HowItWorksSection />
        <HowToOrderSection />
        <BusinessOwnerSection />
      </div>
    </AppLayout>
  );
};

export default Home;
