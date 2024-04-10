import { Image } from "./Image"

export interface Collection {
    id?: string
    userId?: string
    name: string
    imageId?: string
    image?: Image | null
}