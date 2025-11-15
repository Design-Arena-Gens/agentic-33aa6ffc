"use client";

import React, { useMemo, useState } from "react";
import { ideas, sectors, tags, Idea } from "../lib/ideas";
import { IdeaCard } from "../components/IdeaCard";
import { FilterBar } from "../components/FilterBar";
import { StatsBar } from "../components/StatsBar";
import { ExportButton } from "../components/ExportButton";

export default function Page() {
  const [query, setQuery] = useState("");
  const [sector, setSector] = useState<string | "">("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [capital, setCapital] = useState<"low" | "medium" | "high" | "">("");
  const [timeline, setTimeline] = useState<"immediate" | "1-3m" | "3-6m" | "">("");
  const [model, setModel] = useState<"service" | "product" | "platform" | "subscription" | "marketplace" | "">("");

  const filtered = useMemo(() => {
    return ideas.filter((i) => {
      if (sector && i.sector !== sector) return false;
      if (capital && i.capital !== capital) return false;
      if (timeline && i.revenueTimeline !== timeline) return false;
      if (model && i.model !== model) return false;
      if (selectedTags.length && !selectedTags.every((t) => i.tags.includes(t))) return false;
      if (query) {
        const q = query.toLowerCase();
        const hay = (i.title + " " + i.description + " " + i.notes + " " + i.sector + " " + i.tags.join(" ")).toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [sector, capital, timeline, model, selectedTags, query]);

  const counts = useMemo(() => {
    const quick = ideas.filter((i) => i.revenueTimeline === "immediate").length;
    const lowCap = ideas.filter((i) => i.capital === "low").length;
    const recurring = ideas.filter((i) => i.tags.includes("revenus r?currents")).length;
    return { total: ideas.length, quick, lowCap, recurring };
  }, []);

  return (
    <div>
      <div className="header">
        <div>
          <div className="badge">?le de La R?union ? March? local</div>
          <h1 className="title">Id?es de business rentables & locales</h1>
          <p className="subtitle">
            Niches peu exploit?es, tourisme, culture cr?ole, produits pays, digital, ?cologie et bien-?tre.
          </p>
        </div>
        <div className="actions">
          <ExportButton ideas={filtered} />
          <a className="button secondary" href="#grid">Voir les id?es</a>
        </div>
      </div>

      <StatsBar totals={counts} />

      <FilterBar
        query={query}
        onQueryChange={setQuery}
        sector={sector}
        onSectorChange={setSector}
        sectors={sectors}
        tags={tags}
        selectedTags={selectedTags}
        onToggleTag={(t) =>
          setSelectedTags((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]))
        }
        capital={capital}
        onCapitalChange={setCapital}
        timeline={timeline}
        onTimelineChange={setTimeline}
        model={model}
        onModelChange={setModel}
      />

      <div id="grid" className="grid" style={{ marginTop: 12 }}>
        {filtered.map((i) => (
          <div className="card" key={i.id}>
            <IdeaCard idea={i} />
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="card" style={{ textAlign: "center" }}>
            Aucune id?e ne correspond. Essayez d'?largir vos filtres.
          </div>
        )}
      </div>
    </div>
  );
}
