// $(document).ready(function() {
//
// 	console.log("Doc Ready");
//
//
//     $('#carouselExample').on('slide.bs.carousel', function (e) {
//
//
//         var $e = $(e.relatedTarget);
//         var idx = $e.index();
//         var itemsPerSlide = 4;
//         var totalItems = $('.carousel-item').length;
//
//         if (idx >= totalItems-(itemsPerSlide-1)) {
//             var it = itemsPerSlide - (totalItems - idx);
//             for (var i=0; i<it; i++) {
//                 // append slides to end
//                 if (e.direction=="left") {
//                     $('.carousel-item').eq(i).appendTo('.carousel-inner');
//                 }
//                 else {
//                     $('.carousel-item').eq(0).appendTo('.carousel-inner');
//                 }
//             }
//         }
//     });
//
//
//     $('#carouselExample').carousel({
//         interval: 2000
//     });
//
//
//     $(document).ready(function() {
//         /* show lightbox when clicking a thumbnail */
//         $('a.thumb').click(function(event){
//             event.preventDefault();
//             var content = $('.modal-body');
//             content.empty();
//             var title = $(this).attr("title");
//             $('.modal-title').html(title);
//             content.html($(this).html());
//             $(".modal-profile").modal({show:true});
//         });
//
//     });
//
// 	// $(".mod__f_ele-radio").bind("click", function(element){
// 	// 	$(this).children("input").attr("disabled", "disabled");
// 	// 	console.log("active")
// 	// });
//     //
// 	// $(".toggleHide").bind("click", function(e){
//     //
// 	// 	// e.preventDefault();
//     //
// 	// 	$("span").removeClass('show'); // Remove class
//     //
// 	// 	/*********************************************
// 	//
// 	// 		Toggle hide the specified element
// 	// 		BAased on the structure of the object hide
// 	// 		the next element inline.
//     //
// 	// 	***********************************************/
//     //
// 	// 	// Type of element
//     //
// 	// 	_this = $(this);
//     //
// 	// 	var p = _this.next("span");
//     //
// 	// 	var showPanel = _this[0].checked; // If true toggle class
//     //
// 	// 	if (showPanel){
//     //
// 	// 		console.log("addClass" , _this.next("span"))
// 	// 		_this.next().next("span").addClass('show');
// 	// 	} else {
// 	// 		_this.next().next("span").removeClass('show');
// 	// 	}
//     //
// 	//
//     //
// 	// 	// Add class to showw
//     //
// 	// 	// Animate object
//     //
// 	// 	// Remove class
//     //
//     //
//     //
//     //
// 	// });
//
//     $('#recipeCarousel').carousel({
//         interval: 10000
//     })
//
//     $('#recipeCarousel1').carousel({
//         interval: 10000
//     })
//
//     // $('.carousel .carousel-item').each(function(){
//     //     var next = $(this).next();
//     //     if (!next.length) {
//     //         next = $(this).siblings(':first');
//     //     }
//     //     next.children(':first-child').clone().appendTo($(this));
//     //
//     //     for (var i=0;i<3;i++) {
//     //         next=next.next();
//     //         if (!next.length) {
//     //             next = $(this).siblings(':first');
//     //         }
//     //
//     //         next.children(':first-child').clone().appendTo($(this));
//     //     }
//     // });
//
//
//
//
// });