import { Home as HomeIcon, Search, Library } from 'lucide-react'

const playlists = [
  { name: 'Phonk' },
  { name: 'Mega' },
  { name: 'Dance' },
  { name: 'Oldies' },
  { name: 'Mega 2.0' },
  { name: 'Prog' },
  { name: 'Best of Prog' },
  { name: 'Drake' },
]

const navlinks = [
  { name: 'Home', icon: HomeIcon },
  { name: 'Home', icon: Search },
  { name: 'Home', icon: Library },
]

export function Sidebar() {
  return (
    <aside className='w-72 bg-zinc-950 p-6'>
      <div className='flex items-center gap-2'>
        <div className='w-3 h-3 bg-red-500 rounded-full '></div>
        <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
        <div className='w-3 h-3 bg-green-500 rounded-full'></div>
      </div>
      <nav className='space-y-5 mt-10'>
        {navlinks.map((tag, index) => {
          return (
            <a key={index} href="" className='flex items-center gap-2 text-xs font-semibold text-zinc-200'>
              <tag.icon/>
              {tag.name}
            </a>
          )
        })}
      </nav>
      <nav className='mt-10 pt-10 border-t border-zinc-700 flex flex-col gap-2'>
        {playlists.map((name, index) => {
          return (
            <a key={index} href='' className='text-small text-zinc-400 hover:text-zinc-100'>{name.name}</a>
          )
        })}
      </nav>
    </aside>
  )
}