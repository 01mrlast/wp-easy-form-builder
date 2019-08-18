<?php
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
        'form_email' => $form_email,
        'form_input_names' => $form_input,
        'form_lable_name' => $form_lable,
    ));    $lastid = $wpdb->insert_id;
    echo "<br><div class='alert alert-success container'>
<strong>Your form was successfully created .
</strong> 
</div>
<div class='alert alert-info container'>
Your Form Code is [easy_form_builder id=$lastid]
</div>
";
}
