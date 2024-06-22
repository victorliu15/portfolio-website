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