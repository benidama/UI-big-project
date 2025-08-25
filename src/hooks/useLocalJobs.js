// import { useState, useEffect } from "react";

// // Hook to manage job list in localStorage
// export const useLocalJobs = () => {
//   const [jobs, setJobs] = useState(() => {
//     const saved = localStorage.getItem("jobs");
//     return saved ? JSON.parse(saved) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("jobs", JSON.stringify(jobs));
//   }, [jobs]);

//   const addJob = (newJob) => {
//     const jobWithId = { id: Date.now().toString(), ...newJob };
//     setJobs((prev) => [...prev, jobWithId]);
//   };

//   const updateJob = (updatedJob) => {
//     setJobs((prev) =>
//       prev.map((job) => (job.id === updatedJob.id ? updatedJob : job))
//     );
//   };

//   const deleteJob = (id) => {
//     setJobs((prev) => prev.filter((job) => job.id !== id));
//   };

//   const getJobById = (id) => jobs.find((job) => job.id === id);

//   return { jobs, addJob, updateJob, deleteJob, getJobById };
// };
// src/hooks/useLocalJobs.js
import { useState, useEffect } from "react";

export function useLocalJobs() {
  const [jobs, setJobs] = useState(() => {
    const saved = localStorage.getItem("jobs");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (job) => {
    const newJob = { id: Date.now().toString(), ...job };
    setJobs((prev) => [...prev, newJob]);
  };

  const updateJob = (updated) => {
    setJobs((prev) => prev.map((j) => (j.id === updated.id ? updated : j)));
  };

  const deleteJob = (id) => {
    setJobs((prev) => prev.filter((j) => j.id !== id));
  };

  const getJobById = (id) => jobs.find((j) => j.id === id);

  return { jobs, addJob, updateJob, deleteJob, getJobById };
}
