document.addEventListener('DOMContentLoaded', () => {
  const headerBurger = document.querySelector('.header__burger-button');
  const headerLink = document.querySelectorAll('.header__link');
  const body = document.querySelector('.no-js');
  const buttonUp = document.querySelector('.button-up');
  const headerBody = document.querySelector('.header__body');

  if (body.classList.contains('no-js')) {
    body.classList.remove('no-js');
  }

  headerBurger.addEventListener('click', function () {
    headerBody.classList.toggle('header-menu--active');
    body.classList.toggle('scroll-lock');
    buttonUp.toggleAttribute('hidden');
  });

  for (let i = 0; i < headerLink.length; i++) {
    headerLink[i].addEventListener('click', function () {
      headerBody.classList.remove('header-menu--active');
      body.classList.remove('scroll-lock');
      buttonUp.removeAttribute('hidden');
    });
  }
});

function workspaceItemsInit() {
  const workspaceItems = [
    {
      itemName: 'Monitors: Philips 24, Samsung 24',
    },
    {
      itemName: 'RAM: 16gb',
    },
    {
      itemName: 'processor: Ryzen 5 1600X',
    },
    {
      itemName: 'video: 1060 6GB',
    },
    {
      itemName: 'internet: 500MBs',
    },
    {
      itemName: 'keyborard: steelseries Apex',
    },
    {
      itemName: 'headset: steelseries arctics 5',
    },
    {
      itemName: 'table: very comfortable from IKEA',
    },
  ];

  if ('content' in document.createElement('template')) {
    const workspaceListElement = document.querySelector('.workspace__list');
    const templateItem = document.querySelector('#productrow');

    for (let i = 0; i < workspaceItems.length; i++) {
      const templateItemClone = templateItem.content.cloneNode(true);
      const workspaceItem =
        templateItemClone.querySelectorAll('.workspace__item');
      workspaceItem[0].textContent = workspaceItems[i].itemName;
      workspaceListElement.appendChild(templateItemClone);
    }
  }
}
workspaceItemsInit();
