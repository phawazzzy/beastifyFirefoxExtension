(function () {
    if (window.hasRun) {
        return;
    }
    window.hasRun = true;


    function insertBeast(beastURL) {
        removeExistingBeast();
        let beastImage = document.createElement("img");
        beastImage.setAttribute("src", beastURL)
        beastImage.style.height = "100vh";
        beastImage.className = "beastify-image";
        document.body.appendChild(beastImage);
    }

    function removeExistingBeast() {
        let existingBeasts = document.querySelectorAll(".beastify-image");
        for (let beast of existingBeasts) {
            beast.remove();
        }
    }



    browser.runtime.onMessage.addListener((messgae) => {
        if (Message.command === "beastify") {
            insertBeast(messgae.beastURL)
        } else if (message.command === "reset") {
            removeExistingBeast()
        }
    })
})();

(function(){})()