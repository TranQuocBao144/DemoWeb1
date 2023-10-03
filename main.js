var images = Array.from(document.querySelectorAll('#myDiv img'));
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