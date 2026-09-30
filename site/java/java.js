function init() {
  // 1. Récupère le bouton par son VRAI ID dans le HTML
  const btnTheme = document.getElementById("bouton-theme");
  if (!btnTheme) return;

  // 2. Vérifie si le mode sombre était déjà activé
  const savedTheme = localStorage.getItem("theme");
  const isDark = savedTheme === "dark";

  // 3. Applique la BONE classe CSS (mode-sombre) au body
  document.body.classList.toggle("mode-sombre", isDark);
  
  // Met à jour le texte du bouton au chargement
  btnTheme.textContent = isDark ? "Mode Clair" : "Mode Sombre";

  // 4. Écoute le clic sur le bouton
  btnTheme.addEventListener("click", function () {
    // Bascule la classe mode-sombre
    const estSombre = document.body.classList.toggle("mode-sombre");
    
    // Change le texte du bouton
    btnTheme.textContent = estSombre ? "Mode Clair" : "Mode Sombre";

    // Sauvegarde la préférence dans le navigateur
    localStorage.setItem("theme", estSombre ? "dark" : "light");
  });
}

// Lance la fonction init quand le DOM est prêt
document.addEventListener("DOMContentLoaded", init);
