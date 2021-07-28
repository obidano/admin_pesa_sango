import {apiGET, apiPOST} from "../utils/https";
import {CelluleModels} from "../models/cellule_model";
import {SangoModels} from "../models/sango_model";


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

	//Enregistrer une cellule	
	static async InsertCellule($data:any) {
		 
        const res = await apiPOST("sango/index.php", "", $data);

        console.log("POST Resultat", res);
    }

	//Recupérer les sango d'une cellule
	static async sangoCellule($cellule:any) {
       
		const url = 'sango/index.php?cellule='+$cellule;
		const res: SangoModels = await apiGET(null, url)??{};
       console.log('DATA received', res);
    }
}



