<?php
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
                                <a href="javascript:;">
                                    <i class="fas fa-keyboard pull-right">
                                    </i> Text Field
                                </a>
                            </li>
                            <li class="form_bal_textarea">
                                <a href="javascript:;">
                                    <i class="fas fa-paragraph">
                                    </i> Text Area
                                </a>
                            </li>
                            <li class="form_bal_select">
                                <a href="javascript:;">
                                    <i class="fas fa-hand-pointer">
                                    </i> Select
                                </a>
                            </li>
                            <li class="form_bal_radio">
                                <a href="javascript:;">
                                    <i class="fas fa-check-circle">
                                    </i> Radio Button
                                </a>
                            </li>
                            <li class="form_bal_checkbox">
                                <a href="javascript:;">
                                    <i class="fas fa-check-square">
                                    </i> Checkbox
                                </a>
                            </li>
                            <li class="form_bal_email">
                                <a href="javascript:;">
                                    <i class="fas fa-envelope-open-text">
                                    </i> Email
                                </a>
                            </li>
                            <li class="form_bal_number">
                                <a href="javascript:;">
                                    <i class="fas fa-sort-numeric-up">
                                    </i> Number
                                </a>
                            </li>
                            <li class="form_bal_password">
                                <a href="javascript:;">
                                    <i class="fas fa-key">
                                    </i> Password
                                </a>
                            </li>
                            <li class="form_bal_date">
                                <a href="javascript:;">
                                    <i class="fas fa-calendar-week">
                                    </i> Date
                                </a>
                            </li>
                            <li class="form_bal_button">
                                <a href="javascript:;">
                                    <i class="fas fa-circle">
                                    </i> Button
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="col-md-6 bal_builder" style="border-style: dashed;">
                    <div class="form_builder_area">
                    </div>
                </div>
                <div class="col-md-4">
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
                                <textarea style="display: none" rows="50" name="save_form_code" class="form-control">
              </textarea>
                                <textarea  id="input_tags" name="input_tags">
              </textarea>
                                <input style="display: none"type="text" id="lable_names" name="lable_names">
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
    if(isset($_POST['jehowa'])){
        $id= $_POST['jehowa'];
        $wpdb->delete( $table_name, array( 'form_ID' => $id ) );
        echo "<br><div class='alert alert-danger' role='alert'>
Your form has been successfully Deleted .
</div>";
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
<td>[easy_form_builder id=$user_data->form_ID]</td><form method='POST'>
<td><button type='submit' name='edit' value='$user_data->form_ID' class='btn btn-success'>Edit</button>
<button type='submit' name='jehowa' value='$user_data->form_ID' class='btn btn-danger'>Delete</button>
</form> </td>
</tr>";
    }
    echo '</table></div>';
}
function show_msg(){
    global $wpdb;
    $table_name = $wpdb->prefix . "easy_form_builder";
    $table_name_msg = $wpdb->prefix . "easy_form_builder_msg";
    if(isset($_POST['delete_msg'])){
        $id= $_POST['delete_msg'];
        $wpdb->delete( $table_name_msg, array( 'msg_id' => $id ) );
        echo "<br><div class='alert alert-danger' role='alert'>
Message has been successfully Deleted .
</div>";
    }
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
<form method='POST'>
<td>
<button type='submit' name='edit_msg' value='$row_msg->msg_id' class='btn btn-success'>Edit</button>
<button type='submit' name='delete_msg' value='$row_msg->msg_id' class='btn btn-danger'>Delete</button>
</td>
</form>
</tr>";
    }
    echo '</table>';
}
