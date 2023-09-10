export interface CatalogItem {
    sizes?: Size[]
    material: string
    basePrice: number
    imgUrl: string
    id: number
  }
  
  export interface Size {
    name: string
    coefficent: number
    description: string[]
  }