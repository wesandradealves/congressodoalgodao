    </main>
    <footer class="footer mt-auto <?php if(!get_field('newsletter', 'option')['form_id']) : ?> has-no-newsletter <?php endif; ?>">
        <?php 
            if(get_field('newsletter', 'option') &&
            get_field('newsletter', 'option')['form_id']) {
                get_template_part('template_parts/_newsletter'); 
            }
        ?>
        <div class="footer-top">
            <div class="container d-flex flex-wrap align-items-stretch justify-content-between">
                <div class="col-12 col-lg-4 mb-5 mb-lg-0">
                    <?php get_template_part('template_parts/_logo', null, array( 'class' => '')); ?>
                    <p class="d-block mt-3 mb-5">
                        <?php echo get_bloginfo('description'); ?>
                    </p>
                    <p class="d-block">
                        Desenvolvido a mão por <a href="https://904.ag/" target="_blank">Agência 9ZERO4</a> + <a href="#" target="_blank">Tetris</a><br/>    
                        Todos os direitos reservados © Copyright <?php echo date('Y'); ?><br/>
                    </p>                    
                </div>
                <nav  class="navigation flex-fill mb-5 mb-lg-0">
                    <?php 
                        wp_nav_menu( 
                            array( 
                                'theme_location' => 'footer', 
                                'menu_class' => '',   
                                'container' => false,
                            ) 
                        ); 
                    ?>
                </nav>
                <div class="col-12 col-lg-3  mb-5 mb-lg-0">
                    <p class="d-flex align-items-center navigation-title has-image"><img loading="lazy" class="pe-4" src="<?php echo get_template_directory_uri(); ?>/img/map.png" /> Como chegar</p>
                    <p class="d-block">
                        <?php
                            if(get_field('contact', 'option')['address']) {
                                ?>
                                <span class="d-block mb-3">
                                    <?php if(get_field('contact', 'option')['google_maps']) : ?> <a title="<?php echo get_field('contact', 'option')['address']; ?>" target="_blank" href="<?php echo get_field('contact', 'option')['google_maps']; ?>"> <?php endif; ?>
                                        <?php echo get_field('contact', 'option')['address']; ?>
                                    <?php if(get_field('contact', 'option')['google_maps']) : ?> </a> <?php endif; ?>
                                </span>
                                <?php 
                            }  
                            if(get_field('contact', 'option')['phone']) {
                                if (str_contains(get_field('contact', 'option')['phone'], '|')) {
                                    $telefones = explode("|", get_field('contact', 'option')['phone']);
                                    foreach ($telefones as $key => $telefone) {
                                        $raw = trim(explode(")", $telefone)[1]);
                                        ?>
                                        <a class="d-flex align-items-center mb-3 <?php echo str_starts_with($raw, '9') ? 'whatsapp-btn' : ''; ?>" href="<?php echo str_starts_with($raw, '9') ? 'javascript:void(0)' : 'tel:+55'.str_replace([':', '\\', '/', '*', '-', ' ', '+55', '(', ')'], '', $telefone); ?>">
                                            <i class="pe-2 <?php if(str_starts_with($raw, '9')) : ?> fa-brands fa-whatsapp <?php else : ?> fa-solid fa-phone <?php endif; ?>"></i>
                                            <?php echo $telefone; ?>
                                        </a>
                                        <?php 
                                    }
                                } else {
                                    ?>
                                    <a class="d-block mb-3" href="tel:+55<?php echo str_replace([':', '\\', '/', '*', '-', ' ', '+55', '(', ')'], '', get_field('contact', 'option')['phone']); ?>">
                                        <?php echo get_field('contact', 'option')['phone']; ?>
                                    </a>                                 
                                    <?php 
                                }
                            }                             
                            if(get_field('contact', 'option')['contact']) {
                                ?>
                                <a class="d-block mb-3" href="mailto:<?php echo get_field('contact', 'option')['contact']; ?>">
                                    <?php echo get_field('contact', 'option')['contact']; ?>
                                </a>
                                <?php 
                            }                                                        
                        ?>
                    </p>
                </div>
                <div>
                    <p class="d-block navigation-title">Siga-nos</p>
                    <?php get_template_part('template_parts/_socialnetworks', null, array( 'class' => 'd-block')); ?>
                </div>
            </div>
        </div>
    </footer>
    <?php get_template_part('template_parts/_whatsapp'); ?>
    <?php get_template_part('template_parts/_popup', null, array());  ?>
    <div class="spinner d-none">
        <span class="loader"></span>
    </div>
</div>
<?php wp_footer(); ?>
</body>
</html>