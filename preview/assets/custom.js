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
    (adsbygoogle = window.adsbygoogle || []).push({});
  }, 1000);
}

listenForCodeCopies();
loadAds();