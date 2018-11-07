<!doctype html>
<html class="no-js" lang="">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>DotaPopQuiz</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
        crossorigin="anonymous">
    <link rel="manifest" href="site.webmanifest">

    <!-- Latest compiled and minified CSS -->
    <link href="bootstrapcss/bootstrap.css" rel="stylesheet">
    <link rel="apple-touch-icon" href="icon.png">
    <!-- Place favicon.ico in the root directory -->
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/sweetalert2.css">

    <!-- CSS -->
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.11.1/build/css/alertify.min.css" />
    <!-- Default theme -->
</head>

<body class="body">
    <!-- MODAL -->
    <!-- The Modal -->
    <div id="myModal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
            <div class="col-12">
                <span class="close">&times;</span>
            </div>
            <div class="row" style="clear:both;">
                <div class="col-12">
                    <!-- <div class="col-xs-6 text-center">
                        <i class="fab fa-facebook-square" style="background-color:#3d64b1"></i>
                    </div> -->
                    <!-- <div class="col-xs-4 text-center">
                        <i class="fas fa-bomb bomb" id="btn-bomb" style="background-color:#3d64b1"></i>
                    </div> -->
                    <!-- <div class="col-xs-6 text-center">
                        <i class="fas fa-eye reveal" style="background-color:#3d64b1"></i>
                    </div> -->
                </div>
            </div>
            <img class="modal-img">
            <div class="input-check">
            <input type="text" class="answer-input" id="answer-input" placeholder="Answer" disabled>
                <button type="button" class="btn  btn-light answer-button" id="button-check">Check</button>
            </div>
            <div class="keyboard-container" id="keyboard-container">
                <!-- DONT FORGET TO PUT THE .MODAL-CONTENT BUTTON CSS BACK IF CHANGE MIND-->
            </div>
                <!-- <input type="text" class="answer-input" placeholder="Answer">
                <button type="submit" class="answer-button" value="submit">Submit</button> -->
        </div>
    </div>
</div>

    <!-- FIRST NAV BAR -->
    <ul class="main-nav">
        <!-- <li class="twitter_bird"><i class="fab fa-twitter"></i></li> -->
        <li><a href="index.html"><i class="fas fa-arrow-left"></i></a></li>
        <li class="logo">
            <h3 class="dota-logo">DotaPopQuiz</h3>
        </li>
        <li><a href="#"><i class="fas fa-bars"></i></a></li>
    </ul>
    <!-- FIRST NAV BAR -->

    <!-- SECOND NAV BAR -->
    <ul class="main-nav-phone">
        <!-- <li class="twitter_bird"><i class="fab fa-twitter"></i></li> -->
        <a href="#">
            <li>Info</li>
        </a>
        <a href="#">
            <li>Play</li>
        </a>
        <a href="#">
            <li>About</li>
        </a>
    </ul>
    <!-- SECOND NAV BAR -->

    <div class="container container-rendered">
        <div class="row quiz-items" id="stage-container">
            <!-- STAGES ARE RENDERED HERE USING HANDLEBARS -->
        </div>
    </div>




    <!-- TAB BAR -->
    <ul class="tab-bar">
        <li><a href="#"><i class="fas fa-gamepad"></i><br>Info</a></li>
        <li><a href="#"><i class="fas fa-play"></i><br>Play</a></li>
        <li><a href="#"><i class="fas fa-question-circle"></i><br>About</a></li>
    </ul>
    <!-- TAB BAR -->

    <!-- HANDLEBARS -->
    <script id="stage-icon" type="text/x-handlebars-template">
        {{#each this}}
            <div class="stage" data-nr="{{@index}}">
                <div class="col-lg-4 col-xs-4 col-md-4 order-wrapper">
                    <div class="order-item bg-dark">
                        {{#if completed}}
                         <h1>Completed</h1>
                        {{/if}}
                        <img src="img/{{icon}}">
                    </div>
                </div>
            </div>
        {{/each}}
    </script>

<script id="keyboard-button-template" type="text/x-handlebars-template">
        {{#each this}}
        <button type="button" class="btn-primary btn-keyboard">{{this}}</button>
        {{/each}}
        <button type="button" class="btn-danger btn-md" id="btn-clear">Clear</button>
    </script>

    <!-- HANDLEBARS -->

    <script src="js/vendor/modernizr-3.6.0.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossorigin="anonymous"></script>
    <script>
        window.jQuery || document.write('<script src="js/vendor/jquery-3.3.1.min.js"><\/script>')
    </script>
    <script>
        
        var currentLevel = <?php echo $_GET['level']; ?>;
        var currentAnswer = "";

    </script>
    <script src="js/plugins.js"></script>
    <script src="js/main.js"></script>
    <script src="js/data.js"></script>
    <script src="js/handlebars-v4.0.12.js"></script>
    <script>
        var source = document.getElementById("stage-icon").innerHTML;
        var template = Handlebars.compile(source);
        for (var i = 0; i < levelData["level" + currentLevel].length; i++) {
            var stageCompleted = localStorage.getItem("level" + currentLevel + "_stage" + i) == 1;
            
            
            levelData["level" + currentLevel][i].completed = stageCompleted;
        }
        var html = template(levelData["level" + currentLevel]);
        $("#stage-container").html(html);
    
    </script>
    <!-- Google Analytics: change UA-XXXXX-Y to be your site's ID. -->
    <script>
        window.ga = function () {
            ga.q.push(arguments)
        };
        ga.q = [];
        ga.l = +new Date;
        ga('create', 'UA-XXXXX-Y', 'auto');
        ga('send', 'pageview')
    </script>
    <script src="https://www.google-analytics.com/analytics.js" async defer></script>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>


    <!-- JavaScript -->
    <script src="//cdn.jsdelivr.net/npm/alertifyjs@1.11.1/build/alertify.min.js"></script>
    <script src="bootstrapjs/bootstrap.js"></script>
    <script src="js/sweetalert2.js"></script>

</body>

</html>