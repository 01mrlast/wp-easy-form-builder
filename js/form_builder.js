var tag_obj = [];
var tag_id_list=[] ;

let tag_option_list =[]
var tag_option_radio=[];
var tag_option_select=[];
var tag_option_checkbox=[];
//information : limited of element  is 7777

//select checkbox radiobutton , function add more option must edit
//solve: add new option and value in raltion array in tag_obj
jQuery(document).ready(function () {

    $(".form_bal_textfield").draggable({
        helper: function () {
            return getTextFieldHTML();
        },
        

        connectToSortable: ".form_builder_area"       
    });
    $(document).ready(function(){
        $("a").trigger("click");
    });
    $(".form_bal_textarea").draggable({
        helper: function () {
            return getTextAreaFieldHTML();
        },
        connectToSortable: ".form_builder_area"
    });
    $(".form_bal_number").draggable({
        helper: function () {
            return getNumberFieldHTML();
        },
        connectToSortable: ".form_builder_area"
    });
    $(".form_bal_email").draggable({
        helper: function () {
            return getEmailFieldHTML();
        },
        connectToSortable: ".form_builder_area"
    });
    $(".form_bal_password").draggable({
        helper: function () {
            return getPasswordFieldHTML();
        },
        connectToSortable: ".form_builder_area"
    });
    $(".form_bal_date").draggable({
        helper: function () {
            return getDateFieldHTML();
        },
        connectToSortable: ".form_builder_area"
    });
    $(".form_bal_button").draggable({
        helper: function () {
            return getButtonFieldHTML();
        },
        connectToSortable: ".form_builder_area"
    });
    $(".form_bal_select").draggable({
        helper: function () {
            return getSelectFieldHTML();
        },
        connectToSortable: ".form_builder_area"
    });
    $(".form_bal_radio").draggable({
        helper: function () {
            return getRadioFieldHTML();
        },
        connectToSortable: ".form_builder_area"
    });
    $(".form_bal_checkbox").draggable({
        helper: function () {
            return getCheckboxFieldHTML();
        },
        connectToSortable: ".form_builder_area"
    });

    $(".form_builder_area").sortable({
        cursor: 'move',
        placeholder: 'placeholder',      
        start: function (e, ui) {
           // console.log(ui.item[0].id);
            ui.placeholder.height(ui.helper.outerHeight());
        },
        stop: function (ev, ui) {
            getPreview();
        }
    });
    $(".form_builder_area").disableSelection();

    function getButtonFieldHTML() {
        var field = generateField();
        var html = '<div class="all_div"><div class="row li_row"><div class="col-md-12"><button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="' + field + '"><i class="fa fa-times"></i></button></div></div></div><hr/><div class="row li_row form_output" data-type="button" data-field="' + field + '"><div class="col-md-12"><div class="form-group"><input type="text" name="class_' + field + '" class="form-control form_input_button_class" placeholder="Class" value="btn btn-primary" data-field="' + field + '"/></div></div><div class="col-md-12"><div class="form-group"><input type="text" name="value_' + field + '" data-field="' + field + '" class="form-control form_input_button_value" value="Submit" placeholder="Value"/></div></div><div class="col-md-12"><div class="form-group"><input type="text" name="text_' + field + '" class="form-control form_input_name" placeholder="Name" /></div></div></div>';
        return $('<div>').addClass('li_' + field + ' form_builder_field').attr("id", field).html(html);
    }
    function getTextFieldHTML() {
        var field = generateField();
        var html = '<div class="all_div"><div class="row li_row"><div class="col-md-12"><button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="' + field + '"><i class="fa fa-times"></i></button></div></div></div><hr/><div class="row li_row form_output" data-type="text" data-field="' + field + '"><div class="col-md-12"><div class="form-group"><input type="text" name="label_' + field + '" class="form-control form_input_label" value="Label" data-field="' + field + '"/></div></div><div class="col-md-12"><div class="form-group"><input type="text" name="placeholder_' + field + '" data-field="' + field + '" class="form-control form_input_placeholder" placeholder="Placeholder"/></div></div><div class="col-md-12"><div class="form-check"><label class="form-check-label"><input data-field="' + field + '" type="checkbox" class="form-check-input form_input_req">&nbsp; &nbsp;&nbsp;Required</label></div></div></div>';
        return $('<div>').addClass('li_' + field + ' form_builder_field').attr("id", field).html(html);
    }
    function getNumberFieldHTML() {
        var field = generateField();
        var html = '<div class="all_div"><div class="row li_row"><div class="col-md-12"><button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="' + field + '"><i class="fa fa-times"></i></button></div></div></div><hr/><div class="row li_row form_output" data-type="number" data-field="' + field + '"><div class="col-md-12"><div class="form-group"><input type="text" name="label_' + field + '" class="form-control form_input_label" value="Label" data-field="' + field + '"/></div></div><div class="col-md-12"><div class="form-group"><input type="text" name="placeholder_' + field + '" data-field="' + field + '" class="form-control form_input_placeholder" placeholder="Placeholder"/></div></div><div class="col-md-12"><div class="form-check"><label class="form-check-label"><input data-field="' + field + '" type="checkbox" class="form-check-input form_input_req">&nbsp; &nbsp;&nbsp;Required</label></div></div></div>';
        return $('<div>').addClass('li_' + field + ' form_builder_field').attr("id", field).html(html);
    }
    function getEmailFieldHTML() {
        var field = generateField();
        var html = '<div class="all_div"><div class="row li_row"><div class="col-md-12"><button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="' + field + '"><i class="fa fa-times"></i></button></div></div></div><hr/><div class="row li_row form_output" data-type="email" data-field="' + field + '"><div class="col-md-12"><div class="form-group"><input type="text" name="label_' + field + '" class="form-control form_input_label" value="Label" data-field="' + field + '"/></div></div><div class="col-md-12"><div class="form-group"><input type="text" name="placeholder_' + field + '" data-field="' + field + '" class="form-control form_input_placeholder" placeholder="Placeholder"/></div></div><div class="col-md-12"><div class="form-check"><label class="form-check-label"><input data-field="' + field + '" type="checkbox" class="form-check-input form_input_req">&nbsp; &nbsp;&nbsp;Required</label></div></div></div>';
        return $('<div>').addClass('li_' + field + ' form_builder_field').attr("id", field).html(html);
    }
    function getPasswordFieldHTML() {
        var field = generateField();
        var html = '<div class="all_div"><div class="row li_row"><div class="col-md-12"><button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="' + field + '"><i class="fa fa-times"></i></button></div></div></div><hr/><div class="row li_row form_output" data-type="password" data-field="' + field + '"><div class="col-md-12"><div class="form-group"><input type="text" name="label_' + field + '" class="form-control form_input_label" value="Label" data-field="' + field + '"/></div></div><div class="col-md-12"><div class="form-group"><input type="text" name="placeholder_' + field + '" data-field="' + field + '" class="form-control form_input_placeholder" placeholder="Placeholder"/></div></div><div class="col-md-12"><div class="form-check"><label class="form-check-label"><input data-field="' + field + '" type="checkbox" class="form-check-input form_input_req">&nbsp; &nbsp;&nbsp;Required</label></div></div></div>';
        return $('<div>').addClass('li_' + field + ' form_builder_field').attr("id", field).html(html);
    }
    function getDateFieldHTML() {
        var field = generateField();
        var html = '<div class="all_div"><div class="row li_row"><div class="col-md-12"><button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="' + field + '"><i class="fa fa-times"></i></button></div></div></div><hr/><div class="row li_row form_output" data-type="date" data-field="' + field + '"><div class="col-md-12"><div class="form-group"><input type="text" name="label_' + field + '" class="form-control form_input_label" value="Label" data-field="' + field + '"/></div></div><div class="col-md-12"><div class="form-check"><label class="form-check-label"><input data-field="' + field + '" type="checkbox" class="form-check-input form_input_req">&nbsp; &nbsp;&nbsp;Required</label></div></div></div>';
        return $('<div>').addClass('li_' + field + ' form_builder_field').attr("id", field).html(html);
    }
    function getTextAreaFieldHTML() {
        var field = generateField();
        var html = '<div class="all_div"><div class="row li_row"><div class="col-md-12"><button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="' + field + '"><i class="fa fa-times"></i></button></div></div></div><hr/><div class="row li_row form_output" data-type="textarea" data-field="' + field + '"><div class="col-md-12"><div class="form-group"><input type="text" name="label_' + field + '" class="form-control form_input_label" value="Label" data-field="' + field + '"/></div></div><div class="col-md-12"><div class="form-group"><input type="text" name="placeholder_' + field + '" data-field="' + field + '" class="form-control form_input_placeholder" placeholder="Placeholder"/></div></div><div class="col-md-12"><div class="form-check"><label class="form-check-label"><input data-field="' + field + '" type="checkbox" class="form-check-input form_input_req">&nbsp; &nbsp;&nbsp;Required</label></div></div></div>';
        return $('<div>').addClass('li_' + field + ' form_builder_field').attr("id", field).html(html);
    }
    function getSelectFieldHTML() {
        var field = generateField();
        var opt1 = generateField();
        var html = '<div class="all_div" id='+ field +'><div class="row li_row"><div class="col-md-12"><button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="' + field + '"><i class="fa fa-times"></i></button></div></div><hr/><div class="row li_row form_output" data-type="select" data-field="' + field + '"><div class="col-md-12"><div class="form-group"><input type="text" name="label_' + field + '" class="form-control form_input_label" value="Label" data-field="' + field + '"/></div></div><div class="col-md-12"><div class="form-group"><select name="select_' + field + '" class="form-control"><option data-opt="' + opt1 + '" value="Value">Option</option></select></div></div></div><div class="row li_row"><div class="col-md-12"><div class="field_extra_info_' + field + '"><div data-field="' + field + '" class="row select_row_' + field + '" data-opt="' + opt1 + '"><div class="col-md-4"><div class="form-group"><input type="text" value="Option" class="s_opt form-control"/></div></div><div class="col-md-4"><div class="form-group"><input type="text" value="Value" class="s_val form-control"/></div></div><div class="col-md-4"><i class="margin-top-5 fa fa-plus-circle fa-2x default_blue add_more_select" data-field="' + field + '"></i></div></div></div></div></div></div>';
        return $('<div>').addClass('li_' + field + ' form_builder_field').attr("id", field).html(html);
    }
    function getRadioFieldHTML() {
        var field = generateField();
        var opt1 = generateField();
       
        var html = '<div class="all_div" id='+ field +'><div class="row li_row"><div class="col-md-12"><button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="' + field + '"><i class="fa fa-times"></i></button></div></div><hr/><div class="row li_row form_output" data-type="radio" data-field="' + field + '"><div class="col-md-12"><div class="form-group"><input type="text" name="label_' + field + '" class="form-control form_input_label" value="Label" data-field="' + field + '"/></div></div><div class="col-md-12"><div class="form-group"><div class="mt-radio-list radio_list_' + field + '"><label class="mt-radio mt-radio-outline"><input data-opt="' + opt1 + '" type="radio" name="radio_' + field + '" value="Value"> <p class="r_opt_name_' + opt1 + '">Option</p><span></span></label></div></div></div></div><div class="row li_row"><div class="col-md-12"><div class="field_extra_info_' + field + '"><div data-field="' + field + '" class="row radio_row_' + field + '" data-opt="' + opt1 + '"><div class="col-md-4"><div class="form-group"><input type="text" value="Option" class="r_opt form-control"/></div></div><div class="col-md-4"><div class="form-group"><input type="text" value="Value" class="r_val form-control"/></div></div><div class="col-md-4"><i class="margin-top-5 fa fa-plus-circle fa-2x default_blue add_more_radio" data-field="' + field + '"></i></div></div></div></div></div></div>';
        return $('<div>').addClass('li_' + field + ' form_builder_field').attr("id", field).html(html);
    }
    function getCheckboxFieldHTML() {
        var field = generateField();
        var opt1 = generateField();
        var html = '<div class="all_div" id='+ field +'><div class="row li_row"><div class="col-md-12"><button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="' + field + '"><i class="fa fa-times"></i></button></div></div><hr/><div class="row li_row form_output" data-type="checkbox" data-field="' + field + '"><div class="col-md-12"><div class="form-group"><input type="text" name="label_' + field + '" class="form-control form_input_label" value="Label" data-field="' + field + '"/></div></div><div class="col-md-12"><div class="form-group"><div class="mt-checkbox-list checkbox_list_' + field + '"><label class="mt-checkbox mt-checkbox-outline"><input data-opt="' + opt1 + '" type="checkbox" name="checkbox_' + field + '" value="Value"> <p class="c_opt_name_' + opt1 + '">Option</p><span></span></label></div></div></div></div><div class="row li_row"><div class="col-md-12"><div class="field_extra_info_' + field + '"><div data-field="' + field + '" class="row checkbox_row_' + field + '" data-opt="' + opt1 + '"><div class="col-md-4"><div class="form-group"><input type="text" value="Option" class="c_opt form-control"/></div></div><div class="col-md-4"><div class="form-group"><input type="text" value="Value" class="c_val form-control"/></div></div><div class="col-md-4"><i class="margin-top-5 fa fa-plus-circle fa-2x default_blue add_more_checkbox" data-field="' + field + '"></i></div></div></div></div></div></div>';
        return $('<div>').addClass('li_' + field + ' form_builder_field').attr("id", field).html(html);
    }
    //789
    $(document).on('click', '.add_more_select', function () {
        $(this).closest('.form_builder_field').css('height', 'auto');
        var field = $(this).attr('data-field');
        var option = generateField();
        $('.field_extra_info_' + field).append('<div data-field="' + field + '" class="row select_row_' + field + '" data-opt="' + option + '"><div class="col-md-4"><div class="form-group"><input type="text" value="Option" class="s_opt form-control"/></div></div><div class="col-md-4"><div class="form-group"><input type="text" value="Value" class="s_val form-control"/></div></div><div class="col-md-4"><i class="margin-top-5 fa fa-plus-circle fa-2x default_blue add_more_select" data-field="' + field + '"></i><i class="margin-top-5 margin-left-5 fa fa-times-circle default_red fa-2x remove_more_select" data-field="' + field + '"></i></div></div>');
        var options = '';
       
        $('.select_row_' + field).each(function () {
            var opt = $(this).find('.s_opt').val();
            var val = $(this).find('.s_val').val();
            var s_opt = $(this).attr('data-opt');
            //789 addd new
           const option_list={
                tagId:field,
                option:opt,
                value:val,
                dataOpt:s_opt
                };
         //   console.log(`list op ${s_opt} ${opt} ${val} ${field} `);
          //  console.log(`list pub ${option_list.dataOpt}  ${option_list.option} ${option_list.value} ${option_list.tagId}  `);
            options += '<option data-opt="' + s_opt + '" value="' + val + '">' + opt + '</option>';
            let row_ =7777;
           if(tag_option_list.length!=0){
                for(let i =0 ; i<tag_option_list.length;i++){
                    if (tag_option_list[i].dataOpt==option_list.dataOpt)
                    {
                  
                        console.log(tag_id_list[i].dataOpt);
                    }else{
                        tag_option_list.push(option_list)
                    }
                }
            }else
            {
                console.log(option_list);
                console.log('first option');
               // tag_option_list.dataOpt==option_list.dataOpt ?tag_option_list[0]=option_list : tag_option_list.push(option_list) ;
               tag_option_list.dataOpt==option_list.dataOpt ? console.log(true) : tag_option_list.push(option_list) ;
            }
       
            console.log(tag_option_list)
            //789 end add
            
        });
        $('select[name=select_' + field + ']').html(options);
        getPreview();
    });
    $(document).on('click', '.add_more_radio', function () {
        console.log(`tag option`);
        $(this).closest('.form_builder_field').css('height', 'auto');
        var field = $(this).attr('data-field');
        var option = generateField();
        $('.field_extra_info_' + field).append('<div data-opt="' + option + '" data-field="' + field + '" class="row radio_row_' + field + '"><div class="col-md-4"><div class="form-group"><input type="text" value="Option" class="r_opt form-control"/></div></div><div class="col-md-4"><div class="form-group"><input type="text" value="Value" class="r_val form-control"/></div></div><div class="col-md-4"><i class="margin-top-5 fa fa-plus-circle fa-2x default_blue add_more_radio" data-field="' + field + '"></i><i class="margin-top-5 margin-left-5 fa fa-times-circle default_red fa-2x remove_more_radio" data-field="' + field + '"></i></div></div>');
        var options = '';

        var option_list =[];

        $('.radio_row_' + field).each(function () {
            var opt = $(this).find('.r_opt').val();
            var val = $(this).find('.r_val').val();
            var s_opt = $(this).attr('data-opt');

            option_list={
                tagId:field,
                option:opt,
                value:val,
                dataOpt:s_opt
            };

            options += '<label class="mt-radio mt-radio-outline"><input data-opt="' + s_opt + '" type="radio" name="radio_' + field + '" value="' + val + '"> <p class="r_opt_name_' + s_opt + '">' + opt + '</p><span></span></label>';

            let row_ =0;
            for(let i =0 ; i<tag_option_list.length;i++){
                tag_option_list[i].tagId==option_list.tagId ? row_=i : row_=7777 ;
            }
            row_ == 7777 ? tag_option_list+=option_list : tag_option_list[row_]=option_list;
            
        });
        $('.radio_list_' + field).html(options);
        getPreview();
    });
    $(document).on('click', '.add_more_checkbox', function () {
        $(this).closest('.form_builder_field').css('height', 'auto');
        var field = $(this).attr('data-field');
        var option = generateField();
        $('.field_extra_info_' + field).append('<div data-opt="' + option + '" data-field="' + field + '" class="row checkbox_row_' + field + '"><div class="col-md-4"><div class="form-group"><input type="text" value="Option" class="c_opt form-control"/></div></div><div class="col-md-4"><div class="form-group"><input type="text" value="Value" class="c_val form-control"/></div></div><div class="col-md-4"><i class="margin-top-5 fa fa-plus-circle fa-2x default_blue add_more_checkbox" data-field="' + field + '"></i><i class="margin-top-5 margin-left-5 fa fa-times-circle default_red fa-2x remove_more_checkbox" data-field="' + field + '"></i></div></div>');
        var options = '';
        var option_list =[];
        $('.checkbox_row_' + field).each(function () {
            var opt = $(this).find('.c_opt').val();
            var val = $(this).find('.c_val').val();
            var s_opt = $(this).attr('data-opt');
            option_list={
                tagId:field,
                option:opt,
                value:val,
                dataOpt:s_opt
            };
            options += '<label class="mt-checkbox mt-checkbox-outline"><input data-opt="' + s_opt + '" name="checkbox_' + field + '" type="checkbox" value="' + val + '"> <p class="c_opt_name_' + s_opt + '">' + opt + '</p><span></span></label>';
            let row_ =0
            for(let i =0 ; i<tag_option_list.length;i++){
                tag_option_list[i].tagId==option_list.tagId ? row_=i : row_=7777 ;
            }
            row_ == 7777 ? tag_option_list+=option_list : tag_option_list[row_]=option_list;
            
        });
        $('.checkbox_list_' + field).html(options);
        getPreview();
    });
    $(document).on('keyup', '.s_opt', function () {
        var op_val = $(this).val();
        var field = $(this).closest('.row').attr('data-field');
        var option = $(this).closest('.row').attr('data-opt');
        $('select[name=select_' + field + ']').find('option[data-opt=' + option + ']').html(op_val);
        getPreview();
    });
    $(document).on('keyup', '.s_val', function () {
        var op_val = $(this).val();
        var field = $(this).closest('.row').attr('data-field');
        var option = $(this).closest('.row').attr('data-opt');
        $('select[name=select_' + field + ']').find('option[data-opt=' + option + ']').val(op_val);
        getPreview();
    });
    $(document).on('keyup', '.r_opt', function () {
        var op_val = $(this).val();
        var field = $(this).closest('.row').attr('data-field');
        var option = $(this).closest('.row').attr('data-opt');

        $('.radio_list_' + field).find('.r_opt_name_' + option).html(op_val);
        getPreview();
    });
    $(document).on('keyup', '.r_val', function () {
        var op_val = $(this).val();
        var field = $(this).closest('.row').attr('data-field');
        var option = $(this).closest('.row').attr('data-opt');
        $('.radio_list_' + field).find('input[data-opt=' + option + ']').val(op_val);
        getPreview();
    });
    $(document).on('keyup', '.c_opt', function () {
        var op_val = $(this).val();
        var field = $(this).closest('.row').attr('data-field');
        var option = $(this).closest('.row').attr('data-opt');
        $('.checkbox_list_' + field).find('.c_opt_name_' + option).html(op_val);
        getPreview();
    });
    $(document).on('keyup', '.c_val', function () {
        var op_val = $(this).val();
        var field = $(this).closest('.row').attr('data-field');
        var option = $(this).closest('.row').attr('data-opt');
        $('.checkbox_list_' + field).find('input[data-opt=' + option + ']').val(op_val);
        getPreview();
    });
    $(document).on('click', '.edit_bal_textfield', function () {
        var field = $(this).attr('data-field');
        var el = $('.field_extra_info_' + field);
        el.html('<div class="form-group"><input type="text" name="label_' + field + '" class="form-control" placeholder="Enter Text Field Label"/></div><div class="mt-checkbox-list"><label class="mt-checkbox mt-checkbox-outline"><input name="req_' + field + '" type="checkbox" value="1"> Required<span></span></label></div>');
        getPreview();

    });
    $(document).on('click', '.remove_bal_field', function (e) {
        e.preventDefault();
        var field = $(this).attr('data-field');
        $(this).closest('.li_' + field).hide('400', function () {
            $(this).remove();
            getPreview();
        });
    });
    $(document).on('click', '.remove_more_select', function () {
        var field = $(this).attr('data-field');
        var s_op_p ;
        $(this).closest('.select_row_' + field).hide('400', function () {
            $(this).remove();
            var options = '';
            var s_opt ='';
            $('.select_row_' + field).each(function () {
                var opt = $(this).find('.s_opt').val();
                var val = $(this).find('.s_val').val();
                s_opt = $(this).attr('data-opt');
                options += '<option data-opt="' + s_opt + '" value="' + val + '">' + opt + '</option>';
                s_op_p=$(this).attr('data-opt');
                console.log(`return ${opt}  ${val}  ${s_opt} `);
                
            });
            
            $('select[name=select_' + field + ']').html(options);
            getPreview();
        });

        let row_ =0;
        for(let i =0 ; i<tag_option_list.length;i++){
           // tag_option_list[i].dataOpt== $(this).attr('data-opt') ? console.log('true') :  console.log('false') ;
            console.log(` data-opt ${tag_option_list.dataOpt}  i:${i}`);

        }
    });
    $(document).on('click', '.remove_more_radio', function () {
        var field = $(this).attr('data-field');
        $(this).closest('.radio_row_' + field).hide('400', function () {
            $(this).remove();
            var options = '';
            $('.radio_row_' + field).each(function () {
                var opt = $(this).find('.r_opt').val();
                var val = $(this).find('.r_val').val();
                var s_opt = $(this).attr('data-opt');
                options += '<label class="mt-radio mt-radio-outline"><input data-opt="' + s_opt + '" type="radio" name="radio_' + field + '" value="' + val + '"> <p class="r_opt_name_' + s_opt + '">' + opt + '</p><span></span></label>';
            });
            $('.radio_list_' + field).html(options);
            getPreview();
        });
    });
    $(document).on('click', '.remove_more_checkbox', function () {
        var field = $(this).attr('data-field');
        $(this).closest('.checkbox_row_' + field).hide('400', function () {
            $(this).remove();
            var options = '';
            $('.checkbox_row_' + field).each(function () {
                var opt = $(this).find('.c_opt').val();
                var val = $(this).find('.c_val').val();
                var s_opt = $(this).attr('data-opt');
                options += '<label class="mt-checkbox mt-checkbox-outline"><input data-opt="' + s_opt + '" name="checkbox_' + field + '" type="checkbox" value="' + val + '"> <p class="r_opt_name_' + s_opt + '">' + opt + '</p><span></span></label>';
            });
            $('.checkbox_list_' + field).html(options);
            getPreview();
        });
    });
    $(document).on('keyup', '.form_input_button_class', function () {
        getPreview();
    });
    $(document).on('keyup', '.form_input_button_value', function () {
        getPreview();
    });
    $(document).on('change', '.form_input_req', function () {
        getPreview();
    });
    $(document).on('keyup', '.form_input_placeholder', function () {
        getPreview();
    });
    $(document).on('keyup', '.form_input_label', function () {
        getPreview();
    });
    $(document).on('keyup', '.form_input_name', function () {
        getPreview();
    });
    function generateField() {
        return Math.random().toString(36).substr(2, 9) + '_efb';
    }
    var no_ID =0;

    function getPreview(plain_html = '') {
        // this section add privew of form 
        var el = $('.form_builder_area .form_output');
        var tag_name = [""];
        var tag_type = [""];
        var val_lable =[""];

        var html = '';
        let i=0;
        if (tag_id_list.length)
        {
            const len = tag_id_list.length +1;
            tag_id_list.splice(0, len);
            tag_obj.splice(0, len);
        }
        el.each(function () {           

            tag_id_list.push(el[i].parentNode.id);
            i+=1;
            var data_type = $(this).attr('data-type');
            //var field = $(this).attr('data-field');
            var label = $(this).find('.form_input_label').val();
            var name = $(this).find('.form_input_name').val();
            if (data_type === 'text') {
                no_ID = no_ID + 1 ;
                var id_ = 'wp_easy_form_builder_text_'+no_ID;
                tag_name.push(id_);
                tag_type.push('text');
               // elm=id_;
                var placeholder = $(this).find('.form_input_placeholder').val();
                var checkbox = $(this).find('.form-check-input');
                var required = '';
                if (checkbox.is(':checked')) {
                    required = 'required';
                }
				val_lable.push(label);

                html += '<div class="form-group"><label class="control-label">' + label + '</label><input type="text" name="' + name + '" placeholder="' + placeholder + '" class="form-control" ' + required + '/></div>';

                const values = { 
                    tagId:tag_id_list[tag_id_list.length-1],
                    type: 'text',
                    name:name,
                    label:label,
                    placeholder:placeholder,
                    required:required
                };
                tag_obj.push(values);
                
            }
            if (data_type === 'number') {
                no_ID = no_ID + 1 ;
                var id_ = 'wp_easy_form_builder_number_'+no_ID;
                tag_name.push(id_);
                tag_type.push('number');
                var placeholder = $(this).find('.form_input_placeholder').val();
                var checkbox = $(this).find('.form-check-input');
                var required = '';
                if (checkbox.is(':checked')) {
                    required = 'required';
                }
				val_lable.push(label);
                html += '<div class="form-group"><label class="control-label">' + label + '</label><input type="number" name="' + name + '" placeholder="' + placeholder + '" class="form-control" ' + required + '/></div>';
                
			const values = { 
                    tagId:tag_id_list[tag_id_list.length-1],
                    type: 'number',
                    name:name,
                    label:label,
                    placeholder:placeholder,
                    required:required
                };
                tag_obj.push(values);
            }
            if (data_type === 'email') {
                no_ID = no_ID + 1 ;
                var id_ = 'wp_easy_form_builder_email_'+no_ID;
                tag_name.push(id_);
                tag_type.push('email');
                var placeholder = $(this).find('.form_input_placeholder').val();
                var checkbox = $(this).find('.form-check-input');
                var required = '';
                if (checkbox.is(':checked')) {
                    required = 'required';
                }
				val_lable.push(label);
                html += '<div class="form-group"><label class="control-label">' + label + '</label><input type="email" name="' + name + '" placeholder="' + placeholder + '" class="form-control" ' + required + '/></div>';
                const values = { 
                    tagId:tag_id_list[tag_id_list.length-1],
                    type: 'email',
                    name:name,
                    label:label,
                    placeholder:placeholder,
                    required:required
                };
                tag_obj.push(values);
            }
            if (data_type === 'password') {
                no_ID = no_ID + 1 ;
                var id_ = 'wp_easy_form_builder_password_'+no_ID;
                tag_name.push(id_);
                tag_type.push('password');
                var placeholder = $(this).find('.form_input_placeholder').val();
                var checkbox = $(this).find('.form-check-input');
                var required = '';
                if (checkbox.is(':checked')) {
                    required = 'required';
                }
				 val_lable.push(label);
                html += '<div class="form-group"><label class="control-label">' + label + '</label><input type="password" name="' + name + '" placeholder="' + placeholder + '" class="form-control" ' + required + '/></div>';
                const values = { 
                    tagId:tag_id_list[tag_id_list.length-1],
                    type: 'password',
                    name:name,
                    label:label,
                    placeholder:placeholder,
                    required:required
                };
                tag_obj.push(values);
            }
            if (data_type === 'textarea') {
                no_ID = no_ID + 1 ;
                var id_ = 'wp_easy_form_builder_textarea_'+no_ID;
                tag_name.push(id_);
                tag_type.push('textarea');
                var placeholder = $(this).find('.form_input_placeholder').val();
                var checkbox = $(this).find('.form-check-input');
                var required = '';
                if (checkbox.is(':checked')) {
                    required = 'required';
                }
				val_lable.push(label);
                html += '<div class="form-group"><label class="control-label">' + label + '</label><textarea rows="5" name="' + name + '" placeholder="' + placeholder + '" class="form-control" ' + required + '/></div>';
                const values = { 
                    tagId:tag_id_list[tag_id_list.length-1],
                    type: 'textarea',
                    name:name,
                    label:label,
                    placeholder:placeholder,
                    required:required
                };
                tag_obj.push(values);
            }
            if (data_type === 'date') {
                no_ID = no_ID + 1 ;
                var id_ = 'wp_easy_form_builder_date_'+no_ID;
                tag_name.push(id_);
                tag_type.push('date');
                var checkbox = $(this).find('.form-check-input');
                var required = '';
                if (checkbox.is(':checked')) {
                    required = 'required';
                }
				val_lable.push(label);
                html += '<div class="form-group"><label class="control-label">' + label + '</label><input type="date" name="' + name + '" class="form-control" ' + required + '/></div>';
                const values = { 
                    tagId:tag_id_list[tag_id_list.length-1],
                    type: 'date',
                    label:label,            
                    required:required
                };
                tag_obj.push(values);
            }
            if (data_type === 'button') {
                var btn_class = $(this).find('.form_input_button_class').val();
                var btn_value = $(this).find('.form_input_button_value').val();
                html += '<button name="' + name + '" type="submit" class="' + btn_class + '">' + btn_value + '</button>';
                const values = { 
                    tagId:tag_id_list[tag_id_list.length-1],
                    type: 'button',
                    name:name,
                    value:btn_value,
                    class:btn_class
                };
                tag_obj.push(values);
            }
            if (data_type === 'select') {
                no_ID = no_ID + 1 ;
                var id_ = 'wp_easy_form_builder_select_'+no_ID;
                tag_name.push(id_);
                tag_type.push('select');
                var option_html = '';
                $(this).find('select option').each(function () {
                    var option = $(this).html();
                    var value = $(this).val();
                    option_html += '<option value="' + value + '">' + option + '</option>';
                });
				val_lable.push(label);
                html += '<div class="form-group"><label class="control-label">' + label + '</label><select class="form-control" name="' + name + '">' + option_html + '</select></div>';
                const values = { 
                    tagId:tag_id_list[tag_id_list.length-1],
                    type: 'select',
                    name:name,
                    label:label,
                    option:value,                    
                };
                tag_obj.push(values);
            }
             if (data_type === 'radio') {
                no_ID = no_ID + 1 ;
                var id_ = 'wp_easy_form_builder_radio_'+no_ID;
                tag_name.push(id_);
                tag_type.push('radio');
                var option_html = '';
                var option;
                var value;                
                var list_opt = new Array();
                $(this).find('.mt-radio').each(function () {
                     option = $(this).find('p').html();                    
                    value = $(this).find('input[type=radio]').val();
                    option_html += '<div class="form-check"><label class="form-check-label"><input type="radio" class="form-check-input" name="' + name + '" value="' + value + '">' + option + '</label></div>';
                    list_opt.push({id:id_ ,
                        value:value,
                        option:option});
                    
                });
                val_lable.push(label);

                html += '<div class="form-group"><label class="control-label">' + label + '</label>' + option_html + '</div>';
                const values = { 
                    tagId:tag_id_list[tag_id_list.length-1],
                    type: 'radio',
                    name:name,
                    label:label,
                    option:list_opt,                    
                };
                tag_obj.push(values);
            }
                        if (data_type === 'checkbox') {
                no_ID = no_ID + 1 ;
                var id_ = 'wp_easy_form_builder_checkbox_'+no_ID;
                tag_name.push(id_);
                tag_type.push('checkbox');
                var option_html = '';
                var value="" ;
                var option="" ;
                var list_opt = new Array();
                $(this).find('.mt-checkbox').each(function () {
                    var option = $(this).find('p').html();
                    var value = $(this).find('input[type=checkbox]').val();
                    option_html += '<div class="form-check"><label class="form-check-label"><input type="checkbox" class="form-check-input" name="' + id_ + '[]" value="' + value + '">' + option + '</label></div>';
                     list_opt.push({id:id_ ,
                        value:value,
                        option:option});
                });
                val_lable.push(label);

                html += '<div class="form-group"><label class="control-label">' + label + '</label>' + option_html + '</div>';
                const values = { 
                    tagId:tag_id_list[tag_id_list.length-1],
                    type: 'checkbox',
                    label:label,
                    option:list_opt,
                    value:value,                
                };
                tag_obj.push(values);
            }
        });
        if (html.length) {
            $('.export_html').show();
        } else {
            $('.export_html').hide();
        }
        if (plain_html === 'html') {
            $('.preview').hide();

            $('.plain_html').show().find('textarea').val(html);

            document.getElementById('input_tags').value=JSON.stringify(tag_obj);
            // $('.input_tags input').val("test");
          //  document.getElementById('input_tags').value='test';
          //  document.getElementById('lable_names').value=val_lable;
        } else {
            $('.plain_html').hide();
            $('.preview').html(html).show();
    }
    }


    //export section
    //this section get export of html
    $(document).on('click', '.export_html', function () {
        console.log(tag_id_list);
        console.log(tag_obj);
        getPreview('html');
    });


    $(document).on('click', '.edit_page', function () {
        funParsing();
        if(false){
            temp =`<div class="li_92326 form_builder_field" style="width: 495px; height: 288.324px;"><div class="all_div"><div class="row li_row"><div class="col-md-12"><button type="button" class="btn btn-primary btn-sm remove_bal_field pull-right" data-field="92326"><i class="fa fa-times"></i></button></div></div></div><hr><div class="row li_row form_output" data-type="text" data-field="92326"><div class="col-md-12"><div class="form-group"><input type="text" name="label_92326" class="form-control form_input_label" value="Label" data-field="92326"></div></div><div class="col-md-12"><div class="form-group"><input type="text" name="placeholder_92326" data-field="92326" class="form-control form_input_placeholder" placeholder="Placeholder"></div></div><div class="col-md-12"><div class="form-group"><input type="text" name="text_92326" class="form-control form_input_name" placeholder="Name"></div></div><div class="col-md-12"><div class="form-check"><label class="form-check-label"><input data-field="92326" type="checkbox" class="form-check-input form_input_req">&nbsp; &nbsp;&nbsp;Required</label></div></div></div></div>`;
            content =document.querySelector('#form_builder_area');
           console.log(temp);
           content.innerHTML =temp;

           $('.form_builder_area').sortable({
            placeholder: 'block-placeholder',
            update: function (event, ui) {
               
                // turn the dragged item into a "block"
                ui.item.addClass('block');
                
            }
        });
        }
       
     });


   
});

function funoption(tag_op){

    for (let i=0; i<tag_op.length ; i++){

    }
}

function funRemoveOption(array, element) {
    return array.filter(el => el !== element);
  }

function funParsing(tag_obj){
    
    var html;
    for (let i=0 ; i<tag_obj.length ; i++)
    {   
        console.log(tag_obj);
        switch(tag_obj[i].type)
        {
            //789
            //convert 
            case 'checkbox':
                console.log('checkbox');
            break;
            case 'radio':
                    console.log('radio');
            break;
            case 'select':
                    console.log('select');
            break;            
            case 'button':
                console.log('button');
                html+=`
                <button name="${tag_obj[i].name}" type="submit" class="btn ${tag_obj[i].class}" id="${tag_obj[i].tagId}>${tag_obj[i].value}</button>`
            break;            
            case 'date':
                    console.log('date');
                    html+=`<div class="form-group">
                    <label class="control-label ${tag_obj[i].tagId}" id="${tag_obj[i].tagId}">${tag_obj[i].label}</label>
                    <input type="date" name="" class="form-control ${tag_obj[i].tagId}" id="${tag_obj[i].tagId}" ${tag_obj[i].required}/></div>`;
            break;            
            case 'textarea':
                    console.log('textarea');
                    html+=`
                    <div class="form-group">
                    <label class="control-label ${tag_obj[i].tagId}" id="${tag_obj[i].tagId}">${tag_obj[i].label}</label>
                    <textarea rows="5" name="${tag_obj[i].name}" placeholder="${tag_obj[i].placeholder}" class="form-control"  id="${tag_obj[i].tagId}" ${tag_obj[i].required}/>
                    </div>
                    `;
            break;            
            case 'password':
                    console.log('password');
                    html+=`
                    <div class="form-group">
                    <label class="control-label ${tag_obj[i].tagId}" id="${tag_obj[i].tagId}">${tag_obj[i].label}</label>
                    <input type="password" name="${tag_obj[i].name}" placeholder="${tag_obj[i].placeholder}" class="form-control" ${tag_obj[i].required} id="${tag_obj[i].tagId}"/>
                    </div>
                    `;
            break;
            case 'email':
                    console.log('email');
                    html+=`
                    <div class="form-group">
                    <label class="control-label ${tag_obj[i].tagId}" id="${tag_obj[i].tagId}">${tag_obj[i].label}</label>
                    <input type="email" name="${tag_obj[i].name}" placeholder="${tag_obj[i].placeholder}" class="form-control" ${tag_obj[i].required} id="${tag_obj[i].tagId}"/>
                    </div>
                    `;
            break;                        
            case 'number':
                    console.log('number');
                    html+=`
                    <div class="form-group">
                    <label class="control-label ${tag_obj[i].tagId}" id="${tag_obj[i].tagId}">${tag_obj[i].label}</label>
                    <input type="number" name="${tag_obj[i].name}" placeholder="${tag_obj[i].placeholder}" class="form-control" ${tag_obj[i].required} id="${tag_obj[i].tagId}"/>
                    </div>
                    `;
            break;            
            case 'text':
                    console.log('text');
                    html+=`
                    <div class="form-group">
                    <label class="control-label ${tag_obj[i].tagId}" id="${tag_obj[i].tagId}">${tag_obj[i].label}</label>
                    <input type="text" name="${tag_obj[i].name}" placeholder="${tag_obj[i].placeholder}" class="form-control" ${tag_obj[i].required} id="${tag_obj[i].tagId}"/>
                    </div>
                    `;
            break;            
        }
    }

    return html ;

   
}
