"use strict";
function chanjemodel(value){
    let model = document.getElementById('imgmodel');
    
    if(value == "uni"){
        model.src="img/unijet.jpg";
    }
    if(value == "smart"){
        model.src="img/smartjet.jpg";
    }
    if(value == "Cobra"){
        model.src="img/cobra.jpg";
    }
}


function chanjepump(selPump){
    let pump = document.getElementById('imgpumpmodel');
   
    if(selPump == "Basic"){
        pump.src="img/Basic.jpg";
    }
    if(selPump == "Classic"){
        pump.src="img/classic.jpg";
    }
    if(selPump == "Compact"){
        pump.src="img/Compact.jpg";
    }
}