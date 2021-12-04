function handleParticles() {
    for (let i = 0; i < parArray.length; i++) {
        parArray[i].draw();
        parArray[i].update();

        //to cancele gravity

        // if (parArray[i].y > winHeight - parArray[i].radius) {
        //     parArray.splice(i, 1);
        //     i--;
        // }



        for (let j = i; j < parArray.length; j++) {
            const dx = parArray[i].x - parArray[j].x;
            const dy = parArray[i].y - parArray[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 100) {
                c.beginPath();
                c.strokeStyle = parArray[i].color;
                c.lineWidth = parArray[i].radius / 6;
                c.moveTo(parArray[i].x, parArray[i].y);
                c.lineTo(parArray[j].x, parArray[j].y);
                c.stroke();
            }
        }
    }