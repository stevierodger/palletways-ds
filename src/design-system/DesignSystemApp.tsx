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
import { ActionAddPage } from "./pages/components/ActionAddPage";
import { BadgePage } from "./pages/components/BadgePage";
import { BreadcrumbsPage } from "./pages/components/BreadcrumbsPage";
import { ButtonPage } from "./pages/components/ButtonPage";
import { CalendarDatePage } from "./pages/components/CalendarDatePage";
import { CardNumberBadgePage } from "./pages/components/CardNumberBadgePage";
import { CheckboxPage } from "./pages/components/CheckboxPage";
import { ChipPage } from "./pages/components/ChipPage";
import { CounterPage } from "./pages/components/CounterPage";
import { InputPage } from "./pages/components/InputPage";
import { SwitchPage } from "./pages/components/SwitchPage";
import { TagPage } from "./pages/components/TagPage";
import { TogglePage } from "./pages/components/TogglePage";
import { TrackerPage } from "./pages/components/TrackerPage";
import { TrustpilotPage } from "./pages/components/TrustpilotPage";
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
      { id: "action-add", label: "ActionAdd" },
      { id: "badge", label: "Badge" },
      { id: "breadcrumbs", label: "Breadcrumbs" },
      { id: "button", label: "Button" },
      { id: "calendar-date", label: "CalendarDate" },
      { id: "card-number-badge", label: "CardNumberBadge" },
      { id: "checkbox", label: "Checkbox" },
      { id: "chip", label: "Chip" },
      { id: "counter", label: "Counter" },
      { id: "input", label: "Input" },
      { id: "switch", label: "Switch" },
      { id: "tag", label: "Tag" },
      { id: "toggle", label: "Toggle" },
      { id: "tracker", label: "Tracker" },
      { id: "trustpilot", label: "Trustpilot" },
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
  "action-add": <ActionAddPage />,
  badge: <BadgePage />,
  breadcrumbs: <BreadcrumbsPage />,
  button: <ButtonPage />,
  "calendar-date": <CalendarDatePage />,
  "card-number-badge": <CardNumberBadgePage />,
  checkbox: <CheckboxPage />,
  chip: <ChipPage />,
  counter: <CounterPage />,
  input: <InputPage />,
  switch: <SwitchPage />,
  tag: <TagPage />,
  toggle: <TogglePage />,
  tracker: <TrackerPage />,
  trustpilot: <TrustpilotPage />,
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
