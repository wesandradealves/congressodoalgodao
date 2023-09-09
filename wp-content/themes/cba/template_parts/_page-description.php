<section class="page-description">
    <div class="container d-flex flex-wrap <?php echo $args['class']; ?>">
        <div class="col-12 col-md-5 col-xl-5">
            <h2 class="title">
                <?php echo preg_replace("/<p.*?>(.*)?<\/p>/im","$1",str_replace(array('<p>', '</p>','<h2>', '</h2>'), array('', ''), $args['data']['title'])); ?>
            </h2>
            <?php if($args['data']['cta'] && count($args['data']['cta'])) : ?>
                <?php foreach ($args['data']['cta'] as $cta) : ?>
                    <a href="<?php echo $cta['url']; ?>" class="btn primary d-block mt-4"><?php echo $cta['label']; ?></a>
                <?php endforeach; ?>
            <?php endif; ?>
        </div>
        <?php if($args['data']['text']) : ?>
            <div class="flex-fill text mt-5 mt-md-0 text">
                <?php echo $args['data']['text']; ?>
            </div>
        <?php endif; ?>
    </div>
</section>