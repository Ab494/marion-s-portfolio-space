import { useEffect, useState } from "react";

interface Props {
  words: string[];
  className?: string;
}

const Typewriter = ({ words, className = "" }: Props) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    const speed = deleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1500);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setIndex((index + 1) % words.length);
        return;
      }
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-0.5 h-[1em] bg-primary ml-1 align-middle animate-pulse" />
    </span>
  );
};

export default Typewriter;
