import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import ProductPrice from './product-price';
import { Product } from '@/types';
import Rating from './rating';
import { cn } from '@/lib/utils';

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="group relative h-[500px] w-full max-w-sm overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg">
      <CardHeader className="space-y-0 p-0 h-[350px]">
        <Link 
          href={`/product/${product.slug}`}
          className="relative block h-full w-full overflow-hidden bg-gray-100"
        >
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="translate-y-4 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              View Details
            </span>
          </div>
        </Link>
      </CardHeader>

      <CardContent className="flex h-[150px] flex-col justify-between space-y-3 p-5">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">
            {product.brand}
          </span>
          <Rating value={Number(product.rating)} />
        </div>

        <Link 
          href={`/product/${product.slug}`}
          className="group/link block"
        >
          <h2 className="line-clamp-2 text-base font-medium leading-tight tracking-tight text-foreground/90 transition-colors group-hover/link:text-foreground">
            {product.name}
          </h2>
        </Link>

        <div className="flex items-center justify-between">
          <ProductPrice 
            value={Number(product.price)} 
            className="text-lg font-semibold tracking-tight" 
          />
          <span className="text-xs text-muted-foreground">
            {product.stock} in stock
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
