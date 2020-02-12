let ChangeText=()=>{
    let Element=document.getElementById("InputBox");
    Element.value='';
    Element.style.color="black";
    Element.addEventListener("keyup",function (event) {
        if(event.keyCode== 13){
         SearchinGoogle()
        }
        else {
        }
    })
};
let SearchinGoogle=()=>{
    let Inputtext=document.getElementById("InputBox").value;
    console.log(Inputtext);
    window.location.replace("https://www.google.com/search?q="+Inputtext);
};