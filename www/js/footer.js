import loadHtml from './modules/loadHtml.js';

export default async () => {

    let footer = document.getElementById('footer');
    let fileHtml = "/footer.html";
    let load = await loadHtml(fileHtml);
    footer.innerHTML = load;


    // menu 

    let adhkar = document.getElementById('adhkar');
    let prayer = document.getElementById('prayer');
    let media = document.getElementById('media');
    let more = document.getElementById('more');

    adhkar.onclick = () => {
        window.location.href = '/adhkar.html'
    }

    prayer.onclick = () => {
        window.location.href = '/prayer.html'
    }

    media.onclick = () => {
        window.location.href = '/media.html'
    }

    more.onclick = () => {
        window.location.href = '/more.html'
    }
}