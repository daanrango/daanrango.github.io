import TypingEffect from "./TypingEffect";

function Showcase({ image, id }: { image: string; id: string }) {
  return (
    <section
      id={"" + id}
      className="w-full h-max md:h-80 bg-blue-dark bg-no-repeat	bg-center bg-cover mt-4 items-center block md:flex justify-center pt-10 md:py-64"
    >
      <div>
        <img
          src={`/img/${image}`}
          alt="showcase-imgen"
          className="rounded-full w-40 h-40 md:w-72 md:h-72 m-auto shadow-circula-showcase"
        />
      </div>
      <div className="md:w-3/6 md:mx-5 mx-10 flex flex-col justify-center items-center md:justify-normal md:items-start">
        <h2 className="font-mono text-xl py-3 text-center md:text-left md:text-4xl font-bold">
          Hi! My name is David Anrango
        </h2>
        <TypingEffect />
        <p className="text-gray-300 text-base text-center md:text-justify md:text-xl">
          And today I want to tell you a little about myself, my profession, my
          skills and my knowledge.
        </p>
        <a
          href="/"
          className="cursor-pointer text-center inline-block font-bold px-8 py-3 bg-gray-600 text-white text-sm mx-0 my-3 border border-solid border-white hover:opacity-70"
        >
          <i className="fa-solid fa-check"></i> Go
        </a>
      </div>
    </section>
  );
}

export default Showcase;
