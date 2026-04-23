import { useEffect, useState } from "react";

const PageLoader = () => {
  const [fading, setFading] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    document.body.classList.add("page-loading");
    const t1 = setTimeout(() => {
      setFading(true);
      document.body.classList.remove("page-loading");
      document.body.classList.add("page-loaded");
    }, 1800);
    const t2 = setTimeout(() => setHidden(true), 1800 + 500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.classList.remove("page-loading", "page-loaded");
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[200] flex items-center justify-center transition-opacity duration-500"
      style={{
        backgroundColor: "hsl(var(--navy-deep))",
        opacity: fading ? 0 : 1,
      }}
    >
      <span className="font-mono text-primary text-[32px]">&lt;Marion /&gt;</span>
    </div>
  );
};

export default PageLoader;
