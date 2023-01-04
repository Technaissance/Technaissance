.txt

0- Changed all the nav bar element (imported from old file with minor adjustments to correct responsiveness, tested all the css and it works ok, also updated the “select issue” dropdown with new code. Intervention from line 76 to 132 of issue.html (we have to standarize it to the other pages too)

0.1 - Added a script at the end of issue.html that add the classes to the buttons on the wrapper:
modyfied Dynload.js line 112 to 114

  // Add the "new-class" class to the button
                button.classList.add("cardextra");
                button.classList.add("dynbutton");



1- deleted nav-link css (it added nothing)

2- added rule to minimalism css so that the dropdowns dont appear with underline

a {
    color: #0d6efd;
    text-decoration: none;
}

3- Modified line 837 of cyberpunk css to add style to h5 and h6; modified the same in cowboycss (line 210 and 218)

4- added a css rule to cyberpunkcss and cowboycss so the text doesnt get squished on responsive (suggest you add id too)

  
  .container-fluid[name=main] {
    padding-left: 2rem !important; 
    padding-right: 0.5rem !important; 
  
  }

5- modyfied line 196 of issue.html to change from h3 to h1 and add a class for styling (fixed the black line appearing in the title before loading the article)

<h1 id="TITLE" class="issue"></h1>

6- added a class to h2 in line 142 of issue.html

            <div class="cardBannerSS"><h2 class="issue">Scroll through the articles</h2>


