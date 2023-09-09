<?php /* Template Name: Área Científica */ ?>
<?php get_header(); ?>
<?php 
    get_template_part('template_parts/_page-header', null, array()); 

    if(get_field( 'description' ) && (get_field( 'description' )['title'] || get_field( 'description' )['text'])) {
        get_template_part('template_parts/_page-description', null, array( 'class' => '', 'data' => get_field( 'description' ))); 
    }   
    ?>

    <?php if( have_rows('areas_de_conhecimento') ): ?>
        <section class="areas-de-conhecimento">
            <div class="container">
                <div class="section-header d-block mb-5 pb-3"> 
                    <h2 class="title d-block text-center">Áreas de conhecimento</h2> 
                </div>  
                <ul class="d-flex flex-wrap justify-content-center align-items-stretch">
                    <?php while( have_rows('areas_de_conhecimento') ) : 
                        the_row(); ?>
                            <li class="p-2 p-md-4 pt-0 mb-4 col-6 col-md-4 col-lg-3">
                                <img src="<?php echo get_sub_field('icon'); ?>" class="img-fluid d-block m-auto thumbnail mb-4" loading="lazy" alt="<?php echo get_sub_field('text'); ?>" />
                                <p class="text text-center"><?php echo get_sub_field('text'); ?></p>
                            </li>
                    <?php endwhile; ?>  
                </ul>
            </div>
        </section>
    <?php endif; ?>

    <?php 
        if(get_field('ctas', 'option') && count(get_field('ctas', 'option'))) {
            $cta = array_filter(get_field('ctas', 'option'), function($item){
                if (isset($item['id']) && $item['id'] === 'area-de-conhecimento') {
                    return true;
                }
                return false;
            });

            if($cta) {
                get_template_part('template_parts/_cta', null, array( 'class' => 'mt-0', 'data' => reset($cta))); 
            }
        }   
    ?>

    <?php if( have_rows('prazos') ): ?>
        <section class="prazos mt-5 pt-5">
            <div class="container">
                <div class="section-header d-block mb-5 pb-3"> 
                    <h2 class="title d-block text-center">PRAZOS PARA SUBMISSÃO DOS TRABALHOS CIENTÍFICOS</h2> 
                </div>  
                <div class="table-wrapper overflow-auto">
                    <div class="table">
                        <ul class="d-flex flex-wrap thead align-items-stretch">
                            <li class="col-4 label td">
                                <p class="title">Etapa</p>
                            </li>
                            <li class="flex-fill">
                                <ul class="d-flex flex-wrap align-items-stretch col-12 cols h-100">
                                    <li style="width: calc(100%/5);" class="d-flex align-items-center justify-content-center text-center td">ABRIL</li>
                                    <li style="width: calc(100%/5);" class="d-flex align-items-center justify-content-center text-center td">MAIO</li>
                                    <li style="width: calc(100%/5);" class="d-flex align-items-center justify-content-center text-center td">JUNHO</li>
                                    <li style="width: calc(100%/5);" class="d-flex align-items-center justify-content-center text-center td">JULHO</li>
                                    <li style="width: calc(100%/5);" class="d-flex align-items-center justify-content-center text-center td">AGOSTO</li>
                                </ul>
                            </li>
                        </ul>
                        <ul class="tbody">
                            <?php 
                            while( have_rows('prazos') ) : $i++; 
                            the_row(); ?>
                                <li class="d-block th">
                                    <ul class="d-flex flex-wrap align-items-stretch">
                                        <li class="col-4 label td">
                                            <p class="title"><?php echo get_sub_field('etapa'); ?></p>
                                        </li>                            
                                        <li class="flex-fill d-flex align-items-center">
                                            <p class="h-100 d-flex justify-content-center align-items-center td" style="width: <?php echo "calc(20% * ".count(get_sub_field('meses')).")"; ?>;">
                                                <span><?php echo get_sub_field('descricao'); ?></span>
                                            </p>     
                                        </li>
                                    </ul>
                                </li>
                            <?php endwhile; ?>
                        </ul>  
                    </div>
                </div>

                <p class="d-block mt-4 table-tip">*com ao menos 1 (um) trabalho selecionado</p>    
            </div>
        </section>
    <?php endif; ?>      

    <?php if( have_rows('downloads') ): ?>
        <section class="downloads">
            <div class="container">
                <div class="section-header d-block mb-5 pb-3"> 
                    <h2 class="title d-block text-center">Livros de Resumos</h2> 
                    <!--
                        <p class="text d-block mt-2 text-center">Failure will never overtake me if my determination to  succeed is strong enough. </p>
                    -->
                </div>  
                <ul class="d-flex flex-wrap align-items-center justify-content-center    downloads-list">
                    <?php $i = 0; 
                    while( have_rows('downloads') ) : $i++; 
                    the_row(); ?>
                        <?php if($i <= 4) : ?>
                            <li class="downloads-list-item col-12 col-md-6 col-xl-3 ps-2 pe-2 mb-5 text-center">
                                <h3 class="d-block title mb-4"><?php echo get_sub_field('titulo'); ?></h3>
                                <a class="btn primary" download title="<?php echo get_sub_field('file')['filename']; ?>" href="<?php echo get_sub_field('file')['url']; ?>">
                                    <?php echo 'Download ('.size_format(get_sub_field('file')['filesize']).')'; ?>
                                </a>                            
                            </li>      
                        <?php endif; ?>                          
                    <?php endwhile; ?>
                </ul>                
            </div>
        </section>
    <?php endif; ?>      

    <?php if( have_rows('autores_de_trabalhos_premiados') ): ?>
        <section class="autores-de-trabalhos-premiados">
            <div class="container">
                <div class="section-header d-block mb-5 pb-3"> 
                    <h2 class="title d-block text-center">Autores de trabalhos<br/>premiados – 13º CBA</h2> 
                    <!--
                        <p class="text d-block mt-2 text-center">Failure will never overtake me if my determination to  succeed is strong enough. </p>
                    -->
                </div>  
                <?php get_template_part('template_parts/_accordion', null, array( 'class' => '', 'data' => get_field('autores_de_trabalhos_premiados'))); ?>
            </div>
        </section>
    <?php endif; ?>

    <?php get_template_part('template_parts/_sponsors', null, array( 'class' => '')); ?>
<?php get_footer(); ?>