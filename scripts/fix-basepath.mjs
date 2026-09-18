import fs from "node:fs";
import path from "node:path";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "/metma-de";
const outDir = path.join(process.cwd(), "out");

function shouldSkip(absPath) {
  return (
    absPath.startsWith(BASE + "/") ||
    absPath.startsWith(BASE + "?") ||
    absPath.startsWith("//") ||
    absPath.startsWith("http:") ||
    absPath.startsWith("https:") ||
    absPath.startsWith("data:") ||
    absPath.startsWith("mailto:") ||
    absPath.startsWith("tel:") ||
    absPath.startsWith("#")
  );
}

function prefixPath(p) {
  if (!p.startsWith("/") || shouldSkip(p)) return p;
  return `${BASE}${p}`;
}

function rewrite(content) {
  let next = content.replace(
    /\b(src|href)=(["'])\/(?!\/)/g,
    (_m, attr, q) => `${attr}=${q}${BASE}/`,
  );

  next = next.replace(/\b(srcset)=(["'])([^"']+)\2/gi, (_m, attr, q, value) => {
    const rewritten = value
      .split(",")
      .map((part) => {
        const trimmed = part.trim();
        const [url, ...rest] = trimmed.split(/\s+/);
        if (!url || !url.startsWith("/") || shouldSkip(url)) return part;
        return [prefixPath(url), ...rest].join(" ");
      })
      .join(", ");
    return `${attr}=${q}${rewritten}${q}`;
  });

  next = next.replace(/url\(\/(?!\/)/g, `url(${BASE}/`);
  next = next.replace(/\\"\/(?!\/)/g, `\\"${BASE}/`);
  next = next.replaceAll(`${BASE}${BASE}/`, `${BASE}/`);
  return next;
}

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) {
      walk(full);
      continue;
    }
    if (!/\.(html|js|css|json|txt)$/.test(name)) continue;
    const before = fs.readFileSync(full, "utf8");
    if (
      !/(?:src|href)=["']\/(?!metma-de\/)/.test(before) &&
      !/url\(\/(?!\/|metma-de\/)/.test(before) &&
      !/\\"\/(?!\/|metma-de\/)/.test(before)
    ) {
      continue;
    }
    const after = rewrite(before);
    if (after !== before) fs.writeFileSync(full, after);
  }
}

if (!fs.existsSync(outDir)) {
  console.error("out/ missing — run next build first");
  process.exit(1);
}

walk(outDir);
console.log(`Prefixed absolute asset paths with ${BASE}`);
