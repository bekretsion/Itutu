import { Button } from './ui/button';
import Link from 'next/link';

const ViewAllProductsButton = () => {
  return (
    <div className='flex justify-center items-center my-12'>
      <Button 
        asChild 
        className='px-8 py-6 text-lg font-semibold relative overflow-hidden
                  bg-gradient-to-r from-primary/90 to-primary 
                  hover:scale-105 hover:shadow-xl hover:shadow-primary/20
                  transition-all duration-300 ease-out
                  rounded-xl border border-primary/20'
      >
        <Link href='/search' className='flex items-center gap-2'>
          View All Products
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M13 7l5 5m0 0l-5 5m5-5H6" 
            />
          </svg>
        </Link>
      </Button>
    </div>
  );
};

export default ViewAllProductsButton;
