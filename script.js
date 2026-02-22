
// we are putting the list of interview information when interview button is clicked in blank array 
let interviewList=[];
let rejectedList=[];
let total= document.getElementById('total');
let interviewCount=document.getElementById('interviewCount');
let rejectedCount=document.getElementById('rejectedCount');
//console.log(rejectedCount);

const allCardSection=document.getElementById("allCards")

const mainContainer=document.querySelector('main');

function calculateCount(){
    total.innerHTML=allCardSection.children.length;
    interviewCount.innerText=interviewList.length;
    rejectedCount.innerHTML=rejectedList.length;
}
calculateCount();

function toggleStyle(){
    console.log("click")
}