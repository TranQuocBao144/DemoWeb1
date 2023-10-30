var images = Array.from(document.querySelectorAll('.myDiv img'));
var currentIndex = images.length - 1;

function showImage(index) {
    images.forEach((img, i) => img.style.display = i === index ? 'block' : 'none');
}

document.querySelector('#prev').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

document.querySelector('#next').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});
showImage(currentIndex);
//---------------------------------slider bottom
// Lấy tất cả các tiêu đề
var titles = document.querySelectorAll('.slider-content-left-bottom .tieu-de');

// Lặp qua tất cả các tiêu đề
for (var i = 0; i < titles.length; i++) {
  // Thêm sự kiện click cho mỗi tiêu đề
  titles[i].addEventListener('click', function() {
    // Lấy vị trí của tiêu đề được nhấp trong danh sách tiêu đề
    var index = Array.from(titles).indexOf(this);

    // Lấy tất cả các hình ảnh trong .myDiv
    var images = document.querySelectorAll('.myDiv img');

    // Ẩn tất cả các hình ảnh
    for (var j = 0; j < images.length; j++) {
      images[j].style.display = 'none';
    }

    // Hiển thị hình ảnh tương ứng với tiêu đề được nhấp
    images[index].style.display = 'block';
  });
}

