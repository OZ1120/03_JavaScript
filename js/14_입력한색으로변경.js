
const box = document.querySelectorAll("#box");
const input= document.querySelectorAll("#input");
const btn = document.querySelectorAll("#btn");

btn.addEventListener("click", function(){
    box.style.backgroundColor=input.value;
});

input.addEventListener("keuup", function(e){
    if(e.key == "Enter"){
        box.style.backgroundColor= input.value;
    }
})