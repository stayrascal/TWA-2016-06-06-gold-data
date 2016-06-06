function render(data){
    renderBox(data, '.edit-page .box');
    renderBox(data, '.preview-page .box');
}

function renderBox(data, clsName){
    var componentBox = $(clsName);
    componentBox.empty();
    data.items.forEach(function (item) {
        if (clsName.includes('edit')){
            componentBox.append(buildEditableComponent(item));
        }else{
            componentBox.append(buildPreviewComponent(item));
        }
    });
}

function buildEditableComponent(item) {
    var componment = $(`<div class="col-md-7 text-center">
                                <input type="${item.type}" class="input-sm" value="${item.value}"/>
                                <button class="left btn-sm">Remove</button>
                            </div>`);

    componment.find('button').click(function () {
        remoteItem(item);
        render(data);
    });

    componment.find('input').change(function () {
        item.value = this.value.trim();
        render(data);
    });

    return componment;
}

function buildPreviewComponent(item){
    var componment = $(`<div class="col-md-7">
                                <label class="list-inline">${item.type}:<span>${item.value}</span></label>
                           </div>`);
    return componment;
}