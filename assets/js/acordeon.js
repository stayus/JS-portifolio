
const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

acordeonTriggers.forEach((trigger) => {

    trigger.addEventListener('click', (e) => {
        console.log('show')
    })
})