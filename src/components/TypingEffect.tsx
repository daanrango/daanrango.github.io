import { useEffect, useState } from "react";
import loadData from "../utils/LoadData";
const TypingEffect = () => {
  const [texts, setTexts] = useState<string[]>([]);
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fetchWhoAIam = async () => {
      const data = await loadData("whoiam");
      setTexts(data);
    };

    fetchWhoAIam();
  }, []);

  useEffect(() => {
    if (texts.length === 0) return;

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          setCharIndex((prev) => prev - 1);
        } else {
          setCharIndex((prev) => prev + 1);
        }

        if (!isDeleting && charIndex === texts[index]?.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      },
      isDeleting ? 100 : 200
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, texts, index]);

  const currentText = texts[index] || "";

  return (
    <div className="App text-sm text-center md:text-justify md:text-xl">
      <div className="flex flex-col md:flex-row md:items-center">
        <div>I'm a </div>
        <div className="typewriter py-2">
          <div id="text">{currentText.substring(0, charIndex)}</div>
        </div>
      </div>
    </div>
  );
};

export default TypingEffect;
