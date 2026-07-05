
let images = document.querySelectorAll('.carousel img');
let index = 0;

setInterval(() => {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
}, 3000);


document.getElementById('celebrateBtn').addEventListener('click', () => {
    
    let audio = document.getElementById('birthdayAudio');
    audio.play();
    

    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
});
