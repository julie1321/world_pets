
let indexValue = 1;

showImg(indexValue);
const izq = document.querySelector(".left");
const dcha = document.querySelector(".right");

izq.addEventListener("click" , ()=>{
        showImg(indexValue += -1)
})

dcha.addEventListener("click" , ()=>{
        showImg(indexValue += 1)
})


let array = document.querySelectorAll(".btn");

array.forEach((item, index) =>{
        item.addEventListener("click", (e)=>{
            /*console.log(e.target.id.substr(-1));*/ 
            showImg(indexValue = e.target.id.substr(-1));   
        })
})



 function showImg(foto){     
       
 var i;
 const img = document.querySelectorAll(".galeria");
 const slider = document.querySelectorAll(".btm-slides span");

 if(foto > img.length){
        indexValue = 1;
 }

if(foto < 1){
        indexValue = img.length;
}

for (i=0; i < img.length; i++){
        img[i].style.display="none";
}


for (i=0; i < slider.length; i++){
        slider[i].style.background= "rgba(255,255,255,0.1)";



img[indexValue-1].style.display = "block";
slider[indexValue-1].style.background = "white";


}

}

       