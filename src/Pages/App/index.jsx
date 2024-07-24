import { routes } from './routes.jsx';
import { Toaster } from 'react-hot-toast'
import { useRoutes, BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { ProjectProvider } from './../../Context';
import { topProjects } from '../Home/topProjects.jsx';
import './index.css';

export const MainRoutes = () => {
  const elementRoutes = useRoutes(routes)
  return (
    <>
      {elementRoutes}
      <Toaster position="bottom-right" reverseOrder={true} />

    </>
  )
}

function App() {
  useEffect(() => {
    const year = new Date().getFullYear();
    document.title = `Realiquez | ${year}`;
  }, []);
  return (
    <BrowserRouter>
      <ProjectProvider>
        <MainRoutes></MainRoutes>
      </ProjectProvider>
    </BrowserRouter>
  )
}

export default App;
