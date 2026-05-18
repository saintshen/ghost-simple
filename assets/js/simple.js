// JavaScript files are compiled and minified during the build process to the assets/built folder. See available scripts in the package.json file.

// Import CSS
import "../css/index.css";

// Import JS
import navigationInit from "./navigation";
import infiniteScroll from "./infiniteScroll";
import lightboxInit from "./lightbox";

// Swiper is imported here and made available globally for inline template scripts
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Expose for inline template scripts that run after DOMContentLoaded
window.Swiper = Swiper;
window.Navigation = Navigation;
window.Pagination = Pagination;


// Call the menu and infinite scroll functions
navigationInit();
// infiniteScroll();
lightboxInit();