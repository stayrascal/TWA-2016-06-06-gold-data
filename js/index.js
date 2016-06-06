function addComponent(data) {
    var componentType = $('input[name="component-type"]:checked').val();
    var component = {'type': componentType, 'value': '', 'key': new Date().getTime()};
    data.items.push(component);
    render(data);
    $('#myModal').modal('toggle');
}

var data = loadData();
$(function () {
    render(data);

    $('#add-component').click(function () {
        addComponent(data);
    });

    $('.edit').click(function(){
        showEditPage();
        hidePreviewPage();
    });

    $('.preview').click(function(){
        showPreviewPage();
        hideEditPage();
    });
});