import HomeHeader from "./header";
import HomeMainForm from "./mainform";

const HomeContainer = () => {
  return (
    <div className="py-32">
      <div className="w-4/5 mx-auto">
        <HomeHeader />

        <hr className="border-gray-200 my-8" />

        <HomeMainForm />
      </div>
    </div>
  );
};

export default HomeContainer;
