const collapsibleHeaders = document.querySelectorAll('.collapsible__header');
collapsibleHeaders.forEach(header =>
  header.addEventListener('click', expandCollapsible)
);

function expandCollapsible() {
  const currentCollapsible = this.parentNode;

  const collapsibles = document.querySelectorAll('.collapsible');
  collapsibles.forEach(
    collapsible =>
      collapsible !== currentCollapsible &&
      collapsible.classList.contains('collapsible--expanded') &&
      collapsible.classList.remove('collapsible--expanded')
  );

  currentCollapsible.classList.add('collapsible--expanded');
}
