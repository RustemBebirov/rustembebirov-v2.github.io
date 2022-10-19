function UI() {
    this.aboutLink = document.querySelector('#about-link')
    this.educationLink = document.querySelector('#education-link')
    this.aboutMe = document.querySelector('#about-me .section-title h2')
    this.education = document.querySelector('#education .section-title h2')
    this.border = document.querySelector('.border-bottom')
    this.carauselRow = document.querySelector('.project_carausel .row')
    this.next = document.querySelector('.next')
    this.prev = document.querySelector('.prev')

}

const ui = new UI()


//carausel
let move = 0
ui.next.addEventListener('click', function () {
    if (move < 1049) {
        move += 300
        console.log(move)
        ui.carauselRow.style.left = -move + 'px'

    }
})

ui.prev.addEventListener('click', function () {
    if (move >= 150) {
        move -= 300
        ui.carauselRow.style.left = -move + 'px'

    }

})

ui.aboutLink.addEventListener('click', function () {
    animateText(ui.aboutMe)

})

ui.educationLink.addEventListener('click', function () {
    animateText(ui.education)
})

function animateText(element) {
    setTimeout(function () {
        element.classList.add('animate__bounce')
    }, 1000)
}
