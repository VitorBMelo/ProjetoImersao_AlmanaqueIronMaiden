// app.js

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const trackSearchInput = document.getElementById('track-search');
    const anoFilter = document.getElementById('ano-filter');
    const produtorFilter = document.getElementById('produtor-filter');
    const albumList = document.getElementById('album-list');
    const trackList = document.getElementById('track-list');
    const discografiaSection = document.getElementById('discografia');
    const trackResultsSection = document.getElementById('track-results');
    const divisoria = document.getElementById('divisoria');
    const viewDiscografiaBtn = document.getElementById('view-discografia');
    const viewTrackSearchBtn = document.getElementById('view-track-search');
    const filtrosDiscografia = document.getElementById('filtros-discografia');

    function renderAlbums(albums) {
        albumList.innerHTML = '';
        albums.forEach(album => {
            const li = document.createElement('li');
            li.className = 'album-item';
            li.innerHTML = `
                <a href="album.html?album=${encodeURIComponent(album.nome)}">
                    <img src="${album.capa}" alt="Capa do álbum ${album.nome}" class="album-cover">
                    <h3>${album.nome}</h3>
                    <p>${album.ano}</p>
                </a>
            `;
            albumList.appendChild(li);
        });
    }

    function renderTracks(tracks) {
        trackList.innerHTML = '';
        tracks.forEach(track => {
            const li = document.createElement('li');
            li.innerHTML = `
                <img src="${track.album.capa}" alt="Capa do álbum ${track.album.nome}" class="track-cover">
                <div>
                    <p><strong>Álbum:</strong> ${track.album.nome}</p>
                    <p><strong>Música:</strong> ${track.nome}</p>
                </div>
            `;
            trackList.appendChild(li);
        });
    }

    function searchTracks() {
        const trackText = trackSearchInput.value.toLowerCase();
        
        const trackResults = [];

        Discografia.forEach(album => {
            album.faixas.forEach(track => {
                if (track.toLowerCase().includes(trackText)) {
                    trackResults.push({ nome: track, album: album });
                }
            });
        });

        renderTracks(trackResults);
    }

    function updateFilters() {
        const anos = new Set();
        const produtores = new Set();

        Discografia.forEach(album => {
            anos.add(album.ano);
            produtores.add(album.produtor);
        });

        anoFilter.innerHTML = '<option value="">Filtrar por ano</option>';
        produtores.forEach(produtor => {
            produtorFilter.innerHTML += `<option value="${produtor}">${produtor}</option>`;
        });
        anos.forEach(ano => {
            anoFilter.innerHTML += `<option value="${ano}">${ano}</option>`;
        });
    }

    function filterAlbums() {
        const searchText = searchInput.value.toLowerCase();
        const selectedAno = anoFilter.value;
        const selectedProdutor = produtorFilter.value;

        const filteredAlbums = Discografia.filter(album => {
            return (album.nome.toLowerCase().includes(searchText) || album.ano.toString().includes(searchText)) &&
                   (!selectedAno || album.ano.toString() === selectedAno) &&
                   (!selectedProdutor || album.produtor === selectedProdutor);
        });

        renderAlbums(filteredAlbums);
    }

    function showDiscografia() {
        discografiaSection.style.display = 'block';
        trackResultsSection.style.display = 'none';
        divisoria.style.display = 'block';
        filtrosDiscografia.style.display = 'block'; // Mostrar filtros
        viewDiscografiaBtn.classList.add('active');
        viewTrackSearchBtn.classList.remove('active');
    }

    function showTrackSearch() {
        discografiaSection.style.display = 'none';
        trackResultsSection.style.display = 'block';
        divisoria.style.display = 'none';
        filtrosDiscografia.style.display = 'none'; // Ocultar filtros
        viewTrackSearchBtn.classList.add('active');
        viewDiscografiaBtn.classList.remove('active');
    }

    viewDiscografiaBtn.addEventListener('click', () => {
        showDiscografia();
    });

    viewTrackSearchBtn.addEventListener('click', () => {
        showTrackSearch();
    });

    searchInput.addEventListener('input', filterAlbums);
    anoFilter.addEventListener('change', filterAlbums);
    produtorFilter.addEventListener('change', filterAlbums);
    trackSearchInput.addEventListener('input', searchTracks);

    updateFilters();
    filterAlbums();
});
