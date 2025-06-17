const images = document.querySelectorAll('.carousel img');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let current = 0;
  const total = images.length;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
    current = index;
  }

  function nextImage() {
    let nextIndex = (current + 1) % total;
    showImage(nextIndex);
  }

  function prevImage() {
    let prevIndex = (current - 1 + total) % total;
    showImage(prevIndex);
  }

  // Auto slide every 5 seconds
  let slideInterval = setInterval(nextImage, 5000);

  // Pause on hover
  const carousel = document.querySelector('.carousel');
  carousel.addEventListener('mouseenter', () => clearInterval(slideInterval));
  carousel.addEventListener('mouseleave', () => slideInterval = setInterval(nextImage, 5000));

  // Navigation button listeners
  nextBtn.addEventListener('click', () => {
    nextImage();
    clearInterval(slideInterval);
    slideInterval = setInterval(nextImage, 5000);
  });
  prevBtn.addEventListener('click', () => {
    prevImage();
    clearInterval(slideInterval);
    slideInterval = setInterval(nextImage, 5000);
  });

  // Embed frame script
  const form = document.getElementById('embedForm');
  const input = document.getElementById('siteUrl');
  const iframe = document.getElementById('siteFrame');

  form.addEventListener('submit', e => {
    e.preventDefault();
    let url = input.value.trim();
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://' + url;
    }
    iframe.src = url;
  });