import Record from "../models/record.model.js";
import mongoose from "mongoose";

export const getTotalIncome = async(userId) =>{
    const result = await Record.aggregate([
        {
            $match: {
                user: new mongoose.Types.ObjectId(userId),
                type:'income'
            }
        },
        {
            $group: {
                _id:null,
                total : {$sum: '$amount'}
            }
        }
    ]);
    return result[0]?.total || 0;
}

export const getTotalExpense = async(userId) =>{
    const result = await Record.aggregate([
        {
            $match: {
                user: new mongoose.Types.ObjectId(userId),
                type:'expense'
            }
        },
        {
            $group: {
                _id:null,
                total : {$sum: '$amount'}
            }
        }
    ]);
    return result[0]?.total || 0;
}

export const getNetBalance = async(userId) =>{
    const income = await getTotalIncome(userId);
    const expense = await getTotalExpense(userId);

    return income-expense;
}

export const getCategorySummary = async(userId) =>{
    return await Record.aggregate([
        {
            $match: {
                user: new mongoose.Types.ObjectId(userId)
            }
        },
        {
            $group: {
                _id: '$category',
                total : {$sum: '$amount'}
            }
        }
    ]);
}

export const getMonthlyTrends = async(userId) =>{
    return await Record.aggregate([
        {
            $match: {
                user: new mongoose.Types.ObjectId(userId)
            }
        },
        {
            $group: {
                _id:{
                    year : {$year : '$date'},
                    month : {$month : '$date'}
                },
                total : {$sum: '$amount'}
            }
        },
        {
            $sort: {'_id.year': 1, '_id.month': 1}
        }
    ]);
}