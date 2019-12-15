// Start Navbar //

$(document).on("scroll", function(){
		if
      ($(document).scrollTop() > 86){
		  $("#banner").addClass("shrink");
		}
		else
		{
			$("#banner").removeClass("shrink");
		}
	});

// End Navbar //

// Start Type writer //


  var typed4 = new Typed('#typed4', {
    strings: ['Apps', 'Softwares', 'Websites'],
    typeSpeed: 70,
    backSpeed: 20,
    bindInputFocusEvents: true,
    loop: true
  });
    

// End Type writer //

// Start slider //

$('.carousel').carousel({
  interval: 5000
});



// End slider //
	

$(document).ready(function(){
    
        $(".filter-button").click(function(){
            var value = $(this).attr('data-filter');
            
            if(value == "all")
            {
                //$('.filter').removeClass('hidden');
                $('.filter').fadeIn('1000');
            }
            else
            {
    //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
    //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
                $(".filter").not('.'+value).fadeOut('2000');
                $('.filter').filter('.'+value).fadeIn('3000');
                
            }
        });
        
        if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
    }
    $(this).addClass("active");
    
    });