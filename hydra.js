try {
  const hydraCanvas = document.createElement("canvas");
  hydraCanvas.id = "hydra-bg-canvas";
  hydraCanvas.style.position = "fixed";
  hydraCanvas.style.left = "0";
  hydraCanvas.style.top = "0";
  hydraCanvas.style.width = "100vw";
  hydraCanvas.style.height = "100vh";
  hydraCanvas.style.zIndex = "-1";
  hydraCanvas.style.pointerEvents = "none";

  const dpr = window.devicePixelRatio || 1;
  hydraCanvas.width = window.innerWidth * dpr;
  hydraCanvas.height = window.innerHeight * dpr;

  document.body.prepend(hydraCanvas);

  var hydra = new Hydra({
    detectAudio: false,
    canvas: hydraCanvas,
    pixelRatio: dpr,
  });

  noise(200, 0.1)
    .thresh(0.88, 0.1)
    .color(
      () => 0.5 + 0.5 * Math.sin(time * 0.3),
      () => 0.5 + 0.5 * Math.sin(time * 0.5),
      () => 0.5 + 0.5 * Math.sin(time * 0.7)
    )
    .saturate(10)
    .modulateRotate(noise(2), 0.1)
    .rotate(() => Math.sin(time * 0.1) * 1.5)
    .modulateScale(noise(2), () => 0.5 + 0.3 * Math.sin(time * 0.1))
    .out(o0);

  window.addEventListener("resize", () => {
    const dpr = window.devicePixelRatio || 1;
    hydraCanvas.width = window.innerWidth * dpr;
    hydraCanvas.height = window.innerHeight * dpr;
    hydraCanvas.style.width = "100vw";
    hydraCanvas.style.height = "100vh";
    if (hydra.setResolution) {
      hydra.setResolution(hydraCanvas.width, hydraCanvas.height);
    }
  });
} catch (e) {
  document.body.classList.add("no-hydra");
}
