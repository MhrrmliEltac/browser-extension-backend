import { prisma } from "../prisma";
export const createExtension = async (req, res) => {
    try {
        const { name, description, isActive, logo } = req.body;
        if (!name || !description) {
            return res.status(400).json({
                message: "Name və description boş ola bilməz",
            });
        }
        const extension = await prisma.extension.create({
            data: {
                name,
                description,
                isActive: isActive ?? false,
                logo,
            },
        });
        return res.status(201).json(extension);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server xətası baş verdi" });
    }
};
//# sourceMappingURL=extension.js.map