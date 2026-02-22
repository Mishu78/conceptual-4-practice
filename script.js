
// we are putting the list of interview information when interview button is clicked in blank array 
let interviewList=[];
let rejectedList=[];
let total= document.getElementById('total');
let interviewCount=document.getElementById('interviewCount');
let rejectedCount=document.getElementById('rejectedCount');
//console.log(rejectedCount);

const allFilterBtn=document.getElementById('all-filter-btn');
const interviewFilterBtn=document.getElementById('interview-filter-btn');
const rejectedFilterBtn=document.getElementById('rejected-filter-btn');


const allCardSection=document.getElementById("allCards")

const mainContainer=document.querySelector('main');

// const allFilterBtn=document.getElementById('all-filter-btn').addEventListener('click',function(){
//     alert('clicked from add event ')
// })
function calculateCount(){
    total.innerHTML=allCardSection.children.length;
    interviewCount.innerText=interviewList.length;
    rejectedCount.innerHTML=rejectedList.length;
}
calculateCount();

function toggleStyle(id){
   allFilterBtn.classList.remove('bg-blue-600','text-white');
   interviewFilterBtn.classList.remove('bg-blue-600','text-white');
   rejectedFilterBtn.classList.remove('bg-blue-600','text-white');
 
   const selected=document.getElementById(id);
   selected.classList.add('bg-blue-600','text-white');
}

