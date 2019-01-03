import originJsonp from "jsonp"
import utils from "./utils"
export default function jsonp(url, cof, opt) {
    return new Promise((resolve, reject) => {
        url += (url.indexOf('?') < 0 ? "?" : "&") + utils.format(cof)
        originJsonp(url, opt, (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}