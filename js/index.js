var data = loadData();
$(function () {
    render(data);

    $('#add-component').click(function () {
        var componentType = $('input[name="component-type"]:checked').val();
        var component = {'type': componentType, 'value': ''};
        data.items.push(component);
        render(data);
        $('#myModal').modal('toggle');
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