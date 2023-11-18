import axios from "axios";

// creating generic request
export const axiosInstance=axios.create({});

export const apiConnector=(method, url, bodyData, headers, params)=>{
    return axiosInstance({
        method:`${method}`,
        url:`${url}`,
        data: bodyData ? bodyData :null,
        headers: headers ? headers : null,
        params: params ? params : null
    });
}