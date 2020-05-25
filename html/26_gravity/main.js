const ctx = document.querySelector("canvas").getContext("2d");

ctx.canvas.width = document.documentElement.clientWidth;
ctx.canvas.height = document.documentElement.clientHeight;

let earth, moon;


earth = new DPoint(new Vector2(ctx.canvas.width / 2, ctx.canvas.height / 2), 50, new Vector2(0, 0), new Vector2(0, 0), 0, 0, 255);
moon = new DPoint(new Vector2(ctx.canvas.width / 3, ctx.canvas.height / 2), 20, new Vector2(0, 10), new Vector2(0, 0), 230, 230, 230);
distanceEarthMoon = new Vector2(0, 0);
distanceMoonEarth = new Vector2(0, 0);

function Update(){
    requestAnimationFrame(Update);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    distanceEarthMoon.differenceVector(moon.pos, earth.pos);
    distanceMoonEarth.differenceVector(earth.pos, moon.pos);

    r = distanceEarthMoon.magnitude;

    distanceEarthMoon.magnitude = 0.5 / (r * r);
    distanceMoonEarth.magnitude = 1 / (r / r);


    earth.acc.equals(distanceEarthMoon);
    moon.acc.equals(distanceMoonEarth);

    earth.update();
    moon.update();
    earth.draw(ctx);
    moon.draw(ctx);

    distanceEarthMoon.draw(ctx, earht.pos, 1);

};

Update();
