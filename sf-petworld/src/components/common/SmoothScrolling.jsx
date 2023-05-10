import { useEffect } from "react";

function SmoothScrolling() {
  useEffect(() => {
    let last_known_scroll_position = 0;
    let ticking = false;

    function doSomething(scroll_pos) {
      // Do something with the scroll position
      console.log(scroll_pos);
    }

    window.addEventListener("wheel", (event) => {
      event.preventDefault();
      last_known_scroll_position = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(function () {
          doSomething(last_known_scroll_position);
          ticking = false;
        });
      }
      ticking = true;
    });
  }, []);

  return <div>Smooth scrolling is active</div>;
}

export default SmoothScrolling;
