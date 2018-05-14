$(document).ready(function(){
        $('.mobile-trigger').click(function() {
            $('body').toggleClass('show-mobile-nav');
         });
        $('#forgotPassLogin,#backtologin').click(function() {
            $('body').toggleClass('show-forgot-box');
         });
        $('#sign-out-btn,#LogoutBtn,#CancelLogout').click(function() {
            $('body').toggleClass('show-logout-box');
        });
        // $('.cm-menu-tile').click(function() {
        //     $('body').toggleClass('show-bottom-tiles');
        // });
        $('.cm-menu-tile').click(function() {
            $('body').toggleClass('show-data-grids');
        });
        $('.add-col-btn').click(function() {
            $(".cm-choice-form-wrapper form").toggleClass('show');
        });

        $(window).scroll(function(){
            if ($(this).scrollTop() > 100){
            $('body').addClass("sticky-header");
            }
            else{
            $('body').removeClass("sticky-header");
            }
        });
       
        var table = $('#data-table-id').DataTable({
            fixedHeader: true,
                ordering: true,
                info:     true,
                fixedColumns: true,
                select: true,
                keys: true ,
                
        });
        new $.fn.dataTable.ColReorder( table, { } );
       
});

