---
Projet: MAD DevOps
Document: Intégration page d’accueil maddevops.com — V1
Version: 1.0
Dernière révision: 2026-07-01
Statut: Officiel
Auteur: Marc-André Dufour
---

# Intégration page d’accueil maddevops.com — V1

## Objectif

Préparer l’intégration Web de la page d’accueil MAD DevOps V1 production, en gardant une trace claire dans le Système MAD avant transfert vers le repo du site.

Ce document sert de pont entre :

- le contenu officiel `page-accueil-mad-devops-v1-prod.md`;
- la base UI/UX accessible et cognitive;
- la future intégration HTML/CSS ou React;
- les validations CHK-015 et CHK-019.

---

## Principe d’intégration

```text
Source de vérité : SYSTEME_MAD
Implémentation : repo du site maddevops.com
Validation : CHK-015 + CHK-019
```

Le site ne doit pas être réécrit directement sans garder la trace de la logique éditoriale.

---

## Structure HTML recommandée

```html
<header class="site-header">
  <a class="brand" href="/" aria-label="MAD DevOps — Accueil">
    <img src="./img/logo.png" alt="MAD DevOps" class="brand-logo" />
  </a>
  <nav class="site-nav" aria-label="Navigation principale">
    <a href="#services">Services</a>
    <a href="#exemples">Exemples</a>
    <a href="#approche">Approche</a>
    <a href="#contact">Contact</a>
  </nav>
</header>

<main>
  <section class="hero" aria-labelledby="hero-title">
    <p class="eyebrow">MAD DevOps</p>
    <h1 id="hero-title">Des sites Web, applications et automatisations qui simplifient votre travail.</h1>
    <p class="hero-text">MAD DevOps aide les travailleurs autonomes, PME et petites organisations à transformer les tâches répétitives, les fichiers dispersés et les processus flous en outils numériques simples, utiles et adaptés à leur réalité.</p>
    <div class="hero-actions">
      <a class="button primary" href="#contact">Parler de votre besoin</a>
      <a class="button secondary" href="#services">Voir les façons de commencer</a>
    </div>
  </section>

  <section class="section" id="probleme" aria-labelledby="probleme-title">
    <h2 id="probleme-title">Vous avez un processus qui vous ralentit ?</h2>
    <p>Vous travaillez peut-être encore avec trop de fichiers Excel, de copier-coller, de suivis manuels ou de messages dispersés.</p>
    <ul>
      <li>Une méthode devenue trop lourde.</li>
      <li>Une information difficile à retrouver.</li>
      <li>Une tâche répétitive qui prend trop de temps.</li>
      <li>Un processus clair dans votre tête, mais pas encore dans un outil.</li>
    </ul>
  </section>

  <section class="section" id="services" aria-labelledby="services-title">
    <h2 id="services-title">Ce que je peux vous aider à créer</h2>
    <div class="card-grid">
      <article class="card"><h3>Sites Web</h3><p>Un site clair, professionnel et facile à comprendre.</p></article>
      <article class="card"><h3>Applications Web</h3><p>Des outils pour gérer clients, projets, suivis, formulaires ou données.</p></article>
      <article class="card"><h3>Applications mobiles</h3><p>Des applications simples pour le terrain, un service ou une idée.</p></article>
      <article class="card"><h3>Automatisations</h3><p>Des solutions pour réduire copier-coller, oublis et suivis manuels.</p></article>
      <article class="card"><h3>Outils internes</h3><p>Tableaux de bord, portails, rapports, suivis ou plateformes métier simples.</p></article>
    </div>
  </section>

  <section class="section" id="exemples" aria-labelledby="exemples-title">
    <h2 id="exemples-title">Exemples de problèmes que MAD DevOps peut aider à régler</h2>
    <p>Vous n’avez pas besoin de connaître le nom de la solution. Souvent, il suffit de reconnaître le problème.</p>
    <div class="example-grid">
      <article class="example-card"><h3>Travailleurs autonomes</h3><p>Suivis clients dispersés, soumissions répétitives, factures manuelles.</p></article>
      <article class="example-card"><h3>Petites entreprises</h3><p>Demandes dispersées, administration lourde, rapports manuels.</p></article>
      <article class="example-card"><h3>Entreprises terrain</h3><p>Rendez-vous à la main, déconnexion terrain/bureau, manque de visibilité.</p></article>
      <article class="example-card"><h3>Organismes et équipes administratives</h3><p>Formulaires papier, demandes difficiles à classer, ressaisie d’information.</p></article>
      <article class="example-card"><h3>Entrepreneurs avec une idée</h3><p>Idée floue, MVP à cadrer, première version à tester.</p></article>
    </div>
  </section>

  <section class="section" id="approche" aria-labelledby="approche-title">
    <h2 id="approche-title">Une approche simple</h2>
    <ol class="steps">
      <li><strong>Comprendre.</strong> Clarifier votre besoin en langage simple.</li>
      <li><strong>Cadrer.</strong> Définir une première version réaliste.</li>
      <li><strong>Construire.</strong> Livrer quelque chose qui règle un vrai problème.</li>
    </ol>
  </section>

  <section class="section" id="contact" aria-labelledby="contact-title">
    <h2 id="contact-title">Prêt à clarifier votre projet ?</h2>
    <p>Décrivez brièvement ce que vous aimeriez améliorer, simplifier ou automatiser. Pas besoin de termes techniques.</p>
    <a class="button primary" href="mailto:contact@maddevops.com">Parler de votre besoin</a>
  </section>
</main>
```

---

## CSS de base recommandé

```css
:root {
  --bg: #f8fafc;
  --surface: #ffffff;
  --text: #0f172a;
  --muted: #475569;
  --border: #dbe3ea;
  --primary: #1d4ed8;
  --primary-dark: #1e3a8a;
  --radius: 18px;
  --max: 1120px;
}

* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}

.site-header,
.section,
.hero {
  max-width: var(--max);
  margin: 0 auto;
  padding: 32px 20px;
}

.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.brand-logo { height: 48px; width: auto; }

.site-nav {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
}

.site-nav a,
.button {
  color: var(--text);
  text-decoration: none;
}

.hero {
  padding-top: 72px;
  padding-bottom: 72px;
}

.eyebrow {
  color: var(--primary);
  font-weight: 700;
}

h1 {
  max-width: 860px;
  font-size: clamp(2.4rem, 6vw, 4.8rem);
  line-height: 1.05;
  letter-spacing: -0.04em;
}

h2 { font-size: clamp(1.8rem, 4vw, 3rem); line-height: 1.15; }
h3 { margin-top: 0; }

.hero-text,
.section > p {
  max-width: 760px;
  color: var(--muted);
  font-size: 1.1rem;
}

.hero-actions,
.card-grid,
.example-grid {
  display: grid;
  gap: 16px;
}

.hero-actions { grid-template-columns: repeat(auto-fit, minmax(220px, max-content)); }
.card-grid { grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
.example-grid { grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); }

.card,
.example-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 22px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 12px 18px;
  border-radius: 999px;
  border: 1px solid var(--border);
  font-weight: 700;
}

.button.primary {
  background: var(--primary);
  color: #ffffff;
  border-color: var(--primary);
}

.button.primary:hover,
.button.primary:focus-visible { background: var(--primary-dark); }

.button:focus-visible,
a:focus-visible {
  outline: 3px solid var(--primary);
  outline-offset: 3px;
}

@media (max-width: 720px) {
  .site-header { align-items: flex-start; flex-direction: column; }
  .hero { padding-top: 40px; padding-bottom: 40px; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Règles de transfert vers le repo

1. Copier la structure HTML dans la page actuelle ou la convertir en composant React.
2. Conserver les sections dans l’ordre prévu.
3. Remplacer `mailto:contact@maddevops.com` par le vrai point de contact si nécessaire.
4. Vérifier que le logo existe bien à `./img/logo.png` ou ajuster le chemin.
5. Tester mobile, clavier, contraste et focus.
6. Valider avec CHK-015 et CHK-019.

---

## Points à ne pas changer sans décision

- Le message principal ne doit pas redevenir centré sur DevOps/cloud.
- BaseMAD ne doit pas être mise en avant publiquement pour l’instant.
- MADSuite/MAD Ariane ne doivent pas être présentés avec des claims cognitifs publics.
- La page doit rester concrète, non technique, sans bullshit.

---

## Décision

```text
Statut : prêt pour transfert vers repo site
Type : HTML/CSS autonome
Validation requise : CHK-015 + CHK-019 après intégration
```
