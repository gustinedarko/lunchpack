import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/**
 * Resets window scroll to the top whenever the route's pathname changes
 * via PUSH or REPLACE navigation. POP (browser back/forward) is preserved
 * so the browser can restore its natural scroll position.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === "POP") return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, navigationType]);

  return null;
};

export default ScrollToTop;
