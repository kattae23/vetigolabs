/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/pxhbJ0bfma0
 */
import Link from 'next/link'
import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function AddBuildingForm () {
  return (
    <div className='flex flex-col w-full min-h-screen'>
      <header className='flex items-center h-16 px-4 border-b shrink-0 md:px-6'>
        <nav className='flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 lg:gap-6'>
          <Link className='flex items-center gap-2 text-lg font-semibold md:text-base' href='#'>
            <svg
              className=' w-6 h-6'
              fill='none'
              height='24'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              width='24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect height='20' rx='2' ry='2' width='16' x='4' y='2' />
              <path d='M9 22v-4h6v4' />
              <path d='M8 6h.01' />
              <path d='M16 6h.01' />
              <path d='M12 6h.01' />
              <path d='M12 10h.01' />
              <path d='M12 14h.01' />
              <path d='M16 10h.01' />
              <path d='M16 14h.01' />
              <path d='M8 10h.01' />
              <path d='M8 14h.01' />
            </svg>
            <span>Airbnb Admin</span>
          </Link>
          <Link className='font-bold' href='#'>
            Dashboard
          </Link>
          <Link className='text-zinc-500 dark:text-zinc-400' href='#'>
            Add Building
          </Link>
        </nav>
      </header>
      <main className='flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10'>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-1'>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between pb-2 space-y-0'>
              <CardTitle className='text-sm font-medium'>Add New Building</CardTitle>
            </CardHeader>
            <CardContent>
              <form className='space-y-4'>
                <Input className='w-full' placeholder='Building Name' type='text' />
                <Input className='w-full' placeholder='Location' type='text' />
                <Input className='w-full' placeholder='Number of Rooms' type='number' />
                <Button className='w-full bg-green-500 hover:bg-green-600 text-white' type='submit'>
                  Add Building
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
