
function addServ(params={}){
    const template = document.querySelector("#service-content");
    const container = document.querySelector(".service-content");

    template.content.querySelector(".service-card__img").src = params.image;
    template.content.querySelector(".service-card__title").textContent = params.title;
    template.content.querySelector(".service-card__text").textContent = params.text;

    const clone = document.importNode(template.content, true)
    container.appendChild(clone);
}
function getContentfulServ(){
    return fetch("https://cdn.contentful.com/spaces/h93r5bc033hs/environments/master/entries?access_token=7zw1mfM2v_IMDdVO84tFHTa3n6DxIE-HBrz_vgKBbQM&content_type=desafioM4Porfolio"
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
function main(){
    footer(document.querySelector(".footer"));

    header(document.querySelector(".nav-bar__content"));

    getContentfulServ().then((serv)=>{
        for (const s of serv) {
            addServ(s)
        }
    })

    button();
}
main();