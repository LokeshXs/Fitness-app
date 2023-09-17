import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import HomePage from './pages/HomePage';
import { useInView } from 'react-intersection-observer';
import ExercisePage from './pages/ExercisePage';
import { loader } from './pages/ExercisePage';
import Error from './pages/Error';

function App() {

  const { inView, ref, entry } = useInView({
    threshold: 0,
  });

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout inView={inView} />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <HomePage intersectionRef={ref} />
        },
        {
          path: '/exercise/:exerciseId',
          element: <ExercisePage  />,
          loader: loader,

        }
      ]
    }
  ]);


  return (
    <RouterProvider router={router} />
  )
}

export default App;
