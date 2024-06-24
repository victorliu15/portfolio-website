function openPopup() {
    document.getElementById("popup").classList.add("open-popup");
    document.getElementById("mainContent").classList.add("blurred");
}
function closePopup() {
    document.getElementById("popup").classList.remove("open-popup");
    document.getElementById("mainContent").classList.remove("blurred");
}
function openResume() {
    document.getElementById("resumeContainer").classList.add("show-resume");
    document.getElementById("mainContent").classList.add("blurred");
}
function closeResume() {
    document.getElementById("resumeContainer").classList.remove("show-resume");
    document.getElementById("mainContent").classList.remove("blurred");
}

function copyToClipboard(elementId) {
    let text = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(text).then(function() {
        showNotification();
    }).catch(function(error) {
        console.error(error);
    });
}

function showNotification() {
    let notification = document.getElementById('notification');
    notification.classList.add('show');
    setTimeout(function() {
        notification.classList.remove('show');
    }, 2000);
}


function lightMode() {
    window.vantaEffect = VANTA.BIRDS({
        el: "#vanta-birds",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0xacacac,
        color1: 0x83899a,
        color2: 0x4198b1,
        quantity: 2.00
    });
    document.getElementById("navbar").style.backgroundColor = "rgb(220, 220, 220, 0.5)";
    document.getElementById("home-navbar").style.color = "black";
    document.getElementById("about-navbar").style.color = "black";
    document.getElementById("name").style.color = "black";
    document.getElementById("intro").style.color = "black";
    document.getElementById("contactBtn").style.color = "black";
    document.getElementById("resumeBtn").style.color = "black";
    document.getElementById("contactBtn").style.borderColor = "black";
    document.getElementById("resumeBtn").style.borderColor = "black";
    document.getElementById("toggleBox").style.border = "0.5vh solid black";
}

function darkMode() {
    window.vantaEffect = VANTA.BIRDS({
        el: "#vanta-birds",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0x7192f,
        color1: 0xff0000,
        color2: 0xd1ff,
        quantity: 2.00
    });
    document.getElementById("navbar").style.backgroundColor = "rgb(46, 59, 78, 0.5)";
    document.getElementById("home-navbar").style.color = "white";
    document.getElementById("about-navbar").style.color = "white";
    document.getElementById("name").style.color = "white";
    document.getElementById("intro").style.color = "white";
    document.getElementById("contactBtn").style.color = "white";
    document.getElementById("resumeBtn").style.color = "white";
    document.getElementById("contactBtn").style.borderColor = "white";
    document.getElementById("resumeBtn").style.borderColor = "white";
    document.getElementById("toggleBox").style.border = "0.5vh solid white";
}

document.addEventListener("DOMContentLoaded", function() {
    const savedMode = localStorage.getItem("mode");
    if (savedMode === "dark") {
        darkMode();
        document.getElementById("toggleMode").checked = true;
    } else {
        lightMode();
    }
    document.getElementById("toggleMode").addEventListener("change", function() {
        if (this.checked) {
            darkMode();
            localStorage.setItem("mode", "dark");
        } else {
            lightMode();
            localStorage.setItem("mode", "light");
        }
    });
});