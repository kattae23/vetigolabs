'use client'
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import clsx from 'clsx'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

export function UserNav () {
  const { data: session, status } = useSession()
  if (status === 'unauthenticated') {
    return <p>loading</p>
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
          <Avatar className='h-8 w-8'>
            <AvatarImage src={session?.user.image! || '/user-default.jpg'} alt='@shadcn' />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='end' forceMount>
        <DropdownMenuLabel className='font-normal'>
          <div className='flex flex-col space-y-1'>
            <p className='text-sm font-medium leading-none'>{session?.user.name}</p>
            <p className={clsx('text-xs leading-none', session?.user.role === 'admin' ? 'text-gray-800 uppercase' : 'text-muted-foreground')}>
              {session?.user.role}
            </p>
            <p className='text-xs leading-none text-muted-foreground'>
              {session?.user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href='/client/dashboard'>
              Perfil
            </Link>
            {/* <DropdownMenuShortcut>⇧P</DropdownMenuShortcut> */}
          </DropdownMenuItem>
          {
            session?.user.role === 'admin'
              ? (
                <DropdownMenuItem>
                  <Link href='/admin/dashboard'>
                    Dashboard Admin
                  </Link>
                  {/* <DropdownMenuShortcut>⇧D</DropdownMenuShortcut> */}
                </DropdownMenuItem>
                )
              : null
          }
          <DropdownMenuItem>
            <Link href='/client/dashboard'>
              Dashboard
            </Link>
            {/* <DropdownMenuShortcut>⌘B</DropdownMenuShortcut> */}
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href='/client/dashboard'>
              Configuración
            </Link>
            {/* <DropdownMenuShortcut>⌘S</DropdownMenuShortcut> */}
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>
          Cerrar sesión
          {/* <DropdownMenuShortcut>⇧Q</DropdownMenuShortcut> */}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
