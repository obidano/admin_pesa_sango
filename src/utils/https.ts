import axios from "axios";
import CONSTS from "./constants";

export function randomUrlParams() {
    return Math.random().toString(36).substring(7);
}

export function getHeader(token: any) {
    return {
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + token
    }
}


export async function apiGET($token: any, $url: string) {
    let rep;
    const url = CONSTS.baseUrl + `${$url}&rand=` + randomUrlParams()
    console.log('GET URL', url)
    try {
        const res = await axios.get(url
            ,
            {headers: getHeader($token)}
        );
        rep = res.data.msg;
        console.log('GET API result', res.data);

    } catch (e) {
        console.error("React Error", e.response);
    }

    return rep
}


export async function apiPOST($url: string, $token: string, $form: any, $action = 'new') {
    let st;
    const url = CONSTS.baseUrl + $url;
    console.log('GET URL', url)

    try {
        const res = await axios({
            method: $action === 'new' ? 'POST' : 'PUT',
            url: url, data: $form,
            headers: getHeader($token)
        })
        console.log('POST/PUT API result', res.data);
        st = true;
    } catch (e) {
        console.error("React Error", e.response);
    }
    return {st}
}
