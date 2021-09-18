/*$(selector/object/element).event(action value/parameter,
    function) */

/*Preloader */

$(window).on("load", function () { 
    // makes sure that whole site is loaded
    $('#status').fadeOut("slow");
    $('#preloader').delay(500).fadeOut("slow");
});

//Navigation show & hide
$(function (){

    showHideNav();

    $(window).scroll(function(){
        showHideNav();

    });

    function showHideNav(){
        //condition 
        if($(window).scrollTop() >640){
            //show white navigation
            $("nav").addClass("white-nav-top");       
        }
        else{
            $("nav").removeClass("white-nav-top")

        }
    }
   
});

//Smooth Scrolling
$(function(){
                        //when clicked
    $("a.smooth-scroll").click(function(event){
        
        event.preventDefault();
        //Get section id ex. #About, #Update, #stat etc.
        var section_id= $(this).attr("href");
        $("html,body").animate({
                                //get current position  
            scrollTop: $(section_id).offset().top
        }, 1500);


    });

});

/*Responsive Tabs */

$(function(){
    $("#education-tabs").responsiveTabs({
        animation:'slide'
    });
}); 



