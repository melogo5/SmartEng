// register modal component
Vue.component("modal", {
	template: "#methodsInfo"
});

// start app
new Vue({
	el: "#app",
	data: {
		showModal: false
	}
});