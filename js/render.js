var Render = {
    render: function(data){
        this.renderBox(data, '.edit-page .box');
        this.renderBox(data, '.preview-page .box');
    },
    renderBox: function(data, clsName){
        var componentBox = $(clsName);
        componentBox.empty();
        if (clsName.includes('edit')){
            componentBox.append(this.buildEditableComponent(data));
        }else{
            componentBox.append(this.buildPreviewComponent(data));
        }
    },
    buildEditableComponent: function(data) {
        return new EJS({url: 'template/editableItem.ejs'}).render({data:data});
    },
    buildPreviewComponent(data){
        return new EJS({url: 'template/previewItem.ejs'}).render({data:data});
    }

};

