async function loadReviews() {
    clearReviewsSection();
    showLoadingIndicator();

    try {
        const randomNumber = Math.floor(Math.random() * 100 + 1);
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${randomNumber}/comments`);
        const comments = await response.json();

        addReviews(comments);
    } catch(error) {
        alert("Oops! Something went wrong.");
    }

    hideLoadingIndicator();
}

function showLoadingIndicator() {
    const loadingSection = document.getElementById('preloader');
    loadingSection.innerHTML = '<img class="preloaderGif" src="assets/preloader.gif" alt="Loading">';
}

function hideLoadingIndicator() {
    const loadingSection = document.getElementById('preloader');
    loadingSection.innerHTML = '';
}

function addReviews(comments) {
    const reviewTemplate = document.querySelector('#reviewItem');
    const reviewsSection = document.getElementById('reviews');

    comments.forEach(comment => {
        const reviewItem = reviewTemplate.content.cloneNode(true);

        const name = reviewItem.querySelector('div h4');
        const text = reviewItem.querySelector('div p');

        name.innerHTML = comment.name;
        text.innerHTML = comment.body;

        reviewsSection.appendChild(reviewItem);
    });
}

function clearReviewsSection() {
    const reviewsSection = document.getElementById('reviews');
    reviewsSection.innerHTML = '';
}

function getReviewsButtonOnClickHandler() {
    const getReviewsButton = document.getElementById('getReviewsButton');
    getReviewsButton.addEventListener('click', event => loadReviews());
}

document.addEventListener('DOMContentLoaded', event => getReviewsButtonOnClickHandler())