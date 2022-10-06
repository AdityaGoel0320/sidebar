let  cross_in_el   =  document.getElementById("cross_in")
let  line_el =  document.getElementById("line")
let  header_el   =  document.getElementById("header")



line_el.addEventListener("click" , fnc);


function   fnc(){

    header_el.classList.toggle("active") ;

}

cross_in_el.addEventListener("click" , fnc2);


function   fnc2(){

    header_el.classList.remove("active") ;

}







