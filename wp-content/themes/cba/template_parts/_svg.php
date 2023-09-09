<?php if(get_field('svg')) : 
  $file = get_field('svg_svg'); 
  $file_mobile = get_field('svg_svg_mobile'); 
?>
  <section style="height: <?php echo $file['height']; ?>px; background: url(<?php echo $file['url']; ?>) center bottom / cover repeat-x;" class="svg d-none d-lg-block"></section>
  <section style="height: <?php echo $file_mobile['height']; ?>px; background: url(<?php echo $file_mobile['url']; ?>) center bottom / cover repeat-x;" class="svg d-block d-lg-none"></section>
<?php endif; ?>