
document.addEventListener('DOMContentLoaded', function() {
    const $el = document.querySelectorAll(".slider__wrapper");
    
    let pos = { top: 0, left: 0, x: 0, y: 0};

    var mouseMoveRef = () => {};

    var mouseUpRef = () => {};

    const mouseDownHandler = function(el, e) {
            el.style.cursor = 'grabbing';
            el.style.userSelect = 'none';
    
            pos = {
                left: el.scrollLeft,
                top: el.scrollTop,
                x: e.clientX,
                y: e.clientY
            };

            mouseMoveRef = function(e) {
                mouseMoveHandler(el, e);
            }

            mouseUpRef = function() {
                mouseUpHandler(el);
            }
        
            document.addEventListener('mousemove', mouseMoveRef);
            document.addEventListener('mouseup', mouseUpRef);
    };
        
    const mouseMoveHandler = function(el, e) {
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;
    
        el.scrollTop = pos.top - dy;
        el.scrollLeft = pos.left - dx;
    }
        
    const mouseUpHandler = function(el) {
        el.style.cursor = 'grab';
        el.style.removeProperty('user-select');

        document.removeEventListener('mousemove', mouseMoveRef);
        document.removeEventListener('mouseup', mouseUpRef);
    }

    Array.prototype.forEach.call($el, el => {
        el.style.cursor = 'grab';
        el.addEventListener('mousedown', function(e) {
            mouseDownHandler(this, e);
        });
    });
    
});

