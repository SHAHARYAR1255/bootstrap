$(document).ready(function(){
    $("#reserveTable").click(function(){
        $("#reservemodal").modal('toggle');
        $("#reservemodal").modal('show');
    });
    $("#login").click(function(){
        $("#loginModal").modal('toggle');
        $("#loginModal").modal('show');
    });
    $('#loginClose').click(function(){
        $('#loginModal').modal('hide');
    });
    $('#reserveClose').click(function(){
        $('#reservemodal').modal('hide');
    });
    $('#cancelLogin').click(function(){
        $('#loginModal').modal('hide');
    });
    $('#cancelReserve').click(function(){
        $('#reservemodal').modal('hide');
    });
});
$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 1000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });
});