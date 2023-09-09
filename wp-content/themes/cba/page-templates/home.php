<?php /* Template Name: Home */ ?>
<?php get_header(); ?>
    <?php 
        get_template_part('template_parts/_banner', null, array( 'data' => get_field('banner'))); 
        get_template_part('template_parts/_countdown', null, array( 'class' => '')); 
        get_template_part('template_parts/_page-description', null, array( 'class' => '', 'data' => get_field('description'))); 
        get_template_part('template_parts/_svg', null, array( 'class' => '')); 
        
        if($penultimo_evento->post_count) {
            while ( $penultimo_evento->have_posts() ) : 
                $penultimo_evento->the_post();
                get_template_part('template_parts/_powernumbers', null, array( 'class' => '', 'title' => get_the_title(), 'data' => get_field('numeros'))); 
            endwhile;
            wp_reset_query();
            wp_reset_postdata();  
        }

        get_template_part('template_parts/_palestrantes', null, array( 'class' => '')); 
        
        if(get_field('ctas', 'option') && count(get_field('ctas', 'option'))) {
            $cta = array_filter(get_field('ctas', 'option'), function($item){
                if (isset($item['id']) && $item['id'] === 'inscreva') {
                    return true;
                }
                return false;
            });

            if($cta) {
                get_template_part('template_parts/_cta', null, array( 'class' => 'primary mt-0', 'data' => reset($cta))); 
            }
        }

        get_template_part('template_parts/_gallery', null, array( 'class' => '')); 

        get_template_part('template_parts/_page-description', null, array('data' => array(
            'title' => 'Destaque a sua marca<br/>Seja patrocinador do CBA ',
            'text' => '
                <p>O Congresso Brasileiro do Algodão é o principal ponto de encontro da cadeia produtiva do algodão. A cada dois anos, os mais influentes formadores de opinião, produtores e tomadores de decisão marcam presença no CBA, em busca de conhecimento, networking e oportunidades.
                <br/><br/>
                Venha fazer novas conexões, fortalecer parcerias e fechar bons negócios, seja um patrocinador.</p> 
            ',
            'cta' => array(
                array(
                    'url' => '/patrocine',
                    'label' => 'Saiba mais'
                )
            )
        ), 'class' => '')); 

    ?>

    <?php 

        get_template_part('template_parts/_testimonials', null, array( 'class' => '')); 

        get_template_part('template_parts/_events', null, array( 'class' => '')); 

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
        
        get_template_part('template_parts/_sponsors', null, array( 'class' => '')); 
    ?>
<?php get_footer(); ?>