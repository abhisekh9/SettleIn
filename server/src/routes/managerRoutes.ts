import { Router } from "express";
import { createManager, getManager, getManagerProperties, updateManager } from "../controllers/managerControllers";

const managerRoutes = Router();

managerRoutes.get("/:cognitoId", getManager);
managerRoutes.put("/:cognitoId", updateManager);
managerRoutes.get("/:cognitoId/properties", getManagerProperties);
managerRoutes.post("/", createManager);

export default managerRoutes;