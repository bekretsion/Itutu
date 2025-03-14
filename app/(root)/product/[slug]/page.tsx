import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getProductBySlug } from '@/lib/actions/product.actions';
import { notFound } from 'next/navigation';
import ProductPrice from '@/components/shared/product/product-price';
import ProductImages from '@/components/shared/product/product-images';
import AddToCart from '@/components/shared/product/add-to-cart';
import { getMyCart } from '@/lib/actions/cart.actions';
import ReviewList from './review-list';
import { auth } from '@/auth';
import Rating from '@/components/shared/product/rating';


interface ProductDetailsPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  
  if (!product) notFound();

  const session = await auth();
  const userId = session?.user?.id;
  const cart = await getMyCart();

  return (
    <div className="container py-10">
      {/* Product Overview */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{product.brand}</span>
          <span>•</span>
          <span>{product.category}</span>
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
          {product.name}
        </h1>
      </div>

      {/* Main Product Section */}
      <div className="grid gap-10 lg:grid-cols-12">
        {/* Product Images */}
        <div className="lg:col-span-7">
          <ProductImages images={product.images} />
        </div>

        {/* Product Info & Actions */}
        <div className="lg:col-span-5">
          <div className="grid gap-6">
            {/* Rating and Reviews */}
            <div className="flex items-center gap-4">
              <Rating value={Number(product.rating)} />
              <span className="text-sm text-muted-foreground">
                {product.numReviews} reviews
              </span>
            </div>

            {/* Price */}
            <ProductPrice
              value={Number(product.price)}
              className="text-3xl font-bold"
            />

            {/* Purchase Card */}
            <Card>
              <CardHeader>
                <CardTitle>Purchase Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Status</span>
                  {product.stock > 0 ? (
                    <Badge variant="outline" className="bg-primary/5">
                      In Stock
                    </Badge>
                  ) : (
                    <Badge variant="destructive">Out Of Stock</Badge>
                  )}
                </div>

                {product.stock > 0 && (
                  <div className="w-full">
                    <AddToCart
                      cart={cart}
                      item={{
                        productId: product.id,
                        name: product.name,
                        slug: product.slug,
                        price: product.price,
                        qty: 1,
                        image: product.images![0],
                      }}
                    />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">About this product</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-16 space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Customer Reviews</h2>
        <ReviewList
          userId={userId || ''}
          productId={product.id}
          productSlug={product.slug}
        />
      </div>
    </div>
  );
}
