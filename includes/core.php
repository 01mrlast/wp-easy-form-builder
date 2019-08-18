<?php
global $wpdb;
$table_name = $wpdb->prefix . "easy_form_builder";
$results = $wpdb->get_results("select * from '$table_name'");
if($results !== FALSE)
{
}
else
{
//Start Import Sql
    global $wpdb;
    $table_name = $wpdb->prefix . "easy_form_builder";
    $table_name_msg = $wpdb->prefix . "easy_form_builder_msg";
    $charset_collate = $wpdb->get_charset_collate();
    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
// your first query
    $sql = "CREATE TABLE {$table_name} (
`form_ID` int(11) NOT NULL AUTO_INCREMENT,
`form_title` varchar(250) COLLATE utf8mb4_persian_ci NOT NULL,
`form_content` text COLLATE utf8mb4_persian_ci NOT NULL,
`form_input_names` text COLLATE utf8mb4_persian_ci NOT NULL,
`form_lable_name` text COLLATE utf8mb4_persian_ci NOT NULL,
`form_email` varchar(200) COLLATE utf8mb4_persian_ci NOT NULL
, PRIMARY KEY (`form_ID`)) {$charset_collate}";
    dbDelta($sql);
// your first query
    $sql = "CREATE TABLE {$table_name_msg} (
`msg_id` int(11) NOT NULL AUTO_INCREMENT,
`form_title_x` varchar(250) COLLATE utf8mb4_persian_ci NOT NULL,
`content` text COLLATE utf8mb4_persian_ci NOT NULL,
PRIMARY KEY (`msg_id`)) {$charset_collate}";
    dbDelta($sql);
//Finish Import Sql
}
//Start Import Css And JS Files
$Plugin_url = plugins_url('',__FILE__);
$css_url = "$Plugin_url/css/bootstrap.min.css";//change to your filename and path
wp_register_style( 'Bootstrap_Based_Form_Form', $css_url);
wp_enqueue_style('Bootstrap_Based_Form_Form');
function css_loader_admin()
{
    wp_register_style('css_loader_admin', plugins_url('css/form_builder.css', __FILE__));
    wp_enqueue_style('css_loader_admin');
    wp_register_style('css_loader_admin', plugins_url('css/bootstrap.min.css', __FILE__));
    wp_enqueue_style('css_loader_admin');
}
add_action('admin_init', 'css_loader_admin');
wp_register_style('Font_Awesome', 'https://use.fontawesome.com/releases/v5.9.0/css/all.css');
wp_enqueue_style('Font_Awesome');
add_action('admin_enqueue_scripts', 'efb_script');
function efb_script()
{
    wp_enqueue_script('ajax-script', plugins_url('/js/form_builder.js', __FILE__) , array(
        'jquery'
    ));
}
add_action('admin_enqueue_scripts', 'efb_script');
wp_enqueue_script('my-script', plugin_dir_url( __FILE__ ) . 'js/parsing_form.js');
wp_localize_script('my-script', 'myScript', array(
    'pluginsUrl' => plugins_url(),
));
wp_register_script('jQuery', 'https://code.jquery.com/jquery-3.2.1.min.js', null, null, true);
wp_enqueue_script('jQuery');
wp_register_script('popper', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', null, null, true);
wp_enqueue_script('popper');
wp_register_script('bootstrap', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js', null, null, true);
wp_enqueue_script('bootstrap');
wp_register_script('min', 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js', null, null, true);
wp_enqueue_script('min');
