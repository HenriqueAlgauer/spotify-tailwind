import { Laptop2, LayoutList, Maximize2, Mic2, Play, Repeat, Shuffle, SkipBack, SkipForward, Volume } from "lucide-react";
import Image from 'next/image'
import drake from '../../public/drake.jpg'

export function Footer(){
    return(
        <footer className='bg-zinc-900 border-t flex items-center justify-between border-zinc-700 px-6 py-4'>
          <div className='flex items-center gap-3'>
            <Image className='w-full' src={drake} height={48} width={48} alt="drake" />
            <div className='flex flex-col '>
              <strong className='font-normal'>Nonstop</strong>
              <span className='text-xs text-zinc-400'>Drake</span>
            </div>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <div className='flex items-center gap-6  '>
              <Shuffle size={20} className='text-zinc-200' />
              <SkipBack size={20} className='text-zinc-200' />
              <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
                <Play />
              </button>
              <SkipForward size={20} className='text-zinc-200' />
              <Repeat size={20} className='text-zinc-200' />
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-xs text-zinc-500'>0:21</span>
              <div className='h-1 rounded-full w-96 bg-zinc-600'>
                <div className='bg-zinc-200 w-20 h-1 rounded-full'></div>
              </div>
              <span className='text-xs text-zinc-500'>2:15</span>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <Mic2 size={16}/>
            <LayoutList size={16}/>  
            <Laptop2 size={16}/>  
            <div className='flex items-center gap-2'>
              <Volume size={16}/>  
              <div className='h-1 rounded-full w-24 bg-zinc-600'>
                <div className='bg-zinc-200 w-12 h-1 rounded-full'></div>
              </div>
            </div>
            <Maximize2 size={14} />
          </div>
        </footer>
    )
}