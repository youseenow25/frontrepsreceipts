// Example receipts shown in the hero strips.
// `key` must match a key in components/brands.json (it becomes the /brands/[brand] URL),
// while `img` keeps the legacy filename of the example screenshot in /public.
export type ExampleBrand = { key: string; img: string; label: string }

export const exampleBrands: ExampleBrand[] = [
  { key: 'apple', img: '/apple_example.png', label: 'Apple' },
  { key: 'gucci', img: '/gucci_example.png', label: 'Gucci' },
  { key: 'stockx', img: '/stockx_example.png', label: 'StockX' },
  { key: 'nike', img: '/nike_example.png', label: 'Nike' },
  { key: 'flight_club', img: '/flightclub_example.png', label: 'Flight Club' },
  { key: 'louis_vuitton', img: '/louisvuitton_example.png', label: 'Louis Vuitton' },
  { key: 'saint_laurent', img: '/saintlaurent_example.png', label: 'Saint Laurent' },
  { key: 'trapstar', img: '/trapstar_example.png', label: 'Trapstar' },
]
