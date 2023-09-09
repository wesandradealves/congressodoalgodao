<?php 
    global $template;
    $paged = get_query_var('paged');
    $paged = ($paged) ? $paged : 1;    
    $template = str_replace('.php', '', basename($template));
    $q = $template === 'blog' ? $args['query'] : $wp_query;
    $total_pages = $q->max_num_pages;

    if ($total_pages > 1) {
        $current_page = max(1, get_query_var('paged')); 
        ?>
        <ul class="d-flex align-items-center justify-content-center pagination col-12 col-md-8 m-auto mt-5 pt-5">
            <?php 
                if($template === 'blog') {
                    echo paginate_links(array(
                        'base' => get_pagenum_link(1).
                        '%_%',
                        'current' => $current_page,
                        'total' => $total_pages,
                        'prev_text' => __('<i class="fa fa-angle-left" aria-hidden="true"></i>
                        '),
                        'next_text' => __('<i class="fa fa-angle-right" aria-hidden="true"></i>
                        '),
                    ));   
                } else {
                    echo paginate_links(array(
                        'base' => preg_replace('/\?.*/', '', get_pagenum_link(1)) . '%_%',
                        'current' => max(1, get_query_var('paged')),
                        'format' => 'page/%#%',
                        'total' => $q->max_num_pages,
                        'add_args' => array(
                            's' => get_query_var('s'),
                            'post_type' => get_query_var('post_type'),
                        ),
                        'prev_text' => __('<i class="fa fa-angle-left" aria-hidden="true"></i>
                        '),
                        'next_text' => __('<i class="fa fa-angle-right" aria-hidden="true"></i>
                        '),
                    ));   
                }
            ?>
        </ul>
        <?php 
    }