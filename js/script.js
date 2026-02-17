const musicas = [
  {
    titulo: "Tudo Vai Dar Certo",
    artista: "Aiury",
    arquivo: "musicas/Tudo-vai-dar-certo.mp3",
    capa: "capas/capa1.png"
  },
  {
    titulo: "Até Lá",
    artista: "Aiury",
    arquivo: "musicas/Ate-la.mp3",
    capa: "capas/capa2.jpeg"
  }
];

const lista = document.getElementById("listaMusicas");
const audio = document.getElementById("audioPlayer");
const titulo = document.getElementById("tituloMusica");
const artista = document.getElementById("artistaMusica");
const capa = document.getElementById("capaPlayer");

musicas.forEach((musica) => {
  const div = document.createElement("div");
  div.classList.add("musica");

  div.innerHTML = `
    <img src="${musica.capa}">
    <div>
      <strong>${musica.titulo}</strong><br>
      <small>${musica.artista}</small>
    </div>
  `;

  div.onclick = () => {
    audio.src = musica.arquivo;
    audio.play();
    titulo.textContent = musica.titulo;
    artista.textContent = musica.artista;
    capa.src = musica.capa;
  };

  lista.appendChild(div);
});