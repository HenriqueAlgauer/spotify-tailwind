import { Home as HomeIcon,  ChevronLeft, ChevronRight, Play} from 'lucide-react'
import Image from 'next/image'
import drake from '../../public/drake.jpg'
import { Sidebar } from '@/components/Sidebar'

export default function Home() {
  return (
    <main>
      <div className='h-screen flex flex-col'>
        <div className='flex flex-1'>
          <Sidebar/>
          <main className='flex-1 p-6'>
            <div className='flex items-center gap-4'>
              <button className='rounded-full bg-black/40 p-1'>
                <ChevronLeft />
              </button>
              <button className='rounded-full bg-black/40 p-1'>
                <ChevronRight />
              </button>
            </div>
            <h1 className='font-semibold text-3xl mt-10'>
              Good Afternoom
            </h1>
            <div className='grid grid-cols-3 gap-4 mt-4'>
              <a href='#' className='bg-white/5 group rounded flex items-center overflow-hidden gap-4 hover:bg-white/10 transition-colors '>
                <Image src={drake} height={100} width={100} alt="drake" />
                <strong>Scorpion</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full invisible group-hover:visible bg-green-400 text-black ml-auto mr-8">
                  <Play />
                </button>
              </a>
              <a href='#' className='bg-white/5 group rounded flex items-center overflow-hidden gap-4 hover:bg-white/10 transition-colors '>
                <Image src={drake} height={100} width={100} alt="drake" />
                <strong>Scorpion</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full invisible group-hover:visible bg-green-400 text-black ml-auto mr-8">
                  <Play />
                </button>
              </a>
              <a href='#' className='bg-white/5 group rounded flex items-center overflow-hidden gap-4 hover:bg-white/10 transition-colors '>
                <Image src={drake} height={100} width={100} alt="drake" />
                <strong>Scorpion</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full invisible group-hover:visible bg-green-400 text-black ml-auto mr-8">
                  <Play />
                </button>
              </a>
              <a href='#' className='bg-white/5 group rounded flex items-center overflow-hidden gap-4 hover:bg-white/10 transition-colors '>
                <Image src={drake} height={100} width={100} alt="drake" />
                <strong>Scorpion</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full invisible group-hover:visible bg-green-400 text-black ml-auto mr-8">
                  <Play />
                </button>
              </a>
              <a href='#' className='bg-white/5 group rounded flex items-center overflow-hidden gap-4 hover:bg-white/10 transition-colors '>
                <Image src={drake} height={100} width={100} alt="drake" />
                <strong>Scorpion</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full invisible group-hover:visible bg-green-400 text-black ml-auto mr-8">
                  <Play />
                </button>
              </a>
              <a href='#' className='bg-white/5 group rounded flex items-center overflow-hidden gap-4 hover:bg-white/10 transition-colors '>
                <Image src={drake} height={100} width={100} alt="drake" />
                <strong>Scorpion</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full invisible group-hover:visible bg-green-400 text-black ml-auto mr-8">
                  <Play />
                </button>
              </a>


            </div>
            <h2 className='font-semibold text-2xl mt-10'>Made For Henrique </h2>
            <div className='grid grid-cols-8 gap-4 mt-4'>
              <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2'>
                <Image className='w-full' src={drake} height={100} width={100} alt="drake" />
                <strong className='font-semibold '>Daily Mix 1</strong>
                <span className='text-sm text-zinc-500'>Drake, Kendrik Lamar, 21savage, Lil Uzi Vert</span>
              </a>
              <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2'>
                <Image className='w-full' src={drake} height={100} width={100} alt="drake" />
                <strong className='font-semibold '>Daily Mix 1</strong>
                <span className='text-sm text-zinc-500'>Drake, Kendrik Lamar, 21savage, Lil Uzi Vert</span>
              </a>
              <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2'>
                <Image className='w-full' src={drake} height={100} width={100} alt="drake" />
                <strong className='font-semibold '>Daily Mix 1</strong>
                <span className='text-sm text-zinc-500'>Drake, Kendrik Lamar, 21savage, Lil Uzi Vert</span>
              </a>
              <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2'>
                <Image className='w-full' src={drake} height={100} width={100} alt="drake" />
                <strong className='font-semibold '>Daily Mix 1</strong>
                <span className='text-sm text-zinc-500'>Drake, Kendrik Lamar, 21savage, Lil Uzi Vert</span>
              </a>
              <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2'>
                <Image className='w-full' src={drake} height={100} width={100} alt="drake" />
                <strong className='font-semibold '>Daily Mix 1</strong>
                <span className='text-sm text-zinc-500'>Drake, Kendrik Lamar, 21savage, Lil Uzi Vert</span>
              </a>
            </div>
          </main>
        </div>
      </div>
    </main>
  )
}
