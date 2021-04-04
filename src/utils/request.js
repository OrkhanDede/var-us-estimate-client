import axios from "axios";
import { getErrorMessage } from "@/utils/errorMessage";
import { formatQueryString } from "@/helpers/urlHelper";
import notify from "@/utils/notify";
// create an axios instance
const service = axios.create({
    baseURL: "https://localhost:44301/api", // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    // timeout: 5000 // request timeout
    returnFullResponse: true,
    popupErrorMessage: true,
    paramsSerializer: params => formatQueryString(params),
    withCredentials: true
});

// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent
        return config;
    },
    error => {
        // do something with request error
        return Promise.reject(error);
    }
);

// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
        const res = response.data;

        const result = response.data.result;

        const { config, status } = response;
        if (status !== 200) {
            let errorMessage = "";
            if (status === 401 || status === 403) {
                // store.dispatch("user/resetToken").then(() => {
                //     location.reload();
                // });
                alert(status);
            } else {
                errorMessage = getErrorMessage(res)[0].reason;
                if (config.popupErrorMessage) {
                    this.$notify("error", "Error", errorMessage || "Error", {
                        duration: 3000,
                        permanent: false
                    });
                }
            }
            if (config.popupErrorMessage) {
                return Promise.reject(new Error(errorMessage || "Error"));
            } else {
                if (config.returnFullResponse) return res;
                else return result;
            }
        } else {
            if (config.returnFullResponse) return res;
            else return result;
        }
    },
    error => {
        var isPopup = error.config.popupErrorMessage;
        console.log("🚀 ~ file: request.js ~ line 83 ~ isPopup", isPopup);
        var response = error.response.data;
        const messages = getErrorMessage(response);
        console.log("🚀 ~ file: request.js ~ line 85 ~ messages", messages);
        if (isPopup) notify.error("Error", 'messages[0].reason' || "Error");
        return Promise.reject(error.response);
    }
);

export default service;