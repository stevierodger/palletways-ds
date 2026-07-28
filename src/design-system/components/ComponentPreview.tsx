import type { ReactNode } from "react";
import "./ComponentPreview.css";

export type ComponentPreviewProps = {
  title?: string;
  children: ReactNode;
  padded?: boolean;
};

export function ComponentPreview({
  title,
  children,
  padded = true,
}: ComponentPreviewProps) {
  return (
    <div className="component-preview">
      {title && <p className="component-preview__title">{title}</p>}
      <div className={`component-preview__stage ${padded ? "component-preview__stage--padded" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="code-block">
      <code>{code.trim()}</code>
    </pre>
  );
}

export function PropTable({
  rows,
}: {
  rows: Array<{ prop: string; type: string; default?: string; description: string }>;
}) {
  return (
    <table className="doc-table prop-table">
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.prop}>
            <td>
              <code>{row.prop}</code>
            </td>
            <td>
              <code>{row.type}</code>
            </td>
            <td>{row.default ? <code>{row.default}</code> : "—"}</td>
            <td>{row.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function DoDont({
  doItems,
  dontItems,
}: {
  doItems: string[];
  dontItems: string[];
}) {
  return (
    <div className="do-dont">
      <div className="do-dont__col do-dont__col--do">
        <h4>Do</h4>
        <ul>
          {doItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="do-dont__col do-dont__col--dont">
        <h4>Don&apos;t</h4>
        <ul>
          {dontItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
