import PropTypes from 'prop-types';

const Card = ({ categoria, nivel, imgsrc, name, background = 'bg-white', textcolor = 'text-black' }) => {
  return (
    <div className={`${background} w-40 h-56 shadow-lg rounded-lg overflow-hidden`}>
      <figure className='relative w-full h-4/5'>
        <span className='absolute top-2 left-2 bg-red-500/70 shadow-lg shadow-red-500/50 rounded-lg text-white font-bold text-xs  m-1 px-2 py-0.5'>
          {nivel}
        </span>
        <span className='absolute bottom-2 left-2 bg-cyan-500/70 shadow-lg shadow-cyan-500/50 rounded-lg text-white font-bold text-xs m-1 px-2 py-0.5'>
          {categoria}
        </span>
        <img className='w-full h-full object-cover rounded-t-lg' src={imgsrc} alt={`${name} image`} />
      </figure>
      <p className="p-2 text-center">
        <span className={`text-xs sm:text-sm md:text-base lg:text-lg font-medium ${textcolor}`}>{name}</span>
      </p>
    </div>
  )
}

Card.propTypes = {
  categoria: PropTypes.string.isRequired,
  nivel: PropTypes.string.isRequired,
  imgsrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  background: PropTypes.string,
  textcolor: PropTypes.string,
};

export default Card;
