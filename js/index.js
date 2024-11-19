function openImage(imgElement) {
    const imgSrc = imgElement.src;
    const newWindow = window.open("", "_blank");
    newWindow.document.write(`<img src="${imgSrc}" style="width:100%">`);
  }