
import { createRecordService,
        getRecordService,
        updateRecordService,
        deleteRecordService } from "../service/record.service.js";

export const createRecord = async(req, res) => {
    try{
        const record = await createRecordService(req.body, req.user.id);

        res.status(201).json({
            message: "Record Created",
            record
        });
    }
    catch(err){
        res.status(400).json({message : err.message});
    }
}

export const getRecord = async(req, res) => {
    try{
        const records = await getRecordService(req.query);

        res.status(200).json(records);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
}

export const updateRecord = async(req, res) => {
    try{
        const record = await updateRecordService(req.params.id, req.body );

        res.status(200).json({
            message : "Record Updatd",
            record
        });
    }
    catch(err) {
        res.status(400).json({message: err.message});
    }
}

export const deleteRecord = async(req, res) => {
    try{
        await deleteRecordService(req.params.id);

        res.status(200).json({
            message:"Record Deleted"
        })
    }
    catch(err) {
        res.status(400).json({message: err.message});
    }
}