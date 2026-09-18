"use strict";

const { ARTICLES } = require("../data");
const { articleCard } = require("../lib");
const { pageHero } = require("../layout");

function blogIndex() {
  const html = `
  ${pageHero({
    eyebrow: "Blog",
    title: "Blog",
    dek: "Notas más cortas sobre organización, hábitos de cocina y criterios de compra, entre guía y guía.",
  })}
  <section class="section">
    <div class="wrap">
      <div class="card-grid">
        ${ARTICLES.map(articleCard).join("\n")}
      </div>
    </div>
  </section>
  `;

  return {
    route: "blog/index.html",
    path: "/blog/",
    title: "Blog",
    description: "Artículos sobre organización de cocina, robots de cocina y pequeño electrodoméstico de CocinaIdeal.",
    breadcrumbsItems: [{ label: "Inicio", href: "/" }, { label: "Blog" }],
    html,
  };
}

module.exports = blogIndex;
