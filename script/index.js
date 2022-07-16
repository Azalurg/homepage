function choseBackground(){
    const backgrounds = [
        "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg", 
        "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg",
        "https://images.pexels.com/photos/2748716/pexels-photo-2748716.jpeg",
        "https://images.pexels.com/photos/2885320/pexels-photo-2885320.jpeg",
        "https://images.pexels.com/photos/130621/pexels-photo-130621.jpeg",
        "https://images.pexels.com/photos/4004374/pexels-photo-4004374.jpeg",
        "https://images.pexels.com/photos/1267881/pexels-photo-1267881.jpeg",
        "https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg",
        "https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg",
        "https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg",
        "https://images.pexels.com/photos/12322495/pexels-photo-12322495.jpeg",
        "https://images.pexels.com/photos/11993618/pexels-photo-11993618.jpeg",
        "https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg",
        "https://images.pexels.com/photos/4512439/pexels-photo-4512439.jpeg",
        "https://images.pexels.com/photos/623919/pexels-photo-623919.jpeg",
        "https://images.pexels.com/photos/3394939/pexels-photo-3394939.jpeg",
        "https://images.pexels.com/photos/2531608/pexels-photo-2531608.jpeg",
        "https://images.pexels.com/photos/4198029/pexels-photo-4198029.jpeg",
        "https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg",
        "https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg",
        "https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg",
        "https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg",
        "https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg",

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