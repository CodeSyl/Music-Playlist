angular.module('TractrApp')

    .controller('videoList', function ($window, $rootScope, $scope, $http, $mdDialog, VideoData) {

        angular.element(document).ready(function () {

            $scope.videos = [];
            $scope.rock = true;
            $scope.hip_hop = true;
            $scope.classique = true;
            $scope.francais = true;

            var iframe = document.getElementsByTagName('iframe')
            var progressBar = document.getElementById('progressBar');
            var visibility = document.getElementsByClassName('before');

            progressBar.style.display = 'none';
            visibility[0].style.display = "block";

            VideoData.all_videos().success(function (data) { $scope.videos = data.data[0].list });

            $scope.onToggle = function (event, wich) {

                angular.forEach($scope.videos, function (value, key) {
                    if (value.genre === wich && event) {
                        value.show = false;
                        $scope.videos[key].show = false;
                    } else {
                        if (value.genre === wich && !event) {
                            $scope.videos[key].show = true;
                        }
                    }
                });
            }

            $scope.openOffscreen = function (e) {
                var thisSong;
                var idSong = e.toElement.id;
                for (var i = 0; i < $scope.videos.length; i++) {
                    if (idSong === $scope.videos[i].id) {
                        thisSong = $scope.videos[i];
                    }
                }

                $mdDialog.show(
                    $mdDialog.alert()
                        .clickOutsideToClose(true)
                        .title(thisSong.title)
                        .textContent('Temps : ' + thisSong.time + '')
                        .ariaLabel('Offscreen Demo')
                        .ok('Check!')
                        .openFrom({
                            top: -50,
                            width: 30,
                            height: 80
                        })
                        .closeTo({
                            left: 1500
                        })
                );
            };
        });

    });