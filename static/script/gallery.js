
const galleryBlocks = Array.from(document.querySelectorAll('.gallery__block '));

let blockToStart = 0;
const numOfBlocks = galleryBlocks.length - 1;

const nextSlideEl = document.querySelector(".next");
const prevSlideEl = document.querySelector(".prev");
const dotElems = document.querySelectorAll(".gallery__dot");
const blockElems = document.querySelectorAll(".gallery__block");

const setDelay = 8000

function refreshGallery() {
    for (let i = 0; i < blockElems.length; i++) {
        blockElems[i].classList.remove('fade_in');
    }

    for (let i = 0; i < dotElems.length; i++) {
        dotElems[i].classList.remove("active");
    }

    blockElems[blockToStart].classList.add('fade_in')
    dotElems[blockToStart].classList.add('active');
}

function switchSlide() {
    blockToStart === numOfBlocks ? blockToStart = 0 : blockToStart++
    refreshGallery();
}

function resetGallery() {
    refreshGallery();
    clearInterval(interval);
    interval = setInterval(switchSlide, setDelay);
}

// nextSlideEl.addEventListener("click", () => {
//     blockToStart === numOfBlocks ? blockToStart = 0 : blockToStart++
//     resetGallery()
// })
//
// prevSlideEl.addEventListener("click", () => {
//     blockToStart === 0 ? blockToStart = numOfBlocks : blockToStart --
//     resetGallery()
// })

for (let i= 0; i < dotElems.length; i ++) {
    dotElems[i].addEventListener("click", () => {
        blockToStart = i;
        resetGallery();
    })
}

let interval = setInterval(switchSlide, setDelay);

window.addEventListener('DOMContentLoaded', () => {
    const headerHeight = document.querySelector('.header').offsetHeight;
    document.querySelector('.gallery').style.top = `-${headerHeight}px`;

    const galleryMenuWidth = document.querySelector('.gallery__nav-menu');
    galleryMenuWidth.style.minWidth = galleryMenuWidth.offsetWidth + 'px';
    galleryMenuWidth.style.minHeight = galleryMenuWidth.offsetHeight + 'px';
})

document.getElementById("lime-plaster-specification").addEventListener('click', (e) => {
   if (!e.target.closest('.documentation__program')) {
       window.location.href = "/documentation/lime-plaster-specification";
   }
});

document.getElementById("lime-hydraulic-specification").addEventListener('click', (e) => {
    if (!e.target.closest('.documentation__program')) {
        window.location.href = "/documentation/lime-hydraulic-specification";
    }
});

document.getElementById("lime-gypsum-specification").addEventListener('click', (e) => {
   if (!e.target.closest('.documentation__program')) {
       window.location.href = "/documentation/lime-gypsum-specification";
   }
});

document.getElementById("sanitizing-plastering-specification").addEventListener('click', (e) => {
    if (!e.target.closest('.documentation__program')) {
       window.location.href = "/documentation/sanitizing-plastering-specification";
    }
});


