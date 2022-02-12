
// let posDescript = document.querySelector('.form-h2')
// console.log(posDescript)
// let file = document.querySelector('.pos_list')
// console.log(file)
// var lines;
let point=document.querySelector('.pos_list')
console.log(point);


function loadDoc1() {
// ===cicle 1-20 supposed files
let files=[];
for (let i=1; i<=4; i++){
let h4New=document.createElement('h4');// H4
let h4ClassString='p-file'+[i];// class name set
console.log(h4ClassString);
h4New.classList.add(h4ClassString);// class added to h4
let divNew=document.createElement('div')
let divClassString='file'+[i];
let divIDString='file'+[i];
divNew.classList.add(divClassString);
divNew.setAttribute('id',divIDString);
point.appendChild(h4New);
let pointNext=point.appendChild(divNew);
console.log(h4New,divNew);

// let file = document.querySelector('.file1')
// console.log(file)
// files.push([file[i]);
// var lines;
// let point=document.querySelector('.point-file1')
// console.log(point);


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
let idName="show-id"+[i];
let aClass="show-hide_details"+[i];

   let newP=document.createElement('a');   
   newP.setAttribute(idString,idName);
   newP.classList.add(aClass)
   newP.textContent=lines[0];
    pointNext.appendChild(newP);

// console.log(newP.textContent);
// let linesWithoutFirst=lines.shift();
// console.log(lines);
for(li of lines){
   const newSmall=document.createElement('h6');
   newSmall.classList.add('descR')
  newSmall.textContent=li;
    pointNext.appendChild(newSmall);
    
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

