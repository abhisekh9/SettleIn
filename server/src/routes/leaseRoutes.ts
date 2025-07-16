import { Router } from "express";
import { getLeasePayments, getLeases } from "../controllers/leaseControllers";
import { authMiddleware } from "../middleware/authMiddleware";

const leaseRoutes = Router();

leaseRoutes.get("/",authMiddleware(["manager", "tenant"]),  getLeases);
leaseRoutes.get("/:id/payments",authMiddleware(["manager", "tenant"]),  getLeasePayments);

export default leaseRoutes;