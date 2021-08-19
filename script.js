let mobileMenu=document.querySelector('.toggle-button');
let mobileMenuModal=document.querySelector('.mobile-nav');
console.log(mobileMenu);
let mobCloseMenuBtn=document.getElementById('mob-menu__close');
let backdrop=document.querySelector('.backdrop');
console.log(backdrop);


function toggleMenu(){
  mobileMenuModal.style.display='block';
  backdrop.style.display='block';
  console.log('Menu get clicked')
  }

  function closeMobMenu(){
    mobileMenuModal.style.display='none';
    backdrop.style.display='none';
    console.log('Menu get clicked')
  }
  function backdropClose(){
    mobileMenuModal.style.display='none';
    backdrop.style.display='none';
    console.log('backdrop get clicked')
  }

mobileMenu.addEventListener('click',toggleMenu);
mobCloseMenuBtn.addEventListener('click',closeMobMenu);
backdrop.addEventListener('click',backdropClose);
// ================local Storage===

const posList=document.querySelector('.pos-list')
console.log(posList);
const position = document.querySelectorAll('.pos')[3];
console.log(position);
// const positionText=position.innerHTML='Medium';
let li=document.createElement('li');
li.classList.add('position');

localStorage.setItem('position','Medium');


// let liText=JSON.parse(localStorage.getItem('position'));
