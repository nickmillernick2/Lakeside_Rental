import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const reservationSchema = new Schema({
  valid: Boolean,
  name: String,
  email: String,
  phone: String,
  arrive: Date,
  depart: Date,
  message: String,
  subject: String,
});

const Reservation = model('ReservationsDev', reservationSchema);
export default Reservation;