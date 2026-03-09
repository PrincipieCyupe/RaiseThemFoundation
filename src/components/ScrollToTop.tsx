import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component that resets the scroll position to the top
 * whenever the route changes. This ensures users always start at the
 * top of the page when navigating between routes.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top of the page when pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
