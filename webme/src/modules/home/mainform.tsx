const HomeMainForm = () => {
  return (
    <div className="w-3/5 mx-auto">
      <div className="flex flex-col">
        <label htmlFor="url" className="text-gray-600">
          Input a url to shrink
        </label>
        <div className="flex items-center mt-1 rounded-lg relative">
          <input
            type="url"
            name="url"
            className="pt-4 pb-3 pl-4 pr-32 rounded-lg w-full border text-lg text-gray-800"
            placeholder="Url to shrink."
          />
          <button className="pt-3 pb-2 px-8 rounded-lg text-white bg-rose-400 hover:bg-rose-600 duration-500 absolute right-2">
            shrink
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeMainForm;
