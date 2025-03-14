'use client';
import { APP_NAME } from '@/lib/constants';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const NotFoundPage = () => {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center">
      <div className="space-y-8">
        <div className="flex justify-center">
          <Image
            src="/images/logo.jpg"
            width={48}
            height={48}
            alt={`${APP_NAME} logo`}
            className="rounded-lg"
            priority
          />
        </div>
        <div className="space-y-6 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter">Not Found</h1>
            <p className="text-muted-foreground">
              Could not find the requested page
            </p>
          </div>
          <Button asChild>
            <Link href="/">
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
