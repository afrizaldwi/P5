const navbarCollapse = document.getElementById("navbarCollapse");
const navbarNav = document.getElementById("navbarNav");

navbarCollapse.addEventListener("click", () => {
	navbarNav.classList.toggle("toggle");
});

// carousel
let slideIndex = 1;
let aboutSlideIndex = 1;

const slides = document.querySelectorAll(".slide");
const aboutSlides = document.querySelectorAll(".about-slide");

const showSlide = (num) => {
	if (num > aboutSlides.length && num > slides.length) {
		aboutSlideIndex = 1;
		slideIndex = 1;
	} else if (num < 1) {
		aboutSlideIndex = aboutSlides.length;
		slideIndex = slides.length;
	}

	for (const wrap of aboutSlides) {
		wrap.classList.remove("active");
	}

	aboutSlides[aboutSlideIndex - 1].classList.add("active");

	// carousel lab

	for (const wrap of slides) {
		wrap.classList.remove("active");
	}

	slides[slideIndex - 1].classList.add("active");
};

showSlide(aboutSlideIndex);
showSlide(slideIndex);

const btnNext = document.getElementById("btnNext");

btnNext.addEventListener("click", () => {
	aboutSlideIndex += 1;
	slideIndex += 1;
	showSlide(aboutSlideIndex);
	showSlide(slideIndex);
});

const btnPrevious = document.getElementById("btnPrevious");

btnPrevious.addEventListener("click", () => {
	aboutSlideIndex -= 1;
	slideIndex -= 1;
	showSlide(aboutSlideIndex);
	showSlide(slideIndex);
});

setInterval(() => {
	aboutSlideIndex -= 1;
	slideIndex -= 1;
	showSlide(aboutSlideIndex);
	showSlide(slideIndex);
}, 2500);
