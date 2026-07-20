import * as subscriptionsController from '../controllers/subscriptions.controller.js';
import { Router } from 'express';
import { checkAuthKey } from '../middlewares/auth.middleware.js';

const router = Router();

router.use(checkAuthKey);

router.get('/', subscriptionsController.getAllSubscriptions);
router.post('/', subscriptionsController.createSubscription);

export default router;