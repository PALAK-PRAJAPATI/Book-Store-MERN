import express from "express"
import { add, deleteBook, getAllBook, getOne, updateBook } from "../controller/bookController.js";
import { contact } from "../controller/contactController.js";


const route = express.Router();

// Add book APIs.
route.post("/add",add);

route.get("/getall",getAllBook)

route.get("/getone/:id",getOne)

route.put("/update/:id",updateBook)

route.delete("/delete/:id",deleteBook)

route.post("/contact",contact)



export default route;