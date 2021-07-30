import {apiGET, apiPOST} from "../utils/https";
import {SangoModels} from "../models/sango_model";


export class Sango {
	
	//Liste des sango
    static async ListeSango() { 
		const url = 'sango/index.php?user=1';
		const res: SangoModels = await apiGET(null, url)??{};
       console.log('DATA received', res);
    }
	
	//Rechercher un sango	
	static async RechercherSango($search:any) {
        const ndata_to_send = {search: $search}
        const res = await apiPOST("sango/index.php", "", ndata_to_send);

        console.log("POST Resultat", res);
    }
 
}



