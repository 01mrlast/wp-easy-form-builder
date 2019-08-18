<?php
function vendor_module_remove_dealer($data)
{
    global $wpdb;
    $sql = 'DELETE FROM `'. $wpdb->prefix .'easy_form_builder` WHERE `primary_id` = %d;';
    try {
        $wpdb->query($wpdb->prepare($sql, array($data['primary-id'])));
        return true;
    } catch (Exception $e) {
        return 'Error! '. $wpdb->last_error;
    }
}
function find($key, $array) {
    $parts = explode('.', $key);
    foreach ($parts as $part) {
        $array = $array[$part];
    }
    return $array;
}
function delete_msg($data)
{
    global $wpdb;
    $sql = 'DELETE FROM `'. $wpdb->prefix .'easy_form_builder_msg` WHERE `primary_id` = %d;';
    try {
        $wpdb->query($wpdb->prepare($sql, array($data['primary-id'])));
        return true;
    } catch (Exception $e) {
        return 'Error! '. $wpdb->last_error;
    }
}
$input_1 = "";
function easy_form_builder($id) {
    global $wpdb;
    $table_name = $wpdb->prefix . "easy_form_builder";
    foreach ($id as $row_id){
        $track = $wpdb->get_var( "SELECT form_input_names FROM `$table_name` WHERE form_ID = '$row_id'" );
        $jArr = json_decode($track, true);
//switch find elemtns
//
//
//
//        $favcolor = "Email";
//        $form_elements = "";
//        switch ($favcolor) {
//            case "Name":
//                $form_elements .= "<div class='form-group'>
//<label class='control-label x' id='x'>Name :</label>
//<input type='text' name='x' placeholder='x' class='form-control'  id='x'/>
//</div>";
//                break;
//            case "Number":
//                $form_elements .= "<div class='form-group'>
//<label class='control-label' id=''>Number</label>
//<input type='number' name='name' placeholder='' class='form-control'id=''/>
//</div>";
//                break;
//            case "Email":
//                $form_elements .= " <div class='form-group'>
//<label class='control-label' id=''>Email</label>
//<input type='email' name='' placeholder='' class='form-control'  id=''/>
//</div>";
//                break;
//            case "Password":
//                $form_elements .= "<div class='form-group'>
//<label class='control-label' id=''>Password</label>
//<input type='password' name='' placeholder='' class='form-control' id=''/>
//</div>";
//                break;
//            case "textarea":
//                $form_elements .= "<div class='form-group'>
//<label class='control-label ' id=''>Text Area</label>
//<textarea rows='5' name='' placeholder='' class='form-control'  id=''/>
//</div>";
//                break;
//            case "Date":
//                $form_elements .= "<div class='form-group'>
//<label class='control-label' id=''>Date</label>
//<input type='date' name='' class='form-control' id=''/></div>";
//                break;
//            case "Button":
//                $form_elements .= " <button name='' type='submit' class='btn' id=''>Button</button>";
//                break;
//            default:
//                echo "Your favorite color is neither red, blue, nor green!";
//        }
//        echo $form_elements;
//
//
//
//
        echo $track;
    }
}
add_shortcode( 'easy_form_builder', 'easy_form_builder' );
