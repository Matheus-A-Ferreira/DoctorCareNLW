window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  //verificar se a seção passou da linha
  //quais dados vou precisar?
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReachedOrPassedTargetLine = targetLine >= sectionTop

  //informações dos dados
  console.log(
    'o topo da seção chegou ou passou da linha?',
    sectionTopReachedOrPassedTargetLine
  )

  //verificar se a base está abaixo da linha alvo
  //quais dados vou precisar?

  //a seção termina aonde?
  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  //informações dos dados
  console.log('o fundo da seção passou da linha?', !sectionEndPassedTargetLine)

  //limtes da seção
  const sectionBoundaries =
    sectionTopReachedOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    console.log('estou na seção HOME')
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 450) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .card,
#about,
#about header,
#about .content,
#contact,
#contact header,
#contact .content`)
