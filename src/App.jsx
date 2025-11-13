import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
import JobPage from './pages/JobPage';
import NotFoundPage from './pages/NotFoundPage';
import { useLocalJobs } from './hooks/useLocalJobs';
import { jobLoader } from './loaders/jobLoader';

const App = () => {
  const { jobs, addJob, updateJob, deleteJob } = useLocalJobs();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: 'jobs', element: <JobsPage jobs={jobs} /> },
        { path: 'jobs/detail/:id', element: <JobPage deleteJob={deleteJob} />, loader: jobLoader },
        { path: 'add-job', element: <AddJobPage addJobSubmit={addJob} /> },
        { path: 'edit-job/:id', element: <EditJobPage updateJobSubmit={updateJob} />, loader: jobLoader },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
