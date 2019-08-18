<?php

$msg_add=false;


//Panel Option
function theme_options_panel()
{
    add_menu_page('Drag & Drop Bootstrap Form Builder', 'Easy Form Builder', 'manage_options', 'plugin-options', 'pluign_func', plugins_url('includes/img/icon.png', __FILE__));
    add_submenu_page('plugin-options', 'Show All Forms', 'Show All Forms', 'manage_options', 'plugin-op-show-all-form', 'show_all_func');
    add_submenu_page('plugin-options', 'Show Messages', 'Show Messages', 'manage_options', 'plugin-show-msg', 'show_msg');
}
add_action('admin_menu', 'theme_options_panel');


require "includes/core.php";
require "includes/functions.php";
require "includes/request.php";
require "includes/plugin_admin_content.php";
