import ProductCard from './product-card';
import { Product } from '@/types';

const ProductList = ({
  data,
  title,
  limit,
}: {
  data: Product[];
  title?: string;
  limit?: number;
}) => {
  const limitedData = limit ? data.slice(0, limit) : data;

  return (
    <section className="space-y-6 py-8">
      {title && (
        <h2 className="text-2xl font-semibold tracking-tight text-foreground/90">
          {title}
        </h2>
      )}
      
      {data.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {limitedData.map((product: Product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex min-h-[200px] items-center justify-center rounded-lg border border-dashed">
          <p className="text-sm text-muted-foreground">No products found</p>
        </div>
      )}
    </section>
  );
};

export default ProductList;
