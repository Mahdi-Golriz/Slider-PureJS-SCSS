let Slider = function ({
  data,
  firstActiveIndex,
  intervalTime,
  width,
  height,
}) {
  let _config = {
    data,
    activeIndex: firstActiveIndex,
    autoSlideInterval: intervalTime,
    containerWidth: width,
    containerHeight: height,
    numSlides: data.length,
  };

  let intervalId;

  console.log(document.querySelector("ul.container"));

  function _init() {
    const slides = _config.data.map((item) => {
      return `<li class='slide'>
                  <figure>
                    <figcaption>
                        ${item.title}
                <p>${item.description}</p>
                    </figcaption>
                    <img src=${item.url}  alt=${item.alt} />
              
                  </figure>
                </li>
              `;
    });

    const dots = _config.data.map(() => {
      return `<li>
                      <a class='dot'></a>
                  </li>
              `;
    });

    document.querySelector("ul.container").innerHTML = slides.join("");
    document.querySelector("ul.dots").innerHTML = dots.join("");
  }

  function _moveTo() {
    const SlidesArray = Array.from(
      document.querySelector("ul.container").children
    );

    SlidesArray.forEach((slide, i) => {
      slide.classList.toggle("active", i === _config.activeIndex);
      if (_config.activeIndex === _config.numSlides - 1) {
        slide.classList.toggle("next", i === 0);
      } else slide.classList.toggle("next", i === _config.activeIndex + 1);

      if (_config.activeIndex === 0) {
        slide.classList.toggle("prev", i === _config.numSlides - 1);
      } else slide.classList.toggle("prev", i === _config.activeIndex - 1);
    });

    Array.from(document.querySelectorAll("a.dot")).forEach((dot, i) =>
      dot.classList.toggle("activeDot", i === _config.activeIndex)
    );
  }

  function _addEventListeners() {
    _moveTo();

    document.querySelector(".right-arrow").addEventListener("click", () => {
      ++_config.activeIndex;
      if (_config.activeIndex === _config.numSlides) _config.activeIndex = 0;
      _moveTo();
      _clearAutoPlay();
    });

    document.querySelector(".left-arrow").addEventListener("click", () => {
      --_config.activeIndex;
      if (_config.activeIndex < 0) _config.activeIndex = _config.numSlides - 1;

      _moveTo();
      _clearAutoPlay();
    });

    Array.from(document.querySelectorAll("a.dot")).forEach((dot, i) => {
      dot.addEventListener("click", () => {
        _config.activeIndex = i;
        _moveTo();
        _clearAutoPlay();
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        ++_config.activeIndex;
        if (_config.activeIndex === _config.numSlides) _config.activeIndex = 0;
        _moveTo();
        _clearAutoPlay();
      } else if (e.key === "ArrowLeft") {
        --_config.activeIndex;
        if (_config.activeIndex < 0)
          _config.activeIndex = _config.numSlides - 1;
        _moveTo();
        _clearAutoPlay();
      }
    });
  }

  function _autoPlay() {
    intervalId = setInterval(() => {
      ++_config.activeIndex;
      if (_config.activeIndex === _config.numSlides) _config.activeIndex = 0;
      _moveTo();
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

  _init();
  _addEventListeners();
  _dynamicDimensions();
  _autoPlay();
};

window.Slider = Slider;
