<?php 

$post = get_post($args['post']);
$post_type = get_post_type($post);

?>

<div class="popup d-none">
    <div class="popup-inner">
        <a href="javascript:void(0)" class="popup-close"><i class="fa-solid fa-xmark"></i></a>
        <div class="popup-content">

        </div>
    </div>
</div>