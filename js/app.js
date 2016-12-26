// THIS IS USED TO BUILD SOME SMALL FUNCTIONAL DEMOS
var extrainfo = document.querySelector('.extra_info');
var tool_tip = document.querySelector('.tool_tip');
var login = document.querySelector('.login-bnet');

if (extrainfo && tool_tip) {
	extrainfo.addEventListener('click', function (event) {
		tool_tip.className = 'tool_tip active';
	});

	tool_tip.addEventListener('click', function (event) {
		tool_tip.className = 'tool_tip';
	});
}

if (login) {
	var login_panel = document.querySelector('.loading_panel');

	login.addEventListener('click', function (event) {
		login_panel.className = 'loading_panel active';
	});
}
