class CarouselComponent extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });

        this.shadow.innerHTML = `
            <style>
                @import url('https://unpkg.com/swiper/swiper-bundle.min.css');

                .container {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .swiper {
                    width: 100%;
                    height: 90%;
                    position: relative;
                }

                .swiper-slide {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 8px;
                    overflow: hidden;
                }

                .swiper-slide img {
                    width: 80%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 10px;
                }

                .swiper-button-next,
                .swiper-button-prev {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background: rgba(0,0,0,0.55);
                    width: 5vh;
                    height: 10vh;
                    border-radius: 1vh;
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: .3s ease;
                    z-index: 10;
                }

                .swiper-button-next {
                    right: 6% !important;
                }
                .swiper-button-prev {
                    left: 6% !important;
                }

                .swiper-button-next svg, 
                .swiper-button-prev svg { 
                    width: 60%; 
                    height: 60%; 
                } 
                    
                .swiper-button-next:hover, 
                .swiper-button-prev:hover { 
                    background: rgba(0,0,0,0.75); 
                } 
                    
                .swiper-button-next::after, 
                .swiper-button-prev::after { 
                    font-size: 0; /* Esconde iconos por defecto */ 
                }

                /* Paginación afuera del carrusel */
                .external-pagination {
                    position: static;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 10%;
                }

                .swiper-pagination-bullet-active{
                    background: #1B1B1B;
                }
            </style>

            <div class="container">
                <section class="swiper mySwiper">
                    <div class="swiper-wrapper"></div>

                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </section>

                <!-- Paginación fuera ↓ -->
                <div class="swiper-pagination external-pagination"></div>
            </div>
        `;
    }

    connectedCallback() {
        if (this.hasAttribute("images")) {
            const imgs = JSON.parse(this.getAttribute("images"));
            this.setImages(imgs);
        }
    }

    setImages(images) {
        const wrapper = this.shadow.querySelector(".swiper-wrapper");
        wrapper.innerHTML = "";

        images.forEach(src => {
            const slide = document.createElement("div");
            slide.classList.add("swiper-slide");
            slide.innerHTML = `<img src="${src}">`;
            wrapper.appendChild(slide);
        });

        this.initSwiper();
    }

    initSwiper() {
        const script = document.createElement("script");
        script.src = "https://unpkg.com/swiper/swiper-bundle.min.js";

        script.onload = () => {
            new Swiper(this.shadow.querySelector(".mySwiper"), {
                effect: "coverflow",
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: "auto",

                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 50,
                    modifier: 1.2,
                    slideShadows: false,
                },

                loop: true,

                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },

                pagination: {
                    el: this.shadow.querySelector(".external-pagination"),
                    clickable: true
                },

                navigation: {
                    nextEl: this.shadow.querySelector(".swiper-button-next"),
                    prevEl: this.shadow.querySelector(".swiper-button-prev"),
                }
            });
        };

        this.shadow.appendChild(script);
    }
}

customElements.define("carousel-component", CarouselComponent);
