var images, index, item, photo;

// Describe this function...
function show_photo_number() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_photo_num2 = document.getElementById('photo-num');
  element_photo_num2.innerText = photo;
}

// Describe this function...
function find_image() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  index = 0;
  images.forEach((item) => {
    index = (typeof index === 'number' ? index : 0) + 1;
    if (photo != index) {
      return;
    }
    let element_image2 = document.getElementById('image');
    element_image2.setAttribute("src", item);
  });
}


images = ['22.JPG', '1.jpg', '2.jpg', '3.jpg', '4.jpg'];
let element_image = document.getElementById('image');
element_image.setAttribute("src", images[0]);
photo = 1;
let element_photo_num = document.getElementById('photo-num');
element_photo_num.innerText = photo;


document.getElementById('prev').addEventListener('click', (event) => {
  if (photo > 1) {
    photo = (typeof photo === 'number' ? photo : 0) + -1;
  }
  show_photo_number();
  find_image();

});

document.getElementById('next').addEventListener('click', (event) => {
  if (photo < 5) {
    photo = (typeof photo === 'number' ? photo : 0) + 1;
  }
  show_photo_number();
  find_image();

});