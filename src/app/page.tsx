import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Sidebar } from '@/components/sidebar/Sidebar'
import { Footer } from '@/components/footer/Footer'
import { PlaylistGrid } from '@/components/playlist-grid/playlist-grid'
import { DailyGrid } from '@/components/daily-playlist-grid/dailyGrid'

export default function Home() {
  return (
    <>
      <div className='h-screen flex flex-col'>
        <div className='flex flex-1'>
          <Sidebar />
          <main className='flex-1 p-6'>
            <div className='flex items-center gap-4'>
              <button className='rounded-full bg-black/40 p-1'>
                <ChevronLeft />
              </button>
              <button className='rounded-full bg-black/40 p-1'>
                <ChevronRight />
              </button>
            </div>
            <PlaylistGrid />
            <DailyGrid />
          </main>
        </div>
        <Footer/>
      </div>
    </>
  )
}
