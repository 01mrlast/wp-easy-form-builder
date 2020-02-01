
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
