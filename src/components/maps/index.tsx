import dynamic from 'next/dynamic';

const Maps: any = dynamic(() => import('./maps'), {
  ssr: false,
});

export default Maps;
