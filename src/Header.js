import Hair from '../assets/hairdo.jpg';

export default function Header(state){
    return `
    <div id="header" class="hotpink">
      <div class="container">
        <h1 class="enpinkify">${state.title}</h1>
        <img src="${Hair}" alt="my face">
        <div id="greeting"></div>
        <input type="text">
      </div>
    </div>
  `;
}
