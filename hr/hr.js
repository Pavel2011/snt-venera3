let file = document.querySelector('.file1')
console.log(file1)
var lines;
let point=document.querySelector('.co-info h3')
console.log(point);
let posDescript = document.querySelector('.form-h2')
console.log(posDescript)

function loadDoc2() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    // let fileText=
    // document.getElementById("file").innerHTML = this.responseText;
    let fileContent=this.responseText;
      // console.log(fileContent);
    lines=fileContent.split(/\r\n|\n/);
    console.log(lines);
// file.insertAdjacentHTML('beforebegin','<br><a id="d-show1" class="descR-show">'+lines[0]+'</a><br>');
//     console.log(lines[4]);
    // here is where CloseDescription Button have to be...
//    for(line of lines){
// file.insertAdjacentHTML('beforebegin','<p class="descR">'+line+'</p>');

   const newP=document.createElement('a');   
   newP.setAttribute('id','show-id');
   newP.classList.add('show-hide_details')
   newP.textContent=lines[0];
    point.appendChild(newP);
console.log(newP.textContent);
let linesWithoutFirst=lines.shift();
console.log(lines);
for(li of lines){
   const newSmall=document.createElement('h5');
   newSmall.classList.add('descR')
  newSmall.textContent=li;
    point.appendChild(newSmall);
    
console.log(newSmall.textContent);
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
   //     lines=new.split(/\r\n|\n/);
   
// let descript1=document.querySelectorAll('descR-show');
// console.log(descript1);

    // }
  //  console.log(lines[0]);
//    let descript1=document.getElementById('d-show1');
// console.log(descript1);
//   let d1=document.getElementsByClassName('descR');
//   d2=[...d1];
//     console.log(d1);
//     lines2=[...lines];
//     console.log(Array.isArray(lines2));
  
 
     
//   function funcDescShow(){
//      for (let i=0;i<d1.length;i++){
//           console.log(d1);

//  console.log(Array.isArray(lines2));
// let ddd=d1[i].getElementsByTagName(d1);
// console.log(ddd);
//      }
// }

// descript1.addEventListener('click',funcDescShow);
   
    }
  xhttp.open("GET", "hrDescription.txt", true);
  xhttp.send();


}
loadDoc2();
// ================================================

// let descript1=document.getElementsByTagName('button');


// console.log(descript1);
//   let d1=document.getElementsByClassName('descR');
//   console.log(d1);

//   console.log(d1);

// for (let i=0;i<d1.length;i++){
//   i.classList.add('visible');
// }
//   console.log(d1);
// let xx3=document.getElementsByTagName('p');
// console.log(xx3.getElementsByClassName('descR'));


// function funcDescShow(){
// if(d1[1].style.display=="block"){
// d1.style.display='none'
// }else{
// d1.style.display='block'
// }
//   console.log(d1);

 
// }

// descript1.addEventListener('click',funcDescShow);

  // for(let p of d1){
  //   p.style.toggle("display:'block'");
  //   // p.classList.toggle('display')
  //   console.log(p.classList);
  // }

// descript1.addEventListener('click',funcDescClose);

// ============
// function funcDescClose(){
//   let d2=document.querySelectorAll('p.descR');
//   console.log(d2);
//   for(let p of d2){
//     console.log(p.style.display);
//     if(p.style.display='block'){
//     p.style.display='none';
//     }

//   }
 
// }

// =================
// var txt
// function preload() {
//   txt = loadStrings('hrPositions.txt')
//   console.log(txt)
// }
// function setup() {
//   noCanvas()
//   createP(join(txt, '<br/>'))
// }

// function loadDoc() {
//   const xhttp = new XMLHttpRequest();
//   xhttp.onload = function() {
//     // let fileText=
//     // document.getElementById("file").innerHTML = this.responseText;
//     let fileContent=this.responseText;
//       console.log(fileContent);
//     let lines=fileContent.split(/\r\n|\n/);

//     console.log(lines);
//    for(line of lines){
// file.insertAdjacentHTML('beforebegin','<br><a href="#">'+line+'</a><br>')
//     }
//     }
//   xhttp.open("GET", "hrPositions.txt", true);
//   xhttp.send();
// }
// loadDoc();
// console.log(x);
// file.insertAdjacentHTML('afterbegin','<p>'+x+'</p>')
// var txt
// function preload() {
//   txt = loadStrings('hrPositions.txt')
//   console.log(txt)
// }
// function setup() {
//   noCanvas()
//   createP(join(txt, '<br/>'))
// }
// ===================================