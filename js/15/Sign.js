$(document).ready(function () {
    // sign up animation
    (function () {

        document.onreadystatechange = () => {

            if (document.readyState === 'complete') {

                /**
                 * Setup your Lazy Line element.
                 * see README file for more settings
                 */

                let el = document.querySelector('.SignUp');
                let myAnimation2 = new LazyLinePainter(el, { "ease": "easeOutExpo", "strokeWidth": 2, "strokeOpacity": 1, "strokeColor": "#865454", "strokeCap": "square" });
                myAnimation2.paint();
            }
        }

    })();
});
