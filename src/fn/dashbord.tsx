import {apiGET, apiGET2, apiPOST} from "../utils/https";
import {DashbordModels, SeptJoursModels} from "../models/dash_bord_model";

export class Dashbord {
 

    static async recupererList() {
     
		const url = 'dashboard/data?';
        const token = localStorage.getItem('token')??""
		const res: DashbordModels = await apiGET2(token, url)??{};
       console.log('DATA received', res);
    }
	
	static async septDerniersJours() {
       
		const url = 'sango/index.php?sept=1';
		const res: SeptJoursModels = await apiGET(null, url)??{};
       console.log('DATA received', res);
    }


    static async envoyer_data() {
        const ndata_to_send = {title: "Agape", body: "bonjour la famille", userId: 13}
        const res = await apiPOST("sango/index.php", "", ndata_to_send);

        console.log("POST Resultat", res);
    }

}



