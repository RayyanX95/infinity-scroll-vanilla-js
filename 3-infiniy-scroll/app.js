const data = require('./data');

const cardsContainer = document.querySelector('#cards-container');

const cardElement = (data) => (
  `<div class=" col-md-4 mb-4">
  <div class="card">
  <div class="card-body">
    <div class="row justify-content-between">
      <div class="d-flex col-auto">
        <div class="avatar-container bg-light">
          <img src=${data.profileImage} class="avatar" alt="">
        </div>
        <div class="d-flex flex-column justify-content-between ms-3">
          <h5>${data.name}</h5>
          <h6 class="text-muted fw-normal">${data.daysSinceApplied} days ago</h6>
        </div>
      </div>
      <div class="col-auto">
        <span class="orange-badge">${data.tag}</span>
      </div>
    </div>

    <div class="row my-5">
      <div class="col-10">
        <h3 class="">${data.position}-${data.country}</h3>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="progress">
          <div class="progress-bar bg-danger" role="progressbar" style="width: ${data.appliedCapacity / data.totalCapacity * 100}%" aria-valuenow="75" aria-valuemin="0"
            aria-valuemax="100"></div>
        </div>
        <small class="fw-bold mb-0">${data.appliedCapacity} Applied<span class="text-muted"> of ${data.totalCapacity} capacity</span></small>
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
  if (window.scrollY + window.innerHeight >= document.body.offsetHeight - 100) {
    rendersCards();
  }
});

rendersCards();