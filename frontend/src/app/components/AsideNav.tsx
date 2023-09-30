'use client';

import React from 'react';
import {
  Contact2,
  MessageCircle,
  Users,
  Settings,
  UserPlus2,
  Blocks,
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '../../lib/utils';
import { usePathname } from 'next/navigation';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/DarkModeButton';
import Image from 'next/image';

const navApi = [
  {
    id: 1,
    path_name: '/',
    name: 'Message',
    component: <MessageCircle />,
  },
  {
    id: 2,
    path_name: '/contacts',
    name: 'Bạn bè',
    component: <Contact2 />,
  },
  {
    id: 3,
    path_name: '/group',
    name: 'Nhóm',
    component: <Users />,
  },
];

const AsideNav = () => {
  const pathName = usePathname();
  return (
    <div className='flex h-full border-r-[1px] shadow-xl'>
      <section className='flex flex-col items-center justify-between bg-[#0091ff]  pt-5 pb-10 text-white'>
        <nav>
          {navApi.map((navChild) => {
            return (
              <li
                key={navChild.id}
                className={cn('p-5 bg-aside_nav', {
                  'bg-[#006edc]': pathName === navChild.path_name,
                })}
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href={navChild.path_name}>
                        {navChild.component}
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{navChild.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            );
          })}
        </nav>
        <div>
          <div></div>
          <button>
            <Settings />
          </button>
        </div>
      </section>
      <section className='flex flex-col h-screen overflow-y-hidden w-full'>
        <div className='p-3  inline '>
          <Button
            variant={'ghost'}
            style={{
              padding: '5px',
            }}
          >
            <UserPlus2 />
          </Button>
          <Button variant={'ghost'}>
            <Blocks />
          </Button>
        </div>
        <div className='block px-2'>
          <input
            type='text'
            placeholder='this is title'
            className='block w-full'
          />
        </div>
        <div className='f-full flex-1 overflow-y-clip'>
          <div className='flex items-center justify-start gap-5 flex-shrink bg-red-500 py-3 px-2'>
            <Image
              src={'https://source.unsplash.com/random'}
              alt='this is image'
              width={30}
              height={30}
              className='rounded-full'
            />
            <div>
              <h2>Nhom 1</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AsideNav;
