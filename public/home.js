$(document).ready(() => {
    $(document).click((element) => {
        if(element.target.getAttribute('data-modal') != 'tooltip-navbar') $('#modal-tooltip-navbar').addClass('d-none');
        else $('#modal-tooltip-navbar').removeClass('d-none');
    });
});