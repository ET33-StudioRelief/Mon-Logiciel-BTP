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
  const elements = [
    '#catch-phrase1',
    '#catch-phrase2',
    '.section_home_pricing',
    '.home_faq_component .margin-bottom.margin-xxlarge',
    '.home_faq_component .max-width-large.align-center',
  ];

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
// SECTION FAQ
export const animateFaq = (): void => {
  // Sélectionner toutes les sections à animer
  const elements = [
    '.home_faq_component .margin-bottom.margin-xxlarge',
    '.home_faq_component .max-width-large.align-center',
  ];

  // Appliquer l'animation à chaque section
  elements.forEach((selector) => {
    // Vérifier si l'élément existe avant d'appliquer l'animation
    const element = document.querySelector(selector);
    if (!element) return; // Passe au suivant si l'élément n'existe pas

    gsap.from(selector, {
      y: 50,
      opacity: 0,
      duration: 2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: selector,
        start: 'top',
        toggleActions: 'play none play none',
      },
    });
  });
};
/* HOME PAGE */
//STEPS - Apparition des étapes au scroll
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
// Animation pour faire apparaître une section avec un slide depuis la droite
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
// Animation pour faire apparaître une section avec un slide depuis la gauche
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

/* OUTILS */

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
