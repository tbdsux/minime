import { useParams } from "solid-app-router";
import { createResource } from "solid-js";
import { fetchLink } from "../../lib/fetcher";
import NotFoundPage from "../error/404";

const ShortlinksContainer = () => {
  const params = useParams();

  const [data] = createResource(() => params.link, fetchLink);

  const redirect = (url: string) => {
    window.location.href = url;
  };

  return (
    <>
      {data.loading ? (
        <div className="h-screen flex items-center justify-center">
          <p className="text-gray-700 text-lg">Redirecting...</p>
        </div>
      ) : (
        <>
          {data()?.error ? <NotFoundPage /> : redirect(data()?.data?.url ?? "")}
        </>
      )}
    </>
  );
};

export default ShortlinksContainer;
