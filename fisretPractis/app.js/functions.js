// ls set data functions

const setdata = (key, data) =>{

    localStorage.setItem(key, JSON.stringify(data));

};

//ls get data functions
const getdata = (key) =>{
    if (localStorage.getItem(key)) {
        return JSON.parse( localStorage.getItem(key));
    }else{
        return[];
    }

};