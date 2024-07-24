import Home from '../Home';
import NotFound from '../NotFound';
import ProjectDetail from '../ProjectDetail';

export const routes = [
    { path: '/', element: <Home /> },
    { path: '/project/:id', element: <ProjectDetail /> }, // Ruta para detalles del proyecto
    { path: '/*', element: <NotFound /> }
]