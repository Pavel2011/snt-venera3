const posArr1=document.getElementById('hr_table_id');
console.dir(posArr1)
const posChildren=posArr1.children;
console.dir(posChildren.length);
// const posA=$('#hr_table_id')[0];// .tr-position_info
// console.log(posA.nextElementSibling)
// const hr3=$('.hr3')[0] //here all for all positions
// console.log(hr3)

posArr1.addEventListener('click',e=>{
    e.preventDefault();
    
console.dir(e.target);
const eCase=e.target.tagName==='A'?1:0;
console.log(eCase);
// const hrTag=e.target.classList.contains('[^hr]');
// console.dir(hrTag);
if(e.target.tagName==='A'){
  console.dir(e.target.parentElement);
  let eE=e.target.parentElement.nextElementSibling.nextElementSibling;
 e.target.parentElement.nextElementSibling.nextElementSibling.classList.toggle('pos_display'); 
}
if(e.target.tagName==='DIV'){
  eE=e.target;
  const eClasses=e.target.classList;
  console.log(eClasses);
  if(e.target.classList.length===2){
    eE=e.target.nextElementSibling.nextElementSibling;
     e.target.nextElementSibling.nextElementSibling.classList.toggle('pos_display');  
  }
  if(e.target.classList.length===3){
    eE=e.target.nextElementSibling
     e.target.nextElementSibling.classList.toggle('pos_display');  
  }
}

// =============ОТКЛИКНУТЬСЯ - начало====
// const anketaPopUP=document.querySelector('#form-open_btn_id');//btn to trigger Z-INDEX=-20 on Main
const anketaPopUP=eE.querySelector('.div-details button');
console.dir(anketaPopUP);
const mainBlock=document.querySelector('.co-contacts');//the class of Main
const coInfo2=document.querySelector('.co-info');//consist of btn = <button class="form-open_btn">
let backdrop1=document.querySelector('.backdrop1');
const hideFormBtn=document.querySelector('#form-closer_btn_id');// triger Main to Z=100 to hide Form
const formContainer=document.getElementsByClassName('form-container')[0];
console.log(anketaPopUP);
console.log(hideFormBtn);
console.log(formContainer);
  hideFormBtn.style.zIndex=-200;

hideFormBtn.addEventListener('click',function(){
  mainBlock.style.zIndex=10;
  anketaPopUP.style.zIndex=200;
  hideFormBtn.style.zIndex=-200;
  console.log(`${hideFormBtn} get clicked`);
});
anketaPopUP.addEventListener('click',function(){
  mainBlock.style.zIndex=10;
  // formContainer.classList.add('pos_display');
    formContainer.style.zIndex=200;
    formContainer.style.display='block'
  hideFormBtn.style.zIndex=400;
  hideFormBtn.classList.toggle('btn_visible');
  // hideFormBtn.classList.toggle('visibility')
  console.log(`${anketaPopUP} get clicked`);
});
setTimeout(mainBlock.style.zIndex=10,1000)
// =============ОТКЛИКНУТЬСЯ - конец====


});
const formContainer=document.getElementsByClassName('form-container')[0];
let allBtnHr=document.querySelectorAll('button[id^=btn]');
console.log(allBtnHr);
for(let i=0;i<allBtnHr.length;i++){
  allBtnHr[i].addEventListener('click',function(){
  console.clear();
  console.log('you clicked it all');  
  formContainer.style.zIndex=200;
    formContainer.style.display='block'
  hideFormBtn.style.zIndex=400;
  hideFormBtn.classList.toggle('btn_visible');  
  })

}





// let posTableArr=[...posA];
// let thDetailsArr=[...thDetails];
// for (const th of thDetails){
//   console.log(th.innerHTML)
// }
// const tbody = document.querySelector('#hr_table_id tbody');
// console.log(tbody)
// tbody.addEventListener('click', function (e) {
//   console.log('e-clicked')
//   const cell = e.target.closest('td');
//   if (!cell) {return;} // Quit, not clicked on a cell
//   const row = cell.parentElement;
//   console.log(cell.innerHTML, row.rowIndex, cell.cellIndex);
// });
// let cells = $("#hr_table_id .div-position_info");
// console.log(cells)
// for (let cell in cells) {
//   cell.click(function(){
// alert('handler clicked')
//   });
//   cell.on("click", function() {
//     console.log(this.innerHTML);
//   });
// }
// $("#hr_table_id .div-position_info").on('click',".div-details", function(){console.log('it is cliicked')});
// $("body").on('click',"#hr_table_id", function(){console.log('it is cliicked');
// });
// ============/////////====================
// const tableHR=document.querySelectorAll('#hr_table_id a');
// const divHrBtn=$('.div-position_info');
// tableHR[0].on('click',function(){
// console.log(hr3)
// })
// console.log(tableHR[0]);
// console.log(divHrBtn);
// tableHR[0].addEventListener('click',function(){
// let hr2=tableHR[0].parentElement;
// hr3.style.display='block';
// console.log('a clicked');

// });
// divHrBtn[0].addEventListener('click',function(e){
  // e.stopPropagation;
//   e.preventDefault();
// console.log('divHrBtn clicked');
// let hrD=divHrBtn[0].
// e.target.parentElement.nextElementSibling.nextElementSibling.classList.add('pos_display');
//  console.log(e.target.parentElement.nextElementSibling.nextElementSibling.setAttribute('class','pos_display'));
// });
// ==============!!!!!!!!!===========================

// tableHR.addEventListener('click',function(event){
//   console.log('body clicked')
// });


// let thDetArray=[];

// posA.forEach((a)=>{
//   console.log(a)
//   let aParent=a.parentElement.parentElement.nextElementSibling.children[0];
//     console.log(aParent)
//     thDetArray.push(aParent)
//     a.addEventListener('click',()=>{
// aParent.classList.add('pos_display')
//     })
// let ddx=aParent.style.display='block'
//   let th=tr.nextElementSibling; //  - to 'a' sibling - no meaning
// console.dir(th)
// ==check if a-clicked
// function toggleDetails(){
//   console.log(aParent.innerHTML)
// console.log('it is clicked');
// let th_A=a.parentElement;
// console.log(th_A)
// }
// a.addEventListener('click',toggleDetails);
// })
// console.log(thDetArray)
// let thX=thDetArray[0]
// console.log(thX)
// ==================dropDown details===============
// function drDown(){
//   console.log('it is clicked')
//   let p=posTableArr[0].getElementsByTagName('th');
// console.log(p.innerHTML);
// posDetails.classList.toggle('');
// posDetails.setAttribute('class', 'pos_display');
// posDetails.classList.add('.pos_display');
//   if(p.hasAttribute('class','pos_display')){
// p.removeAttribute('class','pos_display'); 

//   }
// else{
// p.setAttribute('class','pos_display');  
// p.style.color='rgb(72, 72, 230)';
// }
// }
// posTable[0].addEventListener('click',drDown); 


// ===closing details===================closing details===
// function toggleDetails(){

//   if(newSmall.hasAttribute('class','descR')){
//   newSmall.removeAttribute('class','descR');
//   }
// else{
//    newSmall.setAttribute('class','descR');
// }
// }

// newP.addEventListener('click',toggleDetails);
// const table=document.getElementsByTagName('table')[0];
// console.log(table)
// table.onclick = function(e) {
//     e = e || window.event;
//     var target = e.target || e.srcElement;
//     while(target != this && (!target.tagName || target.tagName != "TD")) target = target.parentNode;
//     if( target != this) {
//         console.log('it is clecked')// "target" is the cell that was clicked. Do something with it.
//     }
// }