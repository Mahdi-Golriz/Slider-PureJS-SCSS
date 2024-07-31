let Slider = function ({ firstActiveIndex = 0, intervalTime, width, height }) {
  let _config = {
    activeIndex: firstActiveIndex,
    autoSlideInterval: intervalTime,
    containerWidth: width,
    containerHeight: height,
    slides: Array.from(document.querySelector("ul.slides").children),
  };

  let intervalId;

  function init() {
    _generateDots();
    _updateDots();
    _addEventListeners();
    _autoPlay();
    _dynamicDimensions();
  }

  function _generateDots() {
    const dotsContainer = document.querySelector("ul.dots");
    dotsContainer.innerHTML = "";

    _config.slides.forEach((_, i) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "#";
      a.addEventListener("click", (e) => {
        e.preventDefault();
        _moveTo(i);
      });

      li.appendChild(a);
      dotsContainer.appendChild(li);
    });
  }

  function _updateDots() {
    document
      .querySelector("ul.dots > li > a.activeDot")
      ?.classList.remove("activeDot");

    document
      .querySelectorAll("ul.dots > li > a")
      [_config.activeIndex].classList.add("activeDot");
  }

  function _addEventListeners() {
    document.addEventListener("DOMContentLoaded", () =>
      _moveTo(_config.activeIndex)
    );

    document.querySelector(".right-arrow").addEventListener("click", () => {
      _moveTo(++_config.activeIndex);
      _clearAutoPlay();
      _updateDots();
    });

    document.querySelector(".left-arrow").addEventListener("click", () => {
      _moveTo(--_config.activeIndex);
      _clearAutoPlay();
      _updateDots();
    });

    Array.from(document.querySelector("ul.dots").children).forEach((dot, i) => {
      dot.addEventListener("click", () => {
        _moveTo(_config.activeIndex);
        _clearAutoPlay();
        _updateDots();
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        _moveTo(++_config.activeIndex);
        _clearAutoPlay();
      } else if (e.key === "ArrowLeft") {
        _moveTo(--_config.activeIndex);
        _clearAutoPlay();
      }
    });
  }

  function _moveTo(index) {
    const numSlides = _config.slides.length;
    if (index === numSlides) {
      _config.activeIndex = 0;
    } else if (index === -1) {
      _config.activeIndex = numSlides - 1;
    } else {
      _config.activeIndex = index;
    }

    _config.slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === _config.activeIndex);
      if (_config.activeIndex === numSlides - 1) {
        slide.classList.toggle("next", i === 0);
      } else slide.classList.toggle("next", i === _config.activeIndex + 1);

      if (_config.activeIndex === 0) {
        slide.classList.toggle("prev", i === numSlides - 1);
      } else slide.classList.toggle("prev", i === _config.activeIndex - 1);
    });
  }

  function _autoPlay() {
    intervalId = setInterval(() => {
      _moveTo(++_config.activeIndex);
      _updateDots();
    }, _config.autoSlideInterval);
  }

  function _clearAutoPlay() {
    clearInterval(intervalId);
    _autoPlay();
  }

  function _dynamicDimensions() {
    document.documentElement.style.setProperty(
      "--width",
      _config.containerWidth
    );
    document.documentElement.style.setProperty(
      "--height",
      _config.containerHeight
    );
  }

  init();
};

window.Slider = Slider;
