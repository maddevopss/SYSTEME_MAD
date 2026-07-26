---
Projet: MAD DevOps
Document: Étage 9D — Confirmation humaine
Version: 1.0
Dernière révision: 2026-07-25
Statut: Proposition
Auteur: Marc-André Dufour
---

# Étage 9D — Confirmation humaine

## Intention

L’intelligence propose; une personne autorisée décide lorsque l’action produit un effet significatif. La confirmation humaine doit être réelle, informée et libre, non un clic décoratif placé après une décision déjà exécutée.

## Exigences

Avant confirmation, l’interface présente l’action, les données touchées, l’explication, les conséquences, les limites, les options de modification et le moyen d’annuler lorsque possible. L’identité, l’autorité et le moment de la confirmation sont journalisés.

## Règles

- aucune action irréversible ou sensible n’est exécutée avant confirmation;
- la confirmation ne peut être présumée par silence, minuterie ou case précochée;
- la personne doit pouvoir modifier, refuser ou reporter;
- les politiques serveur revalident les droits et les données au moment de l’exécution;
- une ancienne confirmation ne s’applique pas à un contexte modifié;
- les confirmations répétitives doivent être conçues pour éviter l’automatisme aveugle;
- une délégation doit être explicite, limitée et révocable.

## Niveaux de contrôle

Une suggestion sans effet peut être affichée librement. Une action réversible nécessite une confirmation claire. Une action financière, juridique, sécuritaire, destructive ou touchant plusieurs personnes exige une confirmation renforcée et, lorsque le risque le justifie, une seconde autorité.

## Responsabilité

La personne qui confirme demeure responsable de sa décision dans les limites raisonnables de l’information fournie. L’organisation demeure responsable de la qualité de l’interface, des politiques serveur, de l’accès aux preuves et de l’absence de manipulation.

## Application à MADSuite

L’envoi d’un rappel, la finalisation d’une facture, l’application d’un paiement, la révocation d’un accès, la suppression de données ou l’acceptation d’un classement comptable proposé doivent être confirmés et validés côté serveur.

## Fermeture

La section est fermée lorsque les actions significatives sont recensées, les niveaux de confirmation sont définis, les politiques serveur empêchent le contournement, la révocation et l’annulation sont testées et les confirmations peuvent être auditées.