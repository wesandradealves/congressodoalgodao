<aside class="col-12 col-xl-3 mb-4 mb-xl-0 sidebar blog">
    <a class="d-none close align-items-center justify-content-between" href="javascript:void(0)">Fechar <i class="fa-solid fa-down-left-and-up-right-to-center"></i></a>
    <?php get_search_form(); ?>
    <?php 
        $terms = get_terms([
            'post_type' => 'post',
            // 'orderby' => 'term_order',
            'order' => 'ASC',
            'orderby' => 'menu_order',            
            'exclude'  => array(10, 25),
            'taxonomy' => 'category',
            'hide_empty' => true
        ]);        

        if(count($terms) && $terms) {
            ?>
                <ul class="sidebar-group terms d-none d-xl-block">
                    <li>
                        <p class="title">Categorias</p>
                    </li>
                    <?php 
                        foreach ($terms as $term) {
                            ?>
                            <li>
                                <a class="d-flex align-items-center justify-content-between" href="<?php echo get_term_link($term); ?>"><?php echo $term->name; ?> <i class="fa-solid fa-angle-right"></i></a>
                            </li>
                            <?php 
                        }
                    ?>
                </ul>
            <?php 
        }
    ?>
    <?php 
        $query = new WP_Query( array(
            'post_type' => 'post',
            'posts_per_page' => 3,
            'order' => 'DESC',
            // 'orderby' => 'menu_order',
            // 'tax_query' => array(
            //     array (
            //         'taxonomy' => $term->taxonomy,
            //         'field' => 'slug',
            //         'terms' => $term->slug,
            //     )
            // )
        ) );

        if ($query->have_posts()) :
            ?>
                <ul class="sidebar-group last-posts  d-none d-xl-block">
                    <li class="mb-3">
                        <p class="title">Últimos Posts</p>
                    </li>                    
                    <?php while ( $query->have_posts() ) : $query->the_post(); ?> 
                        <li class="last-posts-item mb-4" onclick="location.href = '<?php echo get_the_permalink(); ?>';">
                            <h3 class="title d-block mb-2"><?php echo get_the_title(); ?></h3>
                            <p class="text d-block">
                                <?php echo get_the_date(); ?>
                            </p>
                        </li>
                    <?php endwhile; ?>  
                </ul>            
            <?php 
        endif;
        wp_reset_query();
        wp_reset_postdata();           
    ?>
</aside>