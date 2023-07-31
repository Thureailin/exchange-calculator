let from = document.getElementById("from");
let to = document.getElementById("to");
let input = document.getElementById("input");
let result = document.getElementById("result");
let btn = document.getElementById("calcBtn");
let historyList= document.getElementById("historyList");




function createOption(x,y,z){
    let o = document.createElement("option");
    let t = document.createTextNode(y);
    o.setAttribute("value",toNum(z));
    o.appendChild(t);
    x.appendChild(o);

}
function toNum(x){
    return Number(x.replace(",",""));
}

for(x in data.rates){
    createOption(from,x,data.rates[x]);
    createOption(to,x,data.rates[x]);
  
}
function createTr(x){
    let rowSpacer = document.getElementById("rowSpacer");
    if(rowSpacer){
        rowSpacer.remove();
    }
    let tr= document.createElement("tr");
    x.map(function (el){
        let td = document.createElement("td");
        let text= document.createTextNode(el);
        td.appendChild(text);
        tr.appendChild(td);
    })
    historyList.appendChild(tr);
    
}
function store(){
    localStorage.setItem("record",historyList.innerHTML);
}

document.getElementById("calcBtn").addEventListener("click",function(e){
    e.preventDefault();


    //get state
    let x= input.value;
    let y= from.value;
    let z= to.value;
   

    //process
    let fromText =x+" "+from.options[from.selectedIndex].innerText;
    let toText =  to.options[to.selectedIndex].innerText;
    let first=x*y;
    console.log(first);
    let second=first/z;
    let resultNum= (second.toFixed(2));
    let date= new Date().toLocaleString();
    let arr= [date,fromText,toText,resultNum];
    createTr(arr);
    store();
    

    //set state
    result.innerHTML=resultNum;
    input.value="";
    input.focus();
    from.value="";
    to.value="1";
});

(function(){
    if(localStorage.getItem("record")){
        historyList.innerHTML=localStorage.getItem("record");
    }else{
        historyList.innerHTML = `<tr id= "rowSpacer" ><td colspan="4">There is no Record</td></tr>`;
    }
})();


function test(){
    console.log (from.options[from.selectedIndex].innerText);
}
function changeMode() {
    document.body.classList.toggle("night-mode");
    document.getElementById("modeIcon").classList.toggle("fa-sun");
}

 
