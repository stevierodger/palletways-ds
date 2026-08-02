import { useEffect, useState } from "react";
import { DesignSystemApp } from "./design-system/DesignSystemApp";
import { HomePage } from "./pages/HomePage";
import "./App.css";

function useHash() {
  const [hash, setHash] = useState(
    () => (typeof window !== "undefined" ? window.location.hash : ""),
  );

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return hash;
}

/** True when the hash points at design-system docs (not home). */
function isDesignSystemHash(hash: string) {
  if (!hash.startsWith("#/")) return false;
  const path = hash.slice(2).split("?")[0];
  if (!path || path === "home") return false;
  return true;
}

function App() {
  const hash = useHash();

  if (isDesignSystemHash(hash)) {
    return (
      <div className="design-system-app">
        <DesignSystemApp />
      </div>
    );
  }

  return <HomePage />;
}

export default App;
