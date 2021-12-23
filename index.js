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

function addBio(params = {}) {
    const template = document.querySelector("#bio-content");
    const container = document.querySelector(".bio-cont");

    template.content.querySelector(".bio__image").src = params.image;
    template.content.querySelector(".bio-title").textContent = params.title;
    template.content.querySelector(".bio-text").textContent = params.text;

    const clone = document.importNode(template.content, true)
    container.appendChild(clone);
}
function addServ(params = {}) {
    const template = document.querySelector("#service-content");
    const container = document.querySelector(".service-content");

    template.content.querySelector(".service-card__img").src = params.image;
    template.content.querySelector(".service-card__title").textContent = params.title;
    template.content.querySelector(".service-card__text").textContent = params.text;

    const clone = document.importNode(template.content, true)
    container.appendChild(clone);
}

function getContentfulBio() {
    return fetch("https://cdn.contentful.com/spaces/h93r5bc033hs/environments/master/entries?access_token=7zw1mfM2v_IMDdVO84tFHTa3n6DxIE-HBrz_vgKBbQM&content_type=desafioM4"
    )
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log("Bio Data",data)
            const fieldsCollections = data.items.map((item) => {
                const obj = {
                    title: item.fields.title,
                    text: item.fields.textBio.content[0].content[0].value,
                    imageID: item.fields.bioImage.sys.id,
                    includes: data.includes.Asset,
                };
                return obj;

            });

            fieldsCollections.forEach((x) => {
                const findId = findAsset(x.imageID, x.includes);
                x.image = "https:" + findId.fields.file.url;
            });

            return fieldsCollections;

        });
}
function getContentfulServ() {
    return fetch("https://cdn.contentful.com/spaces/h93r5bc033hs/environments/master/entries?access_token=7zw1mfM2v_IMDdVO84tFHTa3n6DxIE-HBrz_vgKBbQM&content_type=desafioM4Service"
    )
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data);
            const fieldsCollections = data.items.map((item) => {
                const obj = {
                    title: item.fields.title,
                    text: item.fields.serviceText.content[0].content[0].value,
                    imageID: item.fields.serviceImage.sys.id,
                    includes: data.includes.Asset,
                }
                return obj;
            })
            fieldsCollections.forEach((x) => {
                const findId = findAsset(x.imageID, x.includes);
                x.image = "https:" + findId.fields.file.url;
            });

            return fieldsCollections;
        });
}

function findAsset(assetID, includes) {
    const find = includes.find((inc) => {
        return inc.sys.id == assetID;
    })
    return find;
}

function main() {
    footer(document.querySelector(".footer"));

    header(document.querySelector(".header__nav-bar"));

    contact(document.querySelector(".contact"));

    button();
    
    getContentfulBio().then((bio) => {
        for (const b of bio) {
            addBio(b);
        }
    })
    getContentfulServ().then((serv) => {
        for (const s of serv) {
            addServ(s);
        }
    })
    
}



main();