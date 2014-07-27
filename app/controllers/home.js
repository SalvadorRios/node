var homeController = function (server){

	console.log('corriendo en localhost:3000');

	server.route('/')

		.get(function(req, res){
			res.send('Hola maginkgo');
		});
};

module.exports = homeController;