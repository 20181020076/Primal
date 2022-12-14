import React from 'react'

const Carrusel = () => {
  return (
    // carrusel 1
    // <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
    //     <div className="carousel-inner">
    //         <div className="carousel-item active">
    //             <img src="./imagenPrueba1.png" className="d-block w-100" alt="..."/>
    //         </div>
    //         <div className="carousel-item">
    //             <img src="./prueba2.jpg" className="d-block w-100" alt="..."/>
    //         </div>
    //         <div className="carousel-item">
    //             <img src="./pruba3.jpg" className="d-block w-100" alt="..."/>
    //         </div>
    //     </div>
    // </div>
    
    // carrusel 2


    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2">
      <img src="./img/indicador.svg" alt="" />
    </button> 
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" role="listbox">
    <div className="carousel-item active" data-bs-interval="5000">
      <img src="./img/imagenPrueba1.png" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-md-block">
        <h5>slide 1</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="./img/prueba2.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-md-block">
        <h5>slide 2</h5>
        <p>Some representative placholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="./img/prueba3.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-md-block">
        <h5>slide 3</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" >
    <span className="carousel-control-prev-icon d-none" aria-hidden="true"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"  data-bs-slide="next">
    <span className="carousel-control-next-icon d-none" aria-hidden="true" ></span>
    
  </button>
</div> 
  )
}

export default Carrusel