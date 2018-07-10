import Hair from '../assets/hairdo.jpg';

export default function Header(title){
    return `
    <div id="header" class="hotpink">
      <div class="container">
        <h1 class="enpinkify">${title}</h1>
        <img src="${Hair}" alt="my face">
        <div id="greeting"></div>
      </div>
    </div>
  `;
}
