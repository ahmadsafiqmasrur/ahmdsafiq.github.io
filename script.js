document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.cursor');
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});


document.addEventListener('DOMContentLoaded', () => {
    const wme = document.querySelector('.wme');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                wme.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(wme);
});

document.addEventListener('DOMContentLoaded', () => {
    const iwh = document.querySelector('.iwh');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                iwh.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1  // Mengatur seberapa banyak elemen harus terlihat untuk memicu animasi
    });

    observer.observe(iwh);
});





window.addEventListener('scroll', function() {
    var atas = document.querySelector('.atas');
    if (window.scrollY > 50) {
        atas.style.backgroundColor = 'rgba(9, 9, 9, 0.8)';
    } else {
        atas.style.backgroundColor = '#000';
    }
});


function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();


window.addEventListener('scroll', function() {
    const container = document.querySelector('.container');
    const scrollValue = window.scrollY;
    
    // Mengubah posisi container berdasarkan scroll, tetapi membatasi gerakan agar tidak terlalu jauh
    container.style.transform = `translateX(-${scrollValue / 2}px)`;
});



document.addEventListener("DOMContentLoaded", function() {
    const container1 = document.querySelector('.sayatext');
    const animatedTexts = document.querySelectorAll('.saya');
    
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function onScroll() {
      if (isElementInViewport(container1)) {
        container1.classList.add('visible');
        animatedTexts.forEach((text, index) => {
          setTimeout(() => {
            text.classList.add('visible');
          }, index * 1000); // Adjust delay time as needed
        });
        window.removeEventListener('scroll', onScroll);
      }
    }
  
    window.addEventListener('scroll', onScroll);
  });


  document.addEventListener('scroll', function() {
    const boxes = document.querySelectorAll('.uibox, .fedbox, .gdbox');
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('visible');
        } else {
            box.classList.remove('visible');
        }
    });
});


document.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const footerpage = document.querySelector('.footerpage');

    footerpage.style.top = `calc(100vh - ${scrollY}px)`;
});