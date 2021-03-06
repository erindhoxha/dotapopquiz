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
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="apple-touch-icon" href="icon.png">
    <!-- Place favicon.ico in the root directory -->
    <link rel="stylesheet" href="css/normalize.min.css">
    <link rel="stylesheet" href="css/main.css">
</head>

<body>

    <!-- FIRST NAV BAR -->
    <ul class="main-nav">
        <!-- <li class="twitter_bird"><i class="fab fa-twitter"></i></li> -->
        <li><a href="#"><i class="fas fa-cog"></i></a></li>
        <li class="logo" style="margin-top:7px">
        <a href="index.php">
        <h4 style="font-weight:700; color:white;" class="logo">DOTA<span class="active-text">POP</span>QUIZ</h4>
        </a>
           <!-- <img class="img-responsive" src="img/logo.png"> -->
        </li>
        <li><a href="#"><i class="fas fa-bars"></i></a></li>
    </ul>
    <!-- FIRST NAV BAR -->


    <!-- SECOND NAV BAR -->
    <ul class="main-nav-phone">
        <!-- <li class="twitter_bird"><i class="fab fa-twitter"></i></li> -->
        <!-- <a href="#">
            <li>Games</li>
        </a> -->
        <a href="index.php">
            <li>Play</li>
        </a>
        <a href="about.php">
            <li>About</li>
        </a>
    </ul>
    <!-- SECOND NAV BAR -->
    <ul class="support-nav">
        <!-- <li class="twitter_bird"><i class="fab fa-twitter"></i></li> -->

        <a href="https://www.facebook.com/sharer/sharer.php?u=example.org" target="_blank">
        <li>
            Share on Facebook
        </li>
        </a> 
        <a href="#">
            <li>Donate</li>
        </a>
        <a href="mailto:bug@dotapopquiz.com">
            <li>Report a bug</li>
        </a>
    </ul>

    <!-- SECOND NAV BAR -->
    <div class="ad-container text-center">
        <div class="row">
        <div class="col-lg-12">
        <img class="img-responsive ad-img" src="https://via.placeholder.com/1000x150">
        </div>
        </div>
    </div>

    <div class="container container-index">
        <div class="row">
            <?php for ($i = 1; $i < 6; $i++) { ?>
            <a href="level.php?level=<?php echo $i?>">
                <div class="col-lg-6 col-md-6 col-xs-12 order-wrapper order-index" data-nr="0">
                    <div class="order-item">
                        <img src="img/level<?php echo $i?>.jpg">
                        <button type="button" class="select-btn levelOneButton">Play</button>
                    </div>
                </div>
            </a>
            <?php } ?>
         </div>
    </div>
</div>

    <!-- TAB BAR -->
    <ul class="tab-bar">
        <li><a href="info.php"><i class="fas fa-gamepad"></i><br>Info</a></li>
        <li><a href="index.php"><i class="fas fa-play"></i><br>Play</a></li>
        <li><a href="about.php"><i class="fas fa-question-circle"></i><br>About</a></li>
    </ul>
    <!-- TAB BAR -->

    <script src="js/vendor/modernizr-3.6.0.min.js"></script>
    <script src="js/plugins.min.js"></script>
    <script src="js/data.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="bootstrapjs/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.12/handlebars.min.js"></script>
    <script src="js/main.js"></script>

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
</body>

</html>