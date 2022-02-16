
// let posDescript = document.querySelector('.form-h2')
// console.log(posDescript)

function loadDoc1() {
// ===cicle 1-20 supposed files

for (let i=1; i<5; i++){
let file = document.querySelector('.file1')
console.log(file)
var lines;
let point=document.querySelector('.point-file1')
console.log(point);


  let  fileString='hr'+[i]+'.txt';
  console.log(fileString);
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    // let fileText=
    // document.getElementById("file").innerHTML = this.responseText;
    let fileContent=this.responseText;
      // console.log(fileContent);
    lines=fileContent.split(/\r\n|\n/);
    // console.log(lines);
// file.insertAdjacentHTML('beforebegin','<br><a id="d-show1" class="descR-show">'+lines[0]+'</a><br>');
//     console.log(lines[4]);
    // here is where CloseDescription Button have to be...
//    for(line of lines){
// file.insertAdjacentHTML('beforebegin','<p class="descR">'+line+'</p>');
let idString ="id"+[i] ;
   let newP=document.createElement('a');   
   newP.setAttribute(idString,'show-id[i]');
   newP.classList.add('show-hide_details[i]')
   newP.textContent=lines[0];
    point.appendChild(newP);
// console.log(newP.textContent);
// let linesWithoutFirst=lines.shift();
// console.log(lines);
for(li of lines){
   const newSmall=document.createElement('h6');
   newSmall.classList.add('descR')
  newSmall.textContent=li;
    point.appendChild(newSmall);
    
// console.log(newSmall.textContent);
// =====end of appends
// ==========start of eventListeners - to show-hide details
// newSmall.removeAttribute('class','descR');
function toggleDetails(){
  // newSmall.removeAttribute('class','descR');
  if(newSmall.hasAttribute('class','descR')){
  newSmall.removeAttribute('class','descR');
  }
else{
   newSmall.setAttribute('class','descR');
}
}

newP.addEventListener('click',toggleDetails);
}
    // newP.textContent=fileContent.split(/n/);
    // ttx=fileContent.split(/\r\n|\n/);
    // console.log(ttx);
 
   
    }

xhttp.open("GET", fileString, true)
  xhttp.send();


}
}

  
loadDoc1();

// ======================2=====================================
// let file2 = document.querySelector('.file2')
// console.log(file2)
// // var lines;
// let point2=document.querySelector('.point-file2')
// console.log(point2);
// let posDescript2 = document.querySelector('.form-h3')
// console.log(posDescript2)
// var lines2;

// function loadDoc2() {
//   const xhttp = new XMLHttpRequest();
//   xhttp.onload = function() {
//     // let fileText=
//     // document.getElementById("file").innerHTML = this.responseText;
//     let fileContent=this.responseText;
//       // console.log(fileContent);
//     lines2=fileContent.split(/\r\n|\n/);
//     // console.log(lines);
// // file.insertAdjacentHTML('beforebegin','<br><a id="d-show1" class="descR-show">'+lines[0]+'</a><br>');
// //     console.log(lines[4]);
//     // here is where CloseDescription Button have to be...
// //    for(line of lines){
// // file.insertAdjacentHTML('beforebegin','<p class="descR">'+line+'</p>');

//    const newP=document.createElement('a');   
//    newP.setAttribute('id','show-id2');
//    newP.classList.add('show-hide_details')
//    newP.textContent=lines2[0];
//     point2.appendChild(newP);
// // console.log(newP.textContent);
// let linesWithoutFirst=lines2.shift();
// // console.log(lines);
// for(li of lines2){
//    const newSmall=document.createElement('h6');
//    newSmall.classList.add('descR')
//   newSmall.textContent=li;
//     point2.appendChild(newSmall);
    
// // console.log(newSmall.textContent);
// // =====end of appends
// // ==========start of eventListeners - to show-hide details
// // newSmall.removeAttribute('class','descR');
// function toggleDetails(){
//   // newSmall.removeAttribute('class','descR');
//   if(newSmall.hasAttribute('class','descR')){
//   newSmall.removeAttribute('class','descR');
//   }
// else{
//    newSmall.setAttribute('class','descR');
// }
// }

// newP.addEventListener('click',toggleDetails);
// }
//     // newP.textContent=fileContent.split(/n/);
//     // ttx=fileContent.split(/\r\n|\n/);
//     // console.log(ttx);
 
   
//     }
//   xhttp.open("GET", "hr2.txt", true);
//   xhttp.send();


// }
// loadDoc2();


// // =======================end 2=========================================================
// // ======================3=====================================
// let file3 = document.querySelector('.file3')
// console.log(file3)
// // var lines;
// let point3=document.querySelector('.point-file3')
// console.log(point3);
// let posDescript3 = document.querySelector('.form-h3')
// console.log(posDescript3)
// var lines3;

// function loadDoc3() {
//   const xhttp = new XMLHttpRequest();
//   xhttp.onload = function() {
//     // let fileText=
//     // document.getElementById("file").innerHTML = this.responseText;
//     let fileContent=this.responseText;
//       // console.log(fileContent);
//     lines3=fileContent.split(/\r\n|\n/);
//     // console.log(lines);
// // file.insertAdjacentHTML('beforebegin','<br><a id="d-show1" class="descR-show">'+lines[0]+'</a><br>');
// //     console.log(lines[4]);
//     // here is where CloseDescription Button have to be...
// //    for(line of lines){
// // file.insertAdjacentHTML('beforebegin','<p class="descR">'+line+'</p>');

//    const newP=document.createElement('a');   
//    newP.setAttribute('id','show-id3');
//    newP.classList.add('show-hide_details')
//    newP.textContent=lines3[0];
//     point3.appendChild(newP);
// // console.log(newP.textContent);
// let linesWithoutFirst=lines3.shift();
// // console.log(lines);
// for(li of lines3){
//    const newSmall=document.createElement('h6');
//    newSmall.classList.add('descR')
//   newSmall.textContent=li;
//     point3.appendChild(newSmall);
    
// // console.log(newSmall.textContent);
// // =====end of appends
// // ==========start of eventListeners - to show-hide details
// // newSmall.removeAttribute('class','descR');
// function toggleDetails(){
//   // newSmall.removeAttribute('class','descR');
//   if(newSmall.hasAttribute('class','descR')){
//   newSmall.removeAttribute('class','descR');
//   }
// else{
//    newSmall.setAttribute('class','descR');
// }
// }

// newP.addEventListener('click',toggleDetails);
// }
//     // newP.textContent=fileContent.split(/n/);
//     // ttx=fileContent.split(/\r\n|\n/);
//     // console.log(ttx);
 
   
//     }
//   xhttp.open("GET", "hr3.txt", true);
//   xhttp.send();


// }
// loadDoc3();


// // =======================end 3=========================================================

// // ======================44444+++==================
// let file4 = document.querySelector('.file4')
// console.log(file4)
// // var lines;
// let point4=document.querySelector('.point-file4')
// console.log(point4);
// let posDescript4 = document.querySelector('.form-h4')
// console.log(posDescript4)
// var lines4;

// function loadDoc4() {
//   const xhttp = new XMLHttpRequest();
//   xhttp.onload = function() {
//     // let fileText=
//     // document.getElementById("file").innerHTML = this.responseText;
//     let fileContent=this.responseText;
//       // console.log(fileContent);
//     lines4=fileContent.split(/\r\n|\n/);
//     // console.log(lines);
// // file.insertAdjacentHTML('beforebegin','<br><a id="d-show1" class="descR-show">'+lines[0]+'</a><br>');
// //     console.log(lines[4]);
//     // here is where CloseDescription Button have to be...
// //    for(line of lines){
// // file.insertAdjacentHTML('beforebegin','<p class="descR">'+line+'</p>');

//    const newP=document.createElement('a');   
//    newP.setAttribute('id','show-id4');
//    newP.classList.add('show-hide_details')
//    newP.textContent=lines4[0];
//     point4.appendChild(newP);
// // console.log(newP.textContent);
// let linesWithoutFirst=lines4.shift();
// // console.log(lines);
// for(li of lines4){
//    const newSmall=document.createElement('h6');
//    newSmall.classList.add('descR')
//   newSmall.textContent=li;
//     point4.appendChild(newSmall);
    
// // console.log(newSmall.textContent);
// // =====end of appends
// // ==========start of eventListeners - to show-hide details
// // newSmall.removeAttribute('class','descR');
// function toggleDetails(){
//   // newSmall.removeAttribute('class','descR');
//   if(newSmall.hasAttribute('class','descR')){
//   newSmall.removeAttribute('class','descR');
//   }
// else{
//    newSmall.setAttribute('class','descR');
// }
// }

// newP.addEventListener('click',toggleDetails);
// }
//     // newP.textContent=fileContent.split(/n/);
//     // ttx=fileContent.split(/\r\n|\n/);
//     // console.log(ttx);
 
   
//     }
//   xhttp.open("GET", "hr4.txt", true);
//   xhttp.send();


// }
// loadDoc4();


// =======================end =========================================================



// =============ALL abott Form and Main - show-hide - main stacked higher at zIndex=10-100
const anketaPopUP=document.querySelector('#form-open_btn_id');//btn to trigger Z-INDEX=-20 on Main
const mainBlock=document.querySelector('.co-contacts');//the class of Main
const coInfo2=document.querySelector('.co-info');//consist of btn = <button class="form-open_btn">
let backdrop1=document.querySelector('.backdrop1');
const hideFormBtn=document.querySelector('#form-closer_btn_id');// triger Main to Z=100 to hide Form
console.log(anketaPopUP);
console.log(hideFormBtn);
console.log(mainBlock);

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
  console.log(`${hideFormBtn} get clicked`);
});
anketaPopUP.addEventListener('click',function(){
  mainBlock.style.zIndex=-10;
  console.log(`${anketaPopUP} get clicked`);
});
// setTimeout(hideFormBtn.addEventListener('load',function(){
//   mainBlock.style.zIndex=100;
//   console.log(`${hideFormBtn} get clicked`);
// }),3000);
setTimeout(mainBlock.style.zIndex=10,1000)
// =====================



// $(document).ready(function(){
//     $(".form-open_btn").click(function(){
//     $(mainBlock).css('zIndex','100');
//     console.log('btn get clicked')
    
//   });
//   $(".form-closer_btn").click(function(){
//     $("mainBlock").css('zIndex','-20');;
//       console.log('btn get clicked')
//   });

// });