// Parallax scroll effect
window.addEventListener('scroll', () => {
  const layers = document.querySelectorAll('.parallax-layer');
  const scrollY = window.scrollY;

  layers.forEach(layer => {
    const speed = layer.getAttribute('data-speed');
    const yPos = scrollY * speed;
    layer.style.transform = `translateY(${yPos}px)`;
  });
});

// Language toggle
let isHindi = true;
function toggleLanguage() {
  const heading = document.getElementById('heading');
  const desc = document.getElementById('desc');

  if (isHindi) {
    heading.textContent = "Mahakaleshwar Jyotirling";
    desc.textContent = "Located in Ujjain, Madhya Pradesh, the Mahakaleshwar Temple is one of the twelve Jyotirlingas of Lord Shiva. It is the only south-facing Jyotirlinga, symbolizing victory over time and death.";
  } else {
    heading.textContent = "महाकालेश्वर ज्योतिर्लिंग";
    desc.textContent = "उज्जैन स्थित महाकालेश्वर ज्योतिर्लिंग भगवान शिव के बारह ज्योतिर्लिंगों में से एक है। यह मंदिर एकमात्र दक्षिणमुखी ज्योतिर्लिंग है जहाँ काल स्वयं नतमस्तक होता है। यह स्थान मोक्षदायक और शिवभक्तों के लिए अत्यंत पावन माना जाता है।";
  }
  isHindi = !isHindi;
}
