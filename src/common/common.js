import jsonp from "../js/jsonp"

export function getRecommdList() {
    const url = "https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg";
    const cof = {
        tpl: 3,
        page: "detail",
        date: "2018-07-19",
        topid: 4,
        type: "top",
        song_begin: 0,
        song_num: 30,
        g_tk: 5381,
        loginUin: 0,
        hostUin: 0,
        format: "jsonp",
        inCharset: "utf8",
        outCharset: "utf-8",
        notice: 0,
        platform: "yqq",
        needNewCode: 0
    }
    return jsonp(url, cof, {
        param: "jsonpCallback",
        prefix: "jp"
    })
}
export function getRecommdDetails(id) {
    const url = "https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg"
    const cof = {
        albummid: id,
        g_tk: "2136343799",
        loginUin: "2390116071",
        hostUin: 0,
        format: "jsonp",
        inCharset: "utf8",
        outCharset: "utf-8",
        notice: 0,
        platform: "yqq",
        needNewCode: 0
    }
    return jsonp(url, cof, {
        param: "jsonpCallback",
        prefix: "jp"
    })
}
export function getTopListDetails(id) {
    const url = "https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg"
    const cof = {
        g_tk: 5381,
        uin: 0,
        format: "json",
        inCharset: "utf-8",
        outCharset: "utf-8",
        notice: 0,
        platform: "h5",
        needNewCode: 1,
        tpl: 3,
        page: "detail",
        type: "top",
        topid: id,
        _: 1532011027362
    }
    return jsonp(url, cof, {
        param: "jsonpCallback",
        prefix: "jp"
    })
}