import './lib/fslightbox.js';

export default function lightboxInit() {

    document.querySelectorAll('.kg-image-card').forEach(card => {
        const lightbox = new FsLightbox();
        lightbox.props.sources = [card.querySelector('img').src];
        lightbox.props.captions = [card.querySelector('img').alt || card.querySelector('figcaption span')?.innerText || ''];
        card.querySelector('img').style.cursor = 'pointer';
        card.querySelector('img').addEventListener('click', () => {
            lightbox.open(0);
        });
        card.style.display = 'inline-block';
    });
    document.querySelectorAll('.kg-gallery-card').forEach((card, index) => {
        const lightbox = new FsLightbox();
        const images = card.querySelectorAll('img');
        lightbox.props.sources = Array.from(images).map(img => img.src);
        lightbox.props.captions = Array.from(images).map(img => img.alt || '');
        lightbox.props.showThumbsOnMount = true;
        images.forEach((img, imgIndex) => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', () => {
                lightbox.open(imgIndex);
            });
        });
        card.style.display = 'inline-block';
    });
}