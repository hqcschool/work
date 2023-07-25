const success = (msg,code,data)=>{
    return {
        msg:msg || "success",
        code:code|| -1,
        data:data || undefined
    }
}
const Error =(msg,code,data)=>{
    return {
        msg:msg || "error",
        code:code|| -1,
    }
}


module.exports = {
    success ,
    Error
}