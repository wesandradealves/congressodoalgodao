<?php /* Template Name: Contato */ ?>
<?php get_header(); ?>
<?php get_template_part('template_parts/_page-header', null, array()); ?>
<section id="primary">
    <div class="container">
        <div class="section-header d-block mb-5">
            <h2 class="title d-block">Fale conosco</h2>
            <p class="text d-block mt-2">Mande sua mensagem que responderemos o mais breve possível.</p>
        </div>        
        <?php 
            if(get_field('form_id')) {
                echo do_shortcode('[contact-form-7 id="'.get_field('form_id').'" title="Formulário de contato 1"]');
            }
        ?>
        <?php if( have_rows('contatos') ): ?>
            <ul class="contacts row d-flex flex-wrap flex-column flex-md-row justify-content-between align-items-stretch mt-5 pt-5">
                <?php $i = 0; while( have_rows('contatos') ) : $i++; the_row(); ?>
                    <li class="contacts-item flex-fill mb-5 mb-md-0 text-center text-md-start ps-4 pe-4">
                        <h3 class="title d-block mb-2">
                            <?php echo get_sub_field('title'); ?>
                        </h3>
                        <p class="text d-block">
                            <?php echo preg_replace("/<p.*?>(.*)?<\/p>/im","$1",str_replace(array('<p>', '</p>'), array('', ''), get_sub_field('text'))); ?>
                        </p>
                    </li>                                
                <?php endwhile; ?>
            </ul>
        <?php endif; ?>  
    </div>
</section>
<?php get_footer(); ?>