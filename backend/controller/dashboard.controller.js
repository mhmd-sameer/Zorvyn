import { 
    getTotalExpense,
    getTotalIncome,
    getCategorySummary,
    getMonthlyTrends,
    getNetBalance
 } from "../service/dashboard.service.js";

 export const getDashboardSummary = async(req, res) =>{
    try{
        const userId = req.user.id;

        const income = await getTotalIncome(userId);
        const expense = await getTotalExpense(userId);
        const balance = await getNetBalance(userId);
        const monthlytrends = await getMonthlyTrends(userId);
        const categorysummary = await getCategorySummary(userId);

        res.json({
            totalIncome : income,
            totalExpense : expense,
            netBalance : balance,
            categorySummary : categorysummary,
            monthlyTrends : monthlytrends
        });
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
 }