// Your code goes here
let navLink = document.querySelector('.nav-link');
navLink.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = 'yellow'
    })
})

