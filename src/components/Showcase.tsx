import SocialIcons from "./SocialIcons";
import TypingEffect from "./TypingEffect";

function Showcase({ image, id }: { image: string; id: string }) {
  return (
    <section
      id={"" + id}
      className="w-full min-h-[100vh] h-max md:h-80 bg-blue-dark items-center block md:flex justify-center"
    >
      <div>
        <img
          src={`/img/${image}`}
          alt="showcase-imgen"
          className="rounded-full w-40 h-40 md:w-72 md:h-72 m-auto shadow-circula-showcase"
        />
      </div>
      <div className="md:w-3/6 md:mx-5 mx-10 flex flex-col justify-center items-center md:justify-normal md:items-start">
        <h2 className="text-xl py-3 text-center md:text-left md:text-4xl font-bold">
          Hi!, It's <span>David Anrango</span>
        </h2>
        <TypingEffect />
        <p className="text-gray-300 text-base text-center md:text-justify md:text-xl">
          And today I want to tell you a little about myself, my profession, my
          skills and my knowledge.
        </p>
        <SocialIcons />
        <div className="btn-group flex flex-col md:flex-row items-center gap-6 text-base ">
          <a className="px-5 py-2" href="mailto:davichoanrangojps17@gmail.com">
            <i className="fa-solid fa-check"></i> Hire
          </a>
          <a
            className="px-5 py-2"
            href="https://wa.me/593998127022?text=Hola%20vengo%20de%20tu%20portafolio.%20%C2%BFQuisiera%20hablar%20contigo?"
          >
            <i className="fa-brands fa-whatsapp"></i> Contact
          </a>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
