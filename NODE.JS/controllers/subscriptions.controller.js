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

export function getSubscriptionById(req, res) {
    try {
        const { id } = req.params;
        const subscription = subscriptionsService.getSubscriptionById(id);
        
        if (!subscription) {
            return res.status(404).json({ message: "המנוי המבוקש לא נמצא" });
        }
        
        return res.status(200).json(subscription);
    } catch (error) {
        return res.status(500).json({ message: "שגיאה פנימית בשרת", error: error.message });
    }
}

export function updateSubscription(req, res) {
    try {
        const { id } = req.params;
        const updateData = req.body;
        
        const updatedSubscription = subscriptionsService.updateSubscription(id, updateData);
        
        if (!updatedSubscription) {
            return res.status(404).json({ message: "לא ניתן לעדכן: המנוי לא נמצא" });
        }
        
        return res.status(200).json(updatedSubscription);
    } catch (error) {
        return res.status(500).json({ message: "שגיאה פנימית בשרת", error: error.message });
    }
}

export function deleteSubscription(req, res) {
    try {
        const { id } = req.params;
        const isDeleted = subscriptionsService.deleteSubscription(id);
        
        if (!isDeleted) {
            return res.status(404).json({ message: "לא ניתן למחוק: המנוי לא נמצא" });
        }
        
        return res.status(200).json({ message: "המנוי נמחק בהצלחה" });
    } catch (error) {
        return res.status(500).json({ message: "שגיאה פנימית בשרת", error: error.message });
    }
}