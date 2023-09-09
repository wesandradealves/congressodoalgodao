<?php if(get_field('countdown', 'option')) : ?>
    <section class="countdown">
        <div class="container d-flex flex-column align-items-center align-items-lg-end justify-content-center flex-lg-row">
            <p class="mb-4 mb-lg-0">Faltam</p>
            <p id="countdown"></p>
        </div>
    </section>
    <script>
        (function($){
            $(window).on("load",function(){
                $("#countdown").countdown("<?php echo get_field('countdown', 'option'); ?>", function(event) {
                    $(this).html(
                        event.strftime(`
                            <div class="d-flex align-items-end">
                                <span>%D</span> 
                                <span>dia(s)</span> 
                                <span>%H</span> 
                                <span>hora(s)</span>
                            </div> 
                            <div class="d-flex align-items-end">
                                <span>%M</span> 
                                <span>min</span> 
                                <span>%S</span> 
                                <span>seg</span>
                            </div>
                        `)
                    );
                });             
            });
        })(jQuery);    
    </script>
<?php endif; ?>