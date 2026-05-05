---
title: Isolation des surfaces visuelles par page
status: done
priority: high
type: chore
tags:
  - architecture
  - isolation
  - pages
created_by: agent
created_at: 2026-05-05 11:40:25 UTC
position: 9
---

## Notes
Stabiliser l'architecture visuelle pour que chaque page puisse être modifiée indépendamment sans effet de bord sur les autres. Réduire les dépendances des pages aux composants UI partagés pour les éléments brandés. Ne pas modifier les textes existants.

## Checklist
- [x] Identifier les composants partagés qui propagent des changements visuels entre pages
- [x] Extraire les actions visuelles de la homepage vers un composant dédié à la homepage
- [x] Retirer la dépendance de la page 404 au bouton UI partagé
- [x] Valider que la homepage et la page 404 gardent leur rendu sans dépendre d'un style partagé de page
- [x] Vérifier l'absence d'erreurs TypeScript, lint et runtime

## Acceptance
Les CTA brandés de la homepage peuvent être modifiés sans changer la page 404.
La page 404 peut être retouchée visuellement sans dépendre d'un composant UI partagé utilisé ailleurs.
Les styles globaux restent neutres et ne portent plus de présentation propre à une page.