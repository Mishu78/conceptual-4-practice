
// we are putting the list of interview information when interview button is clicked in blank array 
let interviewList=[];
let rejectedList=[];
let currentStatus='all'
let total= document.getElementById('total');
let interviewCount=document.getElementById('interviewCount');
let rejectedCount=document.getElementById('rejectedCount');

//console.log(rejectedCount);

const allFilterBtn=document.getElementById('all-filter-btn');
const interviewFilterBtn=document.getElementById('interview-filter-btn');
const rejectedFilterBtn=document.getElementById('rejected-filter-btn');


const allCardSection=document.getElementById("allCards");
allCardSection.addEventListener("click",function(event){
    if(event.target.closest('.btn-delete')){
        const card=event.target.closest('.card');
        if(card){
            card.remove();
            calculateCount();
        }
    }
})

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


function toggleStyle(id){
    //remove blue bg if any button has it
   allFilterBtn.classList.remove('bg-blue-600','text-white');
   interviewFilterBtn.classList.remove('bg-blue-600','text-white');
   rejectedFilterBtn.classList.remove('bg-blue-600','text-white');
 
   //adding blue for current button
   const selected=document.getElementById(id);
   currentStatus=id;
   selected.classList.add('bg-blue-600','text-white');


if(id=='interview-filter-btn'){
    allCardSection.classList.add('hidden')
    filteredSection.classList.remove('hidden')
    renderInterview();
} else if(id=="all-filter-btn"){
    allCardSection.classList.remove('hidden');
    filteredSection.classList.add("hidden");
} else if(id=='rejected-filter-btn'){
 allCardSection.classList.add('hidden')
    filteredSection.classList.remove('hidden');
    renderRejected();
}
}

mainContainer.addEventListener('click',function(event){

 if(event.target.classList.contains('interview-btn')){
     const parenNode=event.target.parentNode.parentNode;
 const companyName=parenNode.querySelector('.company-name').innerText;
 const companyPosition=parenNode.querySelector('.company-position').innerText;
 const companyType=parenNode.querySelector('.company-type').innerText;
 const status1=parenNode.querySelector('.status1').innerText;
 const notes=parenNode.querySelector('.notes').innerText;

// console.log(companyName,companyPosition,companyType,status1,notes);

parenNode.querySelector('.status1').innerText="Interview" 

const cardInfo={
    companyName,
    companyPosition,
    companyType,
    status1:'Interview',
    notes,
}
//job already exist or not
const jobExist = interviewList.find(item => item.companyName == cardInfo.companyName);

if(!jobExist){
    interviewList.push(cardInfo);
}


rejectedList=rejectedList.filter(item=>item.companyName != cardInfo.companyName)
if(currentStatus == "interview-filter-btn"){
    renderInterview();
}
else if(currentStatus =="rejected-filter-btn"){
    renderRejected();
}
    calculateCount()


//console.log(interviewList)
 }


//for reject button
 if(event.target.classList.contains('rejected-btn')){
     const parenNode=event.target.parentNode.parentNode;
 const companyName=parenNode.querySelector('.company-name').innerText;
 const companyPosition=parenNode.querySelector('.company-position').innerText;
 const companyType=parenNode.querySelector('.company-type').innerText;
 const status1=parenNode.querySelector('.status1').innerText;
 const notes=parenNode.querySelector('.notes').innerText;

// console.log(companyName,companyPosition,companyType,status1,notes);

parenNode.querySelector('.status1').innerText="Rejected" 

const cardInfo={
    companyName,
    companyPosition,
    companyType,
    status1:'Rejected',
    notes,
}
//job already exist or not
const jobExist = rejectedList.find(item => item.companyName == cardInfo.companyName);

if(!jobExist){
    rejectedList.push(cardInfo);
}


interviewList=interviewList.filter(item=>item.companyName != cardInfo.companyName)

if(currentStatus == "interview-filter-btn"){
    renderInterview();
}
else if(currentStatus =="rejected-filter-btn"){
    renderRejected();
}
    calculateCount()


//console.log(interviewList)
 }


})

function renderInterview(){
filteredSection.innerHTML=''
for(let interview of interviewList){
    let div=document.createElement('div');
    div.className= 'card flex flex-row justify-between mb-28'
    div.innerHTML=` <div class="space-y-6">
                <!--sub part 1-->
                <div>
                    <h1 class="company-name font-medium text-xl mb-2">${interview.companyName}</h1>
                    <p class="company-position text-base text-gray-700">${interview.companyPosition}</p>

                </div>
                <!--sub part 2-->
                <div>
                    <p class="company-type text-sm text-gray-600">${interview.companyType}</p>
                </div>
                <!--sub part 3-->
               <div>
                <p class="bg-sky-100 w-[130px] px-3 py-2 font-medium mb-2 status1">${interview.status1}</p>
                <p class="notes">${interview.notes}</p>
               </div>
                <!--sub part 4-->
                <div class="flex gap-5">
                    <button class="interview-btn text-green-500 border-2 border-green-500 px-4 py-2 rounded-sm">INTERVIEW</button>
                    <button class="rejected-btn text-red-500 border-2 border-red-500 rounded-sm px-4 py-2 ">REJECTED</button>
                </div>
               </div>
               <!--Main part 2-->
               <div>
                <button class="btn-delete"><i class="fa-regular fa-trash-can"></i></button>
               </div>
            </div>
            `
            filteredSection.appendChild(div)
}
      calculateCount();
} 


function renderRejected(){
filteredSection.innerHTML=''
for(let rejected of rejectedList){
    let div=document.createElement('div');
    div.className= 'card flex flex-row justify-between mb-28'
    div.innerHTML=` <div class="space-y-6">
                <!--sub part 1-->
                <div>
                    <h1 class="company-name font-medium text-xl mb-2">${rejected.companyName}</h1>
                    <p class="company-position text-base text-gray-700">React Native Developer</p>

                </div>
                <!--sub part 2-->
                <div>
                    <p class="company-type text-sm text-gray-600">Remote • Full-time • $130,000 - $175,000</p>
                </div>
                <!--sub part 3-->
               <div>
                <p class="bg-sky-100 w-[130px] px-3 py-2 font-medium mb-2 status1">${rejected.status1}</p>
                <p class="notes">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
               </div>
                <!--sub part 4-->
                <div class="flex gap-5">
                    <button class="interview-btn text-green-500 border-2 border-green-500 px-4 py-2 rounded-sm">INTERVIEW</button>
                    <button class="rejected-btn text-red-500 border-2 border-red-500 rounded-sm px-4 py-2 ">REJECTED</button>
                </div>
               </div>
               <!--Main part 2-->
               <div>
                <button class="btn-delete"><i class="fa-regular fa-trash-can"></i></button>
               </div>
            </div>
            `
            filteredSection.appendChild(div)
}
      calculateCount();
} 

calculateCount();





