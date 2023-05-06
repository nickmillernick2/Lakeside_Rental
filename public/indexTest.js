import mongoose from 'mongoose' 
import Query from 'mysql/lib/protocol/sequences/Query.js';
import Reservations from './model/Reservation.js';


mongoose.connect("mongodb+srv://nickmiller7875:gGdckHV9mNz8aUDH@cluster0.gaxwh6s.mongodb.net/Lakeside?retryWrites=true&w=majority") 

/// Create a new blog post object
const res = new Reservations({
	name: 'Nick Miller Test',
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


const testRevs = await Reservations.where("name").equals("Nick Miller Test");
console.log(testRevs);

