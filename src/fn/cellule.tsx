import {apiGET, apiPOST} from "../utils/https";
import {CelluleModels} from "../models/cellule_model";


export class Cellule {
	
	//Liste des cellules
    static async ListeCellule() { 
		const url = 'sango/index.php?user=1';
		const res: CelluleModels = await apiGET(null, url)??{};
       console.log('DATA received', res);
    }
	
	//Rechercher une Cellule	
	static async RechercherCellule($search:any) {
        const ndata_to_send = {search: $search}
        const res = await apiPOST("sango/index.php", "", ndata_to_send);

        console.log("POST Resultat", res);
    }
	 
	//Activer ou desactiver une cellule	
	static async ActiveCellule($cellule:any, etat:any, $action:any) {
		if(etat === 1)
		{
			$action = 'desactive'
		}
		else
		{
			$action = 'active'
		}
        const ndata_to_send = {cellule: $cellule, action: $action}
        const res = await apiPOST("sango/index.php", "", ndata_to_send);

        console.log("POST Resultat", res);
    }
}



