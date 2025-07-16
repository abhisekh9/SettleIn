import { Router } from "express";
import { addFavoriteProperty, createTenant, getCurrentResidences, getTenant, removeFavoriteProperty, updateTenant } from "../controllers/tenantControllers";

const tenantRoutes = Router();

tenantRoutes.get("/:cognitoId", getTenant);
tenantRoutes.put("/:cognitoId", updateTenant);
tenantRoutes.post("/", createTenant);
tenantRoutes.get("/:cognitoId/current-residences", getCurrentResidences);
tenantRoutes.post("/:cognitoId/favorites/:propertyId", addFavoriteProperty);
tenantRoutes.delete("/:cognitoId/favorites/:propertyId", removeFavoriteProperty);

export default tenantRoutes;