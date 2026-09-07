import { CollectionConfig } from "payload";

export const Product: CollectionConfig = {
    slug: "product",
    fields: [
        {
            name: "title",
            type: "text"
        },
        {
            name: "image",
            type: "upload",
            relationTo: "media",
            required: true,
        },
    ]
};