// Элементы DOM
const audioPlayer = document.getElementById('audioPlayer');
const playlist = document.getElementById('playlist');

// Список аудиофайлов
const audioFiles = [
  { title: 'Часть 0', src: './assets/audio/ForeverN0.m4a' },
  { title: 'Часть 1', src: './assets/audio/ForeverN1.m4a' },
  { title: 'Часть 3', src: './assets/audio/ForeverN3.m4a' },
  { title: 'Часть 4', src: './assets/audio/ForeverN4.m4a' },
  { title: 'Часть 5', src: './assets/audio/ForeverN5.m4a' },
  { title: 'Часть 8', src: './assets/audio/ForeverN8.m4a' },
  { title: 'Часть 10', src: './assets/audio/ForeverN10.m4a' },
  { title: 'Часть 16', src: './assets/audio/ForeverN16.m4a' },
  { title: 'Часть 17', src: './assets/audio/ForeverN17.m4a' },
  { title: 'Часть 19', src: './assets/audio/ForeverN19.m4a' },
  { title: 'Часть 20', src: './assets/audio/ForeverN20.m4a' },
  { title: 'Часть 21', src: './assets/audio/ForeverN21.m4a' }
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