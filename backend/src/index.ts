//app imported from app.ts
import app from './app'; 
//Connect to database before listening to the server
import './database'; 

//Listen to the port we get from app.ts
app.listen(app.get('port')); 

//Display a console log
console.log('Server in port', app.get('port'));
