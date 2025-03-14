import { Button } from './ui/button';
import Link from 'next/link';

const ViewAllProductsButton = () => {
  return (
    <div className='flex justify-center items-center my-12'>
      <Button 
        asChild 
        className='px-8 py-6 text-lg font-semibold relative overflow-hidden
                  bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500
                  hover:bg-gradient-to-l hover:scale-105 
                  hover:shadow-xl hover:shadow-pink-500/20
                  text-white
                  transition-all duration-500 ease-out
                  rounded-xl border border-white/10
                  animate-gradient bg-[length:200%_200%]'
      >
        <Link href='/search' className='flex items-center gap-2 relative z-10'>
          <span className='relative after:absolute after:bottom-0 after:left-0 
                         after:w-full after:h-[2px] after:bg-white/40 
                         after:scale-x-0 after:hover:scale-x-100 
                         after:transition-transform after:duration-300 
                         after:origin-right after:hover:origin-left'>
            View All Products
          </span>
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