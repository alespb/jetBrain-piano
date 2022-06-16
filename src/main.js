document.addEventListener("keydown", function (e) {
    switch (e.code){
        // White keys
        case "KeyA":
            let keyA = new Audio("../audio/A.mp3");
            keyA.play();
            break;
        case "KeyS":
            let keyS = new Audio("../audio/S.mp3");
            keyS.play();
            break;
        case "KeyD":
            let keyD = new Audio("../audio/D.mp3");
            keyD.play();
            break;
        case "KeyF":
            let keyF = new Audio("../audio/F.mp3");
            keyF.play();
            break;
        case "KeyG":
            let keyG = new Audio("../audio/G.mp3");
            keyG.play();
            break;
        case "KeyH":
            let keyH = new Audio("../audio/H.mp3");
            keyH.play();
            break;
        case "KeyJ":
            let keyJ = new Audio("../audio/J.mp3");
            keyJ.play(); break;
        // Black keys
        case "KeyW":
            let keyW = new Audio("../audio/W.mp3");
            keyW.play(); break;
        case "KeyE":
            let keyE = new Audio("../audio/E.mp3");
            keyE.play(); break;
        case "KeyT":
            let keyT = new Audio("../audio/T.mp3");
            keyT.play(); break;
        case "KeyY":
            let keyY = new Audio("../audio/Y.mp3");
            keyY.play(); break;
        case "KeyU":
            let keyU = new Audio("../audio/U.mp3");
            keyU.play(); break;
    }
});