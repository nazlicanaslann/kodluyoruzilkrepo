const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value===''){
        alert("You have to write your text first!!")
    } else{
        let li=document.createElement("li")
        li.innerHTML=inputBox.value
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
    dataKaydet()
}


listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        dataKaydet()
    } else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        dataKaydet()
    }

},false)


function dataKaydet(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function dataGoster(){
    listContainer.innerHTML=localStorage.getItem("data");
}

dataGoster();