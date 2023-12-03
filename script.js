function toggleMode() {
  const html = document.documentElement

  //com função já criada do javascript
  html.classList.toggle("light")

  /*
  com if e else:

  if (html.classList.contains("light")) {
    html.classList.remove("light")
    } else {
    html.classList.add("light")
  }
  */

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/starwars-avatar.png")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/starwars-avatar.png")
  }
}
