import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * Scrolls the window to the top whenever the route changes.
 * Renders nothing — drop it anywhere inside the Router.
 */
export function ScrollToTop() {
  const [pathname] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
