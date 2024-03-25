
export const isCorrectKey = (userType:string, keyCode:number) => {
    if(userType !== undefined){
        if(keyCode >= 48 && keyCode <= 57){ //verifica se é número
            if(keyCode >= 96 && keyCode <= 105){ //verifica se é número
                if(keyCode >= 65 && keyCode <= 90){ //verifica se é letra
                    return true
                }else{
                    return false
                }
            }d
        }else{
            return false
        }
    }
}   

export const verifySpace = (userType:string, keyCode:number) => {
    if(userType !== undefined && userType == "space"){
        if(keyCode == 32){
            return true;
        }else{
            return false;
        }
    }
}