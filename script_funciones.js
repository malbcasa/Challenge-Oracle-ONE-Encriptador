function encriptar() {
    const textoEncriptar = document.getElementById("textinput").value
    var textoEncriptado = ""
    const frame5 = document.getElementsByClassName("frame5")[0]

    if(!document.getElementsByClassName("resultado")[0]){
        var p = document.createElement("p");
        frame5.insertBefore(p,frame5.firstChild);
        p.classList.add("resultado")  ; 
    }else{
        var p = document.getElementsByClassName("resultado")[0]
    }

    const pattern = /[á-óA-Z*+\-?^$@{}()|]/
    if (!pattern.test(textoEncriptar)){

        if (textoEncriptar != "Ingrese el texto aqui" && textoEncriptar != ""){
            document.getElementById("muneco_id").style.display = "none" ;
            document.getElementById("frame5__texto1_id").style.display = "none" ;
            document.getElementById("frame5__texto2_id").style.display = "none" ;
            
            for (let i = 0 ; i < textoEncriptar.length ; i++){
                if (textoEncriptar.charAt(i) == "a"){
                    textoEncriptado = textoEncriptado + textoEncriptar.substring(i,i+1) + "i";
                }else if(textoEncriptar.charAt(i) == "e"){
                    textoEncriptado = textoEncriptado + textoEncriptar.substring(i,i+1) + "nter";
                }else if(textoEncriptar.charAt(i) == "i"){
                    textoEncriptado = textoEncriptado + textoEncriptar.substring(i,i+1) + "mes";
                }else if(textoEncriptar.charAt(i) == "o"){
                    textoEncriptado = textoEncriptado + textoEncriptar.substring(i,i+1) + "ber";
                }else if(textoEncriptar.charAt(i) == "u"){
                    textoEncriptado = textoEncriptado + textoEncriptar.substring(i,i+1) + "fat";
                }else {
                    textoEncriptado = textoEncriptado + textoEncriptar.substring(i,i+1) ;
                }
            }
            
            p.innerHTML = textoEncriptado;
            p.style.display = "block";
            const copyButton = document.getElementsByClassName("copy")[0];
            copyButton.style.display = "flex";
            
        }

        estilizar();

        
    }else {
        alert("No se admiten letras mayúsculas, acentos ni carácteres especiales");
    }                     
    
}


function desencriptar(){
    const textoDesencriptar = document.getElementById("textinput").value;
    var textoDesencriptado = "";
    let p = document.createElement("p");

    if(document.getElementsByClassName("resultado")[0]){
        p = document.getElementsByClassName("resultado")[0];
        
    }else {
        const frame5 = document.getElementsByClassName("frame5")[0];
        p.classList.add("resultado")  ; 
        frame5.insertBefore(p,frame5.firstChild);
    }
    
    const pattern = /[á-óA-Z*+\-?^$@{}()|]/    

    if (!pattern.test(textoDesencriptar)){

        if (textoDesencriptar != "Ingrese el texto aqui" && textoDesencriptar != ""){
            document.getElementById("muneco_id").style.display = "none" ;
            document.getElementById("frame5__texto1_id").style.display = "none" ;
            document.getElementById("frame5__texto2_id").style.display = "none" ;
            
            var longitud = textoDesencriptar.length ;
            for (let i = 0 ; i < longitud ; i++){
                if (textoDesencriptar.substring(i,i+2) == "ai"){
                    textoDesencriptado = textoDesencriptado + "a";
                    i++;
                }else if(textoDesencriptar.substring(i,i+5) == "enter"){
                    textoDesencriptado = textoDesencriptado + "e";
                    i += 4;
                }else if(textoDesencriptar.substring(i,i+4) == "imes"){
                    textoDesencriptado = textoDesencriptado + "i";
                    i += 3;
                }else if(textoDesencriptar.substring(i,i+4) == "ober"){
                    textoDesencriptado = textoDesencriptado + "o";
                    i += 3;
                }else if(textoDesencriptar.substring(i,i+4) == "ufat"){
                    textoDesencriptado = textoDesencriptado + "u";
                    i += 3;
                }else {
                    textoDesencriptado = textoDesencriptado + textoDesencriptar.charAt(i) ;
                }
            }
            p.innerHTML = textoDesencriptado;
            p.style.display = "block";
        }

        document.getElementsByClassName("copy")[0].style.display = "flex";
        
        estilizar();

    }else {
        alert("No se admiten letras mayúsculas, acentos ni carácteres especiales");
    }  
    
}

function copiar(){
    var p = document.getElementsByClassName("resultado")[0];
    navigator.clipboard.writeText(p.innerHTML);
}

function estilizar(){
    
    const viewport_width = document.documentElement.clientWidth;
    const rec1 = document.getElementById("resultado_div");
    const frame5 = document.getElementsByClassName("frame5")[0];
    const copyP = document.getElementsByClassName("copy_p")[0];
    
    if(document.getElementsByClassName("resultado")[0]){

        let p = document.getElementsByClassName("resultado")[0];

        if(viewport_width > 768){
            frame5.style.top = "32px";
            frame5.style.height = "1100px"
        }else if(viewport_width<=768 && viewport_width >375){
            rec1.style.height = "311px";
            document.body.style.height = "1348";
            frame5.style.height = "215px";
            frame5.style.top = "0px";
            frame5.style.padding = "0px";
            copyP.style.padding = "24px";
        }else  if(viewport_width <= 375){
            frame5.style.height = "215px"
            frame5.style.width = "231px"
            rec1.style.height = "279px"
            copyP.style.display = "flex"
            copyP.style.width = "231px"
            copyP.style.top = "160px"
            copyP.style.justifyContent = "center";
        }
    }

}