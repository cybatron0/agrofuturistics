export type ProductCategory = 'plants' | 'trees'

export type Product = {
  id: string
  category: ProductCategory
  name: string
  englishName: string
  variety?: string
  price: number
  status?: string
  description: string
  image: string
  featured?: boolean
}

export const WHATSAPP_NUMBER = '265991234567'
export const DISPLAY_PHONE = '+265 991 234 567'

export const products: Product[] = [
  { id: 'anyezi', category: 'plants', name: 'Anyezi', englishName: 'Onions', variety: 'Red Creole', price: 25, status: 'Available', description: 'Strong, healthy onion seedlings ready for your garden or field.', image: '/images/seedling-tray.png', featured: true },
  { id: 'kabichi', category: 'plants', name: 'Kabichi', englishName: 'Cabbage', variety: 'Copenhagen', price: 80, status: 'Ready to plant', description: 'Vigorous cabbage seedlings selected for a confident start and even growth.', image: '/images/seedling-tray.png', featured: true },
  { id: 'rape', category: 'plants', name: 'Rape', englishName: 'Rape greens', price: 45, description: 'Fresh leafy-green seedlings for a quick, nourishing harvest.', image: '/images/seedling-tray.png' },
  { id: 'mustard', category: 'plants', name: 'Mustard', englishName: 'Mustard greens', price: 45, description: 'Healthy mustard seedlings to bring bold flavour to your kitchen garden.', image: '/images/seedling-tray.png' },
  { id: 'chinese', category: 'plants', name: 'Chinese', englishName: 'Chinese cabbage', price: 45, description: 'Tender, ready-to-grow greens for productive beds and small spaces.', image: '/images/seedling-tray.png' },
  { id: 'chilli', category: 'plants', name: "Bird's Eye Chilli", englishName: 'Sabola wa Kapiripiri', price: 70, status: 'Ready', description: 'Bright, spirited chilli seedlings for home gardens and commercial plots.', image: '/images/seedling-tray.png', featured: true },
  // Replace each image path below with the original nursery photograph supplied by the developer.
  { id: 'trees', category: 'trees', name: 'Mitengo', englishName: 'Tree seedlings', price: 0, status: 'Ask for price', description: 'Strong young trees for farms, homesteads, shade, fruit, and a greener Malawi.', image: '/images/tree-seedlings.png', featured: true },
]

export const formatPrice = (price: number) => price === 0 ? 'Ask for price' : `K${price.toLocaleString('en-MW')}`
