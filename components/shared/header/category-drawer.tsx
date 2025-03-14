import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { getAllCategories } from '@/lib/actions/product.actions';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';

const CategoryDrawer = async () => {
  const categories = await getAllCategories();

  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button 
          variant="outline" 
          size="icon"
          className="h-9 w-9"
        >
          <MenuIcon className="h-4 w-4" />
          <span className="sr-only">Open categories menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-full w-full max-w-sm">
        <DrawerHeader className="space-y-4">
          <DrawerTitle className="text-lg font-semibold tracking-tight">
            Browse Categories
          </DrawerTitle>
          <div className="flex flex-col space-y-1">
            {categories.map((category) => (
              <DrawerClose key={category.category} asChild>
                <Button
                  variant="ghost"
                  className="justify-between px-3 font-normal hover:bg-muted"
                  asChild
                >
                  <Link href={`/search?category=${category.category}`}>
                    <span>{category.category}</span>
                    <span className="text-sm text-muted-foreground">
                      ({category._count})
                    </span>
                  </Link>
                </Button>
              </DrawerClose>
            ))}
          </div>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default CategoryDrawer;
