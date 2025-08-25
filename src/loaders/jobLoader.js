// loaders/jobLoader.js
export const jobLoader = async ({ params }) => {
  const response = await fetch(`/jobs/${params.id}.json`);
  if (!response.ok) {
    throw new Response('Job not found', { status: 404 });
  }
  const job = await response.json();
  return { job };
};
