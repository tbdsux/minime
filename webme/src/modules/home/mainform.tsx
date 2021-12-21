import { createSignal } from "solid-js";
import urljoin from "url-join";
import { isWebUri } from "valid-url";
import { APPURL, SHRINK_URL } from "../../lib/config";
import {
  APIREQUEST_PROPS,
  DONEPROPS,
  SHRINK_REQUEST_PROPS
} from "../../typings/api";

const HomeMainForm = () => {
  let inputRef: HTMLInputElement | undefined = undefined;

  const [shrinking, setShrinking] = createSignal(false);
  const [error, setError] = createSignal({
    err: false,
    message: "",
  });
  const [done, setDone] = createSignal<DONEPROPS>({ done: false });

  const shrink = async () => {
    // reset it here first
    setError({ err: false, message: "" });
    setDone({ done: false });

    const url = inputRef?.value;
    if (!url) return;

    console.log(url);

    setShrinking(true);

    if (!isWebUri(url)) {
      setError({
        err: true,
        message: "Url is not a valid web uri.",
      });
      setShrinking(false);
      return;
    }

    const body = { url };

    const d = await fetch(SHRINK_URL, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data: APIREQUEST_PROPS<SHRINK_REQUEST_PROPS> = await d.json();

    if (data.error) {
      setError({ err: true, message: data.message ?? "" });
      setShrinking(false);
      return;
    }

    setError({ err: false, message: "" });
    setDone({ done: true, data: data.data });
    setShrinking(false);
  };

  return (
    <div className="w-3/5 mx-auto">
      <div className="flex flex-col">
        <label htmlFor="url" className="text-gray-600">
          Input a url to shrink
        </label>
        <div className="flex items-center mt-1 rounded-lg relative">
          <input
            ref={inputRef}
            type="url"
            name="url"
            className="pt-4 pb-2 pl-4 pr-32 rounded-lg w-full border text-lg text-gray-800"
            placeholder="Url to shrink."
          />
          <button
            type="button"
            disabled={shrinking()}
            onClick={shrink}
            className="pt-3 pb-1 px-8 rounded-lg text-white bg-rose-400 hover:bg-rose-600 duration-500 absolute right-2"
          >
            {shrinking() ? `shrinking...` : `shrink`}
          </button>
        </div>
      </div>

      {error().err ? (
        <p className="mt-1 mx-1 text-white pt-1 px-4 rounded-lg bg-rose-500">
          {error().message}
        </p>
      ) : (
        <></>
      )}

      {done().done ? (
        <div className="mt-6">
          <div className="shadow-lg shadow-rose-100 pt-6 pb-4 px-4 rounded-lg">
            <h3 className="text-lg text-green-500">
              Url has been shrinked successfully!
            </h3>

            <div className="mt-4 w-11/12 mx-auto flex items-end justify-between bg-gray-50 px-4 rounded-lg py-2">
              <strong className="text-2xl font-black text-gray-700">
                {urljoin(APPURL, done().data?.shorten ?? "")}
              </strong>

              <a
                href={done().data?.url}
                target="_blank"
                rel="noreferrer"
                className="pt-2 pb-1 bg-rose-400 hover:bg-rose-600 px-6 rounded-lg text-white"
              >
                visit
              </a>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default HomeMainForm;
