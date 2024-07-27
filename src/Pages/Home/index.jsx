import React from 'react';
import CardProject from '../../Components/Card-projects/index.jsx';
import CardSkill from './../../Components/Card-Skills';
import CardEducation from './../../Components/Card';
import Header from './../../Components/Header';
import Layout from '../../Components/Layout';
import Carrousel from './../../Components/Carrusel-skills';
import { topProjects } from './topProjects.jsx';
import { programmingSkills } from './technologieskills.jsx';
import { cyberSecuritySkills } from './ciberskills.jsx';
import { education } from './education.jsx';

const Home = () => {
  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - 2021;//para que tome en cuenta desde el año 2022
  const yearsOld = currentYear - 2005;
  return (
    <div >
      <Header />
      <Layout>
        <div className='max-w-4xl pt-2 pb-10 px-4 sm:px-6 lg:px-8'>
          <p className='block text-justify font-normal text-base sm:text-lg md:text-xl text-black'>
            Hola!!! Soy Joshua Realiquez, tengo {yearsOld} años de edad y siempre me ha gustado aprender cosas nuevas.
            Continuo formandome, tengo {experienceYears} años de experiencia en el desarrollo
            y actualmente estoy formandome como especialista en ciberseguridad.
          </p>
        </div>

        <h1 className='text-center font-bold text-2xl sm:text-xl md:text-3xl'>TOP PROJECTS</h1>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg mt-4 px-4">
          {
            topProjects.map((project, index) => (
              <CardProject
                key={project.id}
                project={project}
              />
            ))
          }
        </div>
      </Layout>

      <Layout>

        <h1 className='text-center font-bold text-2xl sm:text-xl md:text-3xl'>EDUCACIÓN</h1>
        <div className="w-full max-w-screen-lg mt-4 px-4">
          <Carrousel cardsPerSlide={5} interval={3000}>
            {
              education.map((edu) => (
                <CardEducation
                  key={edu.id}
                  imgsrc={edu.imgURL}
                  name={edu.name}
                />
              ))
            }
          </Carrousel>
        </div>
      </Layout>

      <Layout>

        <h1 className='text-center font-bold text-2xl sm:text-xl md:text-3xl'>SKILLS DE CIBERSEGURIDAD</h1>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full max-w-screen-lg mt-4 px-4">
          {
            cyberSecuritySkills.map((skill) => (
              <CardSkill
                key={skill.name}
                categoria={skill.categoria}
                nivel={skill.nivel}
                imgsrc={skill.imgsrc}
                name={skill.name}
              />
            ))
          }
        </div>

      </Layout>



      <div className='mb-10'>
        <Layout>
          <h1 className='text-center font-bold text-2xl sm:text-xl md:text-3xl'>SKILLS DE PROGRAMACIÓN</h1>
          <div className="w-full max-w-screen-2xl mt-4 px-4">
            <Carrousel cardsPerSlide={9} interval={3000}>
              {
                programmingSkills.map((skill) => (
                  <CardSkill
                    key={skill.name}
                    categoria={skill.categoria}
                    nivel={skill.nivel}
                    imgsrc={skill.imgsrc}
                    name={skill.name}
                  />
                ))
              }
            </Carrousel>
          </div>

        </Layout>
      </div>
    </div>
  )
}


export default Home;