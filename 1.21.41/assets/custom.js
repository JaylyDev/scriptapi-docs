function listenForCodeCopies() {
  document.querySelectorAll("pre > button").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.previousElementSibling instanceof HTMLDetailsElement) {
        if (button.previousElementSibling.open) {
          return;
        }
        button.previousElementSibling.open = true;
        navigator.clipboard.writeText(
          button.previousElementSibling.innerText.trim()
        );
      }
    });
  });  
}

listenForCodeCopies();