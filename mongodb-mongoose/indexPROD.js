import mongoose from 'mongoose' 
import Query from 'mysql/lib/protocol/sequences/Query.js';
import Reservations from './model/Reservation.js';


mongoose.connect(process.env.MONGODB_URI) 

/// Create a new blog post object
const res = new Reservations({
	name: 'Nick Miller Proddd',
	email: 'nickmiller.7875@gmail.com',
	valid: true,
	phone: '3306055901',
	arrive: '2023-01-07T05:00:00.000+00:00',
	depart: '2023-01-07T05:00:00.000+00:00',
	message: 'second message',
	subject: 'second subject'
  });
  
// Insert the article in our MongoDB database
await res.save();


const devRevs = await Reservations.where("name").equals("Nick Miller Prod");
console.log(devRevs);

