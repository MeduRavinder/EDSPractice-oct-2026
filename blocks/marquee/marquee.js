export default function decorate(block) {
  const blockChildren = [...block.children];

  if (!blockChildren.length) {
    return;
  }

  const contentWrapper = document.createElement('div');
  const mediaWrapper = document.createElement('div');

  blockChildren.forEach((row, index) => {
    const cell = document.createElement('div');
    while (row.firstElementChild) {
      cell.append(row.firstElementChild);
    }

    if (index === 0) {
      contentWrapper.append(cell);
    } else {
      mediaWrapper.append(cell);
    }
  });

  block.replaceChildren(contentWrapper, mediaWrapper);
}
