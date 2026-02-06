// Get Hours
export function getHours(){
    const hours = new Date().getHours();
    let greeting = "";

    if(hours < 12){
        greeting = "Good Morning";
    }
    else if(hours >= 12 && hours < 17){
        greeting = "Good Afternoon";
    } else{
        greeting = "Good Evening";
    }

    return greeting;
}

// Get Year
export function getYear(){
    const year = new Date().getFullYear();
    return year;
}