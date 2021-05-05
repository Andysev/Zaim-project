const margin = () => {
    function headerMargin(triggerSelector, header) {
        const head = document.querySelector(header),
              trigger = document.querySelector(triggerSelector);
    
        trigger.forEach(item => {
            item.addEventListener('hover', (e) =>{
                if (e.target) {
                    e.preventDefault();
                }
                head.style.marginTop = "82px";
            });
        });
    }
headerMargin('.zaim', '.header_inner-tree');
};
export default margin;