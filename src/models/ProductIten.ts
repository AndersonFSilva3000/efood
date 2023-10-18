class ProductIten {
  image: string
  emphasis?: boolean
  type?: string
  title: string
  avaliable?: string
  description: string
  id: number

  constructor(
    image: string,
    emphasis: boolean,
    type: string,
    title: string,
    avaliable: string,
    description: string,
    id: number
  ) {
    this.image = image
    this.emphasis = emphasis
    this.type = type
    this.title = title
    this.avaliable = avaliable
    this.description = description
    this.id = id
  }
}

export default ProductIten
