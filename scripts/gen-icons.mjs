#!/usr/bin/env node
/**
 * Generate Icon React components + figma.ts + assets from icons.ndjson.
 * Each line: { component, kebab, nodeId, nodeSlug, figmaName, svg }
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const iconDir = path.join(root, "src/components/Icon");
const assetsDir = path.join(iconDir, "assets");

function parsePaths(svg) {
  const paths = [];
  const re = /<path\b([^>]*)\/?>/g;
  let m;
  while ((m = re.exec(svg))) {
    const attrs = m[1];
    const d = attrs.match(/\bd="([^"]*)"/)?.[1];
    if (!d) continue;
    const fill = attrs.match(/\bfill="([^"]*)"/)?.[1];
    const stroke = attrs.match(/\bstroke="([^"]*)"/)?.[1];
    const strokeWidth = attrs.match(/\bstroke-width="([^"]*)"/)?.[1];
    const strokeLinecap = attrs.match(/\bstroke-linecap="([^"]*)"/)?.[1];
    const strokeLinejoin = attrs.match(/\bstroke-linejoin="([^"]*)"/)?.[1];
    const opacity = attrs.match(/\bopacity="([^"]*)"/)?.[1];
    paths.push({ d, fill, stroke, strokeWidth, strokeLinecap, strokeLinejoin, opacity });
  }
  return paths;
}

function pathToJsx(p) {
  const props = [`d="${p.d}"`];
  if (p.fill && p.fill !== "none") {
    props.push(p.fill === "#0F172A" ? 'fill="currentColor"' : `fill="${p.fill}"`);
  }
  if (p.stroke && p.stroke !== "none") {
    props.push(
      p.stroke === "#0F172A" ? 'stroke="currentColor"' : `stroke="${p.stroke}"`,
    );
  }
  if (p.strokeWidth) props.push(`strokeWidth="${p.strokeWidth}"`);
  if (p.strokeLinecap) props.push(`strokeLinecap="${p.strokeLinecap}"`);
  if (p.strokeLinejoin) props.push(`strokeLinejoin="${p.strokeLinejoin}"`);
  if (p.opacity) props.push(`opacity={${p.opacity}}`);
  if (p.stroke && !p.fill) props.push('fill="none"');
  return `      <path\n        ${props.join("\n        ")}\n      />`;
}

function assetSvg(paths) {
  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n${paths
    .map((p) => {
      const attrs = [`d="${p.d}"`];
      if (p.fill && p.fill !== "none")
        attrs.push(p.fill === "#0F172A" ? 'fill="currentColor"' : `fill="${p.fill}"`);
      if (p.stroke && p.stroke !== "none")
        attrs.push(p.stroke === "#0F172A" ? 'stroke="currentColor"' : `stroke="${p.stroke}"`);
      if (p.strokeWidth) attrs.push(`stroke-width="${p.strokeWidth}"`);
      if (p.strokeLinecap) attrs.push(`stroke-linecap="${p.strokeLinecap}"`);
      if (p.strokeLinejoin) attrs.push(`stroke-linejoin="${p.strokeLinejoin}"`);
      if (p.opacity) attrs.push(`opacity="${p.opacity}"`);
      if (p.stroke && !p.fill) attrs.push('fill="none"');
      return `  <path ${attrs.join(" ")}/>`;
    })
    .join("\n")}\n</svg>\n`;
}

function tsx(icon) {
  const paths = parsePaths(icon.svg);
  const pathJsx = paths.map(pathToJsx).join("\n");
  return `import type { SVGProps } from "react";
import "./Icon.css";

export type ${icon.component}Props = SVGProps<SVGSVGElement> & {
  /** Pixel size (width & height). Defaults to 24 to match Figma. */
  size?: number | string;
  title?: string;
};

/** Figma: ${icon.figmaName} */
export function ${icon.component}({
  size = 24,
  title,
  className = "",
  ...rest
}: ${icon.component}Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={\`pw-icon pw-icon--${icon.kebab} \${className}\`.trim()}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
${pathJsx}
    </svg>
  );
}
`;
}

function figmaTs(icon) {
  return `// url=https://www.figma.com/design/o92QFaFLrva3a3JJ0YS5Qp/Palletways-v1.2?node-id=${icon.nodeSlug}
// source=https://github.com/stevierodger/palletways-web/blob/main/src/components/Icon/${icon.component}.tsx
// component=${icon.component}
// figma=${icon.figmaName}
import figma from 'figma'

export default {
  example: figma.code\`<${icon.component} />\`,
  imports: ['import { ${icon.component} } from "./components/Icon"'],
  id: 'icon-${icon.kebab}',
  metadata: {
    nestable: true,
  },
}
`;
}

function main() {
  const ndjsonPath = path.join(__dirname, "icons.ndjson");
  const raw = fs.readFileSync(ndjsonPath, "utf8").trim();
  const icons = raw.split("\n").map((line) => JSON.parse(line));

  fs.mkdirSync(assetsDir, { recursive: true });

  let created = 0;
  for (const icon of icons) {
    const paths = parsePaths(icon.svg);
    fs.writeFileSync(path.join(iconDir, `${icon.component}.tsx`), tsx(icon));
    fs.writeFileSync(path.join(iconDir, `${icon.kebab}.figma.ts`), figmaTs(icon));
    fs.writeFileSync(path.join(assetsDir, `${icon.kebab}.svg`), assetSvg(paths));
    created += 3;
  }

  console.log(`Created ${created} files for ${icons.length} icons`);
}

main();
