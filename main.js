let data=  Object.entries( document.querySelector(".control > form  "));
let formToClone=   document.querySelector(".formToClone ") ;
let allTask=   document.querySelector(".tasks ") ;
let create= document.querySelector("#create"); 
let clearButtom= document.querySelector("#clear");
let deleteButtom= document.querySelector("#deleTask");
let localdata=Object.entries(window.localStorage);
let numberOfTask=0;

if(window.localStorage.length>=1){
    for(let i=0;i<localdata.length;i++){
        createTask((localdata[i][1]).split(","));
    } 

}

create.onclick=function(){
    let arrData=[];
    for(let i=0;i<data.length;i++){
        if(data[i][1].value===""){
            data[i][1].focus();
            arrData=[];
            break;
        }
        arrData.push(data[i][1].value);
    }
    if(arrData.length==5){
        clear();
        createTask(arrData);
    }
}
function clear(){
    for(let i=0;i<data.length;i++){
        data[i][1].value="";
    }
}
clearButtom.onclick= clear;
document.addEventListener("click", function(e){
    if(e.target.className==="deleTask"){
        allTask.removeChild((e.target).parentNode);
        window.localStorage.removeItem(e.target.parentNode.classList[1]);
    }
});
    

 

function createTask(arrData){
    let clonedTask=formToClone.cloneNode(true);
    document.body.append(clonedTask);
    allTask.appendChild(clonedTask);
    let clName=`task${++numberOfTask}`;
    clonedTask.classList.add( clName);
    clonedTask.classList.remove( "ds-none");
    let title=document.querySelector( ` .${clName} #title` ) ;
    let day= document.querySelector(` .${clName}   #day `) ;
    let time= document.querySelector(` .${clName} #time `) ;
    let detiles=document.querySelector(`.${clName}  #detiles `) ;
    let priority= document.querySelector(`.${clName}  #priority `) ;
    title.textContent=arrData[0];
    day.textContent=arrData[1];
    time.textContent=arrData[2];
    detiles.textContent=arrData[3];
    priority.textContent=arrData[4];
    window.localStorage.setItem(clName,arrData);
    // window.localStorage.clear();
}