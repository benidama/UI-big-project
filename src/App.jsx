// import React from "react";
// import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
// import MainLayout from "./layouts/MainLayout";
// import HomePage from "./pages/HomePage";
// import JobsPage from "./pages/JobsPage";
// import AddJobPage from "./pages/AddJobPage";
// import EditJobPage from "./pages/EditJobPage";
// import JobDetail from "./pages/JobDetail";
// import JobPage, { jobLoader } from "./pages/JobPage";
// import NotFoundPage from "./pages/NotFoundPage";
// import { useLocalJobs } from "./hooks/useLocalJobs";

// const App = () => {
//   const { jobs, addJob, updateJob, deleteJob } = useLocalJobs();

//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path="/" element={<MainLayout />}>
//         <Route index element={<HomePage />} />
//         <Route path="jobs" element={<JobsPage jobs={jobs} />} />
//         <Route path="detail/:id" element={<JobDetail />} loader={jobLoader} />
//         <Route path="add-job" element={<AddJobPage addJobSubmit={addJob} />} />
//         <Route
//           path="edit-job/:id"
//           element={<EditJobPage updateJobSubmit={updateJob} />}
//           loader={jobLoader}
//         />
//         <Route
//           path="jobs/:id"
//           element={<JobPage deleteJob={deleteJob} />}
//           loader={jobLoader}
//         />
//         <Route path="*" element={<NotFoundPage />} />
//       </Route>
//     )
//   );

//   return <RouterProvider router={router} />;
// };

// export default App;

// src/App.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
import JobDetail from './pages/JobDetail';
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
        { path: 'jobs/detail/:id', element: <JobDetail />, loader: jobLoader },
        { path: 'add-job', element: <AddJobPage addJobSubmit={addJob} /> },
        { path: 'edit-job/:id', element: <EditJobPage updateJobSubmit={updateJob} />, loader: jobLoader },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
