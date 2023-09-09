<section class="page-header">
    <div class="container">
    <?php get_template_part('template_parts/_breadcrumbs', null, array()); ?>
        
        <<?php echo is_single() ? 'h2' : 'h1'; ?> class="title mt-2">
            <?php 
                if(is_search()) {
                    if(get_queried_object()) {
                        echo get_queried_object()->name;
                    } else {
                        echo 'Busca';
                    }
                } elseif(is_archive()) {
                    if(get_field('page_header_'.get_queried_object()->name, 'option') && get_field('page_header_'.get_queried_object()->name, 'option')['title']) {
                        echo get_field('page_header_'.get_queried_object()->name, 'option')['title'];
                    } else {
                        echo get_queried_object()->name;
                    }
                } elseif(is_404()) {
                    echo 'Página não encontrada';
                } else {
                    if(get_field('page_header') && get_field('page_header')['title']) {
                        echo get_field('page_header')['title'];
                    } else {
                        echo get_the_title();
                    }
                }
            ?>
        </<?php echo is_single() ? 'h2' : 'h1'; ?>>

        <?php if(get_field('page_header')['cta'] && count(get_field('page_header')['cta'])) : ?>
            <ul class="d-flex align-items-center mt-4">
                <?php 
                    foreach (get_field('page_header')['cta'] as $key => $cta) {
                        ?>
                        <li class="me-4 mb-4 mb-md-0">
                            <a href="<?php echo $cta['url']; ?>" class="btn primary"><?php echo $cta['label']; ?></a>
                        </li>
                        <?php 
                    }    
                ?>
            </ul>
        <?php endif; ?>
    </div>
</section>