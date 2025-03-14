import Image from 'next/image';
import loader from '@/assets/loader.gif';

const LoadingPage = () => {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <Image 
          src={loader} 
          height={100} 
          width={100} 
          alt="Loading..." 
          className="animate-pulse"
          priority
        />
        <p className="text-sm text-muted-foreground">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
