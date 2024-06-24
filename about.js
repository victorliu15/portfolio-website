document.addEventListener('DOMContentLoaded', function () {
    const progressBars = document.querySelectorAll('.progress');
    setTimeout(() => {
        progressBars.forEach(bar => {
            if (bar.classList.contains('tennis')) {
                bar.style.width = '75%';
            }
            else if (bar.classList.contains('violin')) {
                bar.style.width = '80%';
            }
            else if (bar.classList.contains('swimming')) {
                bar.style.width = '50%';
            }
            else if (bar.classList.contains('coding')) {
                bar.style.width = '90%';
            }
        });
    }, 100);
});

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
    document.getElementById("aboutHeading").style.color = "black";
    document.getElementById("aboutText").style.color = "black";
    document.getElementById("skillsHeading").style.color = "black";
    document.getElementById("tennisSkill").style.color = "black";
    document.getElementById("violinSkill").style.color = "black";
    document.getElementById("swimmingSkill").style.color = "black";
    document.getElementById("codingSkill").style.color = "black";
    document.getElementById("tennisProgress").style.backgroundColor = "#4ca2af";
    document.getElementById("violinProgress").style.backgroundColor = "#4ca2af";
    document.getElementById("swimmingProgress").style.backgroundColor = "#4ca2af";
    document.getElementById("codingProgress").style.backgroundColor = "#4ca2af";
    document.getElementById("profilePic").style.borderColor = "black";
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
    document.getElementById("aboutHeading").style.color = "white";
    document.getElementById("aboutText").style.color = "white";
    document.getElementById("skillsHeading").style.color = "white";
    document.getElementById("tennisSkill").style.color = "white";
    document.getElementById("violinSkill").style.color = "white";
    document.getElementById("swimmingSkill").style.color = "white";
    document.getElementById("codingSkill").style.color = "white";
    document.getElementById("tennisProgress").style.backgroundColor = "rgb(100, 100, 255)";
    document.getElementById("violinProgress").style.backgroundColor = "rgb(100, 100, 255)";
    document.getElementById("swimmingProgress").style.backgroundColor = "rgb(100, 100, 255)";
    document.getElementById("codingProgress").style.backgroundColor = "rgb(100, 100, 255)";
    document.getElementById("profilePic").style.borderColor = "white";
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