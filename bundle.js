(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const data = require('./data');

const cardsContainer = document.querySelector('#cards-container');
const overlayLoader = document.querySelector('.overlay-loader');

const cardElement = (data) => (
  `<div class=" col-md-4 mb-4">
  <div class="card">
  <div class="row flex-column card-body">
    <div class="col-auto d-flex justify-content-between">
      <div class="d-flex">
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

    <div class="col my-5">
      <h3 class="">${data.position}-${data.country}</h3>
    </div>

    <div class="col-auto">
      <div class="progress">
        <div class="progress-bar bg-danger" role="progressbar" style="width: ${data.appliedCapacity / data.totalCapacity * 100}%" aria-valuenow="75" aria-valuemin="0"
          aria-valuemax="100"></div>
      </div>
      <small class="fw-bold mb-0">${data.appliedCapacity} Applied<span class="text-muted"> of ${data.totalCapacity} capacity</span></small>
    </div>
  </div>
  </div>
</div>`
);

//* `isGettingData` flag is used to prevent making API request while another is being sent
let isGettingData = false;
const getData = () => {
  isGettingData = true;
  overlayLoader.classList.remove('d-none');
  const delay = (0.5 + Math.random() * 2) * 1000;
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(data);
      overlayLoader.classList.add('d-none');
      isGettingData = false;
    }, delay);
  });
}

const rendersCards = async () => {
  const data = await getData();
  data.map((card) => (
    cardsContainer.insertAdjacentHTML('beforeend', cardElement(card))
  ));
};
window.addEventListener('scroll', () => {
  if ((window.scrollY + window.innerHeight >= document.body.offsetHeight - 1000) && !isGettingData) {
    rendersCards();
  }
});

// call it here outside the scroll for the first load
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
    name: 'Ibrahim',
    profileImage: "https://www.pngitem.com/pimgs/m/166-1667214_child-head-with-smiling-face-child-face-icon.png",
    daysSinceApplied: 1,
    tag: 'Development',
    position: 'UX/UI Designer',
    country: 'Singapore',
    totalCapacity: 80,
    appliedCapacity: 32,
  },
  {
    name: 'AlRayyan',
    profileImage: "https://www.pngitem.com/pimgs/m/166-1667214_child-head-with-smiling-face-child-face-icon.png",
    daysSinceApplied: 7,
    tag: 'Design',
    position: 'Senior Backend Developer',
    country: '  Egypt',
    totalCapacity: 60,
    appliedCapacity: 55,
  },
  {
    name: 'Mohammed',
    profileImage: "https://www.pngitem.com/pimgs/m/166-1667214_child-head-with-smiling-face-child-face-icon.png",
    daysSinceApplied: 1,
    tag: 'Sales',
    position: 'Senior Product Designer',
    country: 'Brazil',
    totalCapacity: 90,
    appliedCapacity: 44,
  },
  {
    name: 'Ahmed',
    profileImage: "https://www.pngitem.com/pimgs/m/166-1667214_child-head-with-smiling-face-child-face-icon.png",
    daysSinceApplied: 3,
    tag: 'Product',
    position: 'Senior Frontend Designer',
    country: 'France',
    totalCapacity: 80,
    appliedCapacity: 60,
  },
  {
    name: 'Sarah',
    profileImage: "https://www.pngitem.com/pimgs/m/166-1667214_child-head-with-smiling-face-child-face-icon.png",
    daysSinceApplied: 1,
    tag: 'Design',
    position: 'Senior Technical Requiter',
    country: 'China',
    totalCapacity: 50,
    appliedCapacity: 40,
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
    name: 'Ibrahim',
    profileImage: "https://www.pngitem.com/pimgs/m/166-1667214_child-head-with-smiling-face-child-face-icon.png",
    daysSinceApplied: 1,
    tag: 'Development',
    position: 'UX/UI Designer',
    country: 'Singapore',
    totalCapacity: 80,
    appliedCapacity: 32,
  },
  {
    name: 'Ahmed',
    profileImage: "https://www.pngitem.com/pimgs/m/166-1667214_child-head-with-smiling-face-child-face-icon.png",
    daysSinceApplied: 3,
    tag: 'Product',
    position: 'Senior Frontend Designer',
    country: 'France',
    totalCapacity: 80,
    appliedCapacity: 60,
  },
  {
    name: 'Sarah',
    profileImage: "https://www.pngitem.com/pimgs/m/166-1667214_child-head-with-smiling-face-child-face-icon.png",
    daysSinceApplied: 1,
    tag: 'Design',
    position: 'Senior Technical Requiter',
    country: 'China',
    totalCapacity: 50,
    appliedCapacity: 40,
  },
  {
    name: 'AlRayyan',
    profileImage: "https://www.pngitem.com/pimgs/m/166-1667214_child-head-with-smiling-face-child-face-icon.png",
    daysSinceApplied: 7,
    tag: 'Design',
    position: 'Senior Backend Developer',
    country: '  Egypt',
    totalCapacity: 60,
    appliedCapacity: 55,
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
];

module.exports = data;
},{}]},{},[1]);
