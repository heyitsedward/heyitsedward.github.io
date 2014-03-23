(function(w){
      var $container = $('.offcanvas-top'),
				$cHeight = $('.o-content').outerHeight();
			$(document).ready(function() {
				buildCanvas();
			});
			
			function buildCanvas() {
				$('<a href="#" id="trigger">More +</a>').appendTo($container);

				$('#trigger').bind('click', function(e) {
					e.preventDefault();
					var $this = $(this);
					$container.toggleClass('active');
					if($container.hasClass('active')) {
						$container.height($cHeight);
						$this.text('Hide -');
					} else {
						$container.height(50);
						$this.text('More +');
					}
				});

			}
			
			$(window).resize(function() { //On Window resizeBy(
				$cHeight = $('.o-content').outerHeight();
        console.log($cHeight);
			});
			
			
		})(this);