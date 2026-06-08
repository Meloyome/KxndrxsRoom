const songs = [

    {
        title:"Future Sick",
        artist:"Neon Indian",
        src:"music/NeonIndian.mp3",
        cover:"images/song1.png"
    },

    {
        title:"Drakkar Noir",
        artist:"Pheonix",
        src:"music/DrakkarNoir.mp3",
        cover:"images/song2.png"
    },

    {
        title:"Talk Show Host",
        artist:"Radio Head",
        src:"music/TalkShowHost.mp3",
        cover:"images/song3.png"
    }

];

let currentSong = 0;

const audio = document.getElementById("audio");

const cover = document.getElementById("cover");

const playBtn = document.getElementById("playBtn");

const title = document.getElementById("title");

const artist = document.getElementById("artist");

function loadSong(){

    audio.src = songs[currentSong].src;

    cover.src = songs[currentSong].cover;

    title.innerHTML = songs[currentSong].title;

    artist.innerHTML = songs[currentSong].artist;
}

function togglePlay(){

    if(audio.paused){

        audio.play();

        playBtn.src = "images/pause.png";
    }

    else{

        audio.pause();

        playBtn.src = "images/play.png";
    }
}

function nextSong(){

    currentSong++;

    if(currentSong >= songs.length){

        currentSong = 0;
    }

    loadSong();

    audio.play();

    playBtn.src = "images/pause.png";
}

function prevSong(){

    currentSong--;

    if(currentSong < 0){

        currentSong = songs.length - 1;
    }

    loadSong();

    audio.play();

    playBtn.src = "images/pause.png";
}

loadSong();


