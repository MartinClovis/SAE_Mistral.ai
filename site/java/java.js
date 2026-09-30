// Récupère le thème sauvegardé dans le localStorage
  let savedTheme = localStorage.getItem("theme");
  // Convertit en booléen (true si thème sombre)
  let isDark = savedTheme === "dark";

  // Applique le thème sombre au body si nécessaire
  document.body.classList.toggle("dark-mode", isDark);
  // Applique le thème sombre à la navigation si nécessaire
  document.querySelector("nav").classList.toggle("dark-mode", isDark);
  // Coche/décoche le switch selon le thème
  document.getElementById("toggle-theme").checked = isDark;

  // Ajoute un écouteur d'événement sur le changement du switch
  document.getElementById("toggle-theme").addEventListener("change", function () {
    // Récupère l'état du switch (true = sombre activé)
    const dark = this.checked;
    // Active/désactive le thème sombre sur le body
    document.body.classList.toggle("dark-mode", dark);
    // Active/désactive le thème sombre sur la nav
    document.querySelector("nav").classList.toggle("dark-mode", dark);
    // Sauvegarde le choix dans le localStorage
    localStorage.setItem("theme", dark ? "dark" : "light");
  });
}

// Quand la page est complètement chargée, exécute la fonction init()
window.onload = init;
