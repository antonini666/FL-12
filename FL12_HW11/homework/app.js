const structure = [
  {
    folder: true,
    title: 'Films',
    children: [
      {
        title: 'Iron Man.avi'
      },
      {
        folder: true,
        title: 'Fantasy',
        children: [
          {
            title: 'The Lord of the Rings.avi'
          },
          {
            folder: true,
            title: 'New folder 1',
            children: false
          }
        ]
      }
    ]
  },
  {
    folder: true,
    title: 'Documents',
    children: [
      {
        folder: true,
        title: 'EPAM Homework answers',
        children: null
      }
    ]
  }
];

const rootNode = document.getElementById('root');

const documentTree = structure => {
  const wrap = document.createElement('ul');
  wrap.classList.add('wrap');

  for (let i = 0; i < structure.length; i++) {
    let item = document.createElement('li');
    let img = document.createElement('i');
    let text = document.createElement('span');

    item.classList.add('item');
    img.classList.add('material-icons');
    text.innerText = structure[i].title;

    wrap.appendChild(item);
    item.appendChild(img);
    item.appendChild(text);

    if (structure[i].folder) {
      let items = document.createElement('ul');
      items.classList.add('items', 'hidden');
      wrap.appendChild(items);

      img.innerText = 'folder';
      img.classList.add('img');

      item.addEventListener('click', () => {
        items.classList.toggle('hidden');
        if (img.innerText === 'folder') {
          img.innerText = 'folder_open';
        } else {
          img.innerText = 'folder';
        }
      });

      if (structure[i].children) {
        items.appendChild(documentTree(structure[i].children));
      } else {
        let span = document.createElement('span');
        span.innerText = 'Folder is empty';
        span.classList.add('font-italic');
        items.appendChild(span);
      }
    } else {
      img.innerText = 'insert_drive_file';
      img.classList.add('file-img');
    }
  }
  return wrap;
};

rootNode.appendChild(documentTree(structure));
