import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Batch #446 rocks", "Change your life", "Learn to code"],
    typeSpeed: 30,
    loop: true
  });
}

export { loadDynamicBannerText };
