import {apiGET, apiPOST} from "../utils/https";
import {DashbordModels, SeptJoursModels} from "../models/dash_bord_model";

export class Dashbord {
 

    static async recupererList() {
        //const res: TestModels = await apiGET(null, "sango/index.php?dashbord=1");
		const url = 'sango/index.php?dashbord=1';
		const res: DashbordModels = await apiGET(null, url)??{};
       console.log('DATA received', res);
    }
	
	static async septDerniersJours() {
        //const res: TestModels = await apiGET(null, "sango/index.php?dashbord=1");
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



