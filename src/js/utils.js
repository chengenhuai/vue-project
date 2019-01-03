class Utils {
    format(opt) {
        let temp = ''
        for (let i in opt) {
            let val = opt[i] !== undefined ? opt[i] : ""
            temp += `&${i}=${encodeURI(val)}`
        }
        return temp ? temp.substring(1) : ""

    }
}
let utils = new Utils()
export default utils;