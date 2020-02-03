<?php


/**
 * @package efb
 */
/*
Plugin Name: Easy Form Builder
Plugin URI: http://www.white.studio/easy-form-bulider
Description: WordPress Bootstrap Easy Form Builder.
Version: 1.0
Author: White Studio
Author URI: http://www.white.studio
License: GPLv2 or later
Text Domain: efb
*/

$msg_add=false;
function theme_options_panel()
{
    add_menu_page('Drag & Drop Bootstrap Form Builder', 'Easy Form Builder', 'manage_options', 'plugin-options', 'pluign_func', plugins_url('/icon.png', __FILE__));
    add_submenu_page('plugin-options', 'Show All Forms', 'Show All Forms', 'manage_options', 'plugin-op-show-all-form', 'show_all_func');
    add_submenu_page('plugin-options', 'Show Messages', 'Show Messages', 'manage_options', 'plugin-show-msg', 'show_msg');
}
add_action('admin_menu', 'theme_options_panel');
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








add_action('admin_enqueue_scripts', 'my_enqueue');
function my_enqueue()
{
    wp_enqueue_script('ajax-script', plugins_url('/js/form_builder.js', __FILE__) , array(
        'jquery'
    ));
}
function add_my_plugin_script()
{
    $plugin_url = plugin_dir_url(__FILE__);
    wp_enqueue_script('plugin-script-1', $plugin_url . '/js/form_builder.min.js');
}
add_action('admin_enqueue_scripts', 'add_my_plugin_script');
wp_register_script('jQuery', 'https://code.jquery.com/jquery-3.2.1.min.js', null, null, true);
wp_enqueue_script('jQuery');
wp_register_script('popper', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js', null, null, true);
wp_enqueue_script('popper');
wp_register_script('bootstrap', 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js', null, null, true);
wp_enqueue_script('bootstrap');
wp_register_script('min', 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js', null, null, true);
wp_enqueue_script('min');
function css_loader()
{
    wp_register_style('css_loader', plugins_url('css/form_builder.css', __FILE__));
    wp_enqueue_style('css_loader');
}
add_action('admin_init', 'css_loader');
wp_register_style('bootstrap', 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');
wp_enqueue_style('bootstrap');
wp_register_style('Font_Awesome', 'https://use.fontawesome.com/releases/v5.9.0/css/all.css');
wp_enqueue_style('Font_Awesome');
if (isset($_POST['save_form_x']))
{
    global $wpdb;
    $form_code = $_POST['save_form_code'];
    $form_title = $_POST['form_title'];
    $form_email = $_POST['form_email'];
    $form_input = $_POST['input_tags'];
    $form_lable = $_POST['lable_names'];
    $table = $wpdb->prefix . "easy_form_builder";
    $wpdb->insert($table, array(
        'form_title' => $form_title,
        'form_content' => '<form method="POST" name="wp_easy_form">'.$form_code.'</form>',
        'form_email' => $form_email, // ... and so on
        'form_input_names' => $form_input, // ... and so on
        'form_lable_name' => $form_lable, // ... and so on
    ));    $lastid = $wpdb->insert_id;

    echo "<br><div class='alert alert-success container'>
<strong>Your form was successfully created .

</strong> 
</div>
<div class='alert alert-info container'>
Your Form Code is [easy_form_builder id=$lastid]
</div>
<br>
";
}
function pluign_func()
{
    ?>
    <div class="container">
        <br/>
        <div class="clearfix">
        </div>
        <nav class="container navbar navbar-light  bg-faded fixed-top">
        </nav>
        <div class="form_builder" style="margin-top: 25px" id="form_builder_x">
            <h3 class="mr-auto">Drag & Drop Bootstrap Form Builder
            </h3>


            <div class="clearfix">
                <div class="container">
                    <button style="cursor: pointer;display: none" class="btn btn-success export_html mt-2 pull-right">
                        Share Form
                    </button>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-sm-2">
                    <nav class="nav-sidebar">
                        <ul class="nav">
                            <li class="form_bal_textfield">
                                <a href="javascript:;"> <i class="fas fa-keyboard pull-right">
                                    </i> Text Field

                                </a>
                            </li>
                            <li class="form_bal_textarea">
                                <a href="javascript:;">  <i class="fas fa-paragraph"></i> Text Area

                                </a>
                            </li>
                            <li class="form_bal_select">
                                <a href="javascript:;"><i class="fas fa-hand-pointer"></i> Select

                                </a>
                            </li>
                            <li class="form_bal_radio">
                                <a href="javascript:;"><i class="fas fa-check-circle"></i> Radio Button

                                </a>
                            </li>
                            <li class="form_bal_checkbox">
                                <a href="javascript:;"> <i class="fas fa-check-square"></i> Checkbox

                                </a>
                            </li>
                            <li class="form_bal_email">
                                <a href="javascript:;">   <i class="fas fa-envelope-open-text"></i> Email

                                </a>
                            </li>
                            <li class="form_bal_number">
                                <a href="javascript:;">  <i class="fas fa-sort-numeric-up"></i> Number

                                </a>
                            </li>
                            <li class="form_bal_password">
                                <a href="javascript:;"> <i class="fas fa-key"></i> Password

                                </a>
                            </li>
                            <li class="form_bal_date">
                                <a href="javascript:;"> <i class="fas fa-calendar-week"></i> Date

                                </a>
                            </li>
                            <li class="form_bal_button">
                                <a href="javascript:;"> <i class="fas fa-circle"></i> Button

                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="col-md-7 bal_builder" style="border-style: dashed;">
                    <div class="form_builder_area">
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="col-md-12">
                        <form class="form-horizontal" method="POST" name="xform">
                            <div class="preview">
                            </div>
                            <div style="display: none" class="form-group plain_html">
                                <h5>Form Title
                                </h5>
                                <input type="text" name="form_title" class="form-control"
                                       placeholder="type form title in here" required>
                                <br>
                                <h5>Type Email For Recive Form Content
                                </h5>
                                <input type="email" name="form_email" class="form-control"
                                       placeholder="type email in here">
                                <br>
                                <input type="submit" name="save_form_x" class="btn btn-block btn-success"
                                       value="Save Form">
                                <textarea style="display: none" rows="50" name="save_form_code" class="form-control"></textarea>
                                <textarea  style="display: none"  id="input_tags" name="input_tags"></textarea>
                                <input style="display: none"  type="text" id="lable_names" name="lable_names">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?php
}
function show_all_func()
{
    global $wpdb;
    $table_name = $wpdb->prefix . "easy_form_builder";


    if(isset($_GET['deleteID'])){
        echo $_GET['deleteID'];
        die();
    }
    $results = $wpdb->get_results("select * from $table_name ORDER BY form_ID DESC");
    echo ' <div class="clearfix"><table  class="table table-striped">
<tr>
<th>Form Name</th>
<th>Form Code</th>
<th>Action</th>
</tr>';
    foreach ($results as $user_data)
    {
        echo "<tr>
<td>$user_data->form_title</td>
<td>[easy_form_builder id=$user_data->form_ID]</td>
<td>Edit - <a href='{admin_url()}?deleteID=$user_data->form_ID'>Delete</a> </td>
</tr>";
    }
    echo '</table></div>';
}


function show_msg(){
    global $wpdb;
    $table_name = $wpdb->prefix . "easy_form_builder";
    $table_name_msg = $wpdb->prefix . "easy_form_builder_msg";
    $results = $wpdb->get_results("select * from $table_name_msg");









    echo '<table  class="table table-striped">
<tr>
<th>Form Name</th>
<th>Action</th>
</tr>';
    foreach ($results as $row_msg)
    {
        echo "<tr>
<td>

<!-- Button trigger modal -->
<button type='button' class='btn btn-primary' data-toggle='modal' data-target='#Modal-$row_msg->msg_id'>
  Show Msg
</button>

<!-- Modal -->
<div class='modal fade' id='Modal-$row_msg->msg_id' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
  <div class='modal-dialog' role='document'>
    <div class='modal-content'>
      <div class='modal-header'>
        <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>
        <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
          <span aria-hidden='true'>&times;</span>
        </button>
      </div>
      <div class='modal-body'>
        $row_msg->content
      </div>
      <div class='modal-footer'>
        <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
        <button type='button' class='btn btn-primary'>Save changes</button>
      </div>
    </div>
  </div>
</div>



</td>
<td>Edit - Delete</td>
</tr>";
    }
    echo '</table>';
}

$input_1 = "";
function easy_form_builder($id) {
    global $wpdb;
    $table_name = $wpdb->prefix . "easy_form_builder";
    $table_name_msg = $wpdb->prefix . "easy_form_builder_msg";
    foreach ($id as $row_id){
        $track = $wpdb->get_var( "SELECT form_input_names FROM `$table_name` WHERE form_ID = '$row_id'" );
        $form_lable_name = $wpdb->get_var( "SELECT form_lable_name FROM `$table_name` WHERE form_ID = '$row_id'" );
        if(isset($_POST['btn_easy_fb'])) {

            $input_1 = "";
            $label_name = [""];
            $i=0;
            foreach (explode(",",$form_lable_name) as $row_input){
                $label_name[$i]=$row_input;
                $i=$i+1;
            };

            $table_name_msg = $wpdb->prefix . "easy_form_builder_msg";
            $i=0;
            foreach (explode(",",$track) as $row_input){
                if($i!=0){
                    $input_1 .= $label_name[$i] .": ". $_POST[$row_input] ."<br>";
                }
                $i=$i+1;

            };
            $sql = "INSERT INTO `$table_name_msg` (`content`) VALUES ('$input_1')";
            if($wpdb->query($sql))
            {
                $msgafter = "<div class='alert alert-success' role='alert'>
Your Message Submited
</div>";
                echo $msgafter;
            }
        }
        $track = $wpdb->get_var( "SELECT form_input_names FROM `$table_name` WHERE form_ID = '$row_id'" );
        $someArray = json_decode($track, true);
        var_dump($someArray);


        echo "<hr><br><br>";
 



foreach ($someArray as $key => $value) {
	   // echo $value["label"] . "<br>";
	$str ='';
	if ($value["type"]=='text' || $value["type"]=='email' || $value["type"]=='number' 
		|| $value["type"]=='password' || $value["type"]=='date'){
		$str .= " <label for='". $value["name"] ."'>".$value["label"] ."</label>";
	    $str .="<input type='". $value["type"]. "'id='".$value["tagId"] ."'name='".$value["name"] ."'placeholder='".$value["placeholder"] .   "'><br>";
	}
	if ($value["type"]=='textarea'){
		$str .= " <label for='". $value["name"] ."'>".$value["label"] ."</label>";
	    $str .= "<textarea id='".$value["tagId"] ."'name='".$value["name"] ."'placeholder='".$value["placeholder"] ."'> </textarea>";
	}
	if($value["type"]=='radio'){



		$str .= " <label for='". $value["name"] ."'>".$value["label"] ."</label>";
		$sub_str .= "<div name ='". $value["name"] ."' >" ;



		$motaghaierdige = $someArray.$value['option'];
       // var_dump($someArray.$value['option'][0]);
         foreach($value->option as $date)
         {
              echo $date "\n";
         }


		//$someArray[0]['option'][0]['id']



		$str .= $sub_str;
	}
	echo $str ;

    
  }
       
    }
}
add_shortcode( 'easy_form_builder', 'easy_form_builder' );




