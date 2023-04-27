import { Home as HomeIcon, Search, Library} from 'lucide-react'

export function Sidebar(){
    return(
        <aside className='w-72 bg-zinc-950 p-6'>
            <div className='flex items-center gap-2'>
              <div className='w-3 h-3 bg-red-500 rounded-full '></div>
              <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
              <div className='w-3 h-3 bg-green-500 rounded-full'></div>
            </div>
            <nav className='space-y-5 mt-10'>
              <a href="" className='flex items-center gap-2 text-xs font-semibold text-zinc-200'>
                <HomeIcon />
                Home
              </a>
              <a href="" className='flex items-center gap-2 text-xs font-semibold text-zinc-200'>
                <Search />
                Search
              </a>
              <a href="" className='flex items-center gap-2 text-xs font-semibold text-zinc-200'>
                <Library />
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
    )
}