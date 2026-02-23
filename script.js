
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
const filteredSection=document.getElementById('filtered-section');

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
    //remove blue bg if any button has it
   allFilterBtn.classList.remove('bg-blue-600','text-white');
   interviewFilterBtn.classList.remove('bg-blue-600','text-white');
   rejectedFilterBtn.classList.remove('bg-blue-600','text-white');
 
   //adding blue for current button
   const selected=document.getElementById(id);
   selected.classList.add('bg-blue-600','text-white');
}

mainContainer.addEventListener('click',function(event){
 if(event.target.classList.contains('interview-btn')){
     const parenNode=event.target.parentNode.parentNode;
 const companyName=parenNode.querySelector('.company-name').innerText;
 const companyPosition=parenNode.querySelector('.company-position').innerText;
 const companyType=parenNode.querySelector('.company-type').innerText;
 const status=parenNode.querySelector('.status').innerText;
 const notes=parenNode.querySelector('.notes').innerText;

// console.log(companyName,companyPosition,companyType,status,notes);

const cardInfo={
    companyName,
    companyPosition,
    companyType,
    status,
    notes,
}
//job already exist or not
const jobExist = interviewList.find(item => item.companyName == cardInfo.companyName);
if(!jobExist){
    interviewList.push(cardInfo);
}
renderInterview();
//console.log(interviewList)
 }

})

function renderInterview(){
filteredSection.innerHTML=''
for(let interview of interviewList){
    let div=document.createElement('div');
    div.className= 'card flex flex-row justify-between mb-28'
}

}



