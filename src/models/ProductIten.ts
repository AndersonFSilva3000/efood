class ProductIten {
  image: string
  category?: string[]
  title: string
  avaliable?: string
  description: string
  id: number

  constructor(
    image: string,
    category: string[],
    title: string,
    avaliable: string,
    description: string,
    id: number
  ) {
    this.image = image
    this.category = category
    this.title = title
    this.avaliable = avaliable
    this.description = description
    this.id = id
  }
}

export default ProductIten
