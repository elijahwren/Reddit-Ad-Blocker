//function to block add tags
const hideAds = () => {
    const ads = document.querySelectorAll("shreddit-ad-post, shreddit-dynamic-ad-link");

    ads.forEach((ad) => {
        ad.style.display = "none";
    })
}

const resizeObserver = new ResizeObserver(() => {
    hideAds();
})

resizeObserver.observe(document.body);