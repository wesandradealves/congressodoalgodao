<section id="<?php echo $args['data']['id']; ?>" class="cta" data-layout="<?php echo $args['data']['layout']; ?>" data-style="<?php echo $args['data']['style']; ?>">
    <div class="<?php echo $args['data']['layout']; ?> <?php echo $args['class']; ?> <?php echo $args['data']['style']; ?>" style="<?php if($args['data']['background']) : ?> background-image: url(<?php echo $args['data']['background']; ?>); <?php endif; ?> <?php if($args['data']['background_color']) : ?> background-color:<?php echo $args['data']['background_color']; ?>; <?php endif; ?> color: <?php echo $args['data']['text_color']; ?>; ">
        <div class="container p-0 m-auto">         
            <div class="d-flex flex-wrap align-items-center flex-column flex-xl-row m-auto">
                <div class="col-12 col-xl-8 text-center text-xl-start">
                    <h2 class="title d-block" style="color: <?php echo $args['data']['text_color']; ?>"><?php echo preg_replace("/<p.*?>(.*)?<\/p>/im","$1",str_replace(array('<p>', '</p>'), array('', ''), $args['data']['title'])); ?></h2>
                    <div class="text d-block mt-2" style="color: <?php echo $args['data']['text_color']; ?>; font-size: <?php echo $args['data']['font_size']; ?>;">
                        <?php echo $args['data']['text']; ?>
                    </div>
                </div>
                <?php if($args['data']['cta']) : ?>
                    <div class="flex-fill d-flex flex-column justify-content-center align-items-center ps-xl-5 mt-5 mt-xl-0">
                        <a 
                        onMouseOver="this.style.color='<?php echo $args['data']['cta']['hover']['text_color']; ?>'; this.style.backgroundColor='<?php echo $args['data']['cta']['hover']['background_color']; ?>'"
                        onMouseOut="this.style.color='<?php echo $args['data']['cta']['text_color']; ?>'; this.style.backgroundColor='<?php echo $args['data']['cta']['background_color']; ?>'"
                        style="background-color: <?php echo $args['data']['cta']['background_color']; ?>; border-width: 2px; border-style: solid; border-color: <?php echo $args['data']['cta']['background_color']; ?>; color: <?php echo $args['data']['cta']['text_color']; ?>" href="<?php echo $args['data']['cta']['url']; ?>" class="btn"><?php echo $args['data']['cta']['label']; ?></a>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
</section>
