'use client';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { useTransition } from 'react';
import { addItemToCart, removeItemFromCart } from '@/lib/actions/cart.actions';
import { ArrowRight, Loader2, Minus, Plus } from 'lucide-react';
import { Cart, CartItem } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { formatCurrency } from '@/lib/utils';

function AddButton({ item }: { item: CartItem }) {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      disabled={isPending}
      variant="outline"
      size="icon"
      className="h-8 w-8"
      onClick={() =>
        startTransition(async () => {
          const res = await addItemToCart(item);
          if (!res.success) {
            toast({
              variant: 'destructive',
              description: res.message,
            });
          }
        })
      }
    >
      {isPending ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Plus className="h-4 w-4" />
      )}
    </Button>
  );
}

function RemoveButton({ item }: { item: CartItem }) {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      disabled={isPending}
      variant="outline"
      size="icon"
      className="h-8 w-8"
      onClick={() =>
        startTransition(async () => {
          const res = await removeItemFromCart(item.productId);
          if (!res.success) {
            toast({
              variant: 'destructive',
              description: res.message,
            });
          }
        })
      }
    >
      {isPending ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Minus className="h-4 w-4" />
      )}
    </Button>
  );
}

const CartTable = ({ cart }: { cart?: Cart }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  if (!cart || cart.items.length === 0) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center space-y-4">
        <p className="text-muted-foreground">Your cart is empty</p>
        <Button asChild>
          <Link href="/">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Shopping Cart</h1>
        <p className="text-sm text-muted-foreground">
          {cart.items.reduce((a, c) => a + c.qty, 0)} items
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-4">
        <div className="md:col-span-3">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead className="text-center">Quantity</TableHead>
                <TableHead className="text-right">Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cart.items.map((item) => (
                <TableRow key={item.slug}>
                  <TableCell>
                    <Link
                      href={`/product/${item.slug}`}
                      className="flex items-center gap-4"
                    >
                      <div className="relative h-16 w-16 overflow-hidden rounded-md">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-center gap-2">
                      <RemoveButton item={item} />
                      <span className="w-12 text-center">{item.qty}</span>
                      <AddButton item={item} />
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    {formatCurrency(item.price)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <Card className="h-fit">
          <CardContent className="space-y-4 p-6">
            <div className="flex items-center justify-between text-base">
              <span className="font-medium">Subtotal</span>
              <span>{formatCurrency(cart.itemsPrice)}</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full"
              disabled={isPending}
              onClick={() => startTransition(() => router.push('/shipping-address'))}
            >
              {isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <ArrowRight className="mr-2 h-4 w-4" />
              )}
              Checkout
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CartTable;
