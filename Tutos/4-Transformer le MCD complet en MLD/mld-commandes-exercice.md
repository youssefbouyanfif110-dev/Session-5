Table : CATEGORIE
-----------------
code_categorie (PK)
nom_categorie


Table : REPAS
-------------
code_repas (PK)
nom_repas
description_repas
prix_repas
code_categorie (FK)


Table : CLIENT
--------------
code_client (PK)
nom_client
prenom_client
email_client
telephone_client


Table : COMMANDE
----------------
code_commande (PK)
date_commande
heure_commande
statut_commande
code_client (FK)


Table : CONTENIR
----------------
code_repas (PK, FK)
code_commande (PK, FK)
quantite_cmd
prix_unitaire_cmd