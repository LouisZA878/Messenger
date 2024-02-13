import axios from 'axios'
import { headers } from 'next/headers'

export default () => {

    const headersObj = {};
    const headersList = headers().forEach((header, key) => {
      //@ts-ignore
      headersObj[key] = header;
    });
   
    // console.log("headersobj",     headersObj)
    // console.log("headersList", headersList)

    return axios.create({
        baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
        headers: headersObj
    })
}