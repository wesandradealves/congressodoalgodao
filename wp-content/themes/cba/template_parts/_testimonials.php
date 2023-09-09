<?php if(get_field('testimonials', 'option')) : ?>
    <section class="testimonials"> 
        <div class="container d-flex flex-wrap align-items-stretch">
            <?php if(get_field('testimonials', 'option')['thumbnail']) : ?>
                <div class="col-4 d-none d-lg-block thumbnail <?php if(get_field('testimonials', 'option')['thumbnail']) : ?> pe-lg-5 <?php endif; ?>">
                    <img class="img-fluid d-block col-12" loading="lazy" src="<?php echo get_field('testimonials', 'option')['thumbnail']; ?>" />
                </div>
            <?php endif; ?>
            <div class="carousel-wrapper col-12 <?php if(get_field('testimonials', 'option')['thumbnail']) : ?>col-lg-8 ps-lg-5 pe-lg-5<?php else : ?> col-12 <?php endif; ?>">
                <div class="d-block title">
                    <?php echo preg_replace("/<p.*?>(.*)?<\/p>/im","$1",str_replace(array('<p>', '</p>'), array('', ''), get_field('testimonials', 'option')['title'])); ?>
                </div>
                <?php if( have_rows('testimonials_testimonials', 'option') ): ?>
                    <ul class="testimonials-carousel col-12">
                        <?php $i = 0; while( have_rows('testimonials_testimonials', 'option') ) : 
                            the_row(); ?>
                            <li>
                                <h3 class="title d-block">
                                    <?php echo get_sub_field('title'); ?>
                                    <small class="d-block">
                                        <?php echo get_sub_field('empresa'); ?><br/>
                                        <?php echo get_sub_field('cargo'); ?>
                                    </small>
                                </h3>
                                <p class="text d-block"><?php echo get_sub_field('text'); ?></p>
                            </li>                                
                        <?php endwhile; ?>
                    </ul>
                    <nav class="d-none d-lg-flex slick-nav d-flex align-items-center justify-content-between flex-wrap">
                        <button class="testimonials-prev"><i class="fa-solid fa-angle-left"></i></button>
                        <button class="testimonials-next"><i class="fa-solid fa-angle-right"></i></button>
                    </nav>
                <?php endif; ?>                  
            </div>
        </div>
    </section>
<?php endif; ?>