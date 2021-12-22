import { Link } from "solid-app-router";

const NotFoundPage = () => {
  return (
    <div className="py-32 text-center">
      <h1 className="leading-relaxed font-black">
        <span className="text-rose-500 text-3xl">minime</span>
      </h1>
      <div className="mt-20">
        <h3 className="text-5xl font-black text-gray-700">404 Not Found</h3>
        <p className="mt-2 text-lg text-gray-600">
          The shortlink does not exist.
        </p>

        <div className="mt-6">
          <Link
            href="/"
            className="pt-3 pb-2 px-6 rounded-lg text-white bg-rose-400 hover:bg-rose-500"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
