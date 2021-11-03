/**
 * variaveis
 * funções
 * loop
 * condicionais
 */
 
//variaveis
const meuNome = 'Jhorghelles';
let minhaIdade = 33;

//console.log(meuNome)
//console.log(minhaIdade)

minhaIdade = 61;
//console.log(minhaIdade)

//funções
function imprimeNome(){
 //   console.log(meuNome);
}

//loop
for(let i = 0; i < 5; i++ ){
  imprimeNome()
}
//condicionais
if(minhaIdade >= 18){
    var idadeAMais = minhaIdade - 18
  //  console.log('Cuidado!! você ja pode ser preso a mais de '+idadeAMais +' anos !!!')
}else { 
    var idadeAMenos = 18 - minhaIdade
 //   console.log('Ainda falta '+idadeAMenos+' anos para você completar 18 e ser preso!')
} 

/*----------------------------------------*/
const baseMusicas = [
    {
        'name': 'Without Me',
        'artist': 'Halsey',
        'path': './src/audio/Halsey - Without Me.mp3',
        'album': 'Halsey',
        'foto': './src/img/album1.jpeg'
    },
    {
        'name': 'Swim Lyrics',
        'artist': 'Chase Atlantic',
        'path': './src/audio/Chase Atlantic - Swim  Lyrics.mp3',
        'album': 'Chase Atlantic',
        'foto': './src/img/album2.jpeg'
    },
    {
        'name': 'A Gente Fez Amor',
        'artist': 'Gusttavo Lima',
        'path': './src/audio/Gusttavo Lima  A Gente Fez Amor - DVD O Embaixador In Cariri (Ao Vivo).mp3',
        'album': 'O Embaixador In Cariri',
        'foto': './src/img/album3.jpeg'
    },
    {
        'name': 'Onze e Pouquinho',
        'artist': 'Dilsinho',
        'path': './src/audio/Dilsinho - Onze e Pouquinho.mp3',
        'album': 'As melhores de 2019',
        'foto': './src/img/album4.png'
    },
    {
        'name': 'Péssimo Negócio',
        'artist': 'Dilsinho',
        'path': './src/audio/Dilsinho - Péssimo Negócio (Ao Vivo).mp3',
        'album': 'As melhores de 2019',
        'foto': './src/img/album3.jpeg'
    },
    {
        'name': 'Pouco a Pouco',
        'artist': 'Dilsinho ft. Sorriso M.',
        'path': './src/audio/Dilsinho - Pouco a Pouco (Ao Vivo) ft. Sorriso Maroto.mp3',
        'album': 'As melhores de 2019',
        'foto': './src/img/album3.jpeg'
    },
    {
        'name': 'Mulher Maravilha',
        'artist': 'Zé neto & Cristiano',
        'path': './src/audio/Zé Neto e Cristiano - MULHER MARAVILHA - EsqueceOMundoLaFora.mp3',
        'album': 'EsqueceOMundoLaFora',
        'foto': './src/img/album3.jpeg'
    },
    {
        'name': 'Notificação Preferida',
        'artist': 'Zé neto & Cristiano',
        'path': './src/audio/Zé Neto e Cristiano - NOTIFICAÇÃO PREFERIDA - EsqueceOMundoLaFora.mp3',
        'album': 'EsqueceOMundoLaFora',
        'foto': './src/img/album3.jpeg'
    },
    {
        'name': 'Status Que Eu Não Queria',
        'artist': 'Zé neto & Cristiano',
        'path': './src/audio/Zé Neto e Cristiano - NOTIFICAÇÃO PREFERIDA - EsqueceOMundoLaFora.mp3',
        'album': 'EsqueceOMundoLaFora',
        'foto': './src/img/album3.jpeg'
    },
    {
        'name': 'Desandou',
        'artist': 'Zé neto & Cristiano',
        'path': './src/audio/Zé Neto e Cristiano-Desandou.mp3',
        'album': 'EsqueceOMundoLaFora',
        'foto': './src/img/album3.jpeg'
    },
    {
        'name': 'In My Mind',
        'artist': 'Alok & John Legend',
        'path': './src/audio/Alok & John Legend - In My Mind (Official Music Video)_160k.mp3',
        'album': 'Eletronic',
        'foto': './src/img/album3.jpeg'
    },
    {
        'name': 'Love Again',
        'artist': 'Alok',
        'path': './src/audio/Alok - Love Again (feat. Alida) Official Music Video _160k.mp3',
        'album': 'Eletronic',
        'foto': './src/img/album3.jpeg'
    },
    {
        'name': 'TU',
        'artist': 'Zé neto & Cristiano',
        'path': './src/audio/Alok, Matheus & Kauan - TU (Clipe Oficial)_160k.mp3',
        'album': 'Eletronic',
        'foto': './src/img/album3.jpeg'
    },
    {
        'name': 'Paradise',
        'artist': 'MEDUZA',
        'path': './src/audio/MEDUZA - Paradise ft. Dermot Kennedy_160k.mp3',
        'album': 'Eletronic',
        'foto': './src/img/album3.jpeg'
    },
    {
        'name': 'Lose Control',
        'artist': 'MEDUZA',
        'path': './src/audio/MEDUZA, Becky Hill, Goodboys - Lose Control (Lyric Video)_160k.mp3',
        'album': 'Eletronic',
        'foto': './src/img/album3.jpeg'
    },
    {
        'name': 'Piece Of Your Heart',
        'artist': 'MEDUZA',
        'path': './src/audio/MEDUZA, Goodboys - Piece Of Your Heart (Visualizer)_160k.mp3',
        'album': 'Eletronic',
        'foto': './src/img/album3.jpeg'
    },
    {
        'name': 'Expectativa x Realidade',
        'artist': 'Matheus & Kauan',
        'path': './src/audio/Matheus & Kauan - Expectativa x Realidade_160k.mp3',
        'album': 'Sertanejos 2021',
        'foto': './src/img/album3.jpeg'
    },
    {
        'name': 'Panfleto',
        'artist': 'Lucas L. & Mc Don J.',
        'path': './src/audio/Lucas Lucco e Mc Don Juan - Panfleto (128 kbps).mp3',
        'album': 'EsqueceOMundoLaFora',
        'foto': './src/img/album3.jpeg'
    },
    {
        'name': 'Trouxamente',
        'artist': 'João Gabriel',
        'path': './src/audio/João Gabriel  Trouxamente ft Humberto e Ronaldo.mp3',
        'album': 'Sertanejos 2021',
        'foto': './src/img/album3.jpeg'
    }
];
console.log(baseMusicas);

const listaMusicas = document.querySelector('.listaMusicas')
const tagAudio = document.getElementById('saidaAudio');
const primeiraMusica = baseMusicas[0];

tagAudio.src = primeiraMusica.path;

atualizaPlay(baseMusicas[0].album, baseMusicas[0].name, baseMusicas[0].foto)
qtdMusicas()

const botaoPausar = document.getElementById('btnPause');
const botaoPlay = document.getElementById('btnControlPlay');

let musicaAtual = 0;

function construirPlayList(musica, musicaId){
    const musicaElemento = document.createElement('li');
    const nomeMusica = document.createElement('p');
    const nomeArtista = document.createElement('p');
    const nomeAlbum = document.createElement('p');

    musicaElemento.dataset.id = musicaId;

    nomeMusica.className = 'primeiroItem';
    nomeMusica.innerText = musica.name;
    nomeArtista.innerText = musica.artist;
    nomeAlbum.innerText = musica.album;

    musicaElemento.addEventListener('click', tocarMusica)

    musicaElemento.appendChild(nomeMusica);
    musicaElemento.appendChild(nomeArtista);
    musicaElemento.appendChild(nomeAlbum);

    listaMusicas.appendChild(musicaElemento);
}

for(let i = 0; i < baseMusicas.length; i++){
//console.log(baseMusicas[i]);
construirPlayList(baseMusicas[i], i)
}

function tocarMusica(evento){
    const elementoClicado = evento.currentTarget;

    if (elementoClicado.tagName === 'LI') {
        const musicaId = elementoClicado.dataset.id;
        const musicaSelecionada = baseMusicas[musicaId];

        tagAudio.src   = musicaSelecionada.path;
        musicaAtual = Number(musicaId);
        tagAudio.play();

        atualizaPlay(baseMusicas[musicaAtual].album, baseMusicas[musicaAtual].name, baseMusicas[musicaAtual].foto)

        botaoPlay.classList.add('pause')

    }else{
        if (tagAudio.paused){
            tagAudio.play();
            botaoPlay.classList.add('pause')
        } else{
             tagAudio.pause();
             botaoPlay.classList.remove('pause')
        }
    }
}
botaoPlay.addEventListener('click', tocarMusica);

function pausarMusica(){
    tagAudio.pause();
    botaoPlay.classList.remove('pause')

}
botaoPausar.addEventListener('click', pausarMusica)

function tocarProximaMusica(){
    if(musicaAtual === baseMusicas.length -1){
        musicaAtual = 0
    }else {
        musicaAtual++
    }
    console.log(musicaAtual);
    tagAudio.src = baseMusicas[musicaAtual].path
    tagAudio.play()

    let nomeAlbum = baseMusicas[musicaAtual].album
    let nomeMusica = baseMusicas[musicaAtual].name
    let fotoAlbum = baseMusicas[musicaAtual].foto
    atualizaPlay(nomeAlbum, nomeMusica, fotoAlbum)

    botaoPlay.classList.add('pause')
}
function tocarMusicaAnterior(){
    if(musicaAtual === 0){
        musicaAtual = baseMusicas.length -1;
    }else {
        musicaAtual--
    }
    console.log(musicaAtual);
    tagAudio.src = baseMusicas[musicaAtual].path
    tagAudio.play()

    let nomeAlbum = baseMusicas[musicaAtual].album
    let nomeMusica = baseMusicas[musicaAtual].name
    let fotoAlbum = baseMusicas[musicaAtual].foto
    atualizaPlay(nomeAlbum, nomeMusica, fotoAlbum)

    botaoPlay.classList.add('pause')

}

//NEXT
const btnControlnext = document.getElementById('btnControlnext');
btnControlnext.addEventListener('click', tocarProximaMusica);

//PREV
const btnControlPrev = document.getElementById('btnControlPrev');
btnControlPrev.addEventListener('click', tocarMusicaAnterior);

//VOLUME
const areaPlayerVolume = document.querySelector('.areaPlayerVolume input');
areaPlayerVolume.addEventListener('input', ()=>{

    tagAudio.volume = areaPlayerVolume.value
})
//INFO ABUM

function atualizaPlay(nome,musica,foto){

    const fotoAlbum = document.getElementById('fotoAlbum');
    const nomeMusica = document.getElementById('nomeMusica');
    const nomeAlbum = document.getElementById('nomeAlbum');

    fotoAlbum.src = foto
    nomeMusica.innerText = musica
    nomeAlbum.innerText = nome
}

function qtdMusicas(){
    let qtdMusicas = document.getElementById('totalMusicas');

    qtdMusicas.innerText = (baseMusicas.length+' songs')
}

function mute(){ 
    if(tagAudio.muted){
        tagAudio.muted = false;
    }else {
        tagAudio.muted = true;
    }
}

let mudo = document.querySelector('.areaPlayerVolume img');
mudo.addEventListener('click', mute );


