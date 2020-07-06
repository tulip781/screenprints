const initCarosel = () => {
  if(document.querySelector('.top-image')){
    const carosel = document.querySelector('.top-image');
    carosel.style.backgroundImage = `url(../img/space.jpg)`
  }
}


export { initCarosel };
