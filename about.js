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
