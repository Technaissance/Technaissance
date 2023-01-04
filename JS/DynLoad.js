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

  // CHECKBOX METADATA SCRIPT 
  document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.dropdown-item');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function () {
        // get the selected article
        var selectedArticle = this.value;

        // create an XMLHttpRequest object
        var xhttp = new XMLHttpRequest();

        // specify the function to be called when the response is received
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            // insert the contents of the HTML file into the page
            document.getElementById('article').innerHTML = this.responseText;
            const checkboxes = document.querySelectorAll('#checkboxContainer input[type="checkbox"]');
            checkboxes.forEach(checkbox => {
              checkbox.checked = false;
            });
            document.getElementById('listContainer').innerHTML = '';
          }
        };

        // open the HTML file and send the request
        xhttp.open('GET', 'articles/' + selectedArticle + '.html', true);
        xhttp.send();
      });
    }
  });


document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners to the buttons
    document.getElementById('button1').addEventListener('click', function () {
      loadArticle('article1');
    });
    document.getElementById('button2').addEventListener('click', function () {
      loadArticle('article2');
    });
    document.getElementById('button3').addEventListener('click', function () {
      loadArticle('article3');
    });
  });
  function loadArticle(article) {
  // create an XMLHttpRequest object
  var xhttp = new XMLHttpRequest();

  // specify the function to be called when the response is received
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // insert the contents of the HTML file into the page
      document.getElementById('article').innerHTML = this.responseText;
    }
  };

  // open the HTML file and send the request
  xhttp.open('GET', 'articles/' + article + '.html', true);
  xhttp.send();
}
  


document.addEventListener('DOMContentLoaded', function () {
  // Get the buttons
  var button1 = document.getElementById('button1');
  var button2 = document.getElementById('button2');
  var button3 = document.getElementById('button3');

  // Add the click event listener to button1
  button1.addEventListener('click', function () {
    // Clear the checkboxes and the list elements
    clearCheckboxesAndList();

    // Get the selected article
    var selectedArticle = this.dataset.article;

    // Create an XMLHttpRequest object
    var xhttp = new XMLHttpRequest();

    // Specify the function to be called when the response is received
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // Insert the contents of the HTML file into the page
        document.getElementById('article').innerHTML = this.responseText;
      }
    };

    // Open the HTML file and send the request
    xhttp.open('GET', 'articles/' + selectedArticle + '.html', true);
    xhttp.send();
  });

  // Add the click event listener to button2
  button2.addEventListener('click', function () {
    // Clear the checkboxes and the list elements
    clearCheckboxesAndList();

    // Get the selected article
    var selectedArticle = this.dataset.article;

    // Create an XMLHttpRequest object
    var xhttp = new XMLHttpRequest();

    // Specify the function to be called when the response is received
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // Insert the contents of the HTML file into the page
        document.getElementById('article').innerHTML = this.responseText;
      }
    };

    // Open the HTML file and send the request
    xhttp.open('GET', 'articles/' + selectedArticle + '.html', true);
    xhttp.send();
  });

  // Add the click event listener to button3
  button3.addEventListener('click', function () {
    // Clear the checkboxes and the list elements
    clearCheckboxesAndList();

    // Get the selected article
    var selectedArticle = this.dataset.article;

    // Create an XMLHttpRequest object
    var xhttp = new XMLHttpRequest();

    // Specify the function to be called when the response is received
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // Insert the contents of the HTML file into the page
        document.getElementById('article').innerHTML = this.responseText;
      }
    };

    // Open the HTML file and send the request
    xhttp.open('GET', 'articles/' + selectedArticle + '.html', true);
    xhttp.send();
  }
  )})

  function clearCheckboxesAndList() {
  // Uncheck all the checkboxes
  const checkboxes = document.querySelectorAll('#checkboxContainer input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
  });

  // Clear the list
  document.getElementById('listContainer').innerHTML = '';
}



function updateList(selectedCheckbox) {
  // Clear the list
  document.getElementById('listContainer').innerHTML = '';

  // Get all the checkboxes
  const checkboxes = document.querySelectorAll('#checkboxContainer input[type="checkbox"]');

  // Uncheck all the checkboxes except the one that was selected
  checkboxes.forEach(checkbox => {
    if (checkbox !== selectedCheckbox) {
      checkbox.checked = false;
    }
  });

  // Get all the checked checkboxes
  const checkedBoxes = document.querySelectorAll('#checkboxContainer input:checked');
  let classes = [];
  checkedBoxes.forEach(box => {
    classes.push(box.id);
  });

  // If no checkboxes are checked, return
  if (classes.length === 0) {
    return;
  }

  // Get all the elements with the selected classes
  const elements = document.querySelectorAll(classes.map(className => '.' + className).join(','));
  elements.forEach(element => {
    // Create a new list item for each element
    const item = document.createElement('li');
    item.innerHTML = element.innerHTML;
    item.onclick = () => {
      // Remove the "highlighted" class from all the elements
      const highlighted = document.querySelectorAll('.highlighted');
      highlighted.forEach(el => {
        el.classList.remove('highlighted');
        el.style.backgroundColor = '';
      });

      // Highlight the element and navigate to it when the list item is clicked
      element.style.backgroundColor = 'green';
      element.classList.add('highlighted');
      window.location.href = '#' + element.id;
    };
    document.getElementById('listContainer').appendChild(item);
  });
}


document.addEventListener('DOMContentLoaded', function () {
    // Get the value of the "article" query string parameter
    var urlParams = new URLSearchParams(window.location.search);
    var selectedArticle = urlParams.get('article');

    // Load the selected article
    loadArticle(selectedArticle);
  });

  function loadArticle(article) {
    // Create an XMLHttpRequest object
    var xhttp = new XMLHttpRequest();

    // Specify the function to be called when the response is received
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // Insert the contents of the HTML file into the page
        document.getElementById('article').innerHTML = this.responseText;
      }
    };

    // Open the HTML file and send the request
    xhttp.open('GET', 'articles/' + article + '.html', true);
    xhttp.send();
  }


  setInterval(function(){
 var text = [];
 $('.heading').each(function(){
     text.push( $(this).text());
 });
 var myString = text.join(', ');
 $('#heading').text(myString);},300);

  setInterval(function(){
 var text = [];
 $('.date').each(function(){
     text.push( $(this).text());
 });
 var myString = text.join(', ');
 $('#date').text(myString);},300);

  setInterval(function(){
 var text = [];
 $('.author').each(function(){
     text.push( $(this).text());
 });
 var myString = text.join(', ');
 $('#author').text(myString);},300);

  setInterval( function myFunction() {
    var number = document.querySelector("meta[name='description']").getAttribute("content");
    document.getElementById("metamd").innerHTML = number;
  }, 300);




    // DROPDOWN TO LOADED ARTICLE FROM OTHER PAGES SCRIPT
// Navbar dropdown
document.getElementById('navbarDropdown').addEventListener('click', function (event) {
    // Get the selected article
    var selectedArticle = event.target.dataset.article;
  
    // Redirect the user to the original page with the selected article as a query string parameter
    window.location.href = '/issue.html?article=' + selectedArticle;
  });
  
  // Original page
  document.addEventListener('DOMContentLoaded', function () {
    // Get the value of the "article" query string parameter
    var urlParams = new URLSearchParams(window.location.search);
    var selectedArticle = urlParams.get('article');
  
    // Load the selected article
    loadArticle(selectedArticle);
  });
  
  function loadArticle(article) {
    // Create an XMLHttpRequest object
    var xhttp = new XMLHttpRequest();
  
    // Specify the function to be called when the response is received
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // Insert the contents of the HTML file into the page
        document.getElementById('article').innerHTML = this.responseText;
      }
    };
  
    // Open the HTML file and send the request
    xhttp.open('GET', 'articles/' + article + '.html', true);
    xhttp.send();
  }