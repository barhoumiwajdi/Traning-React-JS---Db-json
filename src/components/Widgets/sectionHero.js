import React from 'react'


function sectionHero() {
  return (
    <div class="container">
        <div class="row">
    <div class="col-lg-4 col-md-12 mb-4">
      <div
           class="bg-image hover-overlay ripple shadow-1-strong rounded"
           >
        <img
             src="https://mdbootstrap.com/img/new/fluid/city/113.jpg"
             class="img-fluid"
             />
        <a href="#!">
          <div
               class="mask"
               style="background-color: rgba(57, 192, 237, 0.2)"
               ></div>
        </a>
      </div>
    </div>

    <div class="col-lg-4 col-md-6 mb-4">
      <div
           class="bg-image hover-overlay ripple shadow-1-strong rounded"
           >
        <img
             src="https://mdbootstrap.com/img/new/fluid/city/113.jpg"
             class="img-fluid"
             />
        <a href="#!">
          <div
               class="mask"
               style="
                      background: linear-gradient(
                      45deg,
                      rgba(29, 236, 197, 0.5),
                      rgba(91, 14, 214, 0.5) 100%
                      );
                      "
               ></div>
        </a>
      </div>
    </div>

    <div class="col-lg-4 col-md-6 mb-4">
      <div class="bg-image hover-zoom hover-shadow rounded">
        <img
             src="https://mdbootstrap.com/img/new/standard/city/053.jpg"
             class="img-fluid"
             />
      </div>
    </div>
  </div>
  </div>
  )
}

export default sectionHero