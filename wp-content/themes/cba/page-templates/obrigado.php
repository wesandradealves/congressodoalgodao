<?php /* Template Name: Obrigado */ ?>
<?php get_header(); ?>
<?php get_template_part('template_parts/_page-header', null, array());  ?>
<section id="primary" class="pt-5 mt-4 pb-5 mb-5">
    <div class="container d-flex align-items-stretch">
        <div class="content flex-fill">
            <div class="content-inner d-block">
                <?php 
                    echo get_field('obrigado_body', 'option');
                ?>
                <div class="mt-5 d-flex align-items-center justify-content-center">
                    <a href="<?php echo home_url(  ); ?>" class="btn primary d-inline-block m-auto">VOLTAR A PÁGINA INICIAL</a>
                </div>
            </div>
        </div>     
    </div>
</section>
<?php get_footer(); ?>