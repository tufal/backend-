


import express from "express";
import mongoose from "mongoose";
import connectDb from "./db/me.js";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

const app = express();

connectDb();