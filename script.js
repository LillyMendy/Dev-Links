function toggleMode ()
{
  const html = document.documentElement

  if(html.classList.contains("dark"))
  { html.classList. remove("dark")
  
  } else {
    html.classList.add("dark")
  }
 const img = document.querySelector("#profile img")

 if(html.classList.contains("dark"))
  { img.setAttribute("src","./assets/avatar.png")
  
  } else {
   img.setAttribute ("src","./assets/avatar-light.png")

  }

}