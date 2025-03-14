import { ShoppingBag, WalletCards } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import Image from 'next/image';

const IconBoxes = () => {
  return (
    <div>
      <Card>
        <CardContent className='grid md:grid-cols-4 gap-4 p-4'>
          <div className='space-y-2'>
            <Image 
              src="/images/logo.jpg" 
              alt='Itutu Logo'
              width={200}
              height={200}
            />
            <ShoppingBag />
            <div className='text-sm font-bold'>Itutu</div>
            <div className='text-sm text-muted-foreground'>
              Innovation meets fashion
            </div>
          </div>
          <div className='space-y-2'>
            <WalletCards />
            <div className='text-sm font-bold'>Cash on Delivery Payment system.</div>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default IconBoxes;
