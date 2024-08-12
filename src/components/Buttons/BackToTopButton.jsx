import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; 

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) { 
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 rounded-full bg-[#4E148D] text-white shadow-lg transition-opacity z-50 duration-300 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }  hover:bg-[#6828E8] transition duration-300`}
      aria-label="Back to top"
    >
      <FaArrowUp size={24} />
    </button>
  );
};

export default BackToTopButton;
