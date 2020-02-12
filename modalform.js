UrlNumber = localStorage.getItem("id");
let Form=()=>{
    let Active=document.getElementById("ModalActivity");
    Active.style.display="block";
};
let Close=()=>{
  let Destroy = document.getElementById("CloseModal");
  let Active=document.getElementById("ModalActivity");
    Active.style.display="none";
  let Showmessage = document.getElementById("EmptyShowmessage");
  Showmessage.style.display="none";
};
let Discard=()=>{
  let DiscardButton= document.getElementById("Dismiss") ;
  let Active=document.getElementById("ModalActivity");
    Active.style.display="none";
  let Showmessage = document.getElementById("EmptyShowmessage");
  Showmessage.style.display="none";
};
let Adding=()=>{
  let AddButton = document.getElementById("Add");
  let Url= document.getElementById("URLADRESS");
  let Showmessage = document.getElementById("EmptyShowmessage");
  if(Url.value==''){
    Showmessage.style.display="block";
    Showmessage.style.cursor="default";
  }
  else {
      UrlNumber++;
      localStorage.setItem("id", UrlNumber);
      localStorage.setItem(UrlNumber, Url.value);

      let Urlos=document.createElement("div");
      Urlos.id="URL"+UrlNumber;
      Urlos.style.display="block";
      Urlos.style.width="100%";
      Urlos.style.borderBottom="solid";
      Urlos.style.borderWidth="3px";
      Urlos.style.cursor="pointer";
      Urlos.style.height="7vh";
      Urlos.onclick=function () {
        gotopage(Urlos.id);
      };
      Urlos.style.backgroundColor="#0FD874";
      document.getElementById("MainTab").appendChild(Urlos);

      let URLADRESS =document.createElement("a");
      URLADRESS.style.display="table";
      URLADRESS.style.cursor="pointer";
      URLADRESS.style.fontStyle="italic";
      URLADRESS.style.marginTop="2vh";
      URLADRESS.style.position="absolute";
      URLADRESS.style.marginLeft="8vw";
      let URLDESCRIPTION=document.createTextNode(Url.value);
      URLADRESS.appendChild(URLDESCRIPTION);
      document.getElementById("URL"+UrlNumber).appendChild(URLADRESS);


      let TrashBag = document.createElement('img');
      TrashBag.style.display="table";
      TrashBag.id="TrashBag"+UrlNumber;
      let Poradok=UrlNumber;
      TrashBag.style.cursor="pointer";
      TrashBag.style.position="absolute";
      TrashBag.src="Style/Changed.png";
      TrashBag.style.marginLeft="17vw";
      TrashBag.style.marginTop="1vh";
      TrashBag.onclick=function () {
        Delete(Urlos.id,Poradok)
      };
      document.getElementById("URL"+UrlNumber).appendChild(TrashBag);


      let Active=document.getElementById("ModalActivity");
      Active.style.display="none";
      let Showmessage = document.getElementById("EmptyShowmessage");
      Showmessage.style.display="none";
      Url.value='';

  }
};
let Delete=(parent,number)=>{
    let Accept = confirm("You want to delete that url?");
    if (Accept==true){
        DeleteElem=document.getElementById(parent).id;
    Parent=document.getElementById(DeleteElem);
    document.getElementById("MainTab").removeChild(Parent);
    localStorage.removeItem(number);
    }
    if (Accept==false){
       alert("Delete dismissed")
    }
};