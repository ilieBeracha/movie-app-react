class ScrollTo {
    scrollTo() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

export const scrollTo = new ScrollTo