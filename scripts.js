//кнопка бургер
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!burger.contains(e.target) && menu.contains(e.target)) {
    burger.classList.remove('active');
    menu.classList.remove('active');
  }
});

// Элементы DOM
const audioPlayer = document.getElementById('audioPlayer');
const playlist = document.getElementById('playlist');

// Список аудиофайлов
const audioFiles = [
  { title: 'Часть 0', src: './assets/audio/ForeverN0.m4a' },
  { title: 'Часть 1,2', src: './assets/audio/ForeverN1.m4a' },
  { title: 'Часть 3', src: './assets/audio/ForeverN3.m4a' },
  { title: 'Часть 4', src: './assets/audio/ForeverN4.m4a' },
  { title: 'Часть 5,6,7', src: './assets/audio/ForeverN5.m4a' },
  { title: 'Часть 8,9', src: './assets/audio/ForeverN8.m4a' },
  { title: 'Часть 10,11', src: './assets/audio/ForeverN10.mp3' },
  { title: 'Часть 12,13,14,15', src: './assets/audio/ForeverN12.mp3' },
  { title: 'Часть 16', src: './assets/audio/ForeverN16.mp3' },
  { title: 'Часть 17,18', src: './assets/audio/ForeverN17.mp3' },
  { title: 'Часть 19,20', src: './assets/audio/ForeverN19.mp3' },
  { title: 'Часть 21', src: './assets/audio/ForeverN21.mp3' }
];

// Создаем плейлист
audioFiles.forEach((file, index) => {
  const button = document.createElement('button');
  button.textContent = file.title;
  button.addEventListener('click', () => {
    audioPlayer.src = file.src;
    audioPlayer.play();
  });
  playlist.appendChild(button);
});