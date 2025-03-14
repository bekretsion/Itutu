import { Button } from '@/components/ui/button';
import ModeToggle from './mode-toggle';
import Link from 'next/link';
import { EllipsisVertical, ShoppingCart } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import UserButton from './user-button';

const Menu = () => {
  return (
    <div className="flex items-center justify-end gap-2">
      {/* Desktop Navigation */}
      <nav className="hidden items-center gap-2 md:flex">
        <ModeToggle />
        <Button asChild variant="ghost" size="sm" className="gap-2">
          <Link href="/cart">
            <ShoppingCart className="h-4 w-4" />
            <span>Cart</span>
          </Link>
        </Button>
        <UserButton />
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <EllipsisVertical className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>
            <div className="mt-4 flex flex-col gap-2">
              <ModeToggle />
              <Button asChild variant="ghost" size="sm" className="justify-start gap-2">
                <Link href="/cart">
                  <ShoppingCart className="h-4 w-4" />
                  <span>Cart</span>
                </Link>
              </Button>
              <UserButton />
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
