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
