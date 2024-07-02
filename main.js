/* These variables store references to elements on the page with specific IDs */
let about = document.getElementById('about');
let timeline = document.getElementById('timeline');
let work = document.getElementById('work');

/* This variable stores a NodeList of all "<a>" elements found on the page. This is obtained using "document.querySelectorAll('a')" */
let aHref = document.querySelectorAll('a');

/* This variable keeps track of the currently active tab by storing its ID. Set to the defined ID, indicating the said section is active. */
let active = 'about';

/* This variable keeps track of the z-index value for the active tab, allowing the currently active tab to appear on top of others */
let zIndex = 2;

/* Iterates through each <a> element in aHref using forEach and attaches a click event listener to each one */
aHref.forEach(a => {
    a.addEventListener('click', function(event){

        /* Event handler logic
        It first retrieves the data-tab attribute value from the clicked "<a>" element using "a.dataset.tab". 
        This value presumably corresponds to the ID of the section or tab that should be activated. */
        let tab = a.dataset.tab;
        /* It checks if tab (the clicked tab ID) is not null and is different from the currently active tab (active). */
        if(tab !== null && tab !== active){

            /* when conditions are met:
            Remove the active class from the currently active tab (activeOld). */
            let activeOld = document.querySelector('.tab.active');
            /* Update active to the new tab ID (tab). */
            if(activeOld) activeOld.classList.remove('active');
            active = tab;
            
            /* Retrieve the element corresponding to the new active tab (tabActive). */
            let tabActive = document.getElementById(active);
            /* Increment zIndex to bring the new active tab to the front. */
            zIndex++;
            tabActive.style.zIndex = zIndex;
            /* css custom properties to cpontrol the position of tab and visual effect related to mouse click position */
            tabActive.style.setProperty('--x', event.clientX + 'px');
            tabActive.style.setProperty('--y', event.clientY + 'px');
            /* Add the active class to tabActive, making it visually active. */
            tabActive.classList.add('active');
        }
    })
})