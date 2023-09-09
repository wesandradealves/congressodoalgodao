<?php /* Template Name: Seja um patrocinador */ ?>
<?php get_header(); ?>
<?php get_template_part('template_parts/_page-header', null, array()); ?>

<?php if(get_Field('mapa')) : ?>
<section class="mapa-do-evento">
    <div class="container">
        <div class="section-header d-block mb-5"> 
            <h2 class="title d-block text-center">Mapa do evento</h2> 
        </div>  
        <img src="<?php echo get_field('mapa'); ?>" loading="lazy" class="img-fluid d-block m-auto col-12" alt="Mapa do evento" />  
    </div>
</section>
<?php endif; ?>

<?php 
    get_template_part('template_parts/_page-description', null, array('data' => array(
        'title' => 'Áreas Comerciais do 14º CBA',
        'text' => '
            <p class="text">
                O Centro de Eventos do Ceará é um dos mais modernos e bem equipados centro de convenções na América Latina e o segundo maior do Brasil em área útil, com 76 mil m².
            </p>
        ',
        'cta' => array(
            array(
                'url' => '/contato',
                'label' => 'Quero ser um patrocinador'
            )
        )
    ), 'class' => 'align-items-center')); 
?>

<!--
<section class="expositores pt-0 mb-4">
    <div class="container">
        <?php 
            $terms = get_terms([
                'post_type' => 'patrocionador',
                'orderby' => 'term_order',
                'taxonomy' => 'grupo-de-patrocinadores',
                'exclude'  => array(14, 15, 16, 17, 18),
                'hide_empty' => false
            ]);      

            if($terms) {
                ?>
                <div class="d-flex align-items-stretch flex-wrap justify-content-lg-center expositores-list">
                    <?php 
                        foreach ($terms as $term) {
                            ?>
                            <div class="col-6 col-sm-4 col-md-3 col-lg-auto pe-5 mb-5 <?php echo $query->post_count > 8 ? 'flex-fill' : 'col-md-3' ?> expositores-list-group" data-count="<?php echo $query->post_count; ?>">
                                <h3 class="title text-center d-block" style="color: <?php echo get_field('cor', $term); ?>">
                                    <?php echo str_replace(' - ',', ',$term->name); ?>
                                </h3>
                            </div>
                            <?php 
                        }  
                    ?>
                </div>
                <?php 
            }
        ?>  
    </div>
</section>
-->
<?php 
    if(get_field('ctas', 'option') && count(get_field('ctas', 'option'))) {
        $cta = array_filter(get_field('ctas', 'option'), function($item){
            if (isset($item['id']) && $item['id'] === 'patrocinador') {
                return true;
            }
            return false;
        });

        if($cta) {
            get_template_part('template_parts/_cta', null, array( 'class' => 'mt-0', 'data' => reset($cta))); 
        }
    } 

    if(get_field( 'description' ) && (get_field( 'description' )['title'] || get_field( 'description' )['text'])) {
        get_template_part('template_parts/_page-description', null, array( 'class' => '', 'data' => get_field( 'description' ))); 
    }   
?>

<?php get_template_part('template_parts/_gallery', null, array( 'class' => 'pt-0'));  ?>

<?php
    if($penultimo_evento->post_count) {
        while ( $penultimo_evento->have_posts() ) : 
            $penultimo_evento->the_post();
            get_template_part('template_parts/_powernumbers', null, array( 'class' => 'pt-0 pb-0', 'title' => get_the_title(), 'data' => get_field('numeros'))); 
        endwhile;
        wp_reset_query();
        wp_reset_postdata();  
    }

    get_template_part('template_parts/_page-description', null, array('data' => array(
        'title' => 'Oportunidade como essa, <br/>somente a cada 2 anos',
        'text' => '
            <p class="text">
                A cada ano, o Congresso Brasileiro do Algodão cresce e aprimora. A próxima
                edição acontece num período de celebração, pois a Abrapa - Associação
                Brasileira dos Produtores de Algodão - comemora 25 anos.
                <br/><br/>
                Maior evento da cadeia produtiva da fibra, o 14º CBA será realizado nos dias 3,
                4 e 5 de Setembro de 2024. A cidade escolhida foi Fortaleza, a belíssima
                capital do Ceará.
                <br/><br/>
                Dentre os diferenciais para a escolha da sede, destacam-se a estrutura
                completa e de grandes dimensões do Centro de Eventos do Ceará e a
                excelente rede hoteleira, proporcionando total conforto aos visitantes.
                <br/><br/>
                Os organizadores já estão trabalhando com os produtores e fornecedores
                locais para realizar o melhor e maior CBA de todos os tempos.
            </p>
        ',
        'cta' => array(
            array(
                'url' => '/contato',
                'label' => 'Quero ser um patrocinador'
            )
        )
    ), 'class' => '')); 
?>

<?php get_template_part('template_parts/_svg', null, array( 'class' => ''));  ?>

<?php get_template_part('template_parts/_sponsors', null, array( 'class' => ''));  ?>

<?php 
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