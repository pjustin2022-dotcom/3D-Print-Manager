# 3D Print Manager

Application web mobile de gestion d'un atelier d'impression 3D.

## Démarrage
Ouvre `index.html` dans un navigateur pour un premier test. Pour utiliser l'installation PWA dans Safari sur iPhone, le projet doit être publié sur un hébergement HTTPS.

## Continuer le développement avec Codex
Lis le fichier `CODEX_CONTEXT.md` avant de modifier le projet. Il contient les besoins, les règles métier, les limites connues et la première mission d'audit.

## Attention aux données
La version actuelle stocke les données dans le navigateur avec localStorage. Elles ne sont pas synchronisées entre appareils. Utilise l'export JSON pour faire une sauvegarde.

## Alertes de filament
Quand une bobine passe sous 15 % de son poids total à la création d'une bobine ou à la confirmation d'une commande, l'application l'affiche dans le tableau de bord et dans le stock. Dans l'onglet « Filaments », active les notifications pour recevoir aussi un rappel Windows. Le navigateur demande cette autorisation une seule fois.

Sans backend, l'application ne peut détecter une baisse de stock que lorsqu'elle enregistre une opération ; elle ne peut pas envoyer de notification si aucun navigateur ou appareil n'est ouvert.

## Imprimantes personnelles
Dans « Réglages », chaque utilisateur peut ajouter sa propre imprimante avec son nom, son volume maximal X × Y × Z et son coût horaire. Ces réglages sont enregistrés dans son navigateur, comme ses filaments et ses commandes. Aucun compte n'est nécessaire dans cette version ; les données ne sont donc pas synchronisées entre appareils.

## Installation sur Windows
Après publication sur HTTPS, ouvre l'application une fois dans Microsoft Edge ou Google Chrome, puis utilise le menu Applications pour l'installer et créer un raccourci de bureau. Opera GX permet d'utiliser l'application web, mais n'offre pas la même installation PWA native sous Windows.

