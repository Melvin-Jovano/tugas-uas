$(document).ready(() => {
    $(document).click((element) => {
        if(element.target.getAttribute('data-modal') != 'tooltip-navbar') $('#modal-tooltip-navbar').addClass('d-none');
        else $('#modal-tooltip-navbar').removeClass('d-none');
    });

    $('.writer-tooltip').hover((element) => {
        $(`#${element.currentTarget.getAttribute('data-tooltip')}`).toggleClass('d-none');
    });

    $('.share-tooltip').hover((element) => {
        $(`#${element.currentTarget.getAttribute('data-tooltip')}`).toggleClass('d-none');
    });

    $('.more-tooltip').hover((element) => {
        $(`#${element.currentTarget.getAttribute('data-tooltip')}`).toggleClass('d-none');
    });

    $('.upvote-tooltip').hover((element) => {
        $(`#${element.currentTarget.getAttribute('data-tooltip')}`).toggleClass('d-none');
    });

    $('.downvote-tooltip').hover((element) => {
        $(`#${element.currentTarget.getAttribute('data-tooltip')}`).toggleClass('d-none');
    });

    $('.refresh-tooltip').hover((element) => {
        $(`#${element.currentTarget.getAttribute('data-tooltip')}`).toggleClass('d-none');
    });

    $('.comment-tooltip').hover((element) => {
        $(`#${element.currentTarget.getAttribute('data-tooltip')}`).toggleClass('d-none');
    });

    $('.hide-tooltip').hover((element) => {
        $(`#${element.currentTarget.getAttribute('data-tooltip')}`).toggleClass('d-none');
    });
});