import {apiGET, apiPOST} from "../utils/https";
import {TestModels} from "../models/test-models";

export class TestFn {


    static calculate() {
        return 1 + 1; //
    }

    static async recupererList() {
        const res: TestModels = await apiGET(null, "mining/client?");
        console.log('DATA received', res);
    }


    static async envoyer_data() {
        const ndata_to_send = {name: "d", prenom: ""}
        const res = await apiPOST("mining/client", "", ndata_to_send)

        console.log("POST Resultat", res)
    }

}



