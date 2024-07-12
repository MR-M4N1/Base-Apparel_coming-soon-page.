function Mani() {
    const email = document.getElementById("Input").value;
    const ErrorMessage = document.getElementById("Error_Massage");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const Error_Svg = document.getElementById("Error_Svg");
    if(!emailPattern.test(email) || emailPattern === null){
        ErrorMessage.style.visibility = "visible";
        document.getElementById("Input").value = null
        Error_Svg.style.visibility = "visible";
        setTimeout(() => {
            ErrorMessage.style.visibility = "hidden";
            Error_Svg.style.visibility = "hidden";

        }, 1000);
    }
    else{
        ErrorMessage.innerHTML ="Complite !";
        ErrorMessage.style.color ="Lime";
        document.getElementById("Input").value = null;
        setTimeout(() => {
            ErrorMessage.style.visibility = "hidden"
            Error_Svg.style.visibility = "hidden";
        }, 1000);
    }
}

