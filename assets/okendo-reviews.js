const dateFormat = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
});

window.okeReviewsWidgetOnInit = function () {

    const reviewMain = document.querySelector('.js-okeReviews-reviews-main');
    if (reviewMain) {
        const dateObserver = new MutationObserver(formatDateForElement);
        dateObserver.observe(reviewMain, {
            childList: true
        });
        formatDateForElement();

        const config = {
            childList: true
        };

        const callback = function (mutationList) {
            for (const mutation of mutationList) {
                mutation.addedNodes.forEach((n) => formatProductDetail(n));
            }
        };

        const observer = new MutationObserver(callback, config);
        observer.observe(reviewMain, config);

        const reviews = document.querySelectorAll(".okeReviews-reviews-review");
        reviews.forEach((n) => formatProductDetail(n));

        document.querySelector('#reviews').style.display = "block";
    }
};

function formatProductDetail(nodeElement) {

    function replaceProductName(product) {
        product.innerText = product.innerText.split('-')[0];
    }
  
    const productLink = nodeElement.querySelector('.okeReviews-review-reviewer-product-details-heading + *');
    if (productLink) {
        replaceProductName(productLink);
    }

    const mediaItem = nodeElement.querySelector('.js-okeReviews-mediaStrip-item');
    if (mediaItem) {
        mediaItem.addEventListener('click', e => {

            const checkModalElement = setInterval(modifyModalContent, 500);

            function modifyModalContent() {
                const reviewMainModalAttribute = document.querySelector('.js-okeReviews-modal-dialog .okeReviews-review-reviewer-product-details-heading + *');
                if (reviewMainModalAttribute) {
                    replaceProductName(reviewMainModalAttribute);
                    clearInterval(checkModalElement);
                    formatDateForElement();
                }
            }
        });
    }
}

function formatDateForElement() {
    const reviewDates = document.querySelectorAll('[data-oke-reviews-date]');
    for (const reviewDate of reviewDates) {
        const dateIsoString = reviewDate.getAttribute('data-oke-reviews-date');
        const date = new Date(dateIsoString);
        const localeDate = `${dateFormat.format(date)}`;
        reviewDate.innerText = localeDate;
    }
}