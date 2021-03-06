import $ from 'jquery';
import objectFitImages from 'object-fit-images';
import './css/index.pcss';
import './js/lamp-slider/lamp-slider-theme.pcss';
import './js/lamp-slider/lamp-slider.pcss';
import './js/card-slider/card-slider-theme.pcss';
import './js/reviews-slider/reviews-slider-theme.pcss';
import './js/gallery-slider/gallery-slider-theme.pcss';

import initLampSlick from './js/lamp-slider/lamp-slider';
import initReviewsSlick from './js/reviews-slider/reviews-slider';
import initGallerySlick from './js/gallery-slider/gallery-slider';

import navigateScroll from './js/navigateScroll';
import initModalOverlay from './js/modal-overlay';
import initInformationModalOverlay from './js/information-modal-overlay';
import openForm from './js/openForm';
import loadMap from './js/loadMap';
import fixedHeaderOnScroll from './js/fixedMenuOnScroll';
import initPhotoModalOverlay from './js/modal-overlay-photo';


window.addEventListener('load', () => {
    objectFitImages();
    fixedHeaderOnScroll();
    navigateScroll();


    const LampSliderSelector = $('.lamp-slider');
    initLampSlick(LampSliderSelector);

    const ReviewsSliderSelector = $('.modal-reviews-slider');
    initReviewsSlick(ReviewsSliderSelector);
    const GallerySliderSelector = $('.modal-gallery-slider');
    initGallerySlick(GallerySliderSelector);

    const initModalOverlayOptions = {
        modalOverlaySelector: document.getElementsByClassName('modal-overlay')[0],
        modalOverlayClosedClass: 'modal-overlay--closed',
        closeButtonSelector: document.getElementsByClassName('modal-overlay__close-button')[0],
        previewCardItemsSelector: document.getElementsByClassName('gallery__item')
    };

    initModalOverlay(initModalOverlayOptions);

    const initInformationModalOverlayOptions = {
        informationModalButton: document.getElementById('lamp-button'),
        informationModalOverlay: document.getElementById('modal-lamp'),
        informationModalOverlayClose: document.getElementById('modal-close-lamp'),
        informationModalCloseButton: document.getElementById('lamp-close-button'),
        closeClass: 'information-modal-overlay-wrapper--closed'
    };

    initInformationModalOverlay(initInformationModalOverlayOptions);

    const initContactsModalOverlayOptions = {
        informationModalButton: document.getElementById('contacts-button'),
        informationModalOverlay: document.getElementById('modal-contacts'),
        informationModalOverlayClose: document.getElementById('modal-close-contacts'),
        informationModalCloseButton: document.getElementById('contacts-close-button'),
        closeClass: 'information-modal-overlay-wrapper--closed'
    };

    initInformationModalOverlay(initContactsModalOverlayOptions);

    const initCommentsModalOverlayOptions = {
        informationModalButton: document.getElementById('comments-button'),
        informationModalOverlay: document.getElementById('modal-comments'),
        informationModalOverlayClose: document.getElementById('modal-close-comments'),
        informationModalCloseButton: document.getElementById('comments-close-button'),
        closeClass: 'information-modal-overlay-wrapper--closed'
    };

    initInformationModalOverlay(initCommentsModalOverlayOptions);

    const initGalleryModalOverlayOptions = {
        informationModalButton: document.getElementById('gallery-button'),
        informationModalOverlay: document.getElementById('modal-gallery'),
        informationModalOverlayClose: document.getElementById('modal-close-gallery'),
        informationModalCloseButton: document.getElementById('gallery-close-button'),
        closeClass: 'information-modal-overlay-wrapper--closed'
    };

    initInformationModalOverlay(initGalleryModalOverlayOptions);


    const openFormOptions = {
        openFormItemSelector: document.getElementsByClassName('js-open-form-button'),
        formWrapperSelector: document.getElementsByClassName('modal-overlay-form-wrapper')[0],
        closedClass: 'modal-overlay-form-wrapper--closed',
        closeFormSelector: document.getElementsByClassName('modal-overlay-form-wrapper__modal-overlay')[0],
        closeFormSelectorButton: document.getElementsByClassName('js-form__close-button')[0]
    };

    openForm(openFormOptions);


    const YmapSelector = document.getElementById('Ymap');
    loadMap(YmapSelector);

    const initPhotoModalOverlayOptions = {
        photoModalOverlayOpenImage: document.getElementsByClassName('js-modal-photo'),
        photoModalOverlay: document.getElementById('modal-photo'),
        photoModalOverlayImage: document.getElementsByClassName('modal-overlay-photo__photo')[0],
        photoModalOverlayCloseButton: document.getElementsByClassName('modal-overlay-photo__close-button')[0],
        closeClass: 'modal-overlay-photo--closed'
    };
    initPhotoModalOverlay(initPhotoModalOverlayOptions);
});
