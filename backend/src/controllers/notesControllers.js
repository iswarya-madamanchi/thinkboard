import Note from "../models/Note.js"
export  async function getAllNotes(req,res){
    try{
        const notes = await Note.find().sort({createdAt:-1})
        res.status(200).json(notes)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}

export async function getNotesById(req,res){
    try{
        const note = await Note.findById(req.params.id)
        if(!note) return res.status(404).json({message:"Note not found"})
        res.status(200).json(note)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}

export async function createNotes(req,res){
    const note = new Note({
        title:req.body.title,
        content:req.body.content
    })
    try{
        const savedNote = await note.save()
        res.status(201).json(savedNote)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}

export async function updateNotes(req,res){
    try{
        const {title,content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title,content}, {new:true})
        res.status(200).json(updatedNote)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}

export async function deleteNotes(req,res){
    try{
        await Note.findByIdAndDelete(req.params.id)
        res.status(200).json({message:`post with id ${req.params.id} deleted successfully`})
    }catch(err){
        res.status(500).json({message:err.message})
    }
}