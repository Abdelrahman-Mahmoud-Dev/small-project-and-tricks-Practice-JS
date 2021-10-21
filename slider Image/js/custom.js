let  slideImages= Array.from(document.querySelectorAll('.slide-container img'));
// Get Number of sliders
let slidesCount = slideImages.length;  

// Set Current Slide
let currentSlide = 1;

// slide Number Element
let slideNumber = document.getElementById('slide-number');

// prev and next buttons 
let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');


// Handle click on prev and next buttons 
prevButton.onclick = prevSlide;
nextButton.onclick = nextSlide;


//create the main UL Element
let paginationElement = document.createElement('ul');

//set id on created ul element
paginationElement.setAttribute('id','pagination-ul')

//create the li Element based on slides count
for(let i=1; i<=slidesCount ;i++){
    let paginationItem = document.createElement('li');

    //set custom attr 
    paginationItem.setAttribute('data-index',i)

    //set item Content
    paginationItem.appendChild(document.createTextNode(i))

    //append items to the main Ul
    paginationElement.appendChild(paginationItem)
}

//Add the ceated ul element to the page
let indicator  = document.getElementById('indicator');
indicator.appendChild(paginationElement)

//Get the new created ul 
let paginationCreateUl = document.getElementById('pagination-ul')

// pagination item 
let  paginationBullets= Array.from(document.querySelectorAll('#pagination-ul li'));


// loop through all bullets items

for (let onebullet of paginationBullets){
    onebullet.addEventListener('click',function(){
        currentSlide = parseInt(this.getAttribute('data-index'))
      checker()
    })
}








//trigger the cheaker function 
checker()


//prev slide function 
function prevSlide(){
    if (prevButton.classList.contains('disable')){
        // Nothing 
    }else{
        currentSlide--;
        checker()
    }
};

//next slide function 
function nextSlide(){
    if (nextButton.classList.contains('disable')){
       // Nothing
    }else{
    currentSlide++
    checker()
    }
};

// create checker function 
function checker(){
    // set the slide number 
    slideNumber.textContent = `slide => ${currentSlide} of ${slidesCount}`

    removeAllActive();

    // set active class on current slide 
    slideImages[currentSlide-1].classList.add('active')


    // set avtive class on current pagination item
    paginationCreateUl.children[currentSlide-1].classList.add('active');


    // check if current slide is the first 
if(currentSlide===1){
    // check if current slide is the first 
    prevButton.classList.add('disable'); 
}else{
     //  if current slide isnot the first remove class disable
    prevButton.classList.remove('disable')  
}if (currentSlide===slidesCount){
    // check if current slide is the last 
    nextButton.classList.add('disable')
}else{
     //  if current slide isnot the last remove class disable
    nextButton.classList.remove('disable')
}
}

// remove all active classes from images and pagination bullets
function removeAllActive(){
    slideImages.forEach((ele,_)=>{
        ele.classList.remove('active')
    })
    paginationBullets.forEach((ele,_)=>{
        ele.classList.remove('active')
    })
};