function user(){
    let unit_1=document.getElementById("t1").value;
    let unit_2=document.getElementById("t2").value;
    let unitflag_1=false;
    let unitflag_2=false;
    let charge=0;
    if(unit_1<=0|| isNaN(unit_1)||unit_1==''){
        document.getElementById("p1").innerHTML='please provide valid details';
        
    }else{
        unitflag_1=true;
        document.getElementById("p1").innerHTML=''
    }
    if(unit_2<=0|| isNaN(unit_2)||unit_2==''){
        document.getElementById("p3").innerHTML='please provide valid details';
        
    }else{
        unitflag_2=true;
        document.getElementById("p3").innerHTML=''
    }
    if((unitflag_1==true)&&(unitflag_2==true)){
        let unit=unit_2-unit_1;
        if(unit<=100){
            document.getElementById("p2").innerHTML='The Amount you have to Pay is : RS.0'
        }
        if(unit>100){
            if(unit<=200){
                charge=charge+(unit-100)*3.5
            }
            else{
                charge+=(100*3.5)
            }
        }
    if(200<unit){
        if(unit<500){
            charge+=(unit-200)*4.6
        }
        else{
            charge+=300*4.6
        }
        }
        if(500<unit){
            if(unit<1000){
                charge+=(unit-500)*6.6
            }
            else{
                charge+=500*6.6
            }
            }

            if(unit>100){
                
                document.getElementById('p2').innerHTML= 'The Amount you have to pay is : RS.'+parseFloat(charge).toFixed(2)
            }
    }
}