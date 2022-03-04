const data = require('./data');

const cardsContainer = document.querySelector('#cards-container');

const cardElement = (data) => (
  `<div class=" col-md-4 mb-4">
  <div class="card">
  <div class="card-body">
    <div class="row justify-content-between">
      <div class="d-flex col-auto">
        <div class="avatar-container bg-light">
          <img src="https://www.pngitem.com/pimgs/m/166-1667214_child-head-with-smiling-face-child-face-icon.png" class="avatar" alt="">
        </div>
        <div class="d-flex flex-column justify-content-between ms-3">
          <h5>Machinmp</h5>
          <h6 class="text-muted fw-normal">1 days ago</h6>
        </div>
      </div>
      <div class="col-auto">
        <span class="orange-badge">Design</span>
      </div>
    </div>

    <div class="row my-5">
      <div class="col-10">
        <h3 class="">Senior Product Designer-Singapore</h3>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="progress">
          <div class="progress-bar bg-danger" role="progressbar" style="width: 60%" aria-valuenow="75" aria-valuemin="0"
            aria-valuemax="100"></div>
        </div>
        <small class="fw-bold mb-0">32 Applied<span class="text-muted"> of 50 capacity</span></small>
      </div>
    </div>
  </div>
  </div>
</div>`
);

const getData = () => {
  const delay = (0.5 + Math.random() * 2) * 1000;
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(data);
    }, delay);
  });
}

const rendersCards = async () => {
  const data = await getData();
  data.map((card) => (
    cardsContainer.insertAdjacentHTML('beforeend', cardElement(card))
  ));
};

// Check to see if scrolling near bottom of page; load more photos
window.addEventListener('scroll', () => {
  if (window.scrollY + window.innerHeight >= document.body.offsetHeight - 1000) {
    rendersCards();
  }
});

rendersCards();