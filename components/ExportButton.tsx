"use client";
import React from "react";
import type { Idea } from "../lib/ideas";

function toMarkdown(ideas: Idea[]) {
  const lines: string[] = [];
  lines.push(`# Id?es de business ? La R?union`);
  const now = new Date().toLocaleString("fr-FR");
  lines.push(`_Export: ${now}_`);
  for (const i of ideas) {
    lines.push("");
    lines.push(`## ${i.title}`);
    lines.push(`- Secteur: ${i.sector}`);
    lines.push(`- Mod?le: ${i.model}`);
    lines.push(`- Capital: ${i.capital}`);
    lines.push(`- D?lai revenus: ${i.revenueTimeline}`);
    lines.push(`- Tags: ${i.tags.join(", ")}`);
    lines.push("");
    lines.push(i.description);
    if (i.steps?.length) {
      lines.push("");
      lines.push("### ?tapes rapides");
      for (const s of i.steps) lines.push(`- ${s}`);
    }
    if (i.pricing?.length) {
      lines.push("");
      lines.push("### Id?es de pricing");
      for (const p of i.pricing) lines.push(`- ${p}`);
    }
    if (i.notes) {
      lines.push("");
      lines.push(`> ${i.notes}`);
    }
  }
  return lines.join("\n");
}

export function ExportButton({ ideas }: { ideas: Idea[] }) {
  const onExport = () => {
    const md = toMarkdown(ideas);
    const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `idees-reunion-${new Date().toISOString().slice(0, 10)}.md`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };
  return (
    <button className="button" onClick={onExport} title="Exporter en Markdown">
      Exporter la s?lection
    </button>
  );
}
