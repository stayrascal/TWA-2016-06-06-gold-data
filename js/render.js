function render(data){
    renderBox(data, '.edit-page .box');
    renderBox(data, '.preview-page .box');
}

function renderBox(data, clsName){
    var componentBox = $(clsName);
    componentBox.empty();
    if (clsName.includes('edit')){
        componentBox.append(buildEditableComponent(data));
    }else{
        componentBox.append(buildPreviewComponent(data));
    }
}

function buildEditableComponent(data) {
    return new EJS({url: 'template/editableItem.ejs'}).render({data:data});
}

function buildPreviewComponent(data){
    return new EJS({url: 'template/previewItem.ejs'}).render({data:data});
}