import { FC, ReactNode } from 'react';
import Navbar from './navbar';
import Footer from './footer';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = (props) => {
  const { children } = props;
  return (
    <div className="flex flex-col flex-1 min-h-screen w-screen bg-[#FEFFD2]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
