import subscriptions from '../data/subscriptions.js';

export function getAllSubscriptions() {
    return subscriptions;
}

export function createSubscription(subscriptionData) {
    const nextId = subscriptions.length > 0 ? Math.max(...subscriptions.map(s => s.id)) + 1 : 1;
    
    const newSubscription = {
        id: nextId,
        studentId: Number(subscriptionData.studentId),
        courseId: Number(subscriptionData.courseId),
        enrollmentDate: new Date().toISOString().split('T')[0] // תאריך של היום
    };
    
    subscriptions.push(newSubscription);
    return newSubscription;
}