// ProjectDetail.jsx
import { useParams } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { TbWorldWww } from "react-icons/tb";
import { programmingSkills } from './../Home/technologieskills.jsx';
import { topProjects } from './../Home/topProjects.jsx';
import PageNotFound from './../NotFound';
import CarrouselProject from '../../Components/Carrusel-project-detail';
import Carrousel from './../../Components/Carrusel-skills';
import CardSkill from './../../Components/Card-Skills'
import bannerBg from './../../assets/img/banner-bg.png';

const ProjectDetail = () => {
  const { id } = useParams();

  // Encuentra el proyecto desde topProjects
  const selectedProject = topProjects.find(project => project.id === id);

  if (!selectedProject || selectedProject.id !== id) {
    return <PageNotFound message='Oops! Project Not Found' buttonMsg='Go back to my profile'/>;
  }

  const handleClickBackend = () => {
    window.open(selectedProject.backend, '_blank')
  }
  const handleClickFrontend = () => {
    window.open(selectedProject.frontend, '_blank')
  }
  const handleClickLink = () => {
    window.open(selectedProject.link, '_blank')
  }

  let statusColor;
  switch (selectedProject.status) {
    case 'PUBLIC':
      statusColor = 'bg-green-500'
      break;
    case 'PRIVATE':
      statusColor = 'bg-red-500'
      break;
    default:
      statusColor = 'bg-gray-500'

  }

  // Map skill names to their corresponding data
  const getSkillData = (skillName) => {
    return programmingSkills.find(skill => skill.name == skillName) || {};
  };

  return (
    <div
      className='banner w-screen h-screen p-5'
      style={{ backgroundImage: `url(${bannerBg})` }} // Utiliza la imagen importada
    >
      <div className='flex flex-row justify-between'>
        <div className='w-1/2 flex justify-center pr-2'>
          <CarrouselProject imageUrls={selectedProject.imgsrc} />
        </div>

        <div className='w-1/2 pl-4 bg-black/50 rounded-xl p-3'>
          <h1 className='text-4xl lg:text-6xl font-bold text-white mb-3'>{selectedProject.title}</h1>
          <p className='mt-2 text-white text-lg lg:text-2xl mb-3'>{selectedProject.description}</p>
          <span className={`text-white text-lg lg:text-xl px-3 py-0.5 rounded-lg ${statusColor}`}>
            {selectedProject.status}
          </span>
          <div className='flex flex-col mt-3 mb-3'>
            <div className='flex'>
              <p className='text-lg lg:text-xl text-white font-bold'>Año de desarrollo:&nbsp;</p>
              <span className='text-lg lg:text-xl text-white'>{selectedProject.year}</span>
            </div>
            <div className='flex flex-col mt-2'>
              <p className='text-lg lg:text-xl text-white font-bold'>Rol(es):</p>
              <ul className='list-disc pl-5 text-lg lg:text-xl text-white'>
                {
                  selectedProject.role.map((role) => (
                    <li key={role}>{role}</li>
                  ))
                }
              </ul>
            </div>
            {
              selectedProject.aditional && (
                <div className='flex'>
                  <p className='text-lg lg:text-xl text-white font-bold'>Nota:&nbsp;</p>
                  <span className='text-lg lg:text-xl text-white'>{selectedProject.aditional}</span>
                </div>
              )
            }
          </div>


          <div className='flex mt-4 flex-wrap'>
            {selectedProject.backend && (
              <button
                className="bg-cyan-500 shadow-lg hover:bg-cyan-600 shadow-cyan-500/50 text-white font-bold rounded-md p-2 flex items-center space-x-2 mr-2 mb-2"
                onClick={handleClickBackend}
              >
                <FaGithub size={30} />
                <span>Backend Project</span>
              </button>
            )}
            {selectedProject.frontend && (
              <button
                className="bg-cyan-500 shadow-lg hover:bg-cyan-600 shadow-cyan-500/50 text-white font-bold rounded-md p-2 flex items-center space-x-2 mr-2 mb-2"
                onClick={handleClickFrontend}
              >
                <FaGithub size={30} />
                <span>Frontend Project</span>
              </button>
            )}
            {selectedProject.link && (
              <button
                className="bg-cyan-500 shadow-lg hover:bg-cyan-600 shadow-cyan-500/50 text-white font-bold rounded-md p-2 flex items-center space-x-2 mb-2"
                onClick={handleClickLink}
              >
                <TbWorldWww size={30} />
                <span>Link Project</span>
              </button>
            )}
          </div>
          <div className='w-3/4'>
            <h1 className='text-center font-bold text-2xl text-white'>HABILIDADES</h1>
            <Carrousel cardsPerSlide={selectedProject.skills.length}>
              {
                selectedProject.skills.map((skillName) => {
                  const skillData = getSkillData(skillName);
                  return skillData ? (
                    <CardSkill
                      key={skillData.id}
                      categoria={skillData.categoria}
                      nivel={skillData.nivel}
                      imgsrc={skillData.imgsrc}
                      name={skillData.name}
                      background='bg-stone-900/50'
                      textcolor='text-white'
                    />
                  ) : null;
                })
              }
            </Carrousel>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ProjectDetail;
