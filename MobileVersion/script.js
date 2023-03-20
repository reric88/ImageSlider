// const sliderContainer = document.querySelector('.slider-container');
// const slideRight = document.querySelector('.right-slide');
// const slideLeft = document.querySelector('.left-slide');
// const upButton = document.querySelector('.up-button');
// const downButton = document.querySelector('.down-button');
// const slidesLength = slideRight.querySelectorAll('div').length;
// console.log(slidesLength);
// let activeSlideIndex = 0;

// slideLeft.style.top = `-${(slidesLength - 1)}`;

// upButton.addEventListener('click', () => changeSlide('up'));
// downButton.addEventListener('click', () => changeSlide('down'));

// const changeSlide = (direction) => {
// const sliderHeight = sliderContainer.clientHeight * .9;
// console.log(sliderHeight);
// if(direction === 'up') {
//     activeSlideIndex ++;
//     if (activeSlideIndex > slidesLength - 1) {
//         activeSlideIndex = 0;
//     }
//     } else if (direction === 'down') {
//         activeSlideIndex --;
//     if (activeSlideIndex < 0) {
//         activeSlideIndex = slidesLength - 1;
//     }
// }
// slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
// slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
// }






const sliderContainer = document.querySelector('.slider-container');
const sliderContainer1 = document.querySelector('.slider-container1');
const sliderContainer2 = document.querySelector('.slider-container2');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('.slide').length;
// const slidesLength = slideRight.document.querySelectorAll('div').length;
console.log(slidesLength);
let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1)}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
const sliderHeightT = -(sliderContainer1.clientHeight);
const sliderHeightB = sliderContainer2.clientHeight;
// const sliderHeight = sliderContainer.clientHeight;
if(direction === 'up') {
    activeSlideIndex ++;
    if (activeSlideIndex > slidesLength - 1) {
        activeSlideIndex = 0;
    }
    } else if (direction === 'down') {
        activeSlideIndex --;
    if (activeSlideIndex < 0) {
        activeSlideIndex = slidesLength - 1;
    }
}
slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeightB}px)`
slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeightT}px)`
// slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeightB}px)`
// slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeightT}px)`
}
// slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeightB}px)`
// slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeightT}px)`
// }




