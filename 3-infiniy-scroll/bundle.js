(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
  console.log(data);
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
},{"./data":2}],2:[function(require,module,exports){
const data = [
  {
    name: 'Mailchimp',
    profileImage: "https://www.pngitem.com/pimgs/m/166-1667214_child-head-with-smiling-face-child-face-icon.png",
    daysSinceApplied: 1,
    tag: 'Design',
    position: 'Senior Product Designer',
    country: 'Singapore',
    totalCapacity: 50,
    appliedCapacity: 32,
  },
  {
    name: 'Dribble',
    profileImage: "https://www.pngitem.com/pimgs/m/166-1667214_child-head-with-smiling-face-child-face-icon.png",
    daysSinceApplied: 4,
    tag: 'Product',
    position: 'Junior Frontend Developer',
    country: 'Singapore',
    totalCapacity: 70,
    appliedCapacity: 60,
  },
  {
    name: 'Reddit',
    profileImage: "https://www.pngitem.com/pimgs/m/166-1667214_child-head-with-smiling-face-child-face-icon.png",
    daysSinceApplied: 2,
    tag: 'Design',
    position: 'Business Analyst',
    country: 'USA',
    totalCapacity: 100,
    appliedCapacity: 52,
  },
  {
    name: 'Mailchimp',
    profileImage: "https://www.pngitem.com/pimgs/m/166-1667214_child-head-with-smiling-face-child-face-icon.png",
    daysSinceApplied: 1,
    tag: 'Development',
    position: 'UX/UI Designer',
    country: 'Singapore',
    totalCapacity: 80,
    appliedCapacity: 32,
  },
  {
    name: 'Mailchimp',
    profileImage: "https://www.pngitem.com/pimgs/m/166-1667214_child-head-with-smiling-face-child-face-icon.png",
    daysSinceApplied: 7,
    tag: 'Design',
    position: 'Senior Backend Developer',
    country: '  Egypt',
    totalCapacity: 60,
    appliedCapacity: 55,
  },
  {
    name: 'Mailchimp',
    profileImage: "https://www.pngitem.com/pimgs/m/166-1667214_child-head-with-smiling-face-child-face-icon.png",
    daysSinceApplied: 1,
    tag: 'Sales',
    position: 'Senior Product Designer',
    country: 'Brazil',
    totalCapacity: 90,
    appliedCapacity: 44,
  },
  {
    name: 'Mailchimp',
    profileImage: "https://www.pngitem.com/pimgs/m/166-1667214_child-head-with-smiling-face-child-face-icon.png",
    daysSinceApplied: 3,
    tag: 'Product',
    position: 'Senior Frontend Designer',
    country: 'France',
    totalCapacity: 80,
    appliedCapacity: 60,
  },
  {
    name: 'Mailchimp',
    profileImage: "https://www.pngitem.com/pimgs/m/166-1667214_child-head-with-smiling-face-child-face-icon.png",
    daysSinceApplied: 1,
    tag: 'Design',
    position: 'Senior Technical Requiter',
    country: 'China',
    totalCapacity: 50,
    appliedCapacity: 40,
  },
];

module.exports = data;
},{}]},{},[1]);
