var homeContent = `<h1 class="home-title">Codely - A Medley Of Coding Languages</h1>
<h3 class="home-flavor">(and everything to know about them)</h3>

<svg viewBox="0 0 500 200">
  <path
    id="curve"
    d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
  />
  <text width="500">
    <textPath xlink:href="#curve">
      We recommend clicking something in the nav! Nothing else here.
    </textPath>
  </text>
</svg>`;
var RContent = `<div class="content">
<h1>R (interpreted programming language)</h1>
<div class="platforms">
  <div class="platform">
    <div class="R-icon"></div>
    <div class="platform-descript">
      <h4>About R</h4>
      <p>
        R Programming is a type of programming language that is used
        around the world for statistical computing and is based
        exclusively on Data Science. R is an interpreted language, and
        R is a multi-paradigm language, and that means it has multiple
        paradigms that are: object-oriented, procedural, reflective,
        etc. R is free and open-sourced, so there is a huge community
        supporting it, by releasing packages and aiding its users with
        the necessary fix for their problems.
      </p>
    </div>
  </div>
</div>
<div class="editors">
  <h3 class="editors-header">Popular Editors for R</h3>
  <ul class="editors-list">
    <li>
      <a href="https://www.rstudio.com/" target="_blank">R Studio</a>
    </li>
    <li>
      <a
        href="https://docs.microsoft.com/en-us/visualstudio/rtvs/?view=vs-2017"
        target="_blank"
        >R Tools for Visual Studio</a
      >
    </li>
    <li>
      <a href="https://rattle.togaware.com/" target="_blank"
        >Rattle</a
      >
    </li>
    <li>
      <a
        href="https://projects.eclipse.org/projects/science.statet"
        target="_blank"
        >StatET for R</a
      >
    </li>
  </ul>
</div>

<hr />

<div class="features">
  <h3 class="features-header">Featured R Use Cases</h3>
  <h4>Data Science</h4>
  <div class="R-feature-images">
    <img
      class="r-gif"
      src="https://r-graph-gallery.com/img/graph/271-ggplot2-animated-gif-chart-with-gganimate1.gif"
      alt="R Use Case 1"
    />
    <img class="rGraph" src="./images/r-graph.jpg" alt="" />
  </div>
</div>
</div>`;
var pythonContent = `<div class="content">
<h1>Python (object-oriented programming language)</h1>
<div class="platforms">
  <div class="platform">
    <div class="python-icon"></div>
    <div class="platform-descript">
      <h4>About Python</h4>
      <p>
      Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together. Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which encourages program modularity and code reuse. The Python interpreter and the extensive standard library are available in source or binary form without charge for all major platforms, and can be freely distributed.
      </p>
      </div>
  </div>
</div>
<div class="editors">
  <h3 class="editors-header">Popular Editors for Python</h3>
  <ul class="editors-list">
    <li><a href="https://www.eclipse.org/" target="_blank">Pydev</a></li>
    <li>
      <a
        href="https://www.jetbrains.com/pycharm/" target="_blank"
        >Pycharm</a
      >
    </li>
    <li><a href="http://www.sublimetext.com/" target="_blank">Sublime Text</a></li>
    <li>
      <a href="https://docs.python.org/3/library/idle.html" target="_blank"
        >IDLE</a
      >
    </li>
  </ul>
</div>

<hr>

<div class="features">
  <h3 class="features-header">Featured Python Use Cases</h3>
  <h4>Data Science</h4>
  <div class="feature-images">
  <img class="py-regress" src="./images/python-regression.jpg" alt="">
  <img class="py-pop" src="./images/python-pop.jpg" alt="">
  </div>
</div>
</div>`;
var sqlContent = `<div class="content">
<h1>SQL (domain-specific programming language)</h1>
<div class="platforms">
  <div class="platform">
    <div class="sql-icon"></div>
    <div class="platform-descript">
      <h4>About SQL</h4>
      <p>
        SQL (pronounced “ess-que-el”) stands for Structured Query Language. SQL is used to communicate with a database. According to ANSI (American National Standards Institute), it is the standard language for relational database management systems. SQL statements are used to perform tasks such as update data on a database, or retrieve data from a database. Some common relational database management systems that use SQL are: Oracle, Sybase, Microsoft SQL Server, Access, Ingres, etc. 
        <br>
        <br>
        Although most database systems use SQL, most of them also have their own additional proprietary extensions that are usually only used on their system. However, the standard SQL commands such as “Select”, “Insert”, “Update”, “Delete”, “Create”, and “Drop” can be used to accomplish almost everything that one needs to do with a database. This tutorial will provide you with the instruction on the basics of each of these commands as well as allow you to put them to practice using the SQL Interpreter.
        </p>
    </div>
  </div>
</div>
<div class="editors">
  <h3 class="editors-header">Popular Editors for SQL</h3>
  <ul class="editors-list">
    <li>
      <a href="https://www.adminer.org/" target="_blank">Adminer</a>
    </li>
    <li>
      <a href="https://dbeaver.io/" target="_blank"
        > DBeaver</a
      >
    </li>
    <li>
      <a href="https://www.microsoft.com/en-in/download/details.aspx?id=8961" target="_blank"
        >Microsoft SQL Server Management Studio Express</a
      >
    </li>
    <li>
      <a
        href="https://www.mysql.com/products/workbench/"
        target="_blank"
        >MySQL Workbench</a
      >
    </li>
    <li>
      <a
        href="https://www.oracle.com/tools/downloads/sqldev-downloads.html"
        target="_blank"
        >Oracle SQL Developer</a
      >
    </li>
  </ul>
</div>

<hr />

<div class="features">
  <h3 class="features-header">Featured SQL Use Cases</h3>
  <h4>Database Management/Communication</h4>
  <div class="feature-images">
    <img
      class="sql-ERD"
      src="./images/sql-ERD.jpg"
      alt=""
    />
    <img class="sql-table" src="./images/sql-table.jpg" alt="" />
  </div>
</div>
</div>`;
var javascriptContent = `<div class="content">
<h1>JavaScript (lightweight interpreted programming language)</h1>
<div class="platforms">
  <div class="platform">
    <div class="js-icon"></div>
    <div class="platform-descript">
      <h4>About JavaScript</h4>
      <p>
        JavaScript (often shortened to JS) is a lightweight,
        interpreted, object-oriented language with first-class
        functions, and is best known as the scripting language for Web
        pages, but it's used in many non-browser environments as well.
        It is a prototype-based, multi-paradigm scripting language
        that is dynamic, and supports object-oriented, imperative, and
        functional programming styles.
        <br />
        <br />
        JavaScript runs on the client side of the web, which can be
        used to design / program how the web pages behave on the
        occurrence of an event. JavaScript is an easy to learn and
        also powerful scripting language, widely used for controlling
        web page behavior.
      </p>
    </div>
  </div>
</div>
<div class="editors">
  <h3 class="editors-header">Popular Editors for JavaScript</h3>
  <ul class="editors-list">
    <li>
      <a href="https://code.visualstudio.com/" target="_blank"
        >Visual Studio Code</a
      >
    </li>
    <li>
      <a href="https://atom.io/" target="_blank">Atom</a>
    </li>
    <li>
      <a href="https://www.eclipse.org/" target="_blank">Eclipse</a>
    </li>
    <li>
      <a href="https://www.sublimetext.com/" target="_blank"
        >Sublime Text</a
      >
    </li>
  </ul>
</div>

<hr />

<div class="features">
  <h3 class="features-header">Featured JavaScript Use Cases</h3>
  <h4>
    Adding interactive behavior to web pages
    <br>
    Creating web and mobile apps
    <br>
    Building web servers
    <br>
    Game development
  </h4>
  <div class="feature-images">
    <img
      class="js-gif"
      src="https://i.pinimg.com/originals/f4/7f/d8/f47fd896add554744b4114d964b61b41.gif"
      alt=""
    />
    <img class="js-code" src="./images/js-code.jpg" alt="" />
  </div>
</div>
</div>`
var productsContent = `<h1 class="sad-news">AW SHUCKS - THAT THING YOU WANTED, WE JUST SOLD THE LAST ONE :/</h1>

<svg viewBox="0 0 425 200">
  <path id="curve" d="M6,150C49.63,93,105.79,36.65,156.2,47.55,207.89,58.74,213,131.91,264,150c40.67,14.43,108.57-6.91,229-145" />
  <text x="25">
    <textPath xlink:href="#curve">
      please try coming back when we have the thing
    </textPath>
  </text>
</svg>
`;
var contactContent = `<h1>Contact</h1>`;


function initListeners() {
    $("nav a").click(function(e) {
        let btnID = e.currentTarget.id;
        loadPageContent(btnID);
        // console.log("Clicked " + contentID);
    })    
}

function loadPageContent(pageName) {
    let contentID = pageName + "Content";
    $("#app").html(eval(contentID));
}



function initApp() {
    initListeners();
}

$(document).ready(function() {
    // can remove this to stop run
    loadPageContent("home")
    initApp();
})