let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// Config param
let countItem = items.length;
let itemActive = 0;

// Event next click
next.onclick = function() {
    itemActive = itemActive + 1;
    if (itemActive >= countItem) {
        itemActive = 0;
    }
    showSlider();
}

// Event prev click
prev.onclick = function() {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
}

// Auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000);

function showSlider() {
    // Remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // Active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // Clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000);
}

// Click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    });
});

// Redirect to layout page on White House click
document.getElementById('white-house').addEventListener('click', () => {
    window.location.href = 'layout.html'; // Change 'layout.html' to the actual URL of your layout page
});
