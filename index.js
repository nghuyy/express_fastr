module.exports = (paths,app) => {
    paths.forEach(d => {
        if (typeof d[2] !== "undefined") {
            d[1].app = app;
            for (let key in d[2]) {
                d[1][key] = d[2][key];
            }
        }
        app.use(d[0], d[1]);
    });
};