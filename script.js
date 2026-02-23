
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


if(id=='interview-filter-btn'){
    allCardSection.classList.add('hidden')
    filteredSection.classList.remove('hidden')
} else if(id=="all-filter-btn"){
    allCardSection.classList.remove('hidden');
    filteredSection.classList.add("hidden");
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

const cardInfo={
    companyName,
    companyPosition,
    companyType,
    status1,
    notes,
}
//job already exist or not
const jobExist = interviewList.find(item => item.companyName == cardInfo.companyName);
parenNode.querySelector('.status1').innerText="Interview"
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
    div.innerHTML=` <div class="space-y-6">
                <!--sub part 1-->
                <div>
                    <h1 class="company-name font-medium text-xl mb-2">Mobile First Corp</h1>
                    <p class="company-position text-base text-gray-700">React Native Developer</p>

                </div>
                <!--sub part 2-->
                <div>
                    <p class="company-type text-sm text-gray-600">Remote • Full-time • $130,000 - $175,000</p>
                </div>
                <!--sub part 3-->
               <div>
                <p class="bg-sky-100 w-[130px] px-3 py-2 font-medium mb-2 status1">NOT APPLIED</p>
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

}



