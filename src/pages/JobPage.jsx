import { useLoaderData, useNavigate, Link } from "react-router-dom";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import { toast } from "react-toastify";

const JobPage = ({ deleteJob }) => {
  const { job } = useLoaderData();
  const navigate = useNavigate();

  const handleDelete = () => {
    if (!window.confirm("Are you sure you want to delete this listing?")) return;
    deleteJob(job.id);
    toast.success("Job deleted successfully");
    navigate("/jobs");
  };

  return (
    <section className="max-w-4xl mx-auto p-6 bg-indigo-50 rounded-lg shadow-lg space-y-6">
      <div>
        <Link to="/jobs" className="flex items-center text-indigo-500 hover:text-indigo-600">
          <FaArrowLeft className="mr-2" /> Back to Job Listings
        </Link>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4 text-gray-500">{job.type}</div>
        <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
        <div className="flex items-center text-orange-700 mb-4">
          <FaMapMarker className="mr-1" /> {job.location}
        </div>
        <h3 className="text-xl font-semibold">Job Description</h3>
        <p className="mb-4">{job.description}</p>
        <h3 className="text-xl font-semibold">Salary</h3>
        <p>{job.salary} / Year</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold">Company Info</h2>
        <p className="text-xl font-semibold">{job.company.name}</p>
        <p>{job.company.description}</p>
        <p><strong>Email:</strong> {job.company.contactEmail}</p>
        <p><strong>Phone:</strong> {job.company.contactPhone}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md flex space-x-4">
        <Link
          to={`/edit-job/${job.id}`}
          className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg text-center"
        >
          Edit Job
        </Link>
        <button
          onClick={handleDelete}
          className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg"
        >
          Delete Job
        </button>
      </div>
    </section>
  );
};

export default JobPage;


