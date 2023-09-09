<?php 
    $terms = get_terms([
        'post_type' => 'patrocionador',
        'orderby' => 'term_order',
        'taxonomy' => 'grupo-de-patrocinadores',
        'hide_empty' => false
    ]);    

    if($terms) { 
        ?>
        <section class="sponsors">
            <div class="container <?php echo $args['class']; ?>">
                <div class="section-header d-block mb-5 pb-5"> 
                    <h2 class="title d-block text-center">Quem faz o CBA acontecer?</h2> 
                </div>                
                <div class="d-flex flex-wrap align-items-stretch justify-content-center">
                    <?php 
                        foreach ($terms as $term) {
                            if(get_field('ativo', $term)) {
                                $query = new WP_Query( array(
                                    'post_type' => 'patrocionador',
                                    'posts_per_page' => -1,
                                    'order' => 'ASC',
                                    'orderby' => 'menu_order',
                                    'tax_query' => array(
                                        array (
                                            'taxonomy' => $term->taxonomy,
                                            'field' => 'slug',
                                            'terms' => $term->slug,
                                        )
                                    )
                                ) );
                                if($query->post_count) {
                                    ?>
                                    <div data-count="<?php echo $query->post_count; ?>" class="d-flex sponsors-row flex-wrap flex-column justify-content-between mb-5 <?php echo $query->post_count >= 2 ? 'col-12' : 'col-auto'; ?>">
                                        <h3 class="title d-block text-center <?php echo $query->post_count >= 2 ? 'mb-5' : 'mb-2'; ?>">
                                            <?php 
                                                if (str_contains($term->name, 'Cota')) { 
                                                    echo '<span>Cota</span> '.explode("Cota", $term->name)[1];
                                                } else {
                                                    echo str_replace(' - ',', ',$term->name); 
                                                }
                                            ?>
                                        </h3>
                                        <ul class="d-flex col-12 flex-wrap align-items-center <?php if($query->post_count <= 4) : ?> justify-content-center <?php endif; ?> ps-2 pe-2">
                                            <?php 
                                                while ( $query->have_posts() ) : 
                                                    $query->the_post();
                                                    ?>
                                                    <li class="ps-2 pe-2 pb-4 <?php if($query->post_count > 4) : ?> col-6 col-sm-4 col-xl-3 col-xxl-2 <?php endif; ?>">
                                                        <img class="img-fluid d-block m-auto" loading="lazy" src="<?php echo get_the_post_thumbnail_url(); ?>" alt="<?php echo get_the_title(); ?>" />
                                                    </li>
                                                    <?php 
                                                endwhile;
                                                wp_reset_query();
                                                wp_reset_postdata();                                             
                                            ?> 
                                        </ul>
                                        </div>
                                    <?php 
                                }
                            }
                        }
                    ?>
                </div>
            </div>
        </section>
        <?php 
    }
?>