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
    <link rel="stylesheet" href="css/sweetalert2.css">

    <!-- CSS -->
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.11.1/build/css/alertify.min.css" />
    <link rel="stylesheet" href="css/main.css">
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
                    <div class="col-xs-4 text-center">
                        <i class="fab fa-facebook-square" style="background-color:#3d64b1"></i>
                    </div>
                    <div class="col-xs-4 text-center">
                        <i class="fas fa-bomb bomb" style="background-color:#3d64b1"></i>
                    </div>
                    <div class="col-xs-4 text-center">
                        <i class="fas fa-eye reveal" style="background-color:#3d64b1"></i>
                    </div>
                </div>
            </div>
            <img class="modal-img">
                <!-- <input type="text" class="answer-input" placeholder="Answer">
                <button type="submit" class="answer-button" value="submit">Submit</button> -->
        </div>
    </div>

    <!-- FIRST NAV BAR -->
    <ul class="main-nav">
        <!-- <li class="twitter_bird"><i class="fab fa-twitter"></i></li> -->
        <li><a href="index.php"><i class="fas fa-arrow-left"></i></a></li>
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

    <div class="container container-panel" style="margin-top:20px;">

        <p class="accordion">What is Dota 2?</p>
        <div class="panel">Dota 2 is a multiplayer online battle arena video game developed and published by Valve Corporation. For more info, visit <a href="http://blog.dota2.com/" target="_blank">Dota 2 website</a></div>

        <p class="accordion">What if I'm stuck?</p>
        <div class="panel">You can ask a friend, share it on Facebook, post into Dota 2 groups or alternatively, email us at <a href="mailto:support@dotapopquiz.com">support@dotapopquiz.com</a>, and we can help you.</div>

        <p class="accordion">Can I play it on my phone?</p>
        <div class="panel">Absolutely! You can play it on your Phone, Tablet or Desktop. It's responsive for everyone!</div>

        <p class="accordion">How can I donate?</p>
        <div class="panel">As this is a free game, created with passion by me and used to play dota until I reached 5.5K mmr, decided to quit and pursue a career in Web Development.
            Every donation is appreciated, which you can donate via PayPal at <a href="#">DotaPopQuiz Paypal Account</a>
        </div>

    </div>




    <!-- TAB BAR -->
    <ul class="tab-bar">
        <li><a href="#"><i class="fas fa-gamepad"></i><br>Info</a></li>
        <li><a href="#"><i class="fas fa-play"></i><br>Play</a></li>
        <li><a href="#"><i class="fas fa-question-circle"></i><br>About</a></li>
    </ul>
    <!-- TAB BAR -->


    <script src="js/vendor/modernizr-3.6.0.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossorigin="anonymous"></script>
    <script>
        window.jQuery || document.write('<script src="js/vendor/jquery-3.3.1.min.js"><\/script>')
    </script>
    <script>

    </script>
    <script src="js/plugins.js"></script>
    <script src="js/main.js"></script>
    <script src="js/data.js"></script>
    <script src="js/handlebars-v4.0.12.js"></script>

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