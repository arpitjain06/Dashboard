// frappe.pages['dashboard'].on_page_load = function(wrapper) {
// 	var page = frappe.ui.make_app_page({
// 		parent: wrapper,
// 		title: 'Dashboard',
// 		single_column: true
// 	});
// }

frappe.pages['dashboard'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Dashboard',
		single_column: false
	});
	frappe.breadcrumbs.add("Selling");
	wrapper.dashboard = new erpnext.MainDashboard(wrapper);
}
erpnext.MainDashboard = Class.extend({
		init: function(wrapper) {
		var me = this;
		// 0 setTimeout hack - this gives time for canvas to get width and height
		setTimeout(function() {
			me.setup(wrapper);
		}, 0);
	},


	setup: function(wrapper) {
		var me = this;

		this.elements = {
			layout: $(wrapper).find(".layout-main"),
			// from_date: wrapper.page.add_date(__("From Date")),
			// to_date: wrapper.page.add_date(__("To Date")),
			// refresh_btn: wrapper.page.set_primary_action(__("Refresh"),
			// 	function() {
			// 	 }, "icon-refresh"),
		};
		this.elements.funnel_wrapper = $(frappe.render_template("dashboard", {"data": "arpit"}))
			.appendTo(this.elements.layout);

	},
})