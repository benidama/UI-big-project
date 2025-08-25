import  { useState, useEffect } from 'react';
import jobsData from '../jobs.json';
import JobListing from './JobListing'; 

const JobListings = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(jobsData.jobs);
  }, []);

  return (
    <div className="job-listings grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-5 space-y-5">
      {jobs.map((job) => (
        <JobListing key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobListings;
