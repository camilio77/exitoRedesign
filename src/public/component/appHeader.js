class AppHeader extends HTMLElement {
    constructor(){
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
            height: 12vh;
            }
            
            .img-logo{
            width: 10%;
            }

            .input-container{
            display: flex;
            width: 30%;
            height: 50%;
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
            <a href="/"><i class='bx  bx-bell'></i><p>Notificaciones</p></a>
            <a href="/about.html"><i class='bx  bx-location-alt-2'></i> <p>Ubicacion</p></a>
            <a href="/contact.html"><i class='bx  bx-user-circle'></i><p>Perfil</p></a>
            <a href="/contact.html"><i class='bx  bx-cart'></i><p>Carrito</p></a>
            </nav>
        </header>
        `;
    }
}

customElements.define("app-header", AppHeader);