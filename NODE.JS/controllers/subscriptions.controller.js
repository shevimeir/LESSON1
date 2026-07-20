import * as subscriptionsService from '../services/subscriptions.service.js';

export function getAllSubscriptions(req, res) {
    try {
        const list = subscriptionsService.getAllSubscriptions();
        return res.status(200).json(list);
    } catch (error) {
        return res.status(500).json({ message: "שגיאה פנימית בשרת", error: error.message });
    }
}

export function createSubscription(req, res) {
    try {
        const { studentId, courseId } = req.body;
        
        if (!studentId || !courseId) {
            return res.status(400).json({ message: "מזהה סטודנט ומזהה קורס הם שדות חובה" });
        }
        
        const newEnrollment = subscriptionsService.createSubscription({ studentId, courseId });
        return res.status(201).json(newEnrollment);
    } catch (error) {
        return res.status(500).json({ message: "שגיאה פנימית בשרת", error: error.message });
    }
}