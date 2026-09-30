function init() {
  // Récupère l'élément du bouton/switch
  const toggleBtn = document.getElementById("toggle-theme");
  if (!toggleBtn) return; // Sécurité si l'élément n'existe pas sur la page

  // Récupère le thème sauvegardé
  const savedTheme = localStorage.getItem("theme");
  const isDark = savedTheme === "dark";

  // Applique la classe 'mode-sombre' au body si nécessaire
  document.body.classList.toggle("mode-sombre", isDark);

  // Ajuste l'état du bouton/checkbox
  if (toggleBtn.type === "checkbox") {
    toggleBtn.checked = isDark;
  }

  // Écouteur d'événement au changement
  toggleBtn.addEventListener("change", function () {
    const isChecked = this.checked;
    
    // Bascule la classe sur le body
    document.body.classList.toggle("mode-sombre", isChecked);
    
    // Sauvegarde dans le localStorage
    localStorage.setItem("theme", isChecked ? "dark" : "light");
  });
}

// Exécution au chargement de la page
window.addEventListener("DOMContentLoaded", init);
