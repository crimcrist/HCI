document.addEventListener("DOMContentLoaded", function() {
    function updateBackgrounds() {
        const isMobile = window.innerWidth < 768;

        const setBg = (selector, desktopPath, mobilePath) => {
            const el = document.querySelector(selector);
            if (el) {
                el.style.backgroundImage = isMobile 
                    ? `url('${mobilePath}')` 
                    : `url('${desktopPath}')`;
            }
        };

        setBg('.main', './images/background-main.jpg', './images/bg-mobile-main.jpg');
        setBg('.about', './images/background-about.jpg', './images/bg-mobile-about.jpg');
        setBg('.agent-wow', './images/background-agent.jpg', './images/bg-mobile-agent.jpg');
        setBg('.map-kece', './images/background-map.jpg', './images/bg-mobile-map.jpg');
        setBg('.articles', './images/background-news.jpg', './images/bg-mobile-news.jpg');
    }

    updateBackgrounds();
    window.addEventListener('resize', updateBackgrounds);
});
