// MAKING SWITCH ACCESSIBLE
// If the switch is in focus, and enter or space is pressed, simulate a click
$('[data-action="aria-switch"]').on('keydown', function(e) {
    var $this = $(this);
    if ($this.is(':focus') && (e.which === 32 || e.which === 13)) {
        e.preventDefault();
        $this.trigger('click');
    };
});

// THEME SWITCH
// Toggle a body class that will change
var el = document.querySelector('.switch-button');

el.onclick = function() {
	document.body.classList.toggle('invert');
}
