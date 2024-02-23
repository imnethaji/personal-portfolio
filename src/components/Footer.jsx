import { useState, useEffect } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFixed, setIsFixed] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      setIsFixed(scrollTop + clientHeight >= scrollHeight);

      if (scrollTop > prevScrollY && scrollTop > 100) {
        // Scrolling down and not at the top
        setIsVisible(false);
      } else {
        // Scrolling up or at the top
        setIsVisible(true);
      }

      setPrevScrollY(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);
  return (
    <footer
      className={`footer ${isVisible || isFixed ? "" : "hidden"} ${
        isFixed ? "fixed-bottom" : ""
      }`}
      id="element"
    >
      <div className="footer-container">
        <div className="border"></div>
        <div className="social">
          <h4>Connect with me on</h4>
          <div className="logos">
            <a href="https://www.instagram.com/im_nethaji/" target="_blank">
              <img className="social-logo" src="/insta-logo.svg" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/imnethaji/" target="_blank">
              <img className="social-logo" src="/linked-in-logo.svg" alt="" />
            </a>
            <a href="https://github.com/imnethaji" target="_blank">
              <img className="social-logo" src="/github.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
