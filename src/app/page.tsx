import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight } from 'lucide-react'

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
            <h1 className='font-semibold text-4xl mt-10'>
              Good Afternoom
            </h1>
            <div className='grid grid-cols-3 gap-4'>
              <div className='bg-white/10'>Playlist</div>
              <div className='bg-white/10'>Playlist</div>
              <div className='bg-white/10'>Playlist</div>
              <div className='bg-white/10'>Playlist</div>
              <div className='bg-white/10'>Playlist</div>
              <div className='bg-white/10'>Playlist</div>
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
