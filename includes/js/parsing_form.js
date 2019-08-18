
function funParsing(tag_obj){
    var html;
    console.log('type is :'+typeof  tag_obj);
    console.log(tag_obj.toString());
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
               `
            break;            
            case 'date':
                    console.log('date');
                    html+=``;
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
                    
                    `;
            break;            
        }
    }

    return html ;

   
}
