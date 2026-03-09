import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pageTitles: Record<string, string> = {
  "/": "Raise Them Foundation",
  "/volunteer": "Volunteer - Raise Them Foundation",
  "/stories-of-impact": "Stories of Impact - Raise Them Foundation",
  "/about": "About Us - Raise Them Foundation",
  "/what-we-do": "What We Do - Raise Them Foundation",
  "/gallery": "Gallery - Raise Them Foundation",
  "/news": "News - Raise Them Foundation",
  "/scholarships": "Scholarships - Raise Them Foundation",
  "/scholarships/fully-funded": "Fully Funded Scholarships - Raise Them Foundation",
  "/scholarships/partially-funded": "Partially Funded Scholarships - Raise Them Foundation",
};

/**
 * DocumentTitle component that updates the browser tab title
 * based on the current route.
 */
const DocumentTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const title = pageTitles[location.pathname] || "Raise Them Foundation";
    document.title = title;
  }, [location.pathname]);

  return null;
};

export default DocumentTitle;
