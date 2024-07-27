// Card.jsx
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { ProjectContext } from '../../Context';

const Card = ({ project }) => {
  const navigate = useNavigate();
  const { setSelectedProject } = useContext(ProjectContext);

  const handleClick = () => {
    setSelectedProject(project);
    navigate(`/project/${project.id}`);
  }

  return (
    <div
      className='bg-white cursor-pointer w-56 h-60 mb-4'
      onClick={handleClick}
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{project.title}</span>
        <span className='absolute bottom-0 right-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{project.year || 'Sin fecha'}</span>
        <img className='w-full h-full object-cover rounded-lg' src={project.imgsrc[0]} alt={project.alt} />
      </figure>
      <p className="flex justify-between">
        <span className='text-sm font-light text-justify'>{project.description}</span>
      </p>
    </div>
  )
}

export default Card;
