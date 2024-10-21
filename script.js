const originalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    function shuffleNumbers() {
        const shuffled = originalNumbers.sort(() => Math.random() - 0.5);
        const numberElements = document.querySelectorAll('.number');
        
        numberElements.forEach((el, index) => {
            el.textContent = shuffled[index];
        });
    }