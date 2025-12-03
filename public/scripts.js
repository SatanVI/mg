// ====== Gestion du formulaire contact ======
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();
    if (!name || !email || !message) {
      alert('Merci de remplir au minimum nom, email et message.');
      return;
    }
    alert('Merci pour votre demande, nous vous contacterons rapidement.');
    this.reset();
  });
}

// ====== Animation header immersive & scroll ======
let animationDone = false;
const headerImmersive = document.getElementById('headerImmersive');
const whitePanel = document.getElementById('whitePanel');

if(headerImmersive && whitePanel) {
  // Bloquer scroll au départ
  document.body.classList.add('lock-scroll');

  window.addEventListener('scroll', () => {
    // On lance l'animation seulement au tout premier scroll
    if (!animationDone && window.scrollY > 10) {
      window.scrollTo(0, 0); // bloque le contenu pendant l'effet
      headerImmersive.classList.add('scrolled');
      setTimeout(() => {
        whitePanel.classList.add('active');
      }, 320);
      setTimeout(() => {
        document.body.classList.remove('lock-scroll');
        animationDone = true;
      }, 1200);
    }
  });
}
