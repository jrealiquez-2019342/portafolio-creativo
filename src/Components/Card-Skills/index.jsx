
const Card = ({ categoria, nivel, imgsrc, name, background = 'bg-white', textcolor = 'text-black' }) => {

    return (
        <div
            className={`${background} w-40 h-56 shadow-lg rounded-b-lg`}
        >
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute top-0 left-0 bg-red-500/70 shadow-lg shadow-red-500/50 rounded-lg text-white font-bold text-xs m-2 px-3 py-0.5'>
                    {nivel}
                </span>
                <span className={'absolute bottom-0 left-0 bg-cyan-500/70 shadow-lg shadow-cyan-500/50 rounded-lg text-white font-bold text-xs m-2 px-3 py-0.5'}>
                    {categoria}
                </span>
                <img className='w-full h-full object-cover rounded-lg' src={imgsrc} alt='skills' />
            </figure>
            <p className="flex justify-center">
                <span className={`text-sm font-medium ${textcolor}`}>{name}</span>
            </p>
        </div>
    )
}


export default Card