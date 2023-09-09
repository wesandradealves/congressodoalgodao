<ul class="accordion <?php echo $args['classes']; ?>">
    <?php foreach ($args['data'] as $item) : ?>
        <li class="accordion-item d-block">
            <h3 class="title d-flex align-items-center justify-content-between">
                <?php echo $item['title']; ?>
                <i class="fa-solid fa-plus"></i>
            </h3>
            <div class="text d-none mt-4">
                <?php echo $item['text']; ?>
            </div>
        </li>
    <?php endforeach; ?>                      
</ul>