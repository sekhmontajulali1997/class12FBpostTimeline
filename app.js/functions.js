// set data to LS

const setlsdata = (key, data) => {

    localStorage.setItem(key, JSON.stringify(data))
};

// Get data FoRM LS

const getlsdata = (key)=>{
    if (localStorage.getItem(key)) {

       return JSON.parse(localStorage.getItem(key));
        
    }else{
        return [];
    }
}