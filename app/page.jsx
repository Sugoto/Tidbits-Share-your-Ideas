import Feed from "@components/Feed";

 const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Discover & Share
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center">Your Ideas</span>
    </h1>
    <p className="desc text-center">
      Tidbits is an open-source sharing platform for modern world to discover,
      create and share creative thoughts and ideas.
    </p>

    <Feed />
  </section>
);

export default Home;