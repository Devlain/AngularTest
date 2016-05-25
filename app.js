(function() {
	var app = angular.module('store', []);

	app.controller('StoreController', function() {
		this.products = gems;
	});

	app.controller('PanelController', function() {
		this.tab = 1;

		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		this.isSelected = function(checkTab) {
			return this.tab === checkTab;
		}
	});

	var gems = [
		{
			name: 'Diamond',
			price: 2.95,
			description: '. . .',
			canPurchase: true,
			soldOut: false,
			img: 'img/diamond.png'
		},
		{
			name: 'Sapphire',
			price: 5.95,
			description: '. . .',
			canPurchase: false,
			soldOut: false,
			img: 'img/sapphire.png'
		}
	];

})();