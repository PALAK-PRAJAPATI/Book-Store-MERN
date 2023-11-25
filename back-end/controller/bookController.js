import bookStore from "../model/bookModel.js";


// APIs for add new BOOK.
export const add = async(req,res)=>{
    try{

        const Store = new bookStore(req.body);
        if(!Store){
            return res.status(404).json({message:"User Data Not Found"});
        }

        const saveBook = await Store.save();
        res.status(200).json(saveBook);

    }
    catch(error){
        res.status(500).json({error:error})
    }
}


// APIs for featch all Books.
export const getAllBook = async(req,res)=>{
    try{

        // fetch All Book.
        const getBook = await bookStore.find();

        // if we can't get a Book.
        if(!getBook){
            res.status(404).json({message:"Book Not Found"})
        }
        // if we get the all books successfully.
        res.status(200).json(getBook);
    }
    catch(error){
        res.status(500).json({error:error})
    }
}


// if we want to get one book from the id.
// APIs for getOne book from the id.
export const getOne = async(req,res)=>{
    try{

        // using is from the params.
        const id = req.params.id;
        const getOne = await bookStore.findById(id);

        // if we can't find the Book Data.
        if(!getOne){
            return res.status(404).json({message:"Book Not Found"})
        }

        // if we find the book from the id.
        res.status(200).json(getOne);

    }
    catch(error){
        res.status(500).json({error:error})
    }
}


// if we want to Update our Book details.
// Update APIs.
export const updateBook = async(req,res)=>{
    try{

        const id = req.params.id;
        const existBook = await bookStore.findById(id);

        // if we can't get the book.
        if(!existBook){
            return res.status(401).json({message:"Book Not Found"});
        }

        // if we find the user and update.
        // findByIdAndUpdate method take three parameters. first: id, second:res.body (getOur Data) , thrid: "accept our update data."
        const bookUpdate = await bookStore.findByIdAndUpdate(id,req.body, {new:true});
        res.status(200).json(bookUpdate);

    }
    catch(error){
        res.status(404).json({error:error})
    }
}


// if we want to delete our Book.
// Delete Book APIs.
export const deleteBook = async(req,res)=>{
    try{

        // get the book id from the url params.
        const id = req.params.id;
        const bookExist = await bookStore.findById(id);

        if(!bookExist){
            return res.status(404).json({message:"Book Not Found"});
        }

        await bookStore.findByIdAndDelete(id);
        res.status(200).json({message:"Book Deleted Successfully..."})

    }
    catch(error){
        res.status(404).json({error:error})
    }
}