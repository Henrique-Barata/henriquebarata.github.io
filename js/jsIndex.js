document.querySelectorAll('.wrapper div').forEach(item => {
    item.addEventListener('click', function() {
        this.classList.add('clicked');  // Add class 'clicked' when clicked
    });
});