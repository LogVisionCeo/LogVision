import { sql } from "drizzle-orm";
import { pgTable, text, varchar, real, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const trips = pgTable("trips", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  origin: text("origin").notNull(),
  destination: text("destination").notNull(),
  distance: real("distance").notNull(),
  cargoWeight: real("cargo_weight").notNull(),
  truckType: text("truck_type").notNull(),
  fuelType: text("fuel_type").notNull(),
  fuelConsumed: real("fuel_consumed").notNull(),
  co2Emissions: real("co2_emissions").notNull(),
  date: timestamp("date").notNull().defaultNow(),
});

export const insertTripSchema = createInsertSchema(trips).omit({
  id: true,
  date: true,
});

export type InsertTrip = z.infer<typeof insertTripSchema>;
export type Trip = typeof trips.$inferSelect;
