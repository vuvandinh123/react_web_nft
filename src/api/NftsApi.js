import { axiosInstance } from "./axiosInstanceConfig";

export const nftsAPI = {
    getAll(time,params) {
        var url = `/eth/v1/market/rank/nft/${time}`;
        return axiosInstance.get(url, { params })
    },
    getNFTs(params) {
        var url = '/eth/v1/address/0xcaf1d788c67BdAAC155E7dcC4D64e2004eF651D4/portfolio';
        return axiosInstance.get(url, { params })
    },
    get(address,id) {
        var url = `/eth/v1/nft/${address}/${id}/info`;
        return axiosInstance.get(url)
    },
    getPrice(address,id) {
        var url = `/eth/v1/nft/${address}/${id}/metrics`;
        return axiosInstance.get(url)
    },
}