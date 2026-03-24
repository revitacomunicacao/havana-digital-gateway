import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HBOOK_ALLOWED_PATHS = ["/unidade/havana-palace-i"];

const HbookGlobalGuard = () => {
  const location = useLocation();

  useEffect(() => {
    const isAllowedPath = HBOOK_ALLOWED_PATHS.includes(location.pathname);
    if (isAllowedPath) return;

    const cleanupHbook = () => {
      const selectors = [
        "#hbook-search",
        "[id*='hbook' i]",
        "[class*='hbook' i]",
        "script[src*='hbook-universal-js']",
        "iframe[src*='hbook']",
      ];

      for (const selector of selectors) {
        const nodes = Array.from(document.querySelectorAll<HTMLElement>(selector));
        for (const node of nodes) node.remove();
      }
    };

    cleanupHbook();

    // In SPA navigation, vendor scripts may reinject fixed bars after unmount.
    const observer = new MutationObserver(() => cleanupHbook());
    observer.observe(document.body, { childList: true, subtree: true });

    const timer = window.setInterval(cleanupHbook, 500);

    return () => {
      observer.disconnect();
      window.clearInterval(timer);
    };
  }, [location.pathname]);

  return null;
};

export default HbookGlobalGuard;
