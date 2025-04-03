import { useEffect, useState } from 'react';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Reduced loading time to 500ms

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader ${!isLoading ? 'loader-hidden' : ''}`}>
      <div className="flex flex-col items-center">
        {/* No spinner or text displayed */}
      </div>
    </div>
  );
};

export default Loader;
