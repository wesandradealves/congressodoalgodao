<section class="banner">
    <?php 
        foreach ($args['data'] as $key => $item) {
            ?>
            <div>
                <picture onclick="location.href = '<?php echo $titem['url']; ?>';">
                    <source srcset="<?php echo $item['image']; ?>" media="(min-width: 568px)" >
                    <img class="img-fluid d-block" loading="lazy" src="<?php echo $item['imagem_mobile']; ?>" />
                </picture>                   
            </div>
            <?php 
        }
    ?>
</section>
