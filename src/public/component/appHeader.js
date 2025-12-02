class OptionHeader extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({ mode: "open" });
        this.shadow.innerHTML = `
            <style>
                @import url('https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css');
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');

                *{
                margin:0;
                padding:0;
                font-family: "Montserrat", sans-serif;
                }

                .out-container{
                width:100%;
                height:100vh;
                background:#1c1b1fbd;
                display:flex;
                justify-content:right;
                position: fixed;
                top:0;
                right:0;
                z-index: 1;
                box-sizing: border-box;
                transition: all 1s ease-in;
                }

                .inner-container {
                width: 35%;
                height: 100%;
                background:white;
                display: flex;
                flex-direction:column;
                transform: translateX(100%);
                transition: transform .3s ease-out;
                }

                .inner-container.show {
                transform: translateX(0);
                }

                .inner-container header{
                width: 100%;
                height: 10%;
                display: flex;
                background: #ffe800;
                justify-content: space-between;
                box-sizing: border-box;
                align-items:center;
                padding: 0 5vh 0 5vh;
                }

                #close-btn{
                background: none;
                border: none;
                display: flex;
                justify-content: center;
                align-items: center;
                }

                #close-btn i{
                font-size: 4vh;
                }

                #content-option{
                width: 100%;
                height: 90%;
                display: flex;
                flex-direction: column;
                padding: 5%;
                box-sizing: border-box;
                }

                .empty-div{
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background: #F7F7F7;
                border-radius: 3vh;
                }

                .cart-emptyImg{
                width: 45%;
                }
            </style>

            <container class="out-container">
                <container class="inner-container">
                    <header>
                        <h2 id="title-option">Example</h2>
                        <button id="close-btn">
                            <i class='bx  bx-x'></i> 
                        </button>
                    </header>
                    <content id="content-option">

                    </content>
                </container>
            </container>
        `;
    }

    connectedCallback() {
        const btn = this.shadow.querySelector("#close-btn");
        if (btn) btn.addEventListener("click", () => this.close());

        const inner = this.shadow.querySelector(".inner-container");

        requestAnimationFrame(() => {
            inner.classList.add("show");
        });
    }

    close() {
        const inner = this.shadow.querySelector(".inner-container");
        inner.classList.remove("show");
        setTimeout(() => this.remove(), 300);
    }

    setData(title, content) {
        const titleEl = this.shadow.querySelector("#title-option");
        const contentEl = this.shadow.querySelector("#content-option");
        if (titleEl) titleEl.textContent = title;
        if (contentEl) contentEl.innerHTML = content;
    }
}

customElements.define("option-header", OptionHeader);

class AppHeader extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = `
        <style>
            @import url('https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css');
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');

            *{
            margin: 0;
            padding: 0;
            font-family: "Montserrat", sans-serif;
            }

            
            header {
            display: flex;
            justify-content: space-around;
            align-items: center;
            background: #ffe800;
            color: white;
            width: 100%;
            height: 14vh;
            box-sizing: border-box;
            padding-top:3vh;
            }
            
            .img-logo{
            width: 10%;
            transition: all .1s ease-in-out;
            }

            .img-logo:hover {
            cursor: pointer;
            transform: scale(1.1);
            transition: all .1s ease-in-out;
            }

            .input-container{
            display: flex;
            width: 30%;
            height: 60%;
            background: white;
            border-radius: 5px;
            overflow: hidden;
            box-shadow: 0px 3px 8px rgba(0,0,0,0.30);
            }

            .input-container input::placeholder {
            color: #999;
            }

            .input-container input{
            width:85%;
            height:100%;
            font-size: medium;
            font-weight: 550;
            border-radius: 5px 0 0 5px;
            padding:3%;
            box-sizing: border-box;
            border: none;
            }

            .search-btn{
            width:15%;
            height:100%;
            background: #444;
            color: white;
            font-size: 22px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            border:none;
            border-radius: 0 5px 5px 0;
            }

            .search-btn:hover {
            background: #333;
            }

            .nav-container{
            width:30%;
            display:flex;
            justify-content: space-between;
            }

            nav a {
            color: #615916;
            text-decoration: none;
            font-size: medium;
            font-weight: 550;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            }

            nav a svg{
            width:7vh;
            }

            nav a:hover {
            text-decoration: underline;
            }
        </style>

        <header>
            <img class="img-logo" src="../assets/logo.png">
            <div class="input-container">
                <input required="" placeholder="Buscar en exito.com">
                <button class="search-btn">
                    <i class='bx  bx-search'></i> 
                </button>
            </div>
            <nav class="nav-container">
            <a id="noti-button"><svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
fill="currentColor" viewBox="0 0 24 24" >
<!--Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free-->
<path d="M19 12.59V10c0-3.22-2.18-5.93-5.14-6.74C13.57 2.52 12.85 2 12 2s-1.56.52-1.86 1.26C7.18 4.08 5 6.79 5 10v2.59L3.29 14.3a1 1 0 0 0-.29.71v2c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-2c0-.27-.11-.52-.29-.71zM19 16H5v-.59l1.71-1.71a1 1 0 0 0 .29-.71v-3c0-2.76 2.24-5 5-5s5 2.24 5 5v3c0 .27.11.52.29.71L19 15.41zM14.82 20H9.18c.41 1.17 1.51 2 2.82 2s2.41-.83 2.82-2"></path>
</svg><p>Notificaciones</p></a>
            <a id="location-button"><svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
fill="currentColor" viewBox="0 0 24 24" >
<!--Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free-->
<path d="m6,8.44c-.02,5.1,5.17,9.18,5.39,9.35.18.14.4.21.61.21s.43-.07.61-.21c.22-.17,5.41-4.25,5.39-9.35,0-3.55-2.69-6.44-6-6.44s-6,2.89-6,6.44Zm10,0h0c.01,3.19-2.74,6.08-4,7.24-1.26-1.15-4.01-4.04-4-7.24,0-2.45,1.79-4.44,4-4.44s4,1.99,4,4.44Z"></path><path d="M12 6A2 2 0 1 0 12 10 2 2 0 1 0 12 6z"></path><path d="m18.02,14.73c-.4.64-.84,1.23-1.27,1.76,2.13.48,3.25,1.19,3.25,1.51,0,.51-2.75,2-8,2s-8-1.49-8-2c0-.32,1.12-1.03,3.25-1.51-.43-.53-.86-1.12-1.27-1.76-2.32.64-3.98,1.71-3.98,3.27,0,2.75,5.18,4,10,4s10-1.25,10-4c0-1.56-1.67-2.63-3.98-3.27Z"></path>
</svg> <p>Ubicacion</p></a>
            <a id="profile-button"><svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
fill="currentColor" viewBox="0 0 24 24" >
<!--Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free-->
<path d="M12 6c-2.28 0-4 1.72-4 4s1.72 4 4 4 4-1.72 4-4-1.72-4-4-4m0 6c-1.18 0-2-.82-2-2s.82-2 2-2 2 .82 2 2-.82 2-2 2"></path><path d="M12 2C6.49 2 2 6.49 2 12c0 3.26 1.58 6.16 4 7.98V20h.03c1.67 1.25 3.73 2 5.97 2s4.31-.75 5.97-2H18v-.02c2.42-1.83 4-4.72 4-7.98 0-5.51-4.49-10-10-10M8.18 19.02C8.59 17.85 9.69 17 11 17h2c1.31 0 2.42.85 2.82 2.02-1.14.62-2.44.98-3.82.98s-2.69-.35-3.82-.98m9.3-1.21c-.81-1.66-2.51-2.82-4.48-2.82h-2c-1.97 0-3.66 1.16-4.48 2.82A7.96 7.96 0 0 1 4 11.99c0-4.41 3.59-8 8-8s8 3.59 8 8c0 2.29-.97 4.36-2.52 5.82"></path>
</svg><p>Perfil</p></a>
            <a id="cart-button"><svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
fill="currentColor" viewBox="0 0 24 24" >
<!--Boxicons v3.0.6 https://boxicons.com | License  https://docs.boxicons.com/free-->
<path d="M10.5 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3M17.5 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3M8.82 15.77c.31.75 1.04 1.23 1.85 1.23h6.18c.79 0 1.51-.47 1.83-1.2l3.24-7.4c.14-.31.11-.67-.08-.95S21.34 7 21 7H7.33L5.92 3.62C5.76 3.25 5.4 3 5 3H2v2h2.33zM19.47 9l-2.62 6h-6.18l-2.5-6z"></path>
</svg><p>Carrito</p></a>
            </nav>
        </header>
        `;

        const notiBtn = shadow.querySelector("#noti-button");
        const locBtn = shadow.querySelector("#location-button");
        const profBtn = shadow.querySelector("#profile-button");
        const cartBtn = shadow.querySelector("#cart-button");
        const logo = shadow.querySelector(".img-logo");

        notiBtn.addEventListener("click", () => this.openOption("Notificaciones", "<p>Aquí van tus notificaciones...</p>"));
        locBtn.addEventListener("click", () => this.openOption("Ubicación", "<p>Selecciona tu ciudad...</p>"));
        profBtn.addEventListener("click", () => this.openOption("Perfil", "<p>Datos del usuario...</p>"));
        cartBtn.addEventListener("click", () => this.openOption("Carrito", '<div class="empty-div"><img src="../assets/image.png" class="cart-emptyImg"></div>'));
        logo.addEventListener("click", () => window.location.replace(`/home`));
    }
    openOption(title, content) {
        const option = document.createElement("option-header");
        option.setData(title, content);
        document.body.appendChild(option);
    }
}

customElements.define("app-header", AppHeader);