statsApp.directive('superman', [function () {
	return {
		restrict: 'E',
		template: "<div>im a directive yayyy</div>"
		link: function (scope, iElement, iAttrs) {
			
		}
	};
}])