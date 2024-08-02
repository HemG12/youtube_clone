export const API_KEY = 'AIzaSyDG2zatqCs4VRcWoAGn8-UWiR488IDaaMo'

export const convert =(value)=>{
    if (value >= 1000000){
        return Math.floor(value/100000)+"M";
    }
    else if(value>= 1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}