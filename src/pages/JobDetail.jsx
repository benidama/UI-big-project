// components/JobDetail.js
import { useLoaderData, useNavigate } from "react-router-dom";

const JobDetail = () => {
  const data = useLoaderData();
  const job = data?.job || data;
  const navigate = useNavigate();

  if (!job) {
    return (
      <section className="max-w-4xl mx-auto my-8 p-6 bg-gray-50 rounded-lg shadow-lg">
        <p className="text-center text-gray-600">Job not found</p>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto my-8 p-6 bg-gray-50 rounded-lg shadow-lg">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">{job.title || 'Untitled Job'}</h1>
        <p className="text-indigo-500 mt-2">{job.type || 'N/A'} • {job.salary || 'N/A'} / Year</p>
        <p className="text-gray-600 mt-1">{job.location || 'Location not specified'}</p>
      </header>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">Job Description</h2>
        <p className="text-gray-700 leading-relaxed">{job.description || 'No description available'}</p>
      </div>

      <div className="mb-8 bg-white p-4 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">Company Information</h2>
        <p className="font-semibold text-gray-800">{job.company?.name || 'Company name not available'}</p>
        <p className="text-gray-600 mb-3">{job.company?.description || 'No company description available'}</p>
        <div className="space-y-1">
          {job.company?.contactEmail && (
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${job.company.contactEmail}`} className="text-indigo-600 hover:underline">
                {job.company.contactEmail}
              </a>
            </p>
          )}
          {job.company?.contactPhone && (
            <p>
              <strong>Phone:</strong> {job.company.contactPhone}
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition"
        >
          &larr; Back
        </button>
        <button
          onClick={() => navigate(`/edit-job/${job.id}`)}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition"
        >
          Edit Job
        </button>
      </div>
    </section>
  );
};

export default JobDetail;
