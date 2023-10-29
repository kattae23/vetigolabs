import { Metadata } from 'next'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { UserAuthForm } from '@/components/auth/user-auth-form'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.'
}

export default function AuthenticationPage () {
  return (
    <main className='mt-[96px]'>
      <section className='container relative h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
        <Link
          href={process.env.NEXT_PUBLIC_URL + '/register'}
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'absolute right-4 top-20 md:right-8 md:top-8'
          )}
        >
          Register
        </Link>
        <div className='relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex'>
          <div className='absolute inset-0 bg-zinc-900 bg-center bg-no-repeat' style={{ backgroundImage: 'url(/carousel-platform-04.jpg)' }} />
          <div className='relative flex items-center text-lg font-medium'>
            <Image src={process.env.NEXT_PUBLIC_URL + '/grisocorp.png'} alt='logo grisocorp' width={100} height={100} />
          </div>
          <div className='relative z-20 mt-auto'>
            <blockquote className='space-y-2'>
              <p className='text-lg'>
                &ldquo;Esta página me ha ayudado bastante con mis inversiones y han devuelto siempre el total del gasto, un placer trabajar con GrisoCorp!.&rdquo;
              </p>
              <footer className='text-sm'>Marcos Franco.</footer>
            </blockquote>
          </div>
        </div>
        <div className='lg:p-8'>
          <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
            <div className='flex flex-col space-y-2 text-center'>
              <h1 className='text-2xl font-semibold tracking-tight'>
                Create an account
              </h1>
              <p className='text-sm text-muted-foreground'>
                Enter your email below to create your account
              </p>
            </div>
            <UserAuthForm />
            <p className='px-8 text-center text-sm text-muted-foreground'>
              By clicking continue, you agree to our{' '}
              <Link
                href={process.env.NEXT_PUBLIC_URL + '/terms'}
                className='underline underline-offset-4 hover:text-primary'
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                href={process.env.NEXT_PUBLIC_URL + '/privacy'}
                className='underline underline-offset-4 hover:text-primary'
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
