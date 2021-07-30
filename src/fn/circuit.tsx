import {apiGET, apiPOST} from "../utils/https";
import {PointModels} from "../models/point_model";
import {CircuitModels} from "../models/circuit_model";
import {SangoModels} from "../models/sango_model";
import {DemandesTrafficModels} from "../models/demande_traffic_model";

export class Circuit {
	
	//Liste des circuits
    static async ListeCircuit() { 
		const url = 'sango/index.php?user=1';
		const res: CircuitModels = await apiGET(null, url)??{};
       console.log('DATA received', res);
    }
	
	//Rechercher un circuit	
	static async RechercherCircuit($search:any) {
        const ndata_to_send = {search: $search}
        const res = await apiPOST("sango/index.php", "", ndata_to_send);

        console.log("POST Resultat", res);
    }

	//Modifier un Circuit
	static async UpdateCircuit($id:any, $data:any) {
        
        const res = await apiPOST("sango/index.php?id="+$id, "", $data);

        console.log("POST Resultat", res);
    }
	 
	//Activer ou desactiver un Circuit	
	static async ActiveCircuit($circuit:any, etat:any, $action:any) {
		if(etat === 1)
		{
			$action = 'desactive'
		}
		else
		{
			$action = 'active'
		}
        const ndata_to_send = {circuit: $circuit, action: $action}
        const res = await apiPOST("sango/index.php", "", ndata_to_send);

        console.log("POST Resultat", res);
    }

	//Enregistrer un Circuit	
	static async InsertCircuit($data:any) {
		 
        const res = await apiPOST("sango/index.php", "", $data);

        console.log("POST Resultat", res);
    }

	//Recupérer les points d'un circuit
	static async PointsCircuit($circuit:any) {
       
		const url = 'sango/index.php?point='+$circuit;
		const res: PointModels = await apiGET(null, url)??{};
       console.log('DATA received', res);
    }

    //Recupérer les sango d'un circuit
	static async sangoCircuit($circuit:any) {
       
		const url = 'sango/index.php?point='+$circuit;
		const res: SangoModels = await apiGET(null, url)??{};
       console.log('DATA received', res);
    }

    //Recupérer les demandes trafic d'un circuit
	static async DemandesTrafficCircuit($circuit:any) {
       
		const url = 'sango/index.php?point='+$circuit;
		const res: DemandesTrafficModels = await apiGET(null, url)??{};
       console.log('DATA received', res);
    }
}



