import { Schema, model, models } from "mongoose";

const ArtworksSchema = new Schema(
  {
    title: { type: String, required: true },
    link: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Artworks = models.Artworks || model("Artworks", ArtworksSchema);
