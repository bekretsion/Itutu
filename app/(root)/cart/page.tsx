import CartTable from './cart-table';
import { getMyCart } from '@/lib/actions/cart.actions';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'View and manage your shopping cart',
};

export default async function CartPage() {
  const cart = await getMyCart();

  return (
    <div className="container space-y-10 py-10">
      <CartTable cart={cart} />
    </div>
  );
}
