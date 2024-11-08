/*

GEREKLİ PAKETLER YÜKLENİYOR...

*/
require('dotenv').config()
var http = require('http');
var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3005); // GİRİŞ PORTU AYARLANDI
app.set('views', __dirname + '/app/server/views'); // VIEW KLASÖRÜ TANITILDI
app.set('view engine', 'ejs'); // VIEW ENGINE AYARLANDI
app.use(express.static(__dirname + '/app/public')); // KULLANICILAR TARAFINDAN ERİŞİLEBİLEN KLASÖR TANIMLANDI
console.log(process.env.NODE_ENV_KEY)
require('./app/routes')(app); // ROUTE DOSYASI ÇAĞIRILDI

/*

HTTP SERVER OLUŞTURULDU

*/
const  env= process.env.NODE_ENV_KEY
http.createServer(app).listen(app.get('port'), function(){
	console.log('Sistem ' + app.get('port') + ` ${env}`);
});
