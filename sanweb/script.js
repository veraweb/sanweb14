function flipCard(cardElement) {
    cardElement.classList.toggle("flipped");
  
    // Agregar corazones animados desde arriba
    const heart = document.createElement("div");
    heart.textContent = "❤️";
    heart.style.position = "fixed";
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = "0";
    heart.style.fontSize = "2rem";
    heart.style.animation = "fall 2s ease-out forwards";
    document.body.appendChild(heart);
  
    // Eliminar el corazón después de la animación
    heart.addEventListener("animationend", () => {
      heart.remove();
    });
  }
  