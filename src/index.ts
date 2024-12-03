import './index.css';

import {
  animateCatchPhrase,
  animateFaq,
  animateSections,
  animateSectionsSlideLeft,
  animateSectionsSlideRight,
  animateSectionTestiTools,
  moveUpSections,
  stepsLine,
  updateFooterYear,
} from '$utils/gsap';

window.Webflow ||= [];
window.Webflow.push(() => {
  updateFooterYear();
  stepsLine();

  if (window.location.href.includes('/')) {
    moveUpSections(['.section_home_features', '.home_faq_bottom-cta', '.section_software-video']);
    animateSectionsSlideRight(['.section_home_temoignage', '.section_home_testimonial']);
    animateSections();
    animateFaq();
  }

  if (window.location.href.includes('outils')) {
    moveUpSections(['.software_blog_component', '.section_software_go-to-form']);
    animateSectionsSlideRight(['#software-solution2']);
    animateSectionsSlideLeft(['#software-solution1', '#software-solution3']);
    animateCatchPhrase();
    animateSectionTestiTools();
  }

  // Vérifier si l'URL contient 'architecte', 'constructeur' ou 'maitre-oeuvre'
  /*if (/architecte|constructeur|maitre-oeuvre/.test(window.location.href)) {
  }*/
});
