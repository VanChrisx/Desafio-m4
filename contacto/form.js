function formData() {
    const formEl = document.querySelector(".contact");
    formEl.addEventListener("submit", function (e) {
        e.preventDefault();
        let formData = new FormData(e.target);
        const obj = Object.fromEntries(formData.entries());
        console.log(obj);
        const mensaje = ` user:  ${obj.name} 
                          email:  ${obj.email}       
                          mensaje: ${obj.message} `
        ;
        fetch("https://apx-api.vercel.app/api/utils/dwf", {
            method: "POST",
            headers: { "content-type": "application/json" },

            body: JSON.stringify({
                to: "christianvannoppen@gmail.com",
                message: mensaje,
            }),
        }).then(() => {
            console.log(mensaje);
            alert(
                "Mensaje enviado correctamente, le responderemos a la brevedad " + obj.name
            );
        });
    });
}
formData();