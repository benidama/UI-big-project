// loaders/jobLoader.js
export async function jobLoader({ params }) {
  const job = jobsData.jobs.find((job) => job.id === params.jobId);
  if (!job) {
    throw new Response("Job not found", { status: 404 });
  }
  return { job };
}
