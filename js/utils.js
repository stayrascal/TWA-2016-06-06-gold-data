function remoteItem(item){
    data.items = data.items.filter(element => element.value !== item.value);
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