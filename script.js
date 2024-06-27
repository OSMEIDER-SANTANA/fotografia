document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('nav ul li');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseover', function() {
            this.querySelector('.dropdown').style.display = 'block';
        });

        dropdown.addEventListener('mouseout', function() {
            this.querySelector('.dropdown').style.display = 'none';
        });
    });
});

// script de los botones redes sociales
document.querySelector('.main-btn').addEventListener('click', function() {
    const socialBtns = document.querySelector('.social-btns');
    socialBtns.style.display = socialBtns.style.display === 'flex' ? 'none' : 'flex';
});

// script de los botones redes siguiente en fotos de cumple

let currentIndex = 0;
const images = document.querySelectorAll('.slider img');
const nextBtn = document.getElementById('nextBtn');

nextBtn.addEventListener('click', () => {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
});




// script de los botones anterior y siguiente paguina 15 añeros
let currentPage = 1;
const totalPages = document.querySelectorAll('.page').length;

document.getElementById('nextPage').addEventListener('click', () => {
    if (currentPage < totalPages) {
        document.getElementById(`page${currentPage}`).style.transform = `rotateY(-180deg)`;
        currentPage++;
    }
});

document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        document.getElementById(`page${currentPage}`).style.transform = `rotateY(0deg)`;
    }
});


    