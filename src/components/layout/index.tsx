import { FC, ReactNode } from 'react';
import Navbar from './navbar';
import Footer from './footer';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = (props) => {
  const { children } = props;
  return (
    <div className="h-full w-screen bg-[#FEFFD2] flex flex-col gap-[80px]">
      <div className="max-w-[1024px] w-full mx-auto h-full flex flex-col">
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
