import Image from 'next/image';
import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';
import Menu from './menu';
import CategoryDrawer from './category-drawer';
import Search from './search';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <CategoryDrawer />
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.jpg"
              alt={`${APP_NAME} logo`}
              height={40}
              width={40}
              className="rounded-lg"
              priority
            />
            <span className="hidden text-xl font-semibold lg:block">
              {APP_NAME}
            </span>
          </Link>
        </div>

        <div className="hidden flex-1 md:block max-w-xl mx-auto">
          <Search />
        </div>

        <div className="flex items-center gap-4">
          <Menu />
          <Button variant="outline" size="sm" asChild>
            <Link href="/site-by">
              Site made by
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
