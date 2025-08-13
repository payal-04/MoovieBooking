import express from "express";
import { getUserBookings, updateFavourite } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get('/bookings', getUserBookings)
userRouter.post('/update-favourite', updateFavourite)