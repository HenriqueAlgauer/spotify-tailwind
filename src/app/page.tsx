import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from 'next/image'
import drake from '../../public/drake.jpg' 

export default function Home() {
  return (
   <main>
     <div className='h-screen flex flex-col'>
       <div className='flex flex-1'>
         <aside className='w-72 bg-zinc-950 p-6'>
           <div className='flex items-center gap-2'>
             <div className='w-3 h-3 bg-red-500 rounded-full '></div>
             <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
             <div className='w-3 h-3 bg-green-500 rounded-full'></div>
           </div>
           <nav className='space-y-5 mt-10'>
             <a href="" className='flex items-center gap-2 text-xs font-semibold text-zinc-200'>
               <HomeIcon/>
               Home
             </a>
             <a href="" className='flex items-center gap-2 text-xs font-semibold text-zinc-200'>
               <Search/>
               Search
             </a>
             <a href="" className='flex items-center gap-2 text-xs font-semibold text-zinc-200'>
               <Library/>
               Your Library
             </a>             
           </nav>

           <nav className='mt-10 pt-10 border-t border-zinc-700 flex flex-col gap-2'>
              <a href='' className='text-small text-zinc-400 hover:text-zinc-100'>Phonk</a>
              <a href='' className='text-small text-zinc-400 hover:text-zinc-100'>Mega</a>
              <a href='' className='text-small text-zinc-400 hover:text-zinc-100'>Dance </a>
              <a href='' className='text-small text-zinc-400 hover:text-zinc-100'>Prog </a>
              <a href='' className='text-small text-zinc-400 hover:text-zinc-100'>Best of Prog </a>
              <a href='' className='text-small text-zinc-400 hover:text-zinc-100'>Oldies </a>
              <a href='' className='text-small text-zinc-400 hover:text-zinc-100'>Mega 2.0 </a>
              <a href='' className='text-small text-zinc-400 hover:text-zinc-100'>Dance 2.0</a>
           </nav>
         </aside>
         <main className='flex-1 p-6'>
           <div className='flex items-center gap-4'>
              <button className='rounded-full bg-black/40 p-1'>
                <ChevronLeft/>
              </button>
              <button className='rounded-full bg-black/40 p-1'>
                <ChevronRight/>
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
                  <Play/>
                </button>
              </a>
              <a href='#' className='bg-white/5 group rounded flex items-center overflow-hidden gap-4 hover:bg-white/10 transition-colors '>
                <Image src={drake} height={100} width={100} alt="drake" />
                <strong>Scorpion</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full invisible group-hover:visible bg-green-400 text-black ml-auto mr-8">
                  <Play/>
                </button>
              </a>
              <a href='#' className='bg-white/5 group rounded flex items-center overflow-hidden gap-4 hover:bg-white/10 transition-colors '>
                <Image src={drake} height={100} width={100} alt="drake" />
                <strong>Scorpion</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full invisible group-hover:visible bg-green-400 text-black ml-auto mr-8">
                  <Play/>
                </button>
              </a>
              <a href='#' className='bg-white/5 group rounded flex items-center overflow-hidden gap-4 hover:bg-white/10 transition-colors '>
                <Image src={drake} height={100} width={100} alt="drake" />
                <strong>Scorpion</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full invisible group-hover:visible bg-green-400 text-black ml-auto mr-8">
                  <Play/>
                </button>
              </a>
              <a href='#' className='bg-white/5 group rounded flex items-center overflow-hidden gap-4 hover:bg-white/10 transition-colors '>
                <Image src={drake} height={100} width={100} alt="drake" />
                <strong>Scorpion</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full invisible group-hover:visible bg-green-400 text-black ml-auto mr-8">
                  <Play/>
                </button>
              </a>
              <a href='#' className='bg-white/5 group rounded flex items-center overflow-hidden gap-4 hover:bg-white/10 transition-colors '>
                <Image src={drake} height={100} width={100} alt="drake" />
                <strong>Scorpion</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full invisible group-hover:visible bg-green-400 text-black ml-auto mr-8">
                  <Play/>
                </button>
              </a>

            
            </div>
            <h2 className='font-semibold text-2xl mt-10'>Made For Henrique </h2>
            <div className='grid grid-cols-8 gap-4 mt-4'>
              <a href='#' className='bg-white/5 p-3 rounded flex flex-col gap-2'>
                <Image className='w-full' src={drake} height={100} width={100} alt="drake" />
                <strong className='font-semibold '>Daily Mix 1</strong>
                <span className='text-sm text-zinc-500'>Drake, Kendrik Lamar, 21savage, Lil Uzi Vert</span>
              </a>
              <a href='#' className='bg-white/5 p-3 rounded flex flex-col gap-2'>
                <Image className='w-full' src={drake} height={100} width={100} alt="drake" />
                <strong className='font-semibold '>Daily Mix 1</strong>
                <span className='text-sm text-zinc-500'>Drake, Kendrik Lamar, 21savage, Lil Uzi Vert</span>
              </a>
              <a href='#' className='bg-white/5 p-3 rounded flex flex-col gap-2'>
                <Image className='w-full' src={drake} height={100} width={100} alt="drake" />
                <strong className='font-semibold '>Daily Mix 1</strong>
                <span className='text-sm text-zinc-500'>Drake, Kendrik Lamar, 21savage, Lil Uzi Vert</span>
              </a>
              <a href='#' className='bg-white/5 p-3 rounded flex flex-col gap-2'>
                <Image className='w-full' src={drake} height={100} width={100} alt="drake" />
                <strong className='font-semibold '>Daily Mix 1</strong>
                <span className='text-sm text-zinc-500'>Drake, Kendrik Lamar, 21savage, Lil Uzi Vert</span>
              </a>
              <a href='#' className='bg-white/5 p-3 rounded flex flex-col gap-2'>
                <Image className='w-full' src={drake} height={100} width={100} alt="drake" />
                <strong className='font-semibold '>Daily Mix 1</strong>
                <span className='text-sm text-zinc-500'>Drake, Kendrik Lamar, 21savage, Lil Uzi Vert</span>
              </a>
            </div>
         </main>
       </div>
       
       <footer className='bg-zinc-800 border-t border-zinc-700 p-6'>
         footer
       </footer>
     </div>
   </main>
  )
}
