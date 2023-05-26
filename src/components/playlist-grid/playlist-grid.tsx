import Image from 'next/image'
import { Play } from "lucide-react"

import drake from '../../../public/drake.jpg'
import skazi from '../../../public/skazi.jpg'
import kendrick from '../../../public/kendric.jpg'
import kendrick2 from '../../../public/kendric2.jpg'
import disaster from '../../../public/disaster.jpg'
import almanac from '../../../public/almanac.jpg'

const playlists = [
    { name: 'Drake', image: drake },
    { name: 'Psy Trance', image: skazi },
    { name: 'DNA', image: kendrick },
    { name: 'Money Trees', image: kendrick2 },
    { name: 'Disaster', image: disaster },
    { name: 'Almanac', image: almanac },
]

function PlaylistGrid() {
    return (
        <>
            <h1 className='font-semibold text-3xl mt-10'>Good Afternoom</h1>
            <div className='grid grid-cols-3 gap-4 mt-4'>
                {playlists.map((playlist, index) => {
                    return (
                        <a key={index} href='#' className='bg-white/5 group rounded flex items-center overflow-hidden gap-4 hover:bg-white/10 transition-colors '>
                            <Image src={playlist.image} height={90} width={90} alt={playlist.name} />
                            <strong>{playlist.name}</strong>
                            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full invisible group-hover:visible bg-green-400 text-black ml-auto mr-8">
                                <Play />
                            </button>
                        </a>
                    )
                })}
            </div>
        </>
    )
}

export { PlaylistGrid }