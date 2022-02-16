const dropDown=document.querySelectorAll('.dropdown');
console.log(dropDown);
const posDetails=document.querySelectorAll('.pos_details');
console.log(posDetails);
// const pDCollection=posDetails.HTMLCollection;
// console.log(pDCollection);
// =============
let dropDownArr=[...dropDown];
let posDetailsArr=[...posDetails];


// ==================dropDown details===============
for(const drop of dropDownArr){
console.log(dropDownArr);
function drDown(){
  let pos=drop.nextElementSibling;
  // console.log(pos.innerHTML);
// posDetails.classList.toggle('');
// posDetails.setAttribute('class', 'pos_display');
// posDetails.classList.add('.pos_display');
  if(pos.hasAttribute('class','pos_display')){
pos.removeAttribute('class','pos_display'); 

  }
else{
pos.setAttribute('class','pos_display');  
drop.style.color='rgb(72, 72, 230)';
}

  
//   // posDetails.style.display='none';

}
 
drop.addEventListener('click',drDown); 
}

// ===closing details===================closing details===
// for(let drop of dropDownArr){
// console.log(dropDownArr);
// function closeDown(){
  
  
//   let pos=drop.nextElementSibling;
//   console.log('get clicked');
// // posDetails.classList.toggle('');
// // posDetails.setAttribute('class', 'pos_display');
// // posDetails.classList.add('.pos_display');
//   if(pos.hasAttribute('class','pos_display')===true){
// pos.removeAttribute('class','pos_display'); 

//   }
// // else{
// //   }
// // pos.removeAttribute('class','pos_display');  
// // drop.style.color='black';
  
// //   // posDetails.style.display='none';

// }
 
// drop.addEventListener('click', closeDown); 
// }
// ==============





// =============ALL abott Form and Main - show-hide - main stacked higher at zIndex=10-100
const anketaPopUP=document.querySelector('#form-open_btn_id');//btn to trigger Z-INDEX=-20 on Main
const mainBlock=document.querySelector('.co-contacts');//the class of Main
const coInfo2=document.querySelector('.co-info');//consist of btn = <button class="form-open_btn">
let backdrop1=document.querySelector('.backdrop1');
const hideFormBtn=document.querySelector('#form-closer_btn_id');// triger Main to Z=100 to hide Form
console.log(anketaPopUP);
console.log(hideFormBtn);
console.log(mainBlock);
  hideFormBtn.style.zIndex=-200;
// =======================

// $(document).ready(function(){
//     $(anketaPopUP).on('click',function(){
//     // $(mainBlock).css('zIndex','100');
//     console.log('open btn get clicked');
    
//   });

// });
// $(document).ready(function(){

//   $(hideFormBtn).on('click',function(){
//     $("mainBlock").css('zIndex','-20');
//       console.log('closer btn get clicked');
//   });

// });


hideFormBtn.addEventListener('click',function(){
  mainBlock.style.zIndex=10;
  anketaPopUP.style.zIndex=200;
  hideFormBtn.style.zIndex=-200;
  console.log(`${hideFormBtn} get clicked`);
});
anketaPopUP.addEventListener('click',function(){
  mainBlock.style.zIndex=-10;
  anketaPopUP.style.zIndex=-20;
  hideFormBtn.style.zIndex=400;
  // hideFormBtn.classList.toggle('visibility')
  console.log(`${anketaPopUP} get clicked`);
});
// setTimeout(hideFormBtn.addEventListener('load',function(){
//   mainBlock.style.zIndex=100;
//   console.log(`${hideFormBtn} get clicked`);
// }),3000);
setTimeout(mainBlock.style.zIndex=10,1000)
// =====================