$('.wrapper').click(function() {
	$(this).toggleClass('animate');
	$('.counter').text('8');
	setTimeout(function() {
		$('.counter').each(function() {
			var $this = $(this),
					countTo = $this.attr('data-count');

			$({ countNum: $this.text()}).animate({
				countNum: countTo
			},

			{

				duration: 5000,
				easing:'linear',
				step: function() {
					$this.text(Math.floor(this.countNum));
				},
				complete: function() {
					$this.text(this.countNum);
					$('.wrapper').toggleClass('animate');
				}
			});  
		});
	},1800);
});