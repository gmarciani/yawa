"use strict";

// Class definition
var KTAppSidebar = function () {
	// Private variables
	var secondaryWrapper;
	var secondaryTagsCollapse;
	var secondaryTagsToggle;

	var handleSecondaryWrapper = function() {
		var menuActiveItem = secondaryWrapper.querySelector(".menu-link.active");

		if ( !menuActiveItem ) {
			return;
		} 

		if ( KTUtil.isVisibleInContainer(menuActiveItem, secondaryWrapper) === true) {
			return;
		}

		secondaryWrapper.scroll({
			top: KTUtil.getRelativeTopPosition(menuActiveItem, secondaryWrapper),
			behavior: 'smooth'
		});
	}

	var handleTagsCollapse = function() {
		secondaryTagsCollapse.addEventListener('shown.bs.collapse', event => {
			if ( KTUtil.isVisibleInContainer(secondaryTagsToggle, secondaryWrapper) === true) {
				return;
			}
	
			secondaryWrapper.scroll({
				top: KTUtil.getRelativeTopPosition(secondaryTagsToggle, secondaryWrapper),
				behavior: 'smooth'
			});
		})
	}

	// Public methods
	return {
		init: function () {
			// Elements
			secondaryWrapper = document.querySelector('#kt_app_sidebar_secondary_wrapper');
			secondaryTagsCollapse = document.querySelector('#kt_app_sidebar_secondary_tags_collapse');
			secondaryTagsToggle = document.querySelector('[href="#kt_app_sidebar_secondary_tags_collapse"]');
			
			if ( secondaryWrapper ) {
				handleSecondaryWrapper();
			}

			if ( secondaryTagsCollapse ) {
				handleTagsCollapse();
			}
		}
	};
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
	KTAppSidebar.init();
});