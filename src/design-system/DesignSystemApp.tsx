import { useCallback, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { DocLayout, type NavItem } from "./layout/DocLayout";
import { OverviewPage } from "./pages/OverviewPage";
import { ColorsPage } from "./pages/ColorsPage";
import { TypographyPage } from "./pages/TypographyPage";
import { SpacingPage } from "./pages/SpacingPage";
import { RadiusPage } from "./pages/RadiusPage";
import { ShadowsPage } from "./pages/ShadowsPage";
import { BreakpointsPage } from "./pages/BreakpointsPage";
import { ButtonPage } from "./pages/components/ButtonPage";
import { InputPage } from "./pages/components/InputPage";
import { TagPage } from "./pages/components/TagPage";
import { TrackerPage } from "./pages/components/TrackerPage";
import "./design-system.css";

const NAV: NavItem[] = [
  { id: "overview", label: "Overview" },
  {
    id: "foundations",
    label: "Foundations",
    children: [
      { id: "colors", label: "Color" },
      { id: "typography", label: "Typography" },
      { id: "spacing", label: "Spacing" },
      { id: "radius", label: "Border radius" },
      { id: "shadows", label: "Shadows" },
      { id: "breakpoints", label: "Breakpoints" },
    ],
  },
  {
    id: "components",
    label: "Components",
    children: [
      { id: "button", label: "Button" },
      { id: "input", label: "Input" },
      { id: "tag", label: "Tag" },
      { id: "tracker", label: "Tracker" },
    ],
  },
];

const PAGES: Record<string, ReactNode> = {
  overview: <OverviewPage />,
  colors: <ColorsPage />,
  typography: <TypographyPage />,
  spacing: <SpacingPage />,
  radius: <RadiusPage />,
  shadows: <ShadowsPage />,
  breakpoints: <BreakpointsPage />,
  button: <ButtonPage />,
  input: <InputPage />,
  tag: <TagPage />,
  tracker: <TrackerPage />,
};

function pageFromHash(): string {
  const hash = window.location.hash.replace(/^#\/?/, "");
  return hash && PAGES[hash] ? hash : "overview";
}

export function DesignSystemApp() {
  const [currentPage, setCurrentPage] = useState(pageFromHash);

  const navigate = useCallback((id: string) => {
    window.location.hash = id === "overview" ? "" : `#/${id}`;
    setCurrentPage(id);
  }, []);

  useEffect(() => {
    const onHashChange = () => setCurrentPage(pageFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <DocLayout nav={NAV} currentId={currentPage} onNavigate={navigate}>
      {PAGES[currentPage] ?? <OverviewPage />}
    </DocLayout>
  );
}
