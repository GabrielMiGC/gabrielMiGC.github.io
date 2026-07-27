(function () {
  const copy = {
    en: {
      nav_home: "home",
      nav_design: "design",
      nav_projects: "projects",
      nav_back: "back",
      hero_kicker: "social media design / motion icons",
      hero_title: 'Design <span>Portfolio</span>',
      hero_lede: "A compact gallery of Instagram carousels, static posts, and interface-driven visual systems created for product narratives.",
      hero_cta: "View projects",
      hero_home: "Data portfolio",
      statement_kicker: "practice",
      statement_title: "Design support for product storytelling",
      statement_body: "I create designs in Canva, edit motion and short-form pieces in CapCut, and often develop visual assets for systems and products from Miranda Labs.",
      projects_kicker: "selected work",
      projects_title: "Project pages",
      card_orkestra: "Event platform visuals, carousel cards, interface concepts, and loading state icon animations.",
      card_qomanda: "Restaurant-focused carousel presenting operational pains and a direct product promise.",
      card_nutripro: "Healthcare management carousel structured around clinic routines and system modules.",
      footer_text: "Gabriel Miranda &middot; Design Portfolio",
      orkestra_kicker: "Orkestra",
      orkestra_title: 'Orkestra <span>Design System</span>',
      orkestra_lede: "Cards, interface fragments, concept screens, and loading state animations for a platform with a music and event operations identity.",
      qomanda_kicker: "Qomanda",
      qomanda_title: 'Qomanda <span>Carousel</span>',
      qomanda_lede: "A short Instagram carousel designed for restaurants, moving from operational friction to a clear digital ordering solution.",
      nutripro_kicker: "NutriPro",
      nutripro_title: 'NutriPro <span>Carousel</span>',
      nutripro_lede: "An eight-card Instagram carousel presenting a clinic management system through practical product modules.",
      gallery_kicker: "instagram assets",
      gallery_title: "Carousel cards",
      loading_kicker: "motion icons",
      loading_title: "Loading states",
      loading_body: "A set of animated loader concepts for Orkestra, using rhythm, audio, stage, and dashboard references to make waiting states feel branded.",
      concept_kicker: "interface studies",
      concept_title: "Concept screens",
      back_design: "Back to design portfolio",
      visit_loader: "Open loading states"
    },
    pt: {
      nav_home: "inicio",
      nav_design: "design",
      nav_projects: "projetos",
      nav_back: "voltar",
      hero_kicker: "design para social media / motion icons",
      hero_title: 'Portf&oacute;lio de <span>Design</span>',
      hero_lede: "Uma galeria compacta de carross&eacute;is para Instagram, posts est&aacute;ticos e sistemas visuais guiados por narrativa de produto.",
      hero_cta: "Ver projetos",
      hero_home: "Portf&oacute;lio de dados",
      statement_kicker: "pr&aacute;tica",
      statement_title: "Design para comunicar produtos",
      statement_body: "Fa&ccedil;o designs utilizando Canva, edito usando CapCut e costumo desenvolver pe&ccedil;as visuais para sistemas e produtos da Miranda Labs.",
      projects_kicker: "trabalhos selecionados",
      projects_title: "P&aacute;ginas dos projetos",
      card_orkestra: "Visual de plataforma de eventos, cards de carrossel, conceitos de interface e anima&ccedil;&otilde;es de loading states.",
      card_qomanda: "Carrossel focado em restaurantes, conectando dores operacionais a uma promessa direta de produto.",
      card_nutripro: "Carrossel para gest&atilde;o de cl&iacute;nicas, organizado em torno da rotina e dos m&oacute;dulos do sistema.",
      footer_text: "Gabriel Miranda &middot; Portf&oacute;lio de Design",
      orkestra_kicker: "Orkestra",
      orkestra_title: 'Sistema visual <span>Orkestra</span>',
      orkestra_lede: "Cards, fragmentos de interface, telas conceituais e anima&ccedil;&otilde;es de loading states para uma plataforma com identidade de m&uacute;sica e opera&ccedil;&otilde;es de eventos.",
      qomanda_kicker: "Qomanda",
      qomanda_title: 'Carrossel <span>Qomanda</span>',
      qomanda_lede: "Um carrossel curto para Instagram voltado a restaurantes, saindo da dor operacional para uma solu&ccedil;&atilde;o clara de pedidos digitais.",
      nutripro_kicker: "NutriPro",
      nutripro_title: 'Carrossel <span>NutriPro</span>',
      nutripro_lede: "Um carrossel de oito cards para Instagram apresentando um sistema de gest&atilde;o cl&iacute;nica por m&oacute;dulos pr&aacute;ticos de produto.",
      gallery_kicker: "pe&ccedil;as para instagram",
      gallery_title: "Cards do carrossel",
      loading_kicker: "motion icons",
      loading_title: "Loading states",
      loading_body: "Um conjunto de loaders animados para o Orkestra, usando refer&ecirc;ncias de ritmo, &aacute;udio, palco e dashboard para tornar estados de espera mais marcantes.",
      concept_kicker: "estudos de interface",
      concept_title: "Telas conceituais",
      back_design: "Voltar ao portf&oacute;lio de design",
      visit_loader: "Abrir loading states"
    }
  };

  const supported = ["en", "pt"];
  const saved = localStorage.getItem("designLang");
  let lang = supported.includes(saved) ? saved : (document.documentElement.dataset.lang || "pt");

  function applyLang(nextLang) {
    lang = supported.includes(nextLang) ? nextLang : "pt";
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.documentElement.dataset.lang = lang;
    localStorage.setItem("designLang", lang);

    document.querySelectorAll("[data-key]").forEach((element) => {
      const key = element.dataset.key;
      const value = copy[lang][key];
      if (!value) return;
      element.innerHTML = value;
    });

    document.querySelectorAll("[data-lang-target]").forEach((button) => {
      button.textContent = lang === "pt" ? "EN" : "PT";
      button.setAttribute("aria-label", lang === "pt" ? "Switch to English" : "Alternar para portugues");
    });
  }

  function duplicateRails() {
    document.querySelectorAll("[data-duplicate]").forEach((track) => {
      if (track.dataset.ready === "true") return;
      const children = Array.from(track.children);
      const minimumHalfWidth = window.innerWidth * 1.4;
      let guard = 0;
      while (track.scrollWidth < minimumHalfWidth && guard < 8) {
        children.forEach((child) => track.appendChild(child.cloneNode(true)));
        guard += 1;
      }
      Array.from(track.children).forEach((child) => track.appendChild(child.cloneNode(true)));
      track.dataset.ready = "true";
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    duplicateRails();
    applyLang(lang);

    document.querySelectorAll("[data-lang-target]").forEach((button) => {
      button.addEventListener("click", () => applyLang(lang === "pt" ? "en" : "pt"));
    });
  });
})();
