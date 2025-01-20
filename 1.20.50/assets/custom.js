function listenForCodeCopies() {
  document.querySelectorAll("pre > button").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.previousElementSibling instanceof HTMLDetailsElement) {
        if (button.previousElementSibling.open) return;
        button.previousElementSibling.open = true;
        navigator.clipboard.writeText(
          button.previousElementSibling.innerText.trim()
        );
      }
    });
  });
}

function loadAds() {
  setTimeout(() => {
    const ads = document.querySelectorAll("ins.adsbygoogle");
    ads.forEach((ad) => {
      if (ad.className.includes("adsbygoogle-noablate")) return;
      (adsbygoogle = window.adsbygoogle || []).push({});
    });
  }, 3000);
}

function googleTranslateElementInit() {
  new google.translate.TranslateElement({ pageLanguage: "en", layout: google.translate.TranslateElement.InlineLayout.VERTICAL, }, "google_translate");
  const googleTranslate = document.getElementById('google_translate');
  const container = googleTranslate.querySelector('.skiptranslate.goog-te-gadget');

  if (container) {
    const textNode = Array.from(container.childNodes).find(node => node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() === "Powered by");
    if (textNode) container.removeChild(textNode);

    const spanElement = container.querySelector('span');
    if (spanElement) spanElement.remove();
  }
}

listenForCodeCopies();
loadAds();
