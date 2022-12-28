//console.log("string test for succesful file load")
//localStorage.setItem('href','CSS/blankcss.css');

//console.log(localStorage)

String.prototype.tpl = function(o) 
{ 
    var r = this ; 
    console.log(r)

    for (var i in o) { 
        //console.log(i) //this is URL first time and Label the second time
        r = r.replace(new RegExp("\\$"+i, 'g'),o[i])  
        //console.log(o[i])  //this is the name of the label
        //console.log(r)
    } 
    //console.log(r)
    return r 
}
var listItemTpl = `load("$url")`
//var listItemTpl = `<button class="dropdown-item nav__link" type="button" href='#' onclick='load("$url")'>$label</button>`
//var listItemTpl = `<li><button class="dropdown-item nav__link" type="button" href='#' onclick='load("$url")'>$label</button></li>`

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


$(document).ready(main);



function main() {
    //console.log("Does this gets called first?")
    $.ajax({
        method: 'GET',
        url: 'FILES.json',
        success: function(f) {
            //console.log(f)
            for (var i=0; i<f.length; i++) {
                $('#list').append(listItemTpl.tpl({url:f[i].url}))
                //console.log("some")
            }	
            for (var i=0; i<f.length; i++){
                var elementDiv = document.getElementById(i)
                console.log(elementDiv)
                
                var button = document.createElement("button");
                button.setAttribute("type", "button");
                var data = listItemTpl.tpl({url:f[i].url, label: f[i].label})
                button.setAttribute('onclick', data)
                //button.addEventListener("click", load)
                  
                // Set the content of the button
                button.innerHTML = "Read This Article";

                // Add the button to the document
                elementDiv.appendChild(button);
                console.log(i)
            }
        },
        error: function() {
            alert('No document to show')
        }
    });
}
    
/*   
    $('#showasides').click(function() {
        if (this.checked) 
            $('.aside').addClass('text-aside')
        else
            $('.aside').removeClass('text-aside')
    })
    $('#showkeywords').click(function() {
        if (this.checked) 
            $('.keyword').addClass('text-keyword')
        else
            $('.keyword').removeClass('text-keyword')
    })
    $('#showspeeches').click(function() {
        if (this.checked) 
            $('q.speech').addClass('text-speeches')
        else
            $('q.speech').removeClass('text-speeches')
    })
    $('#showquotes').change(function() {
        if (this.checked) 
            $('q:not(.speech)').addClass('text-quotes')
        else
            $('q:not(speech)').removeClass('text-quotes')
    })

    $('#createasides').click(function() {
        var s = window.getSelection().toString()
        addToDoc(s,'aside','span')
        addToLocalStorage(s,'aside')
    })
    $('#createkeywords').click(function() {
        var s = window.getSelection().toString()
        if (s.length > 3) {
            addToDoc(s,'keyword','span')
            addToLocalStorage(s,'keyword')
        }
    })
    $('#createspeeches').click(function() {
        var s = window.getSelection().toString()
        addToDoc(s,'speech','q')
        addToLocalStorage(s,'speech')
    })
    $('#createquotes').change(function() {
        var s = window.getSelection().toString()
        addToDoc(s,'quote','q')
        addToLocalStorage(s,'quote')
    })
} */

/*
function addToLocalStorage(string, type) {
    var ls = getFromLocalStorage()
    if (ls[type].indexOf(string)==-1) ls[type].push(string)
    localStorage.setItem('fvSentences',JSON.stringify(ls))		
}

function getFromLocalStorage() {
    var lsString = localStorage.getItem('fvSentences') 
    var ls = JSON.parse(lsString)
    if (ls==undefined)  {
        ls = {
            aside: [],
            keyword: [],
            speech: [],
            quote: []
        }
    }
    return ls
}

function addFromLocalStorage() {
    var ls = getFromLocalStorage()
    for (var i in ls) {
        for (var k in ls[i]) {
            addToDoc(ls[i][k], i , 'span')
        }
    }
}

function addToDoc(string,type,tag) {
    var replacement = `<${tag} class='${type}'>${string}</${tag}>`
    if (isMoreThanOneWord(string)) {
        var variations = new RegExp(string, 'mgi')  
            // g: global: replace multiple occurrence and not just the first
            // i: ignore case: replace matching string regardless of the case 
    } else {
        var variations = findAllVariations(string)
    }
    // bad bad bad bad solution: complicated, fragile, computational intensive. 
    // Can you think of something better?
    var text = $('#file').html().replace(variations,replacement)
    $('#file').html(text)
    addIds()
    filltabs()
}

function isMoreThanOneWord(s) {
    return s.match(/\s/)   // there is at least one whitespace character in the string
}

function findAllVariations(s) {
    var desinences = "[s|es|ing|ed|d]?" // optional additional desinences
    
    return new RegExp(`\\b${s}${desinences}\\b`,"gi")   
}
*/

function load(file) {
    //this gets called when 
    $.ajax({
        method: 'GET',
        url: file,
        success: function(d) {
            console.log("1111")
            $('#file').html(d)
            $('.show').prop("checked", false)
            /*
            addIds()
            fillInfo("#file", "#info")
            filltabs()
            addFromLocalStorage()
            $('#title').html($('#file h1')) */

            // Get the element with an id of "heading" - need to add "author" & "date published"
            var element = document.getElementById("heading"); //heading

            // Get the content of the element
            var content = element.innerHTML;
            console.log(content);
            // Output the content to the inner HTML
            var elements = document.getElementById("TITLE");

            // Modify the content of the element
            elements.innerHTML = content;
        },
        error: function() {
            alert('Could not load file '+file)
        }
    });
}

/*
function addIds() {
    addId('.aside','aside')
    addId('.keyword','keyword')
    addId('q.speech', 'speech')
    addId('q:not(.speech)', 'quote')
}

function addId(what, prefix) {
    var id = '0'
    var elements = $(what); 
    for (var i=0; i<elements.length; i++) {
        elements[i].id = prefix + "-" + id++
    }
}
function filltabs(){
    filltab("#file .aside","list-aside","#asides")
    filltab("#file .keyword","list-keyword","#keywords")
    filltab("#file q.speech","list-speech","#speeches")
    filltab("#file q:not(.speech)","list-quote","#quotes")
}

function fillInfo(from, where) {
    var item = `
        <p class="list title"><b>Title: </b> $title</p>
        <p class="list author"><b>Author: </b> $author</p>
        <p class="list author"><b>Headings: </b><ul>$headings</ul></p>
        ` ;
    $(where).empty(); 

    var title = $(from + ' h1')[0].innerText
    var author = $(from + ' .byline')[0].innerText
    var headingList = $(from + ' h2')
    var headings = ""
    for (var i=0; i<headingList.length; i++) {
        headings += "<li class='small'>"+headingList[i].innerHTML+"</li>"
    }
    $(where).append(item.tpl( {
        author: author,
        title: title,
        headings: headings
    }))
}

function filltab(what,style,where) {
    var list = `<li class="list $style"><a href="#" onclick="goto('$place')">$content</a></li>`
    var elements = $(what); 
    $(where+' ul').empty(); 
    for (var i=0; i<elements.length; i++) {
        $(where+' ul').append(list.tpl({
            style:style, 
            place: '#'+elements[i].id,
            content: elements[i].innerHTML
        }) )
    }
}

function goto(id) {
    var t = $(id)[0].offsetTop;
    $('body').animate({ scrollTop: t }, 200);
    $(id).addClass('animate');
    setTimeout(function(){
        $(id).removeClass('animate');
    },5000);
}
*/

