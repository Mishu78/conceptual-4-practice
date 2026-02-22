let interviewLst=[];

let total= document.getElementById('total');
let interviewCount=document.getElementById('interviewCount');
let rejectedCount=document.getElementById('rejectedCount');
//console.log(rejectedCount);

const allCardSection=document.getElementById("allCards")
function calculateCount(){
    total.innerHTML=allCardSection.children.length;
}
calculateCount();