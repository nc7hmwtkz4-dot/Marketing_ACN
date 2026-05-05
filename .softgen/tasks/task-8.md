---
title: Isolation visuelle des pages
status: in_progress
priority: high
type: chore
tags:
  - architecture
  - styles
  - isolation
created_by: agent
created_at: 2026-05-05 08:52:51 UTC
position: 8
---

## Notes
Objectif : éviter qu'une modification visuelle ou comportementale spécifique à une page se propage aux autres pages du site. Conserver le contenu textuel existant. Priorité aux styles globaux et composants partagés qui créent des effets de bord entre la homepage et les autres pages.

## Checklist
- [ ] Vérifier les styles globaux et identifier les comportements spécifiques à la homepage appliqués à tout le site
- [ ] Déplacer les comportements spécifiques à la homepage vers la page d'accueil ou ses composants dédiés
- [ ] Vérifier les composants partagés utilisés par plusieurs pages et éviter les dépendances visuelles non désirées
- [ ] Valider que la homepage et la page 404 restent visuellement cohérentes sans effets de bord croisés
- [ ] Marquer la tâche comme terminée après validation

## Acceptance
Les styles et comportements propres à la homepage ne s'appliquent plus globalement aux autres pages.
Une modification visuelle ciblée sur une page n'entraîne plus de changement involontaire sur une autre page.