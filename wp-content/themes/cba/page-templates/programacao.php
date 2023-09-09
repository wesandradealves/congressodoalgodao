<?php /* Template Name: Programação */ ?>
<?php get_header();  ?>
<?php get_template_part('template_parts/_page-header', null, array()); ?>

<?php if($evento_atual->post_count) : ?>
<section class="programacao mt-5">
    <div class="container pt-5">

        <div class="section-header d-block mb-5 programacao-geral">
            <h2 class="title d-block text-center">Programação Geral</h2>
        </div>
        
        <div class="d-flex overflow-auto flex-lg-wrap">
            <?php
                while ( $evento_atual->have_posts() ) : 
                    $evento_atual->the_post();
                    if( have_rows('programacao_geral') ) {
                        while( have_rows('programacao_geral') ) :
                            the_row();
                            $i++;
                            $theme = get_sub_field('cor');
                    ?>
                    <ul class="col-7 col-lg-4 me-4 me-lg-0 ps-lg-2 pe-lg-2">
                        <li class="d-block categories-row">
                            <h3 class="d-block title text-center mb-4"><?php echo get_sub_field('dia'); ?></h3>
                            <?php 
                                if(get_sub_field('programacao') && count(get_sub_field('programacao'))) : ?>
                                    <ul class="d-block categories-items">
                                        <?php foreach (get_sub_field('programacao') as $item) : ?>
                                            <li class="d-block mb-4 categories-items-item">
                                                <div class="item-inner d-flex align-items-stretch flex-wrap flex-column flex-lg-row" style="background-color: <?php echo $theme ?>;">
                                                    <p class="d-flex flex-column justify-content-center text"><?php echo $item['horario_inicial']; ?></p>
                                                    <h3 class="d-flex flex-column justify-content-center title flex-fill"><?php echo $item['titulo']; ?></h3>
                                                </div>
                                            </li>
                                        <?php endforeach; ?>
                                    </ul>
                                    <?php 
                                endif;
                            ?>
                        </li>
                    </ul>
                    <?php 
                        endwhile;
                    } else {
                        ?>
                        <style>
                            .programacao-geral,
                            .programacao-geral + * {
                                display: none !important;
                            }
                        </style>
                        <?php 
                    }
                endwhile;
                wp_reset_query();
                wp_reset_postdata(); 
            ?>
        </div>


        <?php
            while ( $evento_atual->have_posts() ) : 
                $evento_atual->the_post();
                ?>
                    <div class="section-header d-block mb-5 mt-5 programacao-diaria">
                        <h2 class="title d-block text-center">Programação Diária</h2>
                        <p class="d-block text text-center col-md-6 m-auto mt-2">A agenda diária do CBA proporciona ao congressista importantes conexões com as mais atualizadas informações  do setor algodoeiro.  </p>
                    </div>
                    <?php 
                        if( have_rows('programacao') ) {
                            ?>
                            <div class="d-block">
                                <ul class="tab d-flex row align-items-stretch flex-wrap">
                                    <?php 
                                        while( have_rows('programacao') ) {
                                            the_row();
                                            $i++;
                                            $theme = get_sub_field('cor');
                                            ?>
                                            <li class="flex-fill tab-item <?php echo $i===1 ? 'active' : ''; ?>" data-tax="<?php echo get_sub_field('dia'); ?>">
                                                <div class="item-inner" data-tax="<?php echo get_sub_field('dia'); ?>">
                                                    <h3 data-tax="<?php echo get_sub_field('dia'); ?>" class="title text-center"><?php echo get_sub_field('dia'); ?></h3>
                                                </div>
                                            </li>                                    
                                            <?php 
                                        }
                                    ?>
                                </ul>
                            </div>
                            <div class="tab-content d-block pt-5 pb-5">
                                <?php
                                    while( have_rows('programacao') ) {
                                        the_row();
                                        $i++;
                                        $theme = get_sub_field('cor');
                                        ?>
                                        <div class="<?php echo $i===1 ? 'd-block' : 'd-none'; ?> tab-content-row" data-tax="<?php echo get_sub_field('dia'); ?>">
                                            <?php 
                                                if(get_sub_field('programacao') && count(get_sub_field('programacao'))) {
                                                    ?>
                                                    <div class="tabs-carousel">
                                                        <?php 
                                                            foreach (get_sub_field('programacao') as $item) {
                                                                ?>
                                                                <div class="carousel-item">
                                                                    <div class="item-inner d-flex flex-column justify-content-between" style="background-color: <?php echo $theme ?>;">
                                                                        <h3
                                                                        style="cursor: pointer" 
                                                                        data-title="<?php echo $item['titulo']; ?>"
                                                                        data-button="popup" 
                                                                        data-post_type="<?php echo get_post_type( $post ); ?>" 
                                                                        data-id="<?php echo $post->ID; ?>" 
                                                                        class="d-block title"><?php echo $item['titulo']; ?></h3>
                                                                        <div class="mt-auto">
                                                                            <?php if($item['horario_inicial'] || $item['horario_final']) : ?>
                                                                                <p class="text d-flex align-items-center">
                                                                                    <i class="fa-regular fa-clock"></i>
                                                                                    <span class="ps-2 flex-fill">
                                                                                        <?php echo $item['horario_final'] ? 'Das' : ''; ?> <?php echo $item['horario_inicial']; ?> <?php echo $item['horario_final'] ? 'às '.$item['horario_final'] : ''; ?>
                                                                                    </span>
                                                                                </p>
                                                                            <?php endif; ?>
                                                                            <?php if($item['sala']) : ?>
                                                                                <p class="text d-flex align-items-center">
                                                                                    <i class="fa-solid fa-door-closed"></i>
                                                                                    <span class="ps-2 flex-fill">
                                                                                        <?php echo $item['sala']; ?>
                                                                                    </span>
                                                                                </p>       
                                                                            <?php endif; ?>
                                                                            <?php if($item['palestrantes']) : ?>
                                                                                <p class="text d-flex align-items-center">
                                                                                    <i class="fa-solid fa-user"></i>
                                                                                    <span 
                                                                                    style="cursor: pointer"
                                                                                    data-button="popup" 
                                                                                    data-post_type="<?php echo get_post_type( $item['palestrantes'] ); ?>" 
                                                                                    data-id="<?php echo $item['palestrantes']; ?>" 
                                                                                    class="ps-2 flex-fill">
                                                                                        <?php
                                                                                            echo get_post($item['palestrantes'])->post_title;
                                                                                        ?>
                                                                                    </span>
                                                                                </p>  
                                                                            <?php endif; ?>
                                                                
                                                                            <div class="d-flex align-items-end justify-content-between">
                                                                                <?php if($item['tags']) : ?>
                                                                                    <ul class="d-flex align-items-center mt-4">
                                                                                        <?php
                                                                                            foreach ($item['tags'] as $key => $tag) {
                                                                                                ?>
                                                                                                    <li class="me-2">
                                                                                                        <span class="btn primary pt-1 pb-1" style="color: white; border-color: <?php echo $tag['cor']; ?>; background-color: <?php echo $tag['cor']; ?>;"><?php echo $tag['titulo']; ?></span>
                                                                                                    </li>
                                                                                                <?php 
                                                                                            }
                                                                                        ?>
                                                                                    </ul>

                                                                                <?php endif; ?>                                                                        
                                                                            </div>                                                  
                                                                        </div>
                                                                                                                
                                                                    </div>
                                                                </div>
                                                                <?php 
                                                            }
                                                        ?>
                                                    </diV>
                                                    <?php 
                                                }                                        
                                            ?>
                                        </div>                      
                                        <?php 
                                    }
                                ?>   
                            </div>                              
                            <?php 
                        } else {
                            ?>
                            <div class="content">
                                <div class="content-inner">
                                    <div class="text d-block mt-5 text-center">
                                        <p><strong>Em breve</strong> nossa programação diária.</p>
                                    </div>
                                </div>
                            </div>
                            <?php 
                        }
                    ?>
            </div>
            <?php 
            endwhile;
            wp_reset_query();
            wp_reset_postdata();  
        ?>
</section> 
<?php endif; ?>
<?php 
    get_template_part('template_parts/_palestrantes', null, array( 'class' => '', 'post_type' => 'palestrante')); 

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