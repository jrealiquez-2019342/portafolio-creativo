// Card.jsx
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { ProjectContext } from '../../Context';

const Card = ({ name, imgsrc, alt}) => {
  const navigate = useNavigate();
  const { setSelectedProject } = useContext(ProjectContext);

  const handleClick = () => {
    setSelectedProject(project);
    navigate(`/project/${project.id}`);
  }

  return (
    <div
      className='bg-white w-56 h-60 mb-4'
      onClick={handleClick}
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <img className='w-full h-full object-cover rounded-lg' src={imgsrc} alt={alt} />
      </figure>
      <p className="flex justify-center">
        <span className='text-sm font-bold text-center'>{name}</span>
      </p>
    </div>
  )
}

export default Card;
