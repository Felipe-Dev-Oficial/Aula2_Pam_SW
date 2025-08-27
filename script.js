if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/Aula2_Pam_SW/sw.js")
    .then((registration)=>{
        console.log("Service Worker registration sucessful!", registration);
    })
    .catch((error)=>{
        console.log("Error trying register Service Worker", error)
    });    
}

const botao = document.getElementById("addButton");
