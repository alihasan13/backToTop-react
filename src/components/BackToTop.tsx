import { useEffect, useState } from "react";
import '../styles.css'
function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
        console.log(window.scrollY)
        if (window.scrollY > 500) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll",handleScroll)
   

  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <div className="backToTop">
      <h1>Back To Top</h1>

      {/* Add some content to enable scrolling */}
      {[...Array(59)].map((_, i) =>
        <p key={i}>this is para {i+1}</p>
      )}

      <div className="container">
        {/* Show this button only after scrolling down */}
        {isVisible && (<button
          className="backtotop-btn"
          onClick={scrollToTop}
          data-testid="back-to-top-btn"
        >
          Back to Top
        </button>)}
      </div>
    </div>
  );
}
export default BackToTop;
