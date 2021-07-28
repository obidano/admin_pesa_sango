import {apiGET, apiPOST} from "../utils/https";
import {PointModels} from "../models/point_model";
import {CircuitModels} from "../models/circuit_model";


export class Point {
	
	//Liste des points
    static async ListePoint() { 
		const url = 'sango/index.php?user=1';
		const res: PointModels = await apiGET(null, url)??{};
       console.log('DATA received', res);
    }
	
	//Rechercher un point	
	static async RechercherPoint($search:any) {
        const ndata_to_send = {search: $search}
        const res = await apiPOST("sango/index.php", "", ndata_to_send);

        console.log("POST Resultat", res);
    }

	//Modifier un point	
	static async UpdatePoint($id:any, $data:any) {
        
        const res = await apiPOST("sango/index.php?id="+$id, "", $data);

        console.log("POST Resultat", res);
    }
	 
	//Activer ou desactiver un point	
	static async ActivePoint($point:any, etat:any, $action:any) {
		if(etat === 1)
		{
			$action = 'desactive'
		}
		else
		{
			$action = 'active'
		}
        const ndata_to_send = {point: $point, action: $action}
        const res = await apiPOST("sango/index.php", "", ndata_to_send);

        console.log("POST Resultat", res);
    }

	//Enregistrer un point	
	static async InsertPoint($data:any) {
		 
        const res = await apiPOST("sango/index.php", "", $data);

        console.log("POST Resultat", res);
    }

	//Recupérer les circuits d'un point
	static async circuitPoint($point:any) {
       
		const url = 'sango/index.php?point='+$point;
		const res: CircuitModels = await apiGET(null, url)??{};
       console.log('DATA received', res);
    }
}



