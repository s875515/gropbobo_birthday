function indexCtrl ($scope, $http, $rootScope, $location) {

  $scope.makeTimer = function(){

    var now = new Date();
    var now_month = now.getMonth()+1;
    var now_day = now.getDate();

    $scope.now_year = now.getFullYear();
    $scope.is_today = false;

    now = (Date.parse(now) / 1000);

    if (now_month === 8 && now_day === 18) { //就是今天囉
      var endTime = new Date();
      $scope.is_today = true;
    } else if ((now_month === 8 && now_day >= 19) && now_month >= 8) { //8.19~12.31
      $scope.now_year = $scope.now_year + 1;
      var endTime = new Date("August 18, " + $scope.now_year + " 00:00:00");
    } else { //1.1~8.17
      var endTime = new Date("August 18, " + $scope.now_year + " 00:00:00");
    };

    $scope.$apply();

    endTime = (Date.parse(endTime)) / 1000;

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $("#days").html(days + "<span>Days</span>");
    $("#hours").html(hours + "<span>Hours</span>");
    $("#minutes").html(minutes + "<span>Minutes</span>");
    $("#seconds").html(seconds + "<span>Seconds</span>");
  };

  setInterval(function() { $scope.makeTimer(); }, 1000);


};
