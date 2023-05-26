import Image from "next/image"
import mix1 from '../../../public/dailymix1.jpeg'
import mix2 from '../../../public/dailymix2.jpeg'
import mix3 from '../../../public/dailymix3.jpeg'
import mix4 from '../../../public/dailymix4.jpeg'
import timeCap from '../../../public/timeCap.jpg'
import radar from '../../../public/radarovidades.jpeg'
import drake from '../../../public/drake.jpg'


const playlists = [
    { name: 'Daily Mix 1', image: mix1, singer: 'By Spotify' },
    { name: 'Daily Mix 2', image: mix2, singer: 'By Spotify' },
    { name: 'Daily Mix 3', image: mix3, singer: 'By Spotify' },
    { name: 'Daily Mix 4', image: mix4, singer: 'By Spotify' },
    { name: 'Drake', image: drake, singer: 'By Henrique Algauer' },
    { name: 'Time Capsule', image: timeCap, singer: 'By Spotify' },
    { name: 'Release Radar', image: radar, singer: 'By Spotify' },
    { name: 'Drake', image: drake, singer: 'By Henrique Algauer' },
]

function DailyGrid() {

    return (
        <>
            <h2 className='font-semibold text-2xl mt-10'>Made For Henrique </h2>
            <div className='grid grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 auto-cols-max gap-4 mt-4'>
                {playlists.map((playlist, index) => {
                    return (
                        <a key={index} href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2'>
                            <Image className='w-full' src={playlist.image} height={120} width={120} alt="drake" />
                            <strong className='font-semibold '>{playlist.name}</strong>
                            <p className='font-thin'>{playlist.singer}</p>
                        </a>
                    )
                })}
            </div>
        </>
    )
}

export { DailyGrid }