$(document).ready(function() {
	
	console.log("Doc Ready");

	// $(".mod__f_ele-radio").bind("click", function(element){
	// 	$(this).children("input").attr("disabled", "disabled");
	// 	console.log("active")
	// });
    //
	// $(".toggleHide").bind("click", function(e){
    //
	// 	// e.preventDefault();
    //
	// 	$("span").removeClass('show'); // Remove class
    //
	// 	/*********************************************
	//
	// 		Toggle hide the specified element
	// 		BAased on the structure of the object hide
	// 		the next element inline.
    //
	// 	***********************************************/
    //
	// 	// Type of element
    //
	// 	_this = $(this);
    //
	// 	var p = _this.next("span");
    //
	// 	var showPanel = _this[0].checked; // If true toggle class
    //
	// 	if (showPanel){
    //
	// 		console.log("addClass" , _this.next("span"))
	// 		_this.next().next("span").addClass('show');
	// 	} else {
	// 		_this.next().next("span").removeClass('show');
	// 	}
    //
	//
    //
	// 	// Add class to showw
    //
	// 	// Animate object
    //
	// 	// Remove class
    //
    //
    //
    //
	// });

    $('#recipeCarousel').carousel({
        interval: 10000
    })

    $('#recipeCarousel1').carousel({
        interval: 10000
    })

    $('.carousel .carousel-item').each(function(){
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        for (var i=0;i<3;i++) {
            next=next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo($(this));
        }
    });




});