<!doctype html>
<html class="no-js" lang="">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>DotaPopQuiz</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
        crossorigin="anonymous">
    <link rel="manifest" href="site.webmanifest">
    <!-- Latest compiled and minified CSS -->
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="apple-touch-icon" href="icon.png">
    <!-- Place favicon.ico in the root directory -->
    <link rel="stylesheet" href="css/normalize.min.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/7.29.0/sweetalert2.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">
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
            <!-- <div class="row" style="clear:both;">
                <div class="col-12">
                    <div class="col-xs-4 text-center">
                       <a href="https://www.facebook.com/sharer/sharer.php?u=example.org" target="_blank"> <i class="fab fa-facebook-square" style="background-color:#3d64b1"></i> </a>
                    </div>
                    <div class="col-xs-4 text-center">
                        <i class="fas fa-bomb bomb" id="btn-bomb" style="background-color:#3d64b1"></i>
                    </div>
                    <div class="col-xs-4 text-center">
                        <i class="fas fa-eye reveal" style="background-color:#3d64b1"></i>
                    </div>
                </div>
            </div> -->
            <img class="modal-img">
            <div class="input-check">
            <input type="text" class="answer-input" id="answer-input" placeholder="">
             <i class="fas fa-backspace" id="btn-remove" style="background-color:transparent;"></i>
            <!-- <img src="img/submit_icon.png"> -->
                <button type="button" class="btn  btn-light answer-button tada fast animated" id="button-check">Check</button>
                <i class="fas fa-check-circle check-circle"></i>
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
        <li><a href="index.php"><i class="fas fa-arrow-left"></i></a></li>
        <li class="logo" style="margin-top:7px">
        <h4 style="font-weight:700; color:white;" class="logo">DOTA<span class="active-text">POP</span>QUIZ</h4>
        </li>
        <li><a href="#"><i class="fas fa-bars"></i></a></li>
    </ul>
    <!-- FIRST NAV BAR -->

    <!-- SECOND NAV BAR -->
    <ul class="main-nav-phone">
        <!-- <li class="twitter_bird"><i class="fab fa-twitter"></i></li> -->
        <!-- <a href="info.php">
            <li>Info</li>
        </a> -->
        <a href="index.php">
            <li>Play</li>
        </a>
        <a href="about.php">
            <li>About</li>
        </a>
    </ul>
    <!-- SECOND NAV BAR -->
    <!-- ADVERTISEMENT -->
    <!-- <div class="ad-container text-center">
        <div class="row">
        <div class="col-lg-12">
        <img class="img-responsive ad-img" src="https://via.placeholder.com/1000x150">
        </div>
        </div>
    </div> -->
    <!-- ADVERTISEMENT -->
    <div class="container container-rendered">
        <div class="row quiz-items" id="stage-container">
            <!-- STAGES ARE RENDERED HERE USING HANDLEBARS -->
        </div>
    </div>




    <!-- TAB BAR -->
    <ul class="tab-bar">
        <li><a href="info.php"><i class="fas fa-gamepad"></i><br>Info</a></li>
        <li><a href="index.php"><i class="fas fa-play"></i><br>Play</a></li>
        <li><a href="about.php"><i class="fas fa-question-circle"></i><br>About</a></li>
    </ul>
    <!-- TAB BAR -->

    <!-- HANDLEBARS -->
    <script id="stage-icon" type="text/x-handlebars-template">
        {{#each this}}
            <div class="stage" data-nr="{{@index}}">
                <div class="col-lg-3 col-xs-4 col-md-3 order-wrapper">
                    <div class="order-item" style="position: relative;">
                        {{#if completed}}
                         <img src="img/overlay.png" style="position:absolute;">
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
        <button type="button" class="btn-danger btn-md" id="btn-space">Space</button>
        <button type="button" class="btn-danger btn-md" id="btn-clear">Clear All</button>
    </script>

    <!-- HANDLEBARS -->


    <script src="js/vendor/modernizr-3.6.0.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossorigin="anonymous"></script>
    <script>
        window.jQuery || document.write('<script src="js/vendor/jquery-3.3.1.min.js"><\/script>')
    </script>
    <script>
        
        var currentLevel = <?php echo intval($_GET['level']); ?>;
        var currentAnswer = "";

    </script>
    <script src="js/plugins.min.js"></script>
    <script src="js/main.js"></script>
    <script src="js/data.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.12/handlebars.min.js"></script>
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
    <script src="bootstrapjs/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/7.29.0/sweetalert2.all.min.js"></script>
</body>

</html>