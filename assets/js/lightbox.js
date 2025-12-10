import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';
import 'photoswipe/style.css';

export default function lightboxInit() {
    const options = {
        dataSource: [],
        showHideAnimationType: 'fade',
        mouseMovePan: true,
        initialZoomLevel: 'fit',
        secondaryZoomLevel: 1,
        maxZoomLevel: 2,
        pswpModule: PhotoSwipe
    };

    var items = document.querySelectorAll('.kg-image-card');
    items.forEach(function(item) {
        var img = item.querySelector('img');
        var caption = item.querySelector('figcaption');
        if(img) {
            options.dataSource.push({
                src: img.getAttribute('src'),
                width: img.width,
                height: img.height,
                alt: img.getAttribute('alt') || '',
                caption: caption ? caption.innerHTML : ''
            });
        }
    });
    
    const lightbox = new PhotoSwipeLightbox(options);
    lightbox.on('uiRegister', function() {
        lightbox.pswp.ui.registerElement({
            name: 'custom-caption',
            order: 9,
            isButton: false,
            appendTo: 'root',
            html: 'Caption text',
            onInit: (el, pswp) => {
                lightbox.pswp.on('change', () => {
                    const currSlideElement = lightbox.pswp.currSlide.data.caption;
                    let captionHTML = '';
                    if (currSlideElement) {
                        captionHTML = currSlideElement;
                    } else {
                        // get caption from alt attribute
                        captionHTML = lightbox.pswp.currSlide.data.alt;
                    }
                    el.innerHTML = captionHTML || '';
                });
            }
        });
    });
    lightbox.init();

    document.querySelectorAll('.kg-image-card img').forEach((img, index) => {
        img.addEventListener('click', (event) => {
            event.preventDefault();
            lightbox.loadAndOpen(index);
        });
    });
}