function choseBackground(){
    const backgrounds = [
        "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg", 
        "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg",
        "https://images.pexels.com/photos/2748716/pexels-photo-2748716.jpeg",
        "https://images.pexels.com/photos/2885320/pexels-photo-2885320.jpeg",
        "https://images.pexels.com/photos/130621/pexels-photo-130621.jpeg",
        "https://images.pexels.com/photos/4004374/pexels-photo-4004374.jpeg"
    ];

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
;
    const seed = backgrounds.length;
    const chose = getRandomInt(0,seed-1);

    const body = document.getElementById("body");
    body.style.backgroundImage = `url(${backgrounds[chose]})`;
}