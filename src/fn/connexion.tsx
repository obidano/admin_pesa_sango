import {apiPOST2} from "../utils/https";
import {AbonneModels} from "../models/abonne_model";


export class Connexion {

	//Rechercher un utilisateur	
	static async Ahtentification($data:any) {

        const {st, data} = await apiPOST2("user/auth", "", $data);

        console.log("POST Resultat", data);
        localStorage.setItem('token', data?.token)
    }
	
	
}



