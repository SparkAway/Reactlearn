const initCount=0;
export default function countReducer(prestate=initCount,action){
    const{type,data} = action
    switch (type){
        case "increment":
            return prestate + data;
        case "decrement":
            return prestate - data;
        case "multi":
            return prestate * data;
        case "divi":
            return prestate / data;
        default:
            return prestate;
    }
}
