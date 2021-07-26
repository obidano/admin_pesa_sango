import {apiGET, apiPOST} from "../utils/https";
import {AbonneModels} from "../models/abonne_model";
import {AbonnementModels} from "../models/abonnement_model";
import {GroupModels} from "../models/group_model";
import {SangoModels} from "../models/sango_model";
import {DemandesTrafficModels} from "../models/demande_traffic_model";

export class Abonne {
	
	//Liste des utilisateurs
    static async ListeAbonne() {
        //const res: TestModels = await apiGET(null, "sango/index.php?dashbord=1");
		const url = 'sango/index.php?user=1';
		const res: AbonneModels = await apiGET(null, url)??{};
       console.log('DATA received', res);
    }
	
	//Rechercher un utilisateur	
	static async RechercherAbonne($search:any) {
        const ndata_to_send = {search: $search}
        const res = await apiPOST("sango/index.php", "", ndata_to_send);

        console.log("POST Resultat", res);
    }
	
	//Recupérer les abonnements d'un user
	static async AbonnementUser($abonne:any) {
        
		const url = 'sango/index.php?abonne='+$abonne;
		const res: AbonnementModels = await apiGET(null, url)??{};
       console.log('DATA received', res);
    }
	
	//Recupérer les groupes d'user
	static async groupUser($abonne:any) {
    
		const url = 'sango/index.php?abonne='+$abonne;
		const res: GroupModels = await apiGET(null, url)??{};
       console.log('DATA received', res);
    }
	
	//Recupérer les sango d'user
	static async sangoUser($abonne:any) {
       
		const url = 'sango/index.php?abonne='+$abonne;
		const res: SangoModels = await apiGET(null, url)??{};
       console.log('DATA received', res);
    }
	
	//Recupérer les demandes de trafic d'user
	static async demandeTrafficUser($abonne:any) {
       
		const url = 'sango/index.php?abonne='+$abonne;
		const res: DemandesTrafficModels = await apiGET(null, url)??{};
       console.log('DATA received', res);
    }
	
	//Recupérer le degré d'activité d'user
	static async degreActiviteUser($abonne:any) {
       
		const url = 'sango/index.php?abonne='+$abonne;
		const res = await apiGET(null, url)??{};
       console.log('DATA received', res);
    }
	
	//Activer ou desactiver un utilisateur	
	static async ActiveAbonne($abonne:any, etat:any, $action:any) {
		if(etat === true)
		{
			$action = false
		}
		else
		{
			$action = true
		}
        const ndata_to_send = {abonne: $abonne, action: $action}
        const res = await apiPOST("sango/index.php", "", ndata_to_send);

        console.log("POST Resultat", res);
    }
}



