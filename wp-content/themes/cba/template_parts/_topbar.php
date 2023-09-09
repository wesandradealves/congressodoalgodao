<div class="topbar">
    <div class="container d-flex flex-wrap align-items-center justify-content-between">
        <?php get_template_part('template_parts/_socialnetworks', null, array( 'class' => 'ms-auto m-sm-0')); ?>
        <nav class="navigation d-none d-sm-block">
            <?php 
                wp_nav_menu( 
                    array( 
                        'theme_location' => 'topbar', 
                        'menu_class' => 'd-flex align-items-center flex-wrap justify-content-end',   
                        'container' => false,
                    ) 
                ); 
            ?>
        </nav>
    </div>
</div>