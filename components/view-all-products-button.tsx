import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const ViewAllProductsButton = () => {
  return (
    <div className='flex justify-center items-center my-12'>
      <Button 
        asChild 
        variant="premium"
        size="lg"
        className='group relative overflow-hidden transition-all duration-300 hover:shadow-xl'
      >
        <Link 
          href='/search'
          className='flex items-center gap-2 px-8'
        >
          View All Products
          <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/80 to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </Link>
      </Button>
    </div>
  );
};

export default ViewAllProductsButton;
