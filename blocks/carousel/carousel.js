export default function decorate(block) {
  const slides = [...block.children].map((row) => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';

    while (row.firstElementChild) {
      slide.append(row.firstElementChild);
    }

    return slide;
  });

  if (!slides.length) {
    return;
  }

  const viewport = document.createElement('div');
  viewport.className = 'carousel-viewport';

  const track = document.createElement('div');
  track.className = 'carousel-track';
  slides.forEach((slide) => track.append(slide));
  viewport.append(track);

  const nav = document.createElement('div');
  nav.className = 'carousel-nav';

  const prevButton = document.createElement('button');
  prevButton.type = 'button';
  prevButton.className = 'carousel-button';
  prevButton.setAttribute('aria-label', 'Previous slide');
  prevButton.textContent = 'Prev';

  const nextButton = document.createElement('button');
  nextButton.type = 'button';
  nextButton.className = 'carousel-button';
  nextButton.setAttribute('aria-label', 'Next slide');
  nextButton.textContent = 'Next';

  nav.append(prevButton, nextButton);

  const state = { index: 0 };

  const updateSlides = () => {
    track.style.transform = `translateX(-${state.index * 100}%)`;
  };

  prevButton.addEventListener('click', () => {
    state.index = (state.index - 1 + slides.length) % slides.length;
    updateSlides();
  });

  nextButton.addEventListener('click', () => {
    state.index = (state.index + 1) % slides.length;
    updateSlides();
  });

  block.replaceChildren(viewport, nav);
  updateSlides();
}
