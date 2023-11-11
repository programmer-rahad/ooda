// jQuery
$(document).ready(function () {

    // $('.scrollable-image').horizon();

    if ($('.uc-sliders').length) {
        $('.uc-sliders').owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: true,
            navText: ["<span class='arrow left'></span>", "<span class='arrow right'></span>"],
            navText: [
                '<img src="assets/images/icons/arrow-left.svg" />'
                ,
                '<img src="assets/images/icons/arrow-left.svg" />'
            ],
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            stagePadding: 0,
            dots: false,
            responsive: {
                430: {

                },
                // 576: {
                //     items: 2
                // },
                600: {
                    items: 2,
                    margin: 15
                },
                // 768: {

                // },
                992: {
                    items: 3,
                    margin: 15
                },
                1200: {
                    items: 4,
                    margin: 15
                },
                1350: {
                    items: 4,
                    margin: 15,
                    stagePadding: 65
                },
            }
        });
    }
    if ($('.mu-sliders').length) {
        $('.mu-sliders').owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: true,
            navText: [
                '<img src="assets/images/icons/arrow-left-2.svg" />'
                ,
                '<img src="assets/images/icons/arrow-left-2.svg" />'
            ],
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            stagePadding: 0,
            dots: false,
            responsive: {
                430: {

                },
                // 576: {
                //     items: 2
                // },
                600: {
                    items: 2,
                    margin: 15
                },
                992: {
                    items: 3,
                    margin: 15
                },
                1200: {
                    items: 4,
                    margin: 15
                },
            }
        });
    }
    if ($('.testimonial-items').length) {
        $('.testimonial-items').owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: true,
            navText: [
                '<img src="assets/images/icons/arrow-left.svg" />'
                ,
                '<img src="assets/images/icons/arrow-left.svg" />'
            ],
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            stagePadding: 0,
            dots: false,
            responsive: {
                430: {

                },
                // 576: {
                //     items: 2
                // },
                768: {
                    items: 2,
                    margin: 15,
                    stagePadding: 50
                },
                992: {
                    items: 2,
                    margin: 25,
                    stagePadding: 70
                },
                992: {
                    items: 2,
                    margin: 30,
                    stagePadding: 100
                },
                1300: {
                    items: 2,
                    margin: 70,
                    stagePadding: 180
                }
            }
        });
    }



});



// $('.video-play-button').magnificPopup({
//     type: 'iframe'
// });

// Javascript
document.addEventListener('DOMContentLoaded', function () {

    function hideSocial(condition) {
        const iconsDOM = document.querySelector('.fixed-social-icons');
        if (!iconsDOM) return;
        if (condition) {
            iconsDOM.classList.add('d-none');
        } else {
            iconsDOM.classList.remove('d-none');
        }
    }

    // Header

    !function () {
        function SlideNavigation(container) {
            this.container = container;
            this.closeButtons = container.querySelectorAll('button.close');
            this.init();
        }
        SlideNavigation.prototype.reset = function () { }
        SlideNavigation.prototype.init = function () {
            this.reset();
            this.events();
        }
        SlideNavigation.prototype.openClose = function (open) {
            this.container.classList[open ? 'add' : 'remove']('slide-navigation--active');
            document.body.style.overflow = open ? 'hidden' : 'visible';

            hideSocial(open);

        }
        SlideNavigation.prototype.events = function () {
            var length = this.closeButtons.length
            for (var i = 0; i < length; i++) {
                this.closeButtons[i].addEventListener('click', this.openClose.bind(this, false));
            }
        }
        function Header(container) {
            this.header = container;
            this.nav = container.querySelector('nav');
            this.menuButton = container.querySelector('svg.square-dots');
            this.slideNavigation = new SlideNavigation(this.nav);
        }
        Header.prototype.reset = function () { }
        Header.prototype.reset = function () { }
        Header.prototype.events = function () {
            this.menuButton.addEventListener('click', function () {
                this.slideNavigation.openClose(true);
            }.bind(this))
        }
        Header.prototype.init = function () {
            this.reset();
            this.events();
        }
        const header = new Header(document.querySelector('header'));
        header.init();
    }();

    // Scrollable Image
    !function () {
        var container = document.querySelector('.scrollable-image');
        var img = container.querySelector('img');
        if (!container) return;
        console.log(container);
        // document.body.addEventListener('wheel', function (e) {
        //     if (e.target === img) {
        //         const fromTop = document.querySelector('.scrollable-image').offsetTop + -50;
        //         window.scrollTo(0, fromTop)
        //         document.body.style.overflow = 'hidden';
        //     } else {
        //         document.body.style.overflow = 'visible';
        //     }
        // });
        // container.addEventListener('wheel', function () {
        //     console.log('Hello');
        // });
    }();

    // Custom Video
    !function () {
        function CustomVideo(item) {
            this.playButton = item.querySelector('a.play');
            this.thumb = item.querySelector('img.thumb');
            this.video = item.querySelector('video');
            this.events();
        }

        CustomVideo.prototype.events = function () {
            // Play
            this.playButton.addEventListener('click', function () {
                this.playVideo();
                event.preventDefault();
            }.bind(this));

            // Pause
            // this.video.addEventListener('pause', function () {
            //     this.pauseVideo();
            // }.bind(this));

            // Stop Video
            this.video.addEventListener('ended', function () {
                this.stopVideo();
            }.bind(this));
        }
        CustomVideo.prototype.playVideo = function () {
            this.thumb.style.display = 'none';
            this.playButton.style.display = 'none';
            this.video.style.display = 'block';
            this.video.play();
        }
        CustomVideo.prototype.pauseVideo = function () {
            this.thumb.style.display = 'block';
            this.playButton.style.display = 'block';
            this.video.style.display = 'none';
            this.video.pause();
        }
        CustomVideo.prototype.stopVideo = function () {
            this.thumb.style.display = 'block';
            this.playButton.style.display = 'block';
            this.video.style.display = 'none';
        }

        var container = document.querySelector('.ooda-video .video-item');
        if (!container) return;
        var customVideo = new CustomVideo(container);

    }();

    // Bootstrap Modal

    !function () {

        const modalElement = document.getElementById('modalId');
        const myModal = new bootstrap.Modal(modalElement, {
            // keyboard: false,
            // backdrop: 'static'
        });

        // Events ( show.bs.modal, shown.bs.modal, hide.bs.modal, hidden.bs.modal, hidePrevented.bs.modal )
        modalElement.addEventListener('show.bs.modal', function (event) {
            console.log('Show');
        });
        // myModal.show();
    }();


    AOS.init();



})

