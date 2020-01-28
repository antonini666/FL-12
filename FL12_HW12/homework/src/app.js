const mainPage = document.querySelector('.main-page');
const addPage = document.querySelector('.add-page');
const modifyPage = document.querySelector('.modify-page');

const listTermContainer = document.querySelector('.main-page__items');

const addTermsBtn = document.querySelector('.add-btn');

const addName = document.querySelector('.add-name');
const addTerm = document.querySelector('.add-term');

const saveTermBtn = document.querySelector('.add-page__save');
const cancelTermBtn = document.querySelector('.add-page__cancel');

const saveModifyBtn = document.querySelector('.modify-page__save');
const cancelModifyBtn = document.querySelector('.modify-page__cancel');

const termsArray = [];

const hashList = {
  mainHash: '#/main',
  addHash: '#/add',
  editHash: '#/modify/'
};

addTermsBtn.addEventListener('click', () => {
  location.hash = hashList.addHash;
  mainPage.classList.toggle('hide');
  addPage.classList.toggle('hide');
});

cancelTermBtn.addEventListener('click', () => {
  location.hash = hashList.mainHash;
  mainPage.classList.toggle('hide');
  addPage.classList.toggle('hide');
});

saveTermBtn.addEventListener('click', () => {
  location.hash = hashList.mainHash;
  mainPage.classList.toggle('hide');
  addPage.classList.toggle('hide');
  createNewTerm();
  createItems()
});

function createNewTerm(el) {
  let name = addName.value;
  let term = addTerm.value;
  if (name && term) {
    const newTerm = {
      name: name,
      term: term
    };
    termsArray.push(newTerm);
  }
}

function createItems() {
  termsArray.forEach(el => {
    const itemTitle = document.createElement('h3');
    const itemContent = document.createElement('p');
    itemTitle.innerText = `Name : ${el.name}`;
    itemContent.innerText = `Term : ${el.term}`;

    listTermContainer.appendChild(itemTitle);
    listTermContainer.appendChild(itemContent);
  });
}
