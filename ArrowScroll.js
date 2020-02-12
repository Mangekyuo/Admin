let TableCreation=0;
let push =()=>{
    if(TableCreation==0){
        let ArrowImage=document.getElementById("Rightarrow");
        ArrowImage.parentNode.removeChild(ArrowImage);
        let Sitemenu=document.createElement("div");
        Sitemenu.id="MainTab";
        Sitemenu.style.display="inline-block";
        Sitemenu.style.width="20%";
        Sitemenu.style.marginTop="2vh";
        Sitemenu.style.height="91vh";
        Sitemenu.style.backgroundColor= "lightgray";
        Sitemenu.style.borderBottom="solid";
        Sitemenu.style.borderRight="solid";
        Sitemenu.style.borderTop="solid";
        Sitemenu.style.borderWidth="5px";
        document.getElementById("AroowParent").appendChild(Sitemenu);

        let newFavourite=document.createElement("div");
        newFavourite.id="FavouriteArea";
        newFavourite.style.cursor="pointer";
        newFavourite.style.borderBottom="solid";
        newFavourite.style.borderWidth="5px";
        newFavourite.style.display="block";
        newFavourite.style.width="100%";
        newFavourite.style.height="7vh";
        newFavourite.style.backgroundColor="white";
        newFavourite.onclick=function () {
          Form()
        };
        document.getElementById("MainTab").appendChild(newFavourite);

        let Addingsession= document.createElement("p");
        Addingsession.style.display="table";
        Addingsession.style.marginTop="2vh";
        Addingsession.style.position="absolute";
        Addingsession.style.marginLeft="8vw";
        let AddingTableText=document.createTextNode("Add url");
        Addingsession.style.fontStyle="italic";
        Addingsession.appendChild(AddingTableText);
        document.getElementById("FavouriteArea").appendChild(Addingsession);

        let BackArrowArea=document.createElement("div");
        BackArrowArea.id="BackArrowArea";
        BackArrowArea.style.display="inline-block";
        BackArrowArea.style.width="3%";
        BackArrowArea.style.height="20vh";
        BackArrowArea.style.backgroundColor="lightgray";
        BackArrowArea.style.borderBottom="solid";
        BackArrowArea.style.borderRight="solid";
        BackArrowArea.style.borderTop="solid";
        BackArrowArea.style.borderWidth="5px";
        BackArrowArea.style.marginBottom="38vh";
        document.getElementById("AroowParent").appendChild(BackArrowArea);

        let BackArrowImage=document.createElement("img");
        BackArrowImage.id="BackArrowImage";
        BackArrowImage.style.cursor="pointer";
        BackArrowImage.src="Style/BackarrowIma.png";
        BackArrowImage.style.marginTop="42vh";
        BackArrowImage.style.marginLeft="-3vw";
        BackArrowImage.style.position="absolute";
        BackArrowImage.onclick=function () {
            close()
        };
        document.getElementById("AroowParent").appendChild(BackArrowImage);

        for(let Classic=1;Classic<parseInt(UrlNumber,10)+1;Classic++){
            if(localStorage.getItem(Classic.toString())!=null){

                let RE_Div=document.createElement("div");
                RE_Div.style.display="block";
                RE_Div.id="DEV"+Classic;
                RE_Div.style.width="100%";
                RE_Div.style.borderBottom="solid";
                RE_Div.style.cursor="pointer";
                RE_Div.style.borderWidth="3px";
                RE_Div.style.height="7vh";
                RE_Div.style.backgroundColor="#0FD874";
                RE_Div.onclick=function () {
                  gotopage(RE_Div.id);
                };
                document.getElementById("MainTab").appendChild(RE_Div);

                let URLNAME= document.createElement("a");
                URLNAME.style.display="table";
                URLNAME.style.marginTop="2vh";
                URLNAME.style.position="absolute";
                URLNAME.style.fontStyle="italic";
                URLNAME.style.cursor="pointer";
                URLNAME.style.marginLeft="8vw";


                let URLDESCRIBE=document.createTextNode(localStorage.getItem(Classic.toString()));
                URLNAME.appendChild(URLDESCRIBE);
                document.getElementById("DEV"+Classic).appendChild(URLNAME);

                let Trashcannon = document.createElement("img");
                Trashcannon.style.display="table";
                Trashcannon.id="TrashBag"+Classic;
                let Porako=Classic;
                Trashcannon.style.marginLeft="17vw";
                Trashcannon.style.marginTop="1vh";
                Trashcannon.onclick=function () {
                  Delete(RE_Div.id,Porako)
                };
                Trashcannon.style.cursor="pointer";
                Trashcannon.style.position="absolute";
                Trashcannon.src="Style/Changed.png";
                document.getElementById("DEV"+Classic).appendChild(Trashcannon);
            }
            else {}
        }
        TableCreation=1;
    }
};
let close=()=>{
    if(TableCreation==1){
        TableCreation=0;
        let Sitemenu=document.getElementById("MainTab");
        document.getElementById("AroowParent").removeChild(Sitemenu);
        let BackArrowArea=document.getElementById("BackArrowArea");
        document.getElementById("AroowParent").removeChild(BackArrowArea);
        let BackArrowImage=document.getElementById("BackArrowImage");
        document.getElementById("AroowParent").removeChild(BackArrowImage);
        let ArrowImage=document.createElement("img");
        ArrowImage.style.cursor="pointer";
        ArrowImage.id="Rightarrow";
        ArrowImage.src="Style/ver1.png";
        ArrowImage.style.marginTop="2vh";
        ArrowImage.style.marginLeft="1vw";
        ArrowImage.style.position="absolute";
        document.getElementById("AroowParent").appendChild(ArrowImage);
        ArrowImage.onclick=function () {
            push()
        };
    }
};
let gotopage =(gotid)=>{
    Find_elem=document.getElementById(gotid).querySelectorAll('a')[0].innerHTML;
    A=document.getElementById(gotid).querySelectorAll('a')[0];
    A.href="https://www."+Find_elem;
};