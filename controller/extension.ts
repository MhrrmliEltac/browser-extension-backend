import { Request, Response } from "express";
import { prisma } from "../prisma";
import cloudinary from "../lib/cloudinary";

interface Extension {
  name: string;
  description: string;
  isActive: string;
  logo: string;
}

export const createExtension = async (req: Request, res: Response) => {
  try {
    const file = req.file;
    const { name, description, isActive } = req.body as Omit<Extension, "logo">;

    if (!file) return res.status(400).json({ error: "Don't found file" });

    const buffer = file.buffer;

    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "products" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );

      stream.end(buffer);
    });

    if (!name || !description) {
      return res.status(400).json({
        message: "Name and description cannot be empty",
      });
    }

    const extension = await prisma.extension.create({
      data: {
        name,
        description,
        isActive: JSON.parse(isActive) ?? false,
        logo: (result as any).secure_url,
      },
    });

    return res.status(201).json(extension);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const getExtension = async (req: Request, res: Response) => {
  try {
    const extension = await prisma.extension.findMany();

    return res.status(200).json({ message: "All extension", extension });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const updateExtension = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description, isActive } = req.body as Omit<Extension, "logo">;

    if (!name || !description) {
      return res
        .status(400)
        .json({ message: "Name and description cannot be empty" });
    }

    if (id) {
      const updatedExtension = await prisma.extension.update({
        where: {
          id: id,
        },
        data: {
          name,
          description,
          isActive: JSON.parse(isActive) ?? false,
        },
      });
      return res
        .status(200)
        .json({ message: "Extension updated", updatedExtension });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const updateActiveExtension = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { isActive } = req.body;

    if (id) {
      const updatedExtension = await prisma.extension.update({
        where: {
          id,
        },
        data: {
          isActive: JSON.parse(isActive) ?? false,
        },
      });

      return res
        .status(200)
        .json({ message: "Extension status updated", updatedExtension });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const deleteExtension = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (id) {
      const deletedExtension = await prisma.extension.delete({
        where: {
          id,
        },
      });

      return res
        .status(200)
        .json({ message: "Deleted extension", deletedExtension });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};
