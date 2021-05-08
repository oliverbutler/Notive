import Block from "components/Block";

const Home = () => {
  return (
    <div>
      <h1 className="text-2xl">
        Welcome to <span className="italic">your</span> Notive
      </h1>
      <Block text="1" />
      <Block text="2" />
      <Block text="3" />
    </div>
  );
};

export default Home;
