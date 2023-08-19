import CreateThoughts from "../Components/CreateThoughts";
import AllThoughts from "../Components/AllThoughts";

const HomePage = () => {
  return (
    <>
      <div className="main">
        <CreateThoughts />
        <AllThoughts />
      </div>
    </>
  );
};

export default HomePage;
