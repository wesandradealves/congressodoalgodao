<?php /* Template Name: Inscreva-se */ ?>
<?php get_header(); ?>
<?php 
    get_template_part('template_parts/_banner', null, array( 'data' => get_field('banner'))); 
    get_template_part('template_parts/_countdown', null, array( 'class' => '')); 
    
    if(get_field( 'description' ) && (get_field( 'description' )['title'] || get_field( 'description' )['text'])) {
        get_template_part('template_parts/_page-description', null, array( 'class' => '', 'data' => get_field( 'description' ))); 
    }  

    ?>

    <?php if( have_rows('inscricao') ): ?>
        <section class="inscricao m-0">
            <div class="container">
                <div class="section-header d-block mb-5 pb-3"> 
                    <h2 class="title d-block text-center">O que a inscrição inclui?</h2> 
                    <p class="text d-block text-center mt-2">O 14° Congresso Brasileiro do Algodão oferece 3 dias de networking, conhecimento e bons negócios.</p>
                </div>  
                <ul class="d-flex inscricao-list flex-wrap justify-content-center align-items-stretch">
                    <?php while( have_rows('inscricao') ) : 
                        the_row(); ?>
                            <li class=" inscricao-list-item p-2 p-md-4 pt-0 mb-4 col-12 col-sm-6 col-md-4 col-lg-3">
                                <img src="<?php echo get_sub_field('icon'); ?>" class="img-fluid d-block m-auto thumbnail mb-4" loading="lazy" alt="<?php echo get_sub_field('text'); ?>" />
                                <h3 class="title text-center mt-3 mb-3"><?php echo get_sub_field('title'); ?></h3>
                                <p class="text text-center"><?php echo get_sub_field('text'); ?></p>
                            </li>
                    <?php endwhile; ?>  
                </ul>
                <?php 
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
                ?>
            </div>
        </section>
    <?php endif; ?>

    <?php get_template_part('template_parts/_svg', null, array( 'class' => ''));  ?>
    
    <?php 
        if($evento_atual->post_count) {
            while ( $evento_atual->have_posts() ) : 
                $evento_atual->the_post();
                ?>
                <section class="tickets">
                    <div class="container">
                        <div class="section-header d-block mb-5 pb-3"> 
                            <h2 class="title d-block text-center">As inscrições estarão abertas a partir de 1° de abril</h2> 
                            <!-- <p class="text d-block text-center mt-2">As inscrições estarão abertas a partir de 1° de abril</p> -->
                        </div>  
                        <ul class="tickets-table d-block">
                            <li class="thead d-block mb-4">
                                <ul class="d-flex flex-wrap align-items-center">
                                    <li class="title d-none d-lg-block col-2 col-xl-3 text-start"></li>
                                    <li class="lotes flex-fill">
                                        <ul class="lotes-inner d-flex flex-wrap align-items-center col-12 justify-content-start">
                                            <li class="text-center flex-fill  ps-2 pe-2">
                                                <p class="text">1° Lote</p>
                                            </li>
                                            <li class="text-center flex-fill  ps-2 pe-2">
                                                <p class="text">2° Lote</p>
                                            </li>
                                            <li class="text-center flex-fill  ps-2 pe-2">
                                                <p class="text">3° Lote</p>
                                            </li>
                                            <li class="text-center flex-fill  ps-2 pe-2">
                                                <p class="text">4° Lote</p>
                                            </li>                                                                                                                          
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li class="tbody d-block">
                                <ul class="d-block">
                                    <?php 
                                        foreach (get_Field('ingressos') as $key => $ingresso) {
                                            # code...
                                            // var_dump($ingresso);
                                            ?>
                                            <li class="d-block row mb-4">
                                                <ul class="d-flex flex-wrap align-items-center">
                                                    <li class="d-none d-lg-block col-2 col-xl-3 text-start">
                                                        <h3 class="title">
                                                            <?php echo $ingresso['titulo']; ?>
                                                        </h3>
                                                    </li>
                                                    <li class="lotes flex-fill">
                                                        <?php
                                                            if($ingresso['lote']) {
                                                                ?>
                                                                <ul class="lotes-inner d-flex flex-wrap align-items-center justify-content-start col-12">
                                                                    <?php foreach ($ingresso['lote'] as $key => $lote) : ?>
                                                                        <li data-esgotado="<?php echo $lote['esgotado']; ?>" class="text-center flex-fill ps-2 pe-2">
                                                                            <p class="d-block">
                                                                                <small class="d-block d-lg-none text-start text-center mb-2">
                                                                                    <?php echo $lote['titulo']; ?>
                                                                                </small>
                                                                                <a title="<?php echo $lote['valor']; ?>" href="<?php echo $lote['url']; ?>" class="btn primary d-flex align-items-center justify-content-center text-center">
                                                                                    <?php echo $lote['valor']; ?>
                                                                                    <i class="fa-solid d-none d-md-block fa-cart-shopping"></i>
                                                                                </a>
                                                                            </p>
                                                                        </li>
                                                                    <?php endforeach; ?>
                                                                </ul>
                                                                <?php 
                                                            }
                                                        ?>
                                                    </li>
                                                </ul>
                                            </li>
                                            <?php 
                                        }
                                    ?>                                
                                </ul>
                            </li>
                        </ul>       
                        <p class="d-block text mt-5">
                            * Para estudantes universitários, de pós-graduação, mestrado e doutorado.<br/>
                            ** Somente para o primeiro autor de trabalho científico.    
                            <br/><br/>
                            <a href="/politica-de-compras">Clique aqui e saiba mais sobre as categorias de inscrição e políticas de pagamentos e reembolsos</a>                    
                        </p>         
                    </div>
                </section>
                <?php 
            endwhile;
            wp_reset_query();
            wp_reset_postdata();  
        }
    ?>
    
    <?php 
        $query = new WP_Query( array(
            'posts_per_page'   => -1,
            'order' => 'DESC',
            'post_type'     => 'hotel'
        ) );   

        if ($query->have_posts()) {
            ?>
            <section id="hoteis" class="hoteis mt-5 pt-5 mb-0">
                <div class="container">
                    <div class="section-header d-block mb-5 pb-3"> 
                        <h2 class="title d-block text-center">Conheça os hotéis oficiais do 14º CBA</h2> 
                        <p class="text d-block text-center">Escolhidos a dedo pela Abrapa e Elite Corporativo, empresa especializada em viagens
                    empresariais, os hotéis oficiais do 14º CBA<br/>proporcionam total conforto aos
                    participantes, com direito a transfer Hotel / Centro de Convenções / Hotel nos 3
                    dias do evento.</p> 
                    </div>  
                    <ul class="hoteis-list d-flex flex-wrap justify-content-center align-items-stretch">
                        <?php 
                            while ( $query->have_posts() ) {
                                $query->the_post();
                                ?>
                                    <li 
                                        data-vacancy="<?php echo get_field('vagas_disponiveis'); ?>" class="hoteis-list-item col-12 col-md-6 col-lg-4 col-xl-3 overflow-hidden ps-2 pe-2 mb-4">
                                        <div 
                                        class="item-inner d-flex flex-column justify-content-between">
                                            <h3 
                                            data-button="popup" 
                                            data-post_type="<?php echo get_post_type( $post ); ?>" 
                                            data-id="<?php echo $post->ID; ?>"                                             
                                            class="title"><?php echo get_the_title(); ?></h3>
                                            <?php if(get_field('vagas_disponiveis')) : ?>
                                                <p class="text mt-4 d-flex align-items-center justify-content-between">
                                                    Vagas disponíveis <i class="fa-solid fa-check"></i>
                                                </p>                                                
                                            <?php endif; ?>
                                        </div>
                                    </li>
                                <?php 
                            } 
                            wp_reset_query();
                            wp_reset_postdata();   
                        ?>  
                    </ul>                
                </div>
            </section>
            <?php 
        }
    ?>  


    <?php 
        get_template_part('template_parts/_page-description', null, array('data' => array(
            'title' => '<span>Reserve</span><br/>seu Hotel',
            'text' => '
                <p>
                    A <strong>Elite Travel</strong> presta serviços nacionais e internacionais em pacotes de viagens,
                    passagens aéreas, organização de grupos e feiras, hotéis e toda e qualquer
                    consultoria para sua viagem.
                    <br/><br/>
                    Para mais informações para fazer a sua reserva para o 14º CBA e aproveitar as
                    praias de Fortaleza, entre em contato: (65) 98111-2002.               
                </p>
            ',
            'cta' => array(
                array(
                    'url' => '#hoteis',
                    'label' => 'Fazer reserva'
                )
            )
        ), 'class' => ''));     
    ?>
 
    <?php 
        get_template_part('template_parts/_page-description', null, array('data' => array(
            'title' => '<img style="height: auto" loading="lazy" class="d-block img-fluid col-12" src="'.get_template_directory_uri().'/img/foto-arena-cec-fortaleza-cba.jpg" />',
            'text' => '
                <h2 class="title d-block mb-5">Novidades do 14ª CBA</h2>
                <p class="d-block">
                    A 14ª edição terá, dentro do mesmo espaço, a plenária e as salas temáticas. 
                    Vamos adotar o modelo de palestra silenciosa. Você conhece como funciona? <br/><br/> A 
                    área da plenária será em formato arena, dividida em seis hubs, que 
                    corresponderão cada um a uma sala temática. Assim, o participante fica livre 
                    para sentar-se onde desejar e sintonizar seu fone de ouvido na frequência da 
                    palestra escolhida.
                </p>
            '
        ), 'class' => ''));     

        get_template_part('template_parts/_page-description', null, array('data' => array(
            'title' => 'Fortaleza é a cidade sede e o<br/>CEC é a casa do 14° CBA<br/><br/>
            <small>Fortaleza, cidade-sede do primeiro Congresso Brasileiro do Algodão, volta a 
            ser palco na sua 14ª edição. De 1997 aos dias de hoje, muita coisa mudou na 
            história do algodão brasileiro, assim como na chamada “Terra da Luz”, ou na 
            popularmente conhecida “Capital da Alegria”. Ela está mais moderna, com a 
            orla da beira-mar reformada. A cidade oferta gastronomia, manifestações 
            culturais, entretenimento e belezas naturais.<br/><br/>
            O Centro de Eventos do Ceará (CEC), local escolhido para realizar o Congresso, 
            é considerado um dos espaços mais modernos da América Latina e é o 
            segundo maior do Brasil em área útil, com 76 mil m². Sua infraestrutura de 
            qualidade conta com dois grandes pavilhões. O 14° CBA irá ocupar todo o 
            pavilhão oeste do CEC, e sua planta possibilita concentrar a área de exposição, 
            restaurante, plenária e hubs temáticos no mesmo piso, garantindo ainda mais 
            circulação nos estandes nos intervalos da programação científica.</small>',
            'text' => '
                <p>
                    <img style="height: auto" alt="Reprodução Centro de Eventos do Ceará" loading="lazy" class="mt-4 d-block img-fluid col-12" src="'.get_template_directory_uri().'/img/foto-cec-fortaleza-cba.jpg" />
                    <caption class="d-block mb-4 mt-2"><small>Reprodução Centro de Eventos do Ceará</small></caption>
                    <img style="height: auto" alt="Visite Ceará / Jade Queiroz" loading="lazy" class="mt-4 d-block img-fluid col-12" src="'.get_template_directory_uri().'/img/foto-fortaleza-cba.jpg" />
                    <caption class="d-block mb-4 mt-2"><small>Visite Ceará / Jade Queiroz</small></caption>
                </p>
            '
        ), 'class' => 'pt-0'));             
    ?>     

    <?php get_template_part('template_parts/_palestrantes', null, array( 'class' => 'pt-0')); ?>

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

    get_template_part('template_parts/_sponsors', null, array( 'class' => ''));
?>
<?php get_footer(); ?>