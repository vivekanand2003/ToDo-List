let forn=document.querySelector("form");
let ul=document.querySelector("#uls");

forn.addEventListener("submit",function(event){
    event.preventDefault();
    let input=document.querySelector("input");
    let lis=document.createElement("li");
    lis.innerText=input.value;
    input.value="";

    // make delete button and add in elemnent of ToDo list
    let Delbtn=document.createElement("button");
    Delbtn.classList.add("Delete");
    Delbtn.innerText="Delete";
    Delbtn.style.backgroundColor = "red";
    Delbtn.style.color = "white";
    Delbtn.style.padding = " 10px";
    Delbtn.style.marginLeft ="10px";
    Delbtn.style.marginTop ="10px";
    Delbtn.style.borderRadius = "10px";
    Delbtn.style.border = "double";
    Delbtn.style.fontSize= "15px";
    lis.appendChild(Delbtn);
    // document.querySelector("ul").append(lis);
    ul.appendChild(lis);
})
 

//Event Bubbling to delete new added Elements
ul.addEventListener("click",function(event){
    // console.log(event.target);
    if(event.target.nodeName=="BUTTON"){
        let delist=event.target.parentElement;
        delist.remove();
    }
})
