$(document).ready(function () {
    // log in animation
    (function () {

        document.onreadystatechange = () => {

            if (document.readyState === 'complete') {

                /**
                 * Setup your Lazy Line element.
                 * see README file for more settings
                 */

                let el = document.querySelector('#logIn');
                let myAnimation1 = new LazyLinePainter(el, { "ease": "easeOutExpo", "strokeWidth": 3, "strokeOpacity": 0, "strokeColor": "#bda79e", "strokeCap": "square" });
                myAnimation1.paint();
            }
        }

    })();
});
