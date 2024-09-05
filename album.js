// album.js

document.addEventListener('DOMContentLoaded', () => {
    // Função para obter parâmetros da URL
    function getQueryParams() {
        const params = new URLSearchParams(window.location.search);
        return {
            album: params.get('album')
        };
    }

    const { album } = getQueryParams();
    const albumData = Discografia.find(a => a.nome === decodeURIComponent(album));

    if (albumData) {
        document.getElementById('album-cover').src = albumData.capa;
        document.getElementById('album-title').textContent = albumData.nome;
        document.getElementById('album-year').textContent = `Ano: ${albumData.ano}`;
        document.getElementById('album-producer').textContent = `Produtor: ${albumData.produtor}`;
        document.getElementById('album-record-label').textContent = `Gravadora: ${albumData.gravadora}`;

        const trackList = document.getElementById('album-tracks');
        trackList.innerHTML = '';
        albumData.faixas.forEach(track => {
            const li = document.createElement('li');
            li.textContent = track;
            trackList.appendChild(li);
        });
    } else {
        document.getElementById('album-detail').innerHTML = '<p>Álbum não encontrado.</p>';
    }
});
