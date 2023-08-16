const apiRequests = async (url =(''), optionsObj= null, errMsg=null) => {
    try{
        const resp = await fetch(url,optionsObj);
        if(!resp.ok) throw Err("please reload the app")
    }
    catch (err){
        errMsg = err.message;
    }
    finally{
        return errMsg
    }
    
}

export default apiRequests