export interface AbonneModels {
    id_abonne?: number;
	numero?: string;
	email?: string;
	adresse? :string;
	identite?: string;
	localisation? : coordonnee_abonne;
	is_confirm? : boolean;
	is_active? : boolean;
}

export interface coordonnee_abonne {
    latitude: number;
	longitude: number;
}
