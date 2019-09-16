var slidesIndex = 0;
carousels();

        function carousels() {
  var c;
  var y = document.getElementsByClassName("Slides");
  for (c = 0; c < y.length; c++) {
    y[c].style.display = "none";
  }
  slidesIndex++;
  if (slidesIndex > y.length) {slidesIndex = 1}
  y[slidesIndex-1].style.display = "block";
  setTimeout(carousels, 2000); // Change image every 2 seconds
}