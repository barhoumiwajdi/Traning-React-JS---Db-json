import React from 'react';
//import Card from './Widgets/card'

function Home() {
  return (

    <div>
      <div className='conatiner Homepage '>
        <div>
          <div id="carouselBasicExample" class="carousel slide carousel-fade" data-mdb-ride="carousel">

            <div class="carousel-indicators">
              <button type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide-to="1"
                aria-label="Slide 2"></button>
              <button type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide-to="2"
                aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp" class="d-block w-100"
                  alt="Sunset Over the City" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>FivePoints</h5>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
              </div>


              <div class="carousel-item">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" class="d-block w-100"
                  alt="Canyon at Nigh" />
                <div class="carousel-caption d-none d-md-block">
                  <h5> FivePoints</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>


              <div class="carousel-item">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp" class="d-block w-100"
                  alt="Cliff Above a Stormy Sea" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>FivePoints</h5>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </div>
              </div>
            </div>

            <button class="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample"
              data-mdb-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample"
              data-mdb-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>


        </div>
      </div>
      <div className="container mt-5">

        <p class="note note-light text-center">
          <strong>Note light:</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Cum doloremque officia laboriosam. Itaque ex obcaecati architecto! Qui necessitatibus
          delectus placeat illo rem id nisi consequatur esse, sint perspiciatis soluta porro?
          <strong>Note light:</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Cum doloremque officia laboriosam. Itaque ex obcaecati architecto! Qui necessitatibus
          delectus placeat illo rem id nisi consequatur esse, sint perspiciatis soluta porro?
          <strong>Note light:</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Cum doloremque officia laboriosam. Itaque ex obcaecati architecto! Qui necessitatibus
          delectus placeat illo rem id nisi consequatur esse, sint perspiciatis soluta porro?

        </p>
        <p class="note note-light text-center">
          <strong>Note light:</strong> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Cum doloremque officia laboriosam. Itaque ex obcaecati architecto! Qui necessitatibus
          delectus placeat illo rem id nisi consequatur esse, sint perspiciatis soluta porro?
        </p>
      </div>

      <div class="container card-group mt-5">
        <div class="row">
          <div class="col-md-4 col-sm-12 card p-2">
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp" class="card-img-top" alt="Hollywood Sign on The Hill" />
            <div class="card-body">
              <h5 class="card-title">Node Js</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class=" col-md-4 col-sm-12 card p-2">
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp" class="card-img-top" alt="Palm Springs Road" />
            <div class="card-body">
              <h5 class="card-title">React JS</h5>
              <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div class=" col-md-4 col-sm-12 card p-2 ">
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp" class="card-img-top" alt="Los Angeles Skyscrapers" />
            <div class="card-body">
              <h5 class="card-title">Angular Js</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to show
                that equal height action.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className='container testimoniols mt-5 p-2'>
        <figure class="text-center">
          <blockquote class="blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          </blockquote>
          <figcaption class="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </figcaption>
        </figure>
      </div>

    </div>

  )
}

export default Home