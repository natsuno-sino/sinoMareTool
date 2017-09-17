(function (module) {
	module.controller('top', [ '$scope', function controller($scope) {

		let nightmareParams = {
			1 :{name:"ガーディアンSS",provision:50,effect:0,type:'wind'},
			2 :{name:"ミトラL",provision:50,effect:0,type:'fire'},
			3 :{name:"ヘイトバードA",provision:60,effect:0,type:'else'},
			4 :{name:"ヘイトプラントA",provision:50,effect:0,type:'else'},
			5 :{name:"オーガSS",provision:50,effect:110,type:'wind'},
			6 :{name:"オーガL",provision:60,effect:120,type:'wind'},
			7 :{name:"ミドガルズオルムSS",provision:100,effect:160,type:'water'},
			8 :{name:"ミドガルズオルムL",provision:80,effect:100,type:'water'},
			9 :{name:"ノインL",provision:60,effect:120,type:'fire'},
			10 :{name:"フリーズゴーレムL",provision:80,effect:120,type:'water'},
			11 :{name:"ウガルルムL",provision:80,effect:120,type:'fire'},
			12 :{name:"リントヴルムL",provision:80,effect:120,type:'wind'},
			13 :{name:"エリスL",provision:60,effect:120,type:'wind'}
		};

		let nightmares = [
			{id:1,name:"ガーディアンSS"},
			{id:2,name:"ミトラL"},
    			{id:3,name:"ヘイトバードA"},
    			{id:4,name:"ヘイトプラントA"},
    			{id:5,name:"オーガSS"},
    			{id:6,name:"オーガL"},
    			{id:7,name:"ミドガルズオルムSS"},
    			{id:8,name:"ミドガルズオルムL"},
    			{id:9,name:"ノインL"},
    			{id:10,name:"フリーズゴーレムL"},
    			{id:11,name:"ウガルルムL"},
    			{id:12,name:"リントヴルムL"},
    			{id:13,name:"エリスL"}
		];

		// ------------------------------
		// anguler method
		// ------------------------------

		$scope.resetNightmare = function(){
			$scope.selectList = [];
			$scope.selectedNightmare = [];
			localStorage.setItem("nightmare", "");
                        localStorage.setItem("selected", "");
		};

		// add nightmare
		$scope.addNightmare = function(){
			$scope.selectList.push({});
		};

		$scope.changeNightmare = function(index){
			$scope.selectList[index] = nightmareParams[this.selectedNightmare[index]["id"]];
			localStorage.setItem("nightmare", JSON.stringify($scope.selectList));
			localStorage.setItem("selected", JSON.stringify($scope.selectedNightmare));
		};

		$scope.setEffect = function(type) {
			return {
				'gauge-effect-fire': (type == 'fire'),
				'gauge-effect-water': (type == 'water'),
				'gauge-effect-wind': (type == 'wind'),
				'gauge-effect-else': (type == 'else'),
			};
		};

		$scope.setProvision = function(type) {
                        return {
                                'gauge-provision-fire': (type == 'fire'),
                                'gauge-provision-water': (type == 'water'),
                                'gauge-provision-wind': (type == 'wind'),
                                'gauge-provision-else': (type == 'else'),
                        };
                };

		// init
		(function(){
			$scope.nightmares = nightmares;

			$scope.timeList = [];
			for(let i = 0 ; i < 20 ; i++){
				$scope.timeList.push((20-i)+':00');
			}

			let selectList = localStorage.getItem("nightmare");
			$scope.selectList = (selectList == "" || selectList == null)?[]:JSON.parse(selectList);
			
			let selected = localStorage.getItem("selected");
			$scope.selectedNightmare = (selected == "" || selected == null)?[]:JSON.parse(selected);

		}());
        }]);
})(angular.module('app'));
