// Форма выбора даты
import flatpickr from "flatpickr";
import { Russian } from "flatpickr/dist/l10n/ru.js"
flatpickr('.search--head-date', {
    static: true,
    wrap: true,
    mode: 'range',
    "locale": Russian
});

// Выпадающий список
import { accordion } from "./accordion.js";
let selects = document.querySelectorAll('.select');
selects.forEach(element => {
    accordion(element);
});

// Slick Slider
import jquery from "jquery";
import slick from "slick-slider";
jquery(function () {
    jquery('.tours--list').slick({
        slidesToShow: 3,
        variableWidth: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 781,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]

    });

    jquery('.blog--list').slick({
        slidesToShow: 4,
        infinite: false,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 2,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 781,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                }
            },
        ]

    });
    jquery('.gallery--list').slick({
        slidesToShow: 6,
        infinite: false,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 2,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 781,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                }
            },
        ]
    });

    let gridElSpan = document.getElementById('gallery').querySelectorAll('.slick-slide');
    for (let i = 0; i < gridElSpan.length; i++) {
        const el = gridElSpan[i];
        if (el.querySelector('.gallery--item-span')) {
            el.classList.add('slick-slide_span');
        }
    }
});


// Эффект при наведение
import { tourHover } from "./tour.js";
tourHover('.tour');

// Переполнение текста
import { textOvf } from "./textOverflow.js";
let articles = document.querySelectorAll('.article--text');
let tourTexts = document.querySelectorAll('.tour--text');
articles.forEach(element => {
    textOvf(element, 181);
});
// tourTexts.forEach(element => {
//     textOvf(element, 221);
// });

// Галлерея
import lightGallery from '../../node_modules/lightgallery/lightgallery.umd.js';
import lgZoom from '../../node_modules/lightgallery/plugins/zoom/lg-zoom.umd.js';
import lgThumbnail from '../../node_modules/lightgallery/plugins/thumbnail/lg-thumbnail.umd.js';
lightGallery(document.getElementById('gallery'), {
    plugins: [lgZoom, lgThumbnail],
    speed: 500,
});

import { sidemenu } from "./sidemenu.js";
sidemenu('.burger--open', '.burger--body', '.burger--close', true, true);