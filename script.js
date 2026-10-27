// Canciones de ejemplo organizadas según el estado de ánimo.
const canciones = {
  alegre: {
    titulo: 'Una dosis de alegría',
    descripcion: 'Canciones para sonreír y disfrutar el momento.',
    color: '#f3df8c',
    lista: [
      { titulo: 'Happy', artista: 'Pharrell Williams' },
      { titulo: "Can't Stop the Feeling!", artista: 'Justin Timberlake' },
      { titulo: 'Vivir Mi Vida', artista: 'Marc Anthony' },
      { titulo: 'La Bicicleta', artista: 'Carlos Vives, Shakira' }
    ]
  },
  relajado: {
    titulo: 'Un respiro para ti',
    descripcion: 'Baja el ritmo y acompaña tu pausa con música.',
    color: '#c8e3d3',
    lista: [
      { titulo: 'Banana Pancakes', artista: 'Jack Johnson' },
      { titulo: 'Better Together', artista: 'Jack Johnson' },
      { titulo: 'Sunset Lover', artista: 'Petit Biscuit' },
      { titulo: 'Bloom', artista: 'The Paper Kites' }
    ]
  },
  concentrado: {
    titulo: 'Entra en modo enfoque',
    descripcion: 'Melodías instrumentales para estudiar o trabajar.',
    color: '#d8cef0',
    lista: [
      { titulo: 'Weightless', artista: 'Marconi Union' },
      { titulo: 'Nuvole Bianche', artista: 'Ludovico Einaudi' },
      { titulo: 'A Walk', artista: 'Tycho' },
      { titulo: 'Comptine d’un autre été', artista: 'Yann Tiersen' }
    ]
  },
  energico: {
    titulo: 'Energía al máximo',
    descripcion: 'Canciones para moverte y activar tu día.',
    color: '#f1c8b1',
    lista: [
      { titulo: 'Dynamite', artista: 'BTS' },
      { titulo: 'Blinding Lights', artista: 'The Weeknd' },
      { titulo: 'Titanium', artista: 'David Guetta ft. Sia' },
      { titulo: "Don't Stop Me Now", artista: 'Queen' }
    ]
  }
};

const botones = document.querySelectorAll('.mood');
const resultados = document.querySelector('#recomendaciones');

function mostrarRecomendaciones(estado) {
  const seleccion = canciones[estado];
  if (!seleccion) return;
  botones.forEach(boton => boton.setAttribute('aria-pressed', String(boton.dataset.mood === estado)));
  resultados.replaceChildren();

  const encabezado = document.createElement('div');
  encabezado.className = 'results-heading';
  const texto = document.createElement('div');
  const etiqueta = document.createElement('span');
  etiqueta.className = 'section-label';
  etiqueta.textContent = '02 / TUS RECOMENDACIONES';
  const titulo = document.createElement('h2');
  titulo.textContent = seleccion.titulo;
  const descripcion = document.createElement('p');
  descripcion.textContent = seleccion.descripcion;
  texto.append(etiqueta, titulo, descripcion);
  const contador = document.createElement('span');
  contador.textContent = `${seleccion.lista.length} canciones para ti ✦`;
  encabezado.append(texto, contador);
  resultados.append(encabezado);

  const lista = document.createElement('div');
  lista.className = 'song-list';
  seleccion.lista.forEach((cancion, indice) => {
    const fila = document.createElement('article');
    fila.className = 'song';
    const numero = document.createElement('span');
    numero.className = 'song-index';
    numero.textContent = String(indice + 1).padStart(2, '0');
    const portada = document.createElement('span');
    portada.className = 'song-cover';
    portada.style.backgroundColor = seleccion.color;
    portada.textContent = '♫';
    portada.setAttribute('aria-hidden', 'true');
    const info = document.createElement('div');
    info.className = 'song-info';
    const nombre = document.createElement('h3');
    nombre.textContent = cancion.titulo;
    const artista = document.createElement('p');
    artista.textContent = cancion.artista;
    info.append(nombre, artista);
    const enlace = document.createElement('a');
    enlace.className = 'song-link';
    enlace.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(cancion.titulo + ' ' + cancion.artista)}`;
    enlace.target = '_blank';
    enlace.rel = 'noopener noreferrer';
    enlace.textContent = 'ESCUCHAR ↗';
    enlace.setAttribute('aria-label', `Buscar ${cancion.titulo} de ${cancion.artista} en YouTube (abre otra pestaña)`);
    fila.append(numero, portada, info, enlace);
    lista.append(fila);
  });
  const nota = document.createElement('p');
  nota.className = 'disclaimer';
  nota.textContent = 'Al pulsar «Escuchar» se abrirá una búsqueda en YouTube en otra pestaña.';
  resultados.append(lista, nota);
}

botones.forEach(boton => boton.addEventListener('click', () => mostrarRecomendaciones(boton.dataset.mood)));
