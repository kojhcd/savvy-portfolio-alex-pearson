function buildLinks(links){
    var i = 0;
    var result = '';

    while(i < links.length){
        result += `<li><a href="/${links[i]}">${links[i]}</a></li>`;

        i++;
    }

    return result;
}


export default function Navigation(state){
    return `
      <div id="navigation">
        <ul class="container">
          ${buildLinks(state.links)}
        </ul>
      </div>
    `;
}
