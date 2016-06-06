function removeItem(data, key){
    data.items = data.items.filter(element => element.key != key);
    render(data);
}

function removeItemFromItems(element) {
    var data = loadData();
    var key = $(element).attr('key');
    removeItem(data, key);
}

function updateData(element){
    var data = loadData();
    var value = $(element).val();
    var key = $(element).attr('key');

    data.items = data.items.map(item => {
        if (item.key == key){
            item.value = value;
        }
        return item;
    });
    render(data);
}

function showEditPage(){
    $('.edit-page').show();
}

function hidePreviewPage(){
    $('.preview-page').hide();
}

function showPreviewPage(){
    $('.preview-page').removeClass('hidden');
    $('.preview-page').show();
}

function hideEditPage(){
    $('.edit-page').hide();
}