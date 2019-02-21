


module.exports = function(app) {
    // Routes
    app.get('/v2/', function (req, res) {
        res.json({
            age: 5
        }); // API
    });


    app.get('/v2/about', function (req, res) {
        res.json({
            name: 'Patrick James'
        });
    });

     app.get('/v2/contact', function (req, res) {
         res.json({
             name: 'Patrick James'
         });
     });
}
