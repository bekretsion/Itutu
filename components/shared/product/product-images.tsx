'use client';
import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
        <Image
          src={images[current]}
          alt="Product image"
          fill
          className="object-cover object-center transition-all duration-300"
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex gap-2">
        {images.map((image, index) => (
          <div
            key={image}
            onClick={() => setCurrent(index)}
            className={cn(
              "relative aspect-square h-20 cursor-pointer overflow-hidden rounded-lg border-2 transition-all",
              current === index 
                ? "border-primary" 
                : "border-border/50 hover:border-primary/50"
            )}
          >
            <Image 
              src={image} 
              alt={`Product thumbnail ${index + 1}`} 
              fill
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
