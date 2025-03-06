let list = document.getElementById("list-container");
let input = document.getElementById("input");
let btn = document.getElementById("btn");

function addTask (){
    if(input.innerHTML || input.value == ""){
        return alert("write something to add..");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        // li.innerHTML = document.createTextNode(input.value);
        list.appendChild(li);
        input.value="";
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveDtaa();
    }
}

list.addEventListener('click',(e)=>{
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveDtaa();
    }
})

function saveDtaa(){
    localStorage.setItem("data",list.innerHTML);
}

function displayData(){
    list.innerHTML = localStorage.getItem("data");
}
displayData();
 