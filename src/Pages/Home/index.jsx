import React from 'react';
import Card from './../../Components/Card';
import CardSkill from './../../Components/Card-Skills'
import Header from './../../Components/Header';
import Layout from '../../Components/Layout';
import Carrousel from './../../Components/Carrusel-skills';
import { topProjects } from './topProjects.jsx';
import { programmingSkills } from './technologieskills.jsx';
import { cyberSecuritySkills } from './ciberskills.jsx';

const Home = () => {
  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - 2022;
  const yearsOld = currentYear - 2005;
  return (
    <div >
      <Header />
      <Layout>
        <div className='max-w-4xl pt-2 pb-10'>
          <p className='block text-justify font-normal text-xl text-black'>
            Hola!!! Soy Joshua Realiquez, tengo {yearsOld} años de edad y siempre me ha gustado aprender cosas nuevas.
            Continuo formandome, tengo {experienceYears} años de experiencia en el desarrollo
            y actualmente estoy formandome como especialista en ciberseguridad.
          </p>
        </div>
        <h1 className='text-center font-bold text-2xl'>TOP PROJECTS</h1>
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg mt-4">
          {
            topProjects.map((project, index) => (
              <Card
                key={project.id}
                project={project}
              />
            ))
          }
        </div>
      </Layout>
      <Layout>

        <h1 className='text-center font-bold text-2xl'>SKILLS DE CIBERSEGURIDAD</h1>
        <div className="grid gap-4 grid-cols-5 w-full max-w-screen-lg mt-4">
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
          <h1 className='text-center font-bold text-2xl'>SKILLS DE PROGRAMACIÓN</h1>
          <div className="w-full max-w-screen-2xl mt-4">
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