import { Router } from 'express';
import TwitterRouter from './Twitter';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/twitter', TwitterRouter);

// Export the base-router
export default router;
