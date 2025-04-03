const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

const list = document.querySelector('.gallery');


    //1-ий варіант 

/* const markup = images.map(({ url, alt }) =>
  `<li class="item-img-gallery">
    <img src="${url}" alt="${alt}">
  </li>`
).join('');

list.insertAdjacentHTML("afterbegin", markup); */


    //2-ий варіант 

const fragment = document.createDocumentFragment();

images.forEach(({ url, alt }) => {
  const itemListImage = document.createElement('li');
  const imageElem = document.createElement('img');

  itemListImage.classList.add('item-img-gallery');

  imageElem.src = url; 
  imageElem.alt = alt;
  imageElem.classList.add('img-gallery');

  itemListImage.append(imageElem);
  fragment.append(itemListImage); 
});

list.append(fragment);



    //3-ій варіант 

/* const markup = images.map(({ url, alt }) => {
  const li = document.createElement('li');
  li.classList.add('item-img-gallery');
  
  const img = document.createElement('img');
  img.src = url;
  img.alt = alt;

  li.appendChild(img);
  return li;
});


list.append(...markup); */











