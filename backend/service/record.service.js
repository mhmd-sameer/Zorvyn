import Record from '../models/record.model.js';

export const createRecordService = async(data, userId) =>{
    const record = await Record.create({
        ...data,
        user : userId
    });

    return record;
};

export const getRecordService = async(query,userId) =>{
    const filter = {
        user : userId
    };

    if(query.type){
        filter.type = query.type;
    }

    if(query.category){
        filter.category = query.category;
    }

    if(query.startDate && query.endDate) {
        filter.date = {
            $gte : new Date(query.startDate),
            $lte : new Date(query.endDate)
        };
    }

    const records = await Record.find(filter).sort({date: -1});
    return records;
}

export const updateRecordService = async(id, data) =>{
    const record = await Record.findByIdAndUpdate(
        id,
        data,
        {new : true}
    );

    if(!record){
        throw new Error("Record not found");
    }

    return record;
}

export const deleteRecordService = async(id) =>{
    const record = await Record.findByIdAndDelete(id);

    if(!record){
        throw new Error("Record not found");
    }

    return {message: "Record deleted"}
}


export default createRecordService;