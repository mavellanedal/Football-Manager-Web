const prevButton = document.querySelector('.slider-button.prev');
	const nextButton = document.querySelector('.slider-button.next');
	const sliderContainer = document.querySelector('.slider-container');
	let currentSlideIndex = 0;
	const slides = document.querySelectorAll('.slide');
	let slideInterval;
	function updateSlider() {
		const newTransformValue = `translateX(-${currentSlideIndex * 100}%)`;
		sliderContainer.style.transform = newTransformValue;
	}

	function resetSliderInterval() {
		clearInterval(slideInterval);
		slideInterval = setInterval(function () {
			currentSlideIndex = (currentSlideIndex + 1) % slides.length;
			updateSlider();
		}, 5000);
	}

	nextButton.addEventListener('click', function () {
		currentSlideIndex = (currentSlideIndex + 1) % slides.length;
		updateSlider();
		resetSliderInterval();
	});

	prevButton.addEventListener('click', function () {
		currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
		updateSlider();
		resetSliderInterval();
	});

	slideInterval = setInterval(function () {
		currentSlideIndex = (currentSlideIndex + 1) % slides.length;
		updateSlider();
	}, 5000);

	updateSlider();
