import { Router } from "express";
import { createProperty, getProperties, getProperty, getLeasesByPropertyId } from "../controllers/propertyControllers";
import { authMiddleware } from "../middleware/authMiddleware";
import multer from "multer";

const propertyRoutes = Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

propertyRoutes.get("/", getProperties);
propertyRoutes.get("/:id", getProperty);
propertyRoutes.post("/",authMiddleware(["manager"]),upload.array("photos"),  createProperty);
propertyRoutes.get("/:id/leases",authMiddleware(["manager"]),getLeasesByPropertyId);

export default propertyRoutes;