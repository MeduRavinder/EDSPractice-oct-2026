export default function decorate(block) {
  block.classList.add('imagecard');
  const button = block.querySelector('.cardtest-btn');
  if (button) {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Read More clicked');
    });
  }
}
