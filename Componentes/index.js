function button() {
    const buttonAbreVentanaEl = document.querySelector(".hmenu")
    const buttonCierraVentanaEl = document.querySelector(".hmenu__cierra-ventana")
    const ventanaEl = document.querySelector(".hmenu__ventana");

    buttonAbreVentanaEl.addEventListener("click", () => {
        ventanaEl.style.display = "inherit";
    })

    buttonCierraVentanaEl.addEventListener("click", () => {
        ventanaEl.style.display = "";
    })
}

function footer(el) {
    const footerEl = document.createElement("div");
    footerEl.className = "footer__content";
    footerEl.innerHTML = `
            <div class="footer__logo-cont"><img src="./img/vanchrisLogo.png" alt="" class="footer__logo"></div>
            <div class="footer__socialmedia">
                <div class="footer__socialmedia-align">
                    <p class="footer__socialtext">Instagram</p>
                    <img src="./img/instagram.svg" alt="" class="footer__socialsize">
                </div>
                <div class="footer__socialmedia-align">
                    <p class="footer__socialtext">Linkedin</p>
                    <img src="./img/Linkedin.svg" alt="" class="footer__socialsize">
                </div>
                <div class="footer__socialmedia-align">
                    <p class="footer__socialtext">GitHub</p>
                    <img src="./img/github.svg" alt="" class="footer__socialsize">
                </div>
            </div>
    `;
    el.appendChild(footerEl);
}

function header(el) {
    const navBarEl = document.createElement("div");

    navBarEl.innerHTML = ` 
    <nav class="nav-bar">
    <a href="./index.html" style="text-decoration:none">
    <img src="./img/vanchrisLogo.png" alt="" class="nav-bar__logo">
    </a>
    <button class="hmenu"></button>
    <div class="hmenu__desktop">
        <a href="./portfolio.html" class="vinculos fontMenu" style="text-decoration:none">
            <p class="hmenu__contenido-vinculos">Portfolio</p>
        </a>
        <a href="./servicios.html"class="vinculos fontMenu"style="text-decoration:none">
            <p class="hmenu__contenido-vinculos">Servicios</p>
        </a>
        <a href="./contacto.html"class="vinculos fontMenu"style="text-decoration:none">
            <p class="hmenu__contenido-vinculos">Contacto</p>
        </a>
    </div>
    <div class="hmenu__ventana">
        <button class="hmenu__cierra-ventana"></button>
        <div class="hmenu__contenido">
            <a href="./portfolio.html"class="vinculos fontMenu"style="text-decoration:none">
                <p class="hmenu__contenido-vinculos">Portfolio</p>
            </a>
            <a href="./servicios.html"class="vinculos fontMenu"style="text-decoration:none">
                <p class="hmenu__contenido-vinculos">Servicios</p>
            </a>
            <a href="./contacto.html"class="vinculos fontMenu"style="text-decoration:none">
                <p class="hmenu__contenido-vinculos">Contacto</p>
            </a>
        </div>
    </div>
</nav>
`;

    el.appendChild(navBarEl);
}

function contact(el) {
    const contactEl = document.createElement("div");

    contactEl.innerHTML = `
    <h2 class="contact__title fontTitle">Contacto</h2>
        <form>
            <label class="contact__label" for="name">
                <h3>Nombre</h3>
                <input name="name" class="contact__input-nombre-email" type="text">
            </label>
            <label class="contact__label" for="email">
                <h3>Email</h3>
                <input name="email" class="contact__input-nombre-email" type="text">
            </label>
            <label class="contact__label " for="message">
                <h3>Mensaje</h3>
                <textarea name="message" class="contact__input-mensaje"></textarea>
            </label>
            <div class="contact__submit-cont">
                <button class="contact__submit-button">Enviar</button>
            </div>
        </form>
        `;

    el.appendChild(contactEl);
}