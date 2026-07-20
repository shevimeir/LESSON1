import express from 'express';
import * as subscriptionsController from '../controllers/subscriptions.controller.js';

const router = express.Router();

router.get('/', subscriptionsController.getAllSubscriptions);
router.post('/', subscriptionsController.createSubscription);

export default router;