const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    // console.log(counter); 

    counter.innerHTML = 0;
    {
        counter.style.fontSize = '70px';
        counter.style.marginBottom = '30px';
        counter.style.color = 'darkslateblue';
    }

    const updateCounter = () => {
        const targetCount = +counter.getAttribute('data-target');
        console.log(targetCount);

        const startingCount = Number(counter.innerHTML);

        const incr = targetCount / 10;

        if (startingCount < targetCount) {
            counter.innerHTML = `${startingCount + incr}`;
            setTimeout(updateCounter, 100)
        }
    }

    updateCounter();
})