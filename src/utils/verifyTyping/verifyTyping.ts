
export const isCorrectKey = (userType:string, keyCode:number) => {
    if(userType !== undefined){
        if((keyCode >= 48 && keyCode <= 57 || keyCode >= 96 && keyCode <= 105) || (keyCode >= 65 && keyCode <= 90) || (keyCode === 186 || keyCode === 32)){ //verifica se é um número ou uma letra
            return true;
        }else{
            return false;
        }
    }
}