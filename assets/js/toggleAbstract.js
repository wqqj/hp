function toggleAbstract(e, id) {
  e.preventDefault();
  const abstractBox = document.getElementById(id);
  if (abstractBox.open) {
    abstractBox.removeAttribute('open');
  } else {
    abstractBox.setAttribute('open', '');
  }
}
