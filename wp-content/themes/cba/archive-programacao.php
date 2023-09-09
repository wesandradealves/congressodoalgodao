<?php get_header(); ?>
<?php get_template_part('template_parts/_page-header', null, array()); ?>

<!--<section class="programacao">
    <div class="container">
        <div class="section-header d-block mb-5">
            <h2 class="title d-block text-center">Programação Geral</h2>
        </div>
        <div class="row d-flex align-items-stretch flex-wrap categories flex-column flex-lg-row">
            <?php
                $terms = get_terms([
                    'post_type' => 'programacao',
                    'orderby' => 'term_order',
                    'taxonomy' => 'date',
                    'hide_empty' => false
                ]);    

                foreach ($terms as $term) {
                    $color = get_field('color', $term);
                    ?>
                    <ul class="flex-fill">
                        <li class="d-block categories-row">
                            <h3 class="d-block title text-center mb-4"><?php echo $term->name; ?></h3>
                            <?php 
                                $query = new WP_Query( array(
                                    'post_type' => 'programacao',
                                    'posts_per_page' => -1,
                                    'order' => 'ASC',
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
                                    <ul class="d-block categories-items">
                                        <?php 
                                            while ( $query->have_posts() ) : 
                                                $query->the_post();
                                                ?>
                                                <li class="d-block mb-4 categories-items-item">
                                                    <div class="item-inner d-flex align-items-stretch flex-wrap flex-column flex-lg-row" style="background-color: <?php echo $color ?>;">
                                                        <p class="d-flex flex-column justify-content-center text"><?php echo get_field('horario'); ?></p>
                                                        <h3 class="d-flex flex-column justify-content-center title flex-fill"><?php echo get_the_title(); ?></h3>
                                                    </div>
                                                </li>
                                                <?php 
                                            endwhile;
                                            wp_reset_query();
                                            wp_reset_postdata();  
                                        ?>
                                    </ul>
                                    <?php 
                                }
                            ?>
                        </li>
                    </ul>
                    <?php 
                }
            ?>
        </div>
        <div class="section-header d-block mb-5 mt-5">
            <h2 class="title d-block text-center">Programação Diária</h2>
        </div>
        <div class="d-block">
            <ul class="tab d-flex row align-items-stretch flex-wrap">
                <?php
                    $i = 0;
                    foreach ($terms as $term) {
                        $i++;
                        $color = get_field('color', $term);
                        ?>
                            <li class="flex-fill tab-item <?php echo $i===1 ? 'active' : ''; ?>" data-tax="<?php echo $term->term_id; ?>">
                                <div class="item-inner" data-tax="<?php echo $term->term_id; ?>">
                                    <h3 data-tax="<?php echo $term->term_id; ?>" class="title text-center"><?php echo $term->name; ?></h3>
                                </div>
                            </li>
                        <?php 
                    }
                ?>
            </ul>
        </div>        
    </div>
    <div class="tab-content d-block pt-5 pb-5">
        <?php
            $i = 0;
            foreach ($terms as $term) {
                $i++;
                $color = get_field('color', $term);
                ?>
                <div class="<?php echo $i===1 ? 'd-block' : 'd-none'; ?> tab-content-row" data-tax="<?php echo $term->term_id; ?>">
                    <?php 
                        $query = new WP_Query( array(
                            'post_type' => 'programacao',
                            'posts_per_page' => -1,
                            'order' => 'ASC',
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
                            <div class="tabs-carousel">
                                <?php 
                                    while ( $query->have_posts() ) : 
                                        $query->the_post();
                                        ?>
                                        <div class="carousel-item">
                                            <div class="item-inner d-flex flex-column justify-content-between" style="background-color: <?php echo $color ?>;">
                                                <h3 class="d-block title"><?php echo get_the_title(); ?></h3>
                                                <div class="mt-auto">
                                                    <?php if(get_field('horario') || get_field('horario_final')) : ?>
                                                        <p class="text d-flex align-items-center">
                                                            <i class="fa-regular fa-clock"></i>
                                                            <span class="ps-2 flex-fill">
                                                                <?php echo get_field('horario_final') ? 'Das' : ''; ?> <?php echo get_field('horario'); ?> <?php echo get_field('horario_final') ? 'às '.get_field('horario_final') : ''; ?>
                                                            </span>
                                                        </p>
                                                    <?php endif; ?>
                                                    <?php if(get_field('sala')) : ?>
                                                        <p class="text d-flex align-items-center">
                                                            <i class="fa-solid fa-door-closed"></i>
                                                            <span class="ps-2 flex-fill">
                                                                <?php echo get_field('sala'); ?>
                                                            </span>
                                                        </p>       
                                                    <?php endif; ?>
                                                    <?php if(get_field('palestrantes')) : ?>
                                                        <p class="text d-flex align-items-center">
                                                            <i class="fa-solid fa-user"></i>
                                                            <span class="ps-2 flex-fill">
                                                                <?php
                                                                    $palestrantes = [];

                                                                    foreach (get_field('palestrantes') as $key => $palestrante) {
                                                                        array_push($palestrantes, $palestrante->post_title);
                                                                    }

                                                                    print join(',', $palestrantes);
                                                                ?>
                                                            </span>
                                                        </p>  
                                                    <?php endif; ?>
                                                    <?php if(get_field('url')) : ?>
                                                        <div class="d-flex align-items-end justify-content-between">
                                                            <a href="<?php echo get_field('url'); ?>" class="btn primary mt-4">Palestra</a>
                                                            <img loading="lazy" src="<?php echo get_template_directory_uri(); ?>/img/arrow.png" />
                                                        </div>
                                                    <?php endif; ?>                                                    
                                                </div>
                                                                                          
                                            </div>
                                        </div>
                                        <?php 
                                    endwhile;
                                    wp_reset_query();
                                    wp_reset_postdata();  
                                ?>
                            </div>
                            <?php 
                        }
                    ?>
                </div>
                <?php 
            }
        ?>    
    </div>
</section>-->

<?php 
    // get_template_part('template_parts/_staff', null, array( 'class' => '', 'slug' => 'palestrantes')); 

    if(get_field('ctas', 'option') && count(get_field('ctas', 'option'))) {
        $cta = array_filter(get_field('ctas', 'option'), function($item){
            if (isset($item['id']) && $item['id'] === 'inscreva') {
                return true;
            }
            return false;
        });

        if($cta) {
            get_template_part('template_parts/_cta', null, array( 'class' => '', 'data' => $cta[0])); 
        }
    }

    get_template_part('template_parts/_sponsors', null, array( 'class' => '')); 

    if(get_field('ctas', 'option') && count(get_field('ctas', 'option'))) {
        $cta = array_filter(get_field('ctas', 'option'), function($item){
            if (isset($item['id']) && $item['id'] === 'ajuda') {
                return true;
            }
            return false;
        });

        if($cta) {
            get_template_part('template_parts/_cta', null, array( 'class' => 'mt-0', 'data' => reset($cta))); 
        }
    }     
?>
<?php get_footer(); ?>