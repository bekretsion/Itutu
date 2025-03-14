'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Plus, Minus, Loader, ShoppingCart } from 'lucide-react';
import { Cart, CartItem } from '@/types';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from '@/components/ui/toast';
import { addItemToCart, removeItemFromCart } from '@/lib/actions/cart.actions';
import { useTransition } from 'react';

const AddToCart = ({ cart, item }: { cart?: Cart; item: CartItem }) => {
  const router = useRouter();
  const { toast } = useToast();

  const [isPending, startTransition] = useTransition();

  const handleAddToCart = async () => {
    startTransition(async () => {
      const res = await addItemToCart(item);

      if (!res.success) {
        toast({
          variant: 'destructive',
          description: res.message,
        });
        return;
      }

      toast({
        variant: 'success',
        description: res.message,
        action: (
          <ToastAction
            className='bg-primary/90 text-primary-foreground hover:bg-primary/70 transition-colors'
            altText='Go To Cart'
            onClick={() => router.push('/cart')}
          >
            View Cart
          </ToastAction>
        ),
      });
    });
  };

  // Handle remove from cart
  const handleRemoveFromCart = async () => {
    startTransition(async () => {
      const res = await removeItemFromCart(item.productId);

      toast({
        variant: res.success ? 'info' : 'destructive',
        description: res.message,
      });
    });
  };

  // Check if item is in cart
  const existItem =
    cart && cart.items.find((x) => x.productId === item.productId);

  if (existItem) {
    return (
      <div className="flex items-center justify-center gap-1">
        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={handleRemoveFromCart}
          className="h-9 w-9 rounded-lg border-border/40 transition-colors hover:bg-destructive/10 hover:text-destructive"
          disabled={isPending}
        >
          {isPending ? (
            <Loader className="size-4 animate-spin" />
          ) : (
            <Minus className="size-4" />
          )}
        </Button>

        <div className="flex min-w-[3rem] items-center justify-center rounded-md bg-accent/50 px-3 py-1.5 text-sm font-medium">
          {existItem.qty}
        </div>

        <Button
          type="button"
          variant="outline"
          size="icon"
          onClick={handleAddToCart}
          className="h-9 w-9 rounded-lg border-border/40 transition-colors hover:bg-primary/10 hover:text-primary"
          disabled={isPending}
        >
          {isPending ? (
            <Loader className="size-4 animate-spin" />
          ) : (
            <Plus className="size-4" />
          )}
        </Button>
      </div>
    );
  }

  return (
    <Button
      className="w-full gap-2 rounded-xl py-5"
      type="button"
      onClick={handleAddToCart}
      disabled={isPending}
    >
      {isPending ? (
        <Loader className="size-4 animate-spin" />
      ) : (
        <>
          <ShoppingCart className="size-4" />
          Add To Cart
        </>
      )}
    </Button>
  );
};

export default AddToCart;
