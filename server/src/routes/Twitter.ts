import { Router } from "express";
import { OK } from "http-status-codes";

const router = Router();

/**
 * GET /api/twitter/test
 */
router.get("/test", async (request, response) => {
    return response.status(OK).json({ me: "hi" });
});

export default router;
