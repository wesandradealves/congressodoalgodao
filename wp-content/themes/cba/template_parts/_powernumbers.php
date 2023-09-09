<?php if($args['data'] && count($args['data'])) : ?>
    <section class="data">
        <div class="container m-auto col-md-9 col-lg-8 col-xxl-7  <?php echo $args['class']; ?>">
            <div class="section-header d-block mb-5 pb-3"> 
                <h2 class="title d-block text-center"><span>Números do</span> <?php echo $args['title']; ?></h2> 
            </div>     
            <ul class="d-flex flex-wrap align-items-stretch">
                <?php foreach ($args['data'] as $item) : ?>
                    <li class="col-6 col-md-4 col-lg-3 item">
                        <h3 class="title d-block"><?php echo $item['label']; ?></h3>
                        <p class="text d-block"><?php echo $item['informacao']; ?></p>
                    </li>
                <?php endforeach; ?>
            </ul>
        </div>
    </section>
<?php endif; ?>