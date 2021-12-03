window.player = {

    cover : document.querySelector(".card-image"),
    title : document.querySelector('.card-content h5'),
    artist :  document.querySelector('.card-content p'),
    audio : document.querySelector('.card-content audio'),
    audioData: audios,
    currentAudio: {},
    currentPlaying: 0,
    start() {

        this.update();

        console.log('primeiros dados')
        this.audio.onended = () => this.next()
    },
    next() {
        this.currentPlaying++
        this.update();

        if(this.currentPlaying == this.audioData.length) this.restart();
        console.log('iniciar proxima musica')
        this.audio.play();
    },
    update() {
        this.currentAudio = this.audioData[this.currentPlaying];

        this.cover.style.background = `url('${this.currentAudio.foto}') no-repeat center center / cover`;
        this.title.innerText = this.currentAudio.name;
        this.artist.innerText = this.currentAudio.artist;
        this.audio.src = this.currentAudio.path;
        console.log('atualização dos dados');
    },
    restart() {
        this.currentPlaying = 0
        this.update();
    }
};

