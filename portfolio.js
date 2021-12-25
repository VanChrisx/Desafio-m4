function addPort(params={}){
    const template = document.querySelector("#portfolio-content");
    const container = document.querySelector(".portfolio-content");

    template.content.querySelector(".portfolio-card__img").src = params.image;
    template.content.querySelector(".portfolio-card__title").textContent = params.title;
    template.content.querySelector(".portfolio-card__text").textContent = params.text;
    template.content.querySelector(".portfolio-card__link").href = params.link;

    const clone = document.importNode(template.content, true)
    container.appendChild(clone);
}
function getContentfulPort(){
    return fetch("https://cdn.contentful.com/spaces/h93r5bc033hs/environments/master/entries?access_token=7zw1mfM2v_IMDdVO84tFHTa3n6DxIE-HBrz_vgKBbQM&content_type=desafioM4Portfolios"
    )
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data);
            const fieldsCollections = data.items.map((item) => {
                const obj = {
                    title: item.fields.title,
                    text: item.fields.portfolioText.content[0].content[0].value,
                    link: item.fields.portfolioLink,
                    imageID: item.fields.portfolioImage.sys.id,
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

    getContentfulPort().then((port)=>{
        for (const p of port) {
            addPort(p)
        }
    })

    button();
}
main();