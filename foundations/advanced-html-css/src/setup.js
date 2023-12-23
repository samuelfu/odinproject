function setup() {
    const element = document.querySelector('#content');

    const tabs = document.createElement('div');
    tabs.classList.add('tabs');
    const mainTab = document.createElement('div');
    mainTab.classList.add('tab');
    mainTab.textContent = 'Main';
    mainTab.addEventListener(
      "click", mainClick
    )
    const pictureTab = document.createElement('div');
    pictureTab.classList.add('tab');
    pictureTab.textContent = 'Pictures';
    const aboutTab = document.createElement('div');
    aboutTab.classList.add('tab');
    aboutTab.textContent = 'About';
    aboutTab.addEventListener(
      "click", aboutClick
    )
    tabs.append(mainTab, pictureTab, aboutTab);


    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = '400 Duboce Ave';

    const tagline = document.createElement('div');
    tagline.classList.add('tagline');
    tagline.textContent = 'The best San Francisco has to offer';

    element.appendChild(tabs);
    element.appendChild(headline);
    element.appendChild(tagline);
}

function pictureClick(event) {
}

function aboutClick(event) {
  const element = document.querySelector('#content');
  const headline = document.querySelector('.headline');
  const tagline = document.querySelector('.tagline');

  element.removeChild(headline);
  element.removeChild(tagline);
}

function mainClick(event) {
  const element = document.querySelector('#content');
  let headline = document.querySelector('.headline');
  if (headline == null) {
  headline = document.createElement('div');
  headline.classList.add('headline');
  headline.textContent = '400 Duboce Ave';

  const tagline = document.createElement('div');
  tagline.classList.add('tagline');
  tagline.textContent = 'The best San Francisco has to offer';

  element.appendChild(headline);
  element.appendChild(tagline);
  }
}

export {setup};
