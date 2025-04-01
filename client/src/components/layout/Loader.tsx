import { useEffect, useState } from 'react';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader ${!isLoading ? 'loader-hidden' : ''}`}>
      <div className="flex flex-col items-center">
        <div className="spinner"></div>
        <p className="text-white mt-3">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
