// utilities functions




    const enc = (x) => encodeURIComponent(x)

    const _data2UrlQuery = (kv) => (
        Object.entries(kv)
        .map((x) => enc(x[0]) + '=' + enc(x[1]))
        .join('&')
    )


const _getDataFromURLQuery = (URLSEARCH) => {
    const u = new URLSearchParams(URLSEARCH);
    const k = {};
    for (let i of u.keys()) k[i] = (+u.get(i));
    return k;
}
const _isEmpty = (object_) => (object_ === undefined || object_ ==null|| Object.entries(object_).length === 0);
const _undefined2empty = (object_) => object_ === undefined ? '' : object_
const _isDiff = (a,b) => {
    //handle undefined case
    return typeof(a)!==typeof(b) ? true : a !== b
}



const utils = {
    _getDataFromURLQuery,
    _isEmpty,
    _undefined2empty,
    _isDiff,
    _data2UrlQuery
}
export default utils;