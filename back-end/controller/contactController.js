import contactModel from "../model/contactModel.js";

export const contact = async (req,res)=>{
    try{

        const storeContact = new contactModel(req.body);
        if(!storeContact){
            return res.status(404).json({message:"There is Something Wrong."})
        }

        const saveContact = await storeContact.save();
        res.status(200).json(saveContact);

    }
    catch(error){
        res.status(500).json({error:error})
    }
}