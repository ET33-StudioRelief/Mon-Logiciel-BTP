import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* GLOBAL */
// Fonction pour mettre à jour l'année dans le footer
export function updateFooterYear(): void {
  const currentYear: number = new Date().getFullYear(); // Obtenez l'année actuelle
  const footerYearElement: HTMLElement | null = document.querySelector('.footer_year');

  if (footerYearElement) {
    footerYearElement.textContent = currentYear.toString(); // Mettez à jour le contenu
  }
}

/* BUTTON */
// Animation on button
export const buttonLight = (): void => {
  const navbarButtons = document.querySelectorAll('.button-content');

  if (!navbarButtons.length) return;

  // Ajouter les styles CSS nécessaires
  const style = document.createElement('style');
  style.textContent = `
    .button-content {
      position: relative;
      overflow: hidden;
      transform-origin: center;
    }
    .light-beam {
      position: absolute;
      width: 30px;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transform: skewX(-20deg);
      top: 0;
      left: -100%;
    }
  `;
  document.head.appendChild(style);

  // Appliquer l'effet à chaque bouton
  navbarButtons.forEach((button) => {
    const lightBeam = document.createElement('div');
    lightBeam.className = 'light-beam';
    button.appendChild(lightBeam);

    // Animation au survol
    button.addEventListener('mouseenter', () => {
      // Animation du faisceau lumineux
      gsap.fromTo(
        lightBeam,
        { left: '-10%' },
        {
          left: '110%',
          duration: 0.8,
          ease: 'power1.inOut',
        }
      );

      // Animation du bouton
      gsap.to(button, {
        scale: 1.02,
        /*top: -4,*/
        duration: 0.3,
        ease: 'power3.out',
      });
    });

    // Réinitialisation à la sortie
    button.addEventListener('mouseleave', () => {
      // Réinitialisation du faisceau
      gsap.to(lightBeam, {
        left: '-10%',
        duration: 0.3,
        ease: 'none',
      });

      // Réinitialisation du bouton
      gsap.to(button, {
        scale: 1,
        /*top: 0, */
        duration: 0.3,
        ease: 'power2.out',
      });
    });
  });
};

//Animation on navbar button
export const navbarButtonLight = (): void => {
  const navbarButtons = document.querySelectorAll('.navbar_button-content');

  if (!navbarButtons.length) return;

  // Ajouter les styles CSS nécessaires
  const style = document.createElement('style');
  style.textContent = `
    .navbar_button-content {
      position: relative;
      overflow: hidden;
      transform-origin: center;
    }
    .light-beam {
      position: absolute;
      width: 30px;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transform: skewX(-20deg);
      top: 0;
      left: -100%;
    }
  `;
  document.head.appendChild(style);

  // Appliquer l'effet à chaque bouton
  navbarButtons.forEach((button) => {
    const lightBeam = document.createElement('div');
    lightBeam.className = 'light-beam';
    button.appendChild(lightBeam);

    // Animation au survol
    button.addEventListener('mouseenter', () => {
      // Animation du faisceau lumineux
      gsap.fromTo(
        lightBeam,
        { left: '-10%' },
        {
          left: '200%',
          duration: 0.4,
          ease: 'power1.inOut',
        }
      );
    });

    // Réinitialisation à la sortie
    button.addEventListener('mouseleave', () => {
      // Réinitialisation du faisceau
      gsap.to(lightBeam, {
        left: '-10%',
        duration: 0.4,
        ease: 'none',
      });
    });
  });
};

// SECTION - Animation pour faire apparaître une section en move up
export const moveUpSections = (selectors: string[]): void => {
  selectors.forEach((selector) => {
    const element = document.querySelector(selector);
    if (!element) return;

    gsap.from(selector, {
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: selector,
        start: 'top 80%',
        toggleActions: 'play reverse play reverse',
      },
    });
  });
};

// SECTION APPARITION GLOBALE-
export const animateSections = (): void => {
  // Sélectionner toutes les sections à animer
  const elements = ['#catch-phrase1', '#catch-phrase2', '.section_home_pricing', '.home_faq_list'];

  // Appliquer l'animation à chaque section
  elements.forEach((selector) => {
    // Vérifier si l'élément existe avant d'appliquer l'animation
    const element = document.querySelector(selector);
    if (!element) return; // Passe au suivant si l'élément n'existe pas

    gsap.from(selector, {
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: selector,
        start: 'top 80%',
        toggleActions: 'play reverse play reverse',
      },
    });
  });
};

/* HOME PAGE */
//STEPS - step apparition
export const stepsLine = (): void => {
  // Sélectionner tous les éléments à animer
  const elements = ['#step1', '#step2', '#step3', '#step4'];

  // Appliquer l'animation à chaque élément
  elements.forEach((selector) => {
    const element = document.querySelector(selector); // Vérifiez si l'élément existe

    if (element) {
      // Si l'élément existe, appliquez l'animation
      gsap.from(selector, {
        opacity: 0,
        duration: 2.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: selector,
          start: 'top 80%',
          toggleActions: 'play reverse play reverse', // Jouer et inverser l'animation à l'entrée et à la sortie
        },
      });
    }
  });
};

/* SECTIONS */
// slide right animation
export const animateSectionsSlideRight = (selectors: string[]): void => {
  selectors.forEach((currentSelector) => {
    // Vérifier si l'élément existe
    const element = document.querySelector(currentSelector);
    if (!element) return; // Passe au suivant si l'élément n'existe pas

    gsap.from(currentSelector, {
      x: 100, // Commence 100px à droite de la position finale
      opacity: 0, // Commence invisible
      duration: 3, // Durée de l'animation
      ease: 'power3.out', // Transition fluide
      scrollTrigger: {
        trigger: currentSelector,
        start: 'top 80%', // L'animation démarre lorsque le haut de l'élément atteint 80% du viewport
        toggleActions: 'play none none none', // Joue l'animation à l'entrée
      },
    });
  });
};

/* SECTIONS */
// slide left animation
export const animateSectionsSlideLeft = (selectors: string[]): void => {
  selectors.forEach((currentSelector) => {
    // Vérifier si l'élément existe
    const element = document.querySelector(currentSelector);
    if (!element) return; // Passe au suivant si l'élément n'existe pas

    gsap.from(currentSelector, {
      x: -100, // Commence 100px à droite de la position finale
      opacity: 0, // Commence invisible
      duration: 3, // Durée de l'animation
      ease: 'power3.out', // Transition fluide
      scrollTrigger: {
        trigger: currentSelector,
        start: 'top 80%', // L'animation démarre lorsque le haut de l'élément atteint 80% du viewport
        toggleActions: 'play none none none', // Joue l'animation à l'entrée
      },
    });
  });
};

/* TOOLS */
//Section apparition
export const animateSectionTestiTools = (): void => {
  // Sélectionner toutes les sections à animer
  const elements = ['.section_software_testimonial', '.section_features'];

  // Appliquer l'animation à chaque section
  elements.forEach((selector) => {
    // Vérifier si l'élément existe avant d'appliquer l'animation
    const element = document.querySelector(selector);
    if (!element) return; // Passe au suivant si l'élément n'existe pas

    gsap.from(selector, {
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: selector,
        start: 'top 80%',
        toggleActions: 'play reverse play reverse',
      },
    });
  });
};
//Section apparition
export const animateCatchPhrase = (): void => {
  // Sélectionner toutes les sections à animer
  const elements = ['#software-heading1', '#software-heading2'];

  // Appliquer l'animation à chaque section
  elements.forEach((selector) => {
    // Vérifier si l'élément existe avant d'appliquer l'animation
    const element = document.querySelector(selector);
    if (!element) return; // Passe au suivant si l'élément n'existe pas

    gsap.from(selector, {
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: selector,
        start: 'top 80%',
        toggleActions: 'play reverse play reverse',
      },
    });
  });
};
//Hover on cards blog post
export const addHoverBlogCard = (): void => {
  const items = document.querySelectorAll('.hub_all-articles_item');

  items.forEach((item) => {
    const overlay = item.querySelector('.hub_all-articles_overlay');

    item.addEventListener('mouseenter', () => {
      // Animation de la carte
      gsap.to(item, {
        y: -15,
        duration: 0.3,
        ease: 'power1.out',
      });

      // Animation de l'overlay
      if (overlay) {
        gsap.to(overlay, {
          opacity: 0.33,
          duration: 0.3,
          ease: 'power1.out',
        });
      }
    });

    item.addEventListener('mouseleave', () => {
      // Animation de la carte
      gsap.to(item, {
        y: 0,
        duration: 0.3,
        ease: 'power1.out',
      });

      // Animation de l'overlay
      if (overlay) {
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.3,
          ease: 'power1.out',
        });
      }
    });
  });
};

// Secondary button hover effect
export const secondaryButtonHover = (): void => {
  const secondaryButtons = document.querySelectorAll('.button.is-secondary');

  if (!secondaryButtons.length) return;

  secondaryButtons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        backgroundColor: '#000000',
        color: '#ffffff',
        duration: 0.6,
        ease: 'power1.out',
      });
    });

    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        backgroundColor: 'transparent',
        color: '#000000',
        duration: 0,
        ease: 'power1.out',
      });
    });
  });
};
