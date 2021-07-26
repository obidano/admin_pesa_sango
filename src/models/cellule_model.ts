export interface CelluleModels {
    id_cellule?: number;
	name?: string;
	coordonnees?: coordonnee_cellule[];
	centre?: coordonnee_cellule;
 
}

export interface coordonnee_cellule {
    latitude?: number;
	longitude?: number;
}