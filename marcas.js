function esperarFooter() {
  const contenedor = document.querySelector(".mslides-container");

  if (!contenedor) {
    setTimeout(esperarFooter, 100);
    return;
  }

  // cuando ya existe → inicializamos carrusel
  let mindex = 0;
  const mslides = document.querySelectorAll(".mslide");

  function mostrarmslide(i) {
    contenedor.style.transform = `translateX(-${i * 50}%)`;
  }

  setInterval(() => {
    mindex = (mindex + 1) % mslides.length;
    mostrarmslide(mindex);
  }, 5000);
}

esperarFooter();