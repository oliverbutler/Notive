import Block from "components/Block";
import BlockList from "components/BlockList";

const Home = () => {
  return (
    <div>
      <h1 className="text-2xl">
        Welcome to <span className="italic">your</span> Notive
        <BlockList />
      </h1>
    </div>
  );
};

export default Home;
