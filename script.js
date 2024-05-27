const songList = [
    {
        name: "Jazz In Paris",
        artist: "Media Right Productions",
        src: "assets/1.mp3",
        cover: "assets/1.jpg"
    },
    {
        name: "Blue Skies",
        artist: "Silent Partner",
        src: "assets/2.mp3",
        cover: "assets/2.jpg"
    },
    {
        name: "JCrimson Fly",
        artist: "Huma-Huma",
        src: "assets/3.mp3",
        cover: "assets/3.jpg"
    }
];

const artistName = document.querySelector('.artist.name')
const musicName = document.querySelector('.song-name');
const fillBar = document.querySelector('.fill-bar');
const time = document.querySelector('.time')
const cover = document.getElementById('cover');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const prog = document.querySelector('.progress-bar');

let song = new Audio();
let currentSong = 0;
let playing = false;

document.addEventListener('DOMContentLoaded', () =>{
    loadSong(currentSong);
    song.addEventListener('timeupdate', updateProgress);
    song.addEventListener('ended', nextSong);
    prevBtn.addEventListener('click', prevSong);
    nextBtn.addEventListener('click', nextSong);
    playBtn.addEventListener('click', togglePlayPause);
    prog.addEventListener('click', seek);
})