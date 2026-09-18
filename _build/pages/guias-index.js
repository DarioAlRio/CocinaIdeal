"use strict";

const { GUIDES } = require("../data");
const { guideCard } = require("../lib");
const { pageHero } = require("../layout");

function guiasIndex() {
  const html = `
  ${pageHero({
    eyebrow: "Guías de compra",
    title: "Todas las guías",
    dek: "Criterios para elegir robots de cocina, freidoras de aire, batidoras, cafeteras y demás pequeño electrodoméstico, sin recomendar una marca concreta.",
  })}
  <section class="section">
    <div class="wrap">
      <div class="card-grid">
        ${GUIDES.map(guideCard).join("\n")}
      </div>
    </div>
  </section>
  `;

  return {
    route: "guias/index.html",
    path: "/guias/",
    title: "Guías de compra",
    description: "Todas las guías de compra de CocinaIdeal: robots de cocina, freidoras de aire, batidoras, cafeteras, básculas, organizadores, sartenes, tostadoras, recipientes herméticos y cuchillos de cocina.",
    breadcrumbsItems: [{ label: "Inicio", href: "/" }, { label: "Guías de compra" }],
    html,
  };
}

module.exports = guiasIndex;
