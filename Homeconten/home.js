var images = Array.from(document.querySelectorAll('#carousel-inner img'));
                var currentIndex = images.length - 1;
                
                function showImage(index) {
                    images.forEach((img, i) => img.style.display = i === index ? 'block' : 'none');
                }
                
                document.querySelector('#Previous').addEventListener('click', function() {
                    currentIndex = (currentIndex - 1 + images.length) % images.length;
                    showImage(currentIndex);
                });
                
                document.querySelector('#Next').addEventListener('click', function() {
                    currentIndex = (currentIndex + 1) % images.length;
                    showImage(currentIndex);
                });
                
                showImage(currentIndex);