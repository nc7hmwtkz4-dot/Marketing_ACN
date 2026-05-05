---
title: Isolation visuelle des pages
status: done
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
Objectif : éviter qu'une modification visuelle ou comportementale spécifique à une page se propage aux autres pages du site. Conserver le contenu textuel existant. Priorité aux styles globaux et composants partagés qui créent des effets de bord entre la homepage et les autres pages. Restaurer toutes les sections de la homepage dans src/pages/index.tsx sans modifier les textes déjà validés.

## Checklist
- [x] Vérifier les styles globaux et identifier les comportements spécifiques à la homepage appliqués à tout le site
- [x] Déplacer les comportements spécifiques à la homepage vers la page d'accueil ou ses composants dédiés
- [x] Vérifier les composants partagés utilisés par plusieurs pages et éviter les dépendances visuelles non désirées
- [x] Restaurer toutes les sections manquantes de la homepage dans src/pages/index.tsx
- [x] Vérifier que la navigation de scroll pointe à nouveau vers toutes les sections
- [x] Valider que la homepage et la page 404 restent visuellement cohérentes sans effets de bord croisés
- [x] Marquer la tâche comme terminée après validation

## Acceptance
Les styles et comportements propres à la homepage ne s'appliquent plus globalement aux autres pages.
La homepage affiche à nouveau toutes ses sections sans altération du contenu textuel.
Une modification visuelle ciblée sur une page n'entraîne plus de changement involontaire sur une autre page.