import './index.css';

import {
  addHoverBlogCard,
  animateCatchPhrase,
  animateSections,
  animateSectionsSlideLeft,
  animateSectionsSlideRight,
  animateSectionTestiTools,
  buttonLight,
  moveUpSections,
  navbarButtonLight,
  secondaryButtonHover,
  stepsLine,
  updateFooterYear,
} from '$utils/gsap';

window.Webflow ||= [];
window.Webflow.push(() => {
  updateFooterYear();
  buttonLight();
  navbarButtonLight();
  secondaryButtonHover();
  stepsLine();

  if (window.location.href.includes('/')) {
    moveUpSections(['.section_home_features', '.home_faq_bottom-cta', '.section_software-video']);
    animateSectionsSlideRight(['.section_home_temoignage', '.section_home_testimonial']);
    animateSections();
  }

  if (window.location.href.includes('outils')) {
    moveUpSections(['.software_blog_component', '.section_software_go-to-form']);
    animateSectionsSlideRight(['#software-solution2']);
    animateSectionsSlideLeft(['#software-solution1', '#software-solution3']);
    animateCatchPhrase();
    animateSectionTestiTools();
    addHoverBlogCard();
  }
  if (window.location.href.includes('blog')) {
    addHoverBlogCard();
  }
});
