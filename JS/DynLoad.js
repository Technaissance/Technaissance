  // CSS SELECTOR SCRIPT 
function swapTheme(csspath) {
    //console.log("i get called")
    document.getElementById('choosen').setAttribute('href', csspath);
    // When changing the css (= the historical theme) I also set a key-value in sessionStorage
    if (csspath == 'CSS/gm.css'){
        document.getElementById('logo').setAttribute('src','IMG/Group_4.png');
    }
    else if (csspath == '#'){
        document.getElementById('logo').setAttribute('src','IMG/Group_4W.png');
    }
    else if (csspath == 'CSS/wb.css'){
        document.getElementById('logo').setAttribute('src','IMG/Group_4W.png');
    }
    else if (csspath == 'CSS/cowboycss.css'){
        document.getElementById('logo').setAttribute('src','IMG/Group_4W.png');
    }
    localStorage.setItem('href', csspath);
    console.log(localStorage)
  }

// To save historical theme while browsing on the website
// 1. When I change the html (e.g. <a class="..." href="medea.html)></a>") I need to see what is the css I am starting from and KEEP IT
$(document).ready(persi);

function persi()
    {
    // 2. I save this starting css in a variable
    console.log("This gets called on reload")
    var start_style = localStorage.getItem('href');
    console.log(localStorage)
    // I check if the start_style has a certain value and I change the href accordingly 
    switch (start_style) {
      case '#':
        document.getElementById('choosen').setAttribute('href', '#');
        document.getElementById('logo').setAttribute('src','IMG/Group_4W.png');
        break;
      case 'CSS/gm.css':
        document.getElementById('choosen').setAttribute('href', 'CSS/gm.css');
        document.getElementById('logo').setAttribute('src','IMG/Group_4.png');
        break;
      case 'CSS/cowboycss.css':
        document.getElementById('choosen').setAttribute('href', 'CSS/cowboycss.css');
        break;
      case 'CSS/cyberpunk.css':
        document.getElementById('choosen').setAttribute('href', 'CSS/cyberpunk.css');
        break;
      case 'CSS/wb.css':
        document.getElementById('choosen').setAttribute('href', 'CSS/wb.css');
        document.getElementById('logo').setAttribute('src','IMG/Group_4W.png');
        break;
      /*  
      case 'css/todaycss.css':
        document.getElementById('choosen').setAttribute('href', 'css/todaycss.css');
        break;
      case 'css/futurecss.css':
        document.getElementById('choosen').setAttribute('href', 'css/futurecss.css');
        break; */
    }
    }

  





