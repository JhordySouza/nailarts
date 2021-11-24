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
        'path': './src/audio/Zé Neto e Cristiano - STATUS QUE EU NÃO QUERIA - EsqueceOMundoLaFora.mp3',
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
        'artist': 'Alok, Matheus & Kauan',
        'path': './src/audio/Alok, Matheus & Kauan - TU (Clipe Oficial)_160k.mp3',
        'album': 'Sertanejos 2021',
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
        'foto': './src/img/album2.jpeg'
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
        'name': 'Plágio',
        'artist': 'May & Karen',
        'path': './src/audio/May & Karen part. Marcos & Belutti - Plágio (Clipe Oficial)_160k.mp3',
        'album': 'Sertanejos 2021',
        'foto': './src/img/album2.jpeg'
    },
    {
        'name': 'Trouxamente',
        'artist': 'João Gabriel',
        'path': './src/audio/João Gabriel  Trouxamente ft Humberto e Ronaldo.mp3',
        'album': 'Sertanejos 2021',
        'foto': './src/img/album3.jpeg'
    },
    {
        'name': 'Batom De Cereja',
        'artist': 'Israel & Rodolffo',
        'path': './src/audio/Israel & Rodolffo - Batom De Cereja (Aqui e Agora)_160k.mp3',
        'album': 'Sertanejos 2021',
        'foto': './src/img/album3.jpeg'
    },
    {
        'name': 'Se Namorar Estraga prt. M.B',
        'artist': 'Israel & Rodolffo',
        'path': './src/audio/Israel & Rodolffo, Marcos & Belutti - Se Namorar Estraga (Aqui e Agora) (320 kbps).mp3',
        'album': 'Sertanejos 2021',
        'foto': './src/img/album3.jpeg'
    },
    {
        'name': 'Esquece De Me Esquecer',
        'artist': 'Zé F. e Gusttavo L.',
        'path': './src/audio/Zé Felipe e Gusttavo Lima - Esquece De Me Esquecer (Videoclipe Oficial)_160k.mp3',
        'album': 'Sertanejos 2021',
        'foto': './src/img/album3.jpeg'
    },
    {
        'name': ' Revoada No Colchão',
        'artist': 'Zé F. e M. Sensação',
        'path': './src/audio/Zé Felipe e Marcynho Sensação - Revoada No Colchão (Videoclipe Oficial)_160k.mp3',
        'album': 'Sertanejos 2021',
        'foto': './src/img/album3.jpeg'
    },
    {
        'name': 'SENTA DANADA',
        'artist': ' Zé Felipe e B.Pisadinha',
        'path': './src/audio/SENTA DANADA - ZÉ FELIPE & OS BARÕES DA PISADINHA_160k.mp3',
        'album': 'Sertanejos 2021',
        'foto': './src/img/album3.jpeg'
    },
    {
        'name': 'José Ou Maria',
        'artist': 'Zé Felipe',
        'path': './src/audio/Zé Felipe - José Ou Maria (Videoclipe Oficial)_160k.mp3',
        'album': 'Sertanejos 2021',
        'foto': './src/img/album2.jpeg'
    },
    {
        'name': 'Só Tem Eu',
        'artist': 'Zé Felipe',
        'path': './src/audio/Zé Felipe - Só Tem Eu (Videoclipe Oficial)_160k.mp3',
        'album': 'Sertanejos 2021',
        'foto': './src/img/album3.jpeg'
    },
    {
        'name': 'Antes de ir',
        'artist': 'Taty & Romeu',
        'path': './src/audio/ANTES DE IR TATY PINK & ROMEU 2021_160k.mp3',
        'album': '2021',
        'foto': './src/img/album3.jpeg'
    },
    {
        'name': 'Tipo Gin',
        'artist': 'Kevin O Chris',
        'path': './src/audio/MC Kevin O Chris - Tipo Gin - E Ela Tá Movimentando (Vídeo Oficial - DVD Todo Mundo Ama O Chris)_160k.mp3',
        'album': 'Kevin o Chris',
        'foto': './src/img/album3.jpeg'
    },
    {
        'name': 'Porque Eu Te Amei',
        'artist': 'Ton Carfi',
        'path': './src/audio/Ton Carfi - Porque Eu Te Amei (Clipe)_160k.mp3',
        'album': 'DVD bOM Deus',
        'foto': './src/img/album3.jpeg'
    },
    {
        'name': 'Friends',
        'artist': 'Justin Bieber',
        'path': './src/audio/Justin Bieber  BloodPop - Friends (Official Music Video)  Original  Official MV  2017  HD .mp3',
        'album': ' BloodPop',
        'foto': './src/img/album3.jpeg'
    },
    {
        'name': ' Yummy',
        'artist': 'Justin Bieber',
        'path': './src/audio/Justin Bieber - Yummy (Legendado) (Tradução) (Clipe Oficial).mp3',
        'album': ' BloodPop',
        'foto': './src/img/album3.jpeg'
    },
    {
        'name': 'Impressionando os Anjos',
        'artist': 'Gustavo Mioto',
        'path': './src/audio/Gustavo Mioto - Impressionando os Anjos_160k.mp3',
        'album': ' BloodPop',
        'foto': './src/img/album3.jpeg'
    },
    {
        'name': 'Coladinha em mim',
        'artist': 'Gustavo Mioto & Anita',
        'path': './src/audio/Gustavo Mioto - Coladinha em mim Part. Anitta_160k.mp3',
        'album': ' BloodPop',
        'foto': './src/img/album3.jpeg'
    },
    {
        'name': 'Flor E O Beija-Flor pt. Marília Mendoça',
        'artist': 'Henrique e Juliano',
        'path': './src/audio/Henrique e Juliano - Flor E O Beija-Flor part. Marília Mendonça - DVD Novas Histórias_160k.mp3',
        'album': ' BloodPop',
        'foto': './src/img/album3.jpeg'
    },
    {
        'name': 'Tijolinho Por Tijolinho',
        'artist': 'Enzo pt. Zé Felipe',
        'path': './src/audio/Enzo Rabelo - Tijolinho Por Tijolinho Part. Zé Felipe_160k.mp3',
        'album': ' BloodPop',
        'foto': './src/img/album3.jpeg'
    },
    {
        'name': 'HACKEARAM-ME pt. Marília Mendonça',
        'artist': 'Tierry',
        'path': './src/audio/Tierry - HACKEARAM-ME part. Marília Mendonça - DVD Acertou Na Mosca_160k.mp3',
        'album': 'Acertou Na Mosca',
        'foto': './src/img/album3.jpeg'
    },
    {
        'name': 'Ao Vivo E A Cores pt. Anitta',
        'artist': 'Matheus & Kauan',
        'path': './src/audio/Matheus & Kauan, Anitta - Ao Vivo E A Cores ft. Anitta_160k.mp3',
        'album': ' BloodPop',
        'foto': './src/img/album3.jpeg'
    },
    {
        'name': 'Vou Desafiar Você',
        'artist': 'Sapão',
        'path': './src/audio/Sapão - Vou Desafiar Você (Clipe Oficial)_160k.mp3',
        'album': ' BloodPop',
        'foto': './src/img/album3.jpeg'
    },
    {
        'name': 'MODO TURBO',
        'artist': 'Luísa, Pabllo, Anitta',
        'path': './src/audio/Luísa Sonza, Pabllo Vittar, Anitta - MODO TURBO (Clipe Oficial)_160k.mp3',
        'album': ' BloodPop',
        'foto': './src/img/album3.jpeg'
    },
    {
        'name': 'Pesadão',
        'artist': 'IZA & Marcelo',
        'path': './src/audio/IZA - Pesadão (Participação especial Marcelo Falcão)_160k.mp3',
        'album': ' BloodPop',
        'foto': './src/img/album3.jpeg'
    },
    {
        'name': 'Figurinha pt. MC Bruninho',
        'artist': 'Douglas e Viníciusr',
        'path': './src/audio/Douglas e Vinícius - Figurinha - part. MC Bruninho_160k.mp3',
        'album': ' BloodPop',
        'foto': './src/img/album3.jpeg'
    },
    {
        'name': 'Estrelinha Pt. Marília Mendonça',
        'artist': 'Di & Paulino',
        'path': './src/audio/Di Paullo & Paulino Part. Esp. Marília Mendonça - Estrelinha - DVD Nós e Elas _160k.mp3',
        'album': 'Nós e Elas ',
        'foto': './src/img/album3.jpeg'
    },
    {
        'name': 'Yatra  No Llores Más',
        'artist': 'Simone  Simaria',
        'path': './src/audio/Simone  Simaria Sebastián Yatra  No Llores Más (1).mp3',
        'album': 'part. Sebastián ',
        'foto': './src/img/album3.jpeg'
    }

];
//Variaveis globais
const listaMusicas = document.querySelector('.listaMusicas')
const primeiraMusica = baseMusicas[0];
const botaoPausar = document.getElementById('btnPause');
const botaoPlay = document.getElementById('btnControlPlay');
let tagAudio = document.getElementById('saidaAudio');
let musicaAtual = 0;
let mudo = document.querySelector('.areaPlayerVolume img');
let duracaoMusica = document.querySelector('.fim');
let audio = tagAudio;
//Eventos

tagAudio.src = primeiraMusica.path;

atualizaPlay(baseMusicas[0].album, baseMusicas[0].name, baseMusicas[0].foto)
qtdMusicas()

mudo.addEventListener('click', mute );

botaoPlay.addEventListener('click', tocarMusica);

botaoPausar.addEventListener('click', pausarMusica);

tagAudio.addEventListener('timeupdate', atualizarBarra);

window.onload = function () {

 duracaoMusica.textContent = segundosParaMinutos(Math.floor(tagAudio.duration));
}
//Funções
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

function pausarMusica(){
    tagAudio.pause();
    botaoPlay.classList.remove('pause')
}

function tocarProximaMusica(){
    if(musicaAtual === baseMusicas.length -1){
        musicaAtual = 0
    }else {
        musicaAtual++
    }

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

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((tagAudio.currentTime / tagAudio.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(tagAudio.currentTime));
    let duracao = document.querySelector('.fim');
    duracao.textContent = segundosParaMinutos(Math.floor(tagAudio.duration));
    if(barra.style.width === 100){
        console.log('passou para a proxima musica');
    }
}


function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos/60); 
    let campoSegundos = segundos %60 ;

    if(campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos;
    }
    return campoMinutos+':'+campoSegundos;
}

function proximaMusica() {
    let duracaoTotal = tagAudio.duration;
    let contagem = tagAudio.currentTime;
    console.log(contagem);
    if(contagem === duraçãoTotal) {
        musicaAtual++
        tagAudio.play()
    
    }
}
