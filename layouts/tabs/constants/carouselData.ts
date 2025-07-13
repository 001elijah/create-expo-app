import CarouselImageOne from '@/assets/carousel/enfants-riches-deprimes.jpg'
import CarouselImageThree from '@/assets/carousel/on-the-rise.jpg'
import CarouselImageFour from '@/assets/carousel/trompe-loeil.jpg'
import CarouselImageTwo from '@/assets/carousel/vintage-tees.jpg'
import { TCarouselData } from '@/types'

export const carouselData: TCarouselData = [
  {
    id: '1',
    image: CarouselImageOne,
    subtitle: 'Enfants Riches\nDéprimés',
    title: 'In-Demand'
  },
  {
    id: '2',
    image: CarouselImageTwo,
    subtitle: 'Vintage Tees\nWorth Collecting',
    title: 'Surfaced'
  },
  {
    id: '3',
    image: CarouselImageThree,
    subtitle: 'On the Rise',
    title: 'Mowalola, 424, Willy Chavarria + More'
  },
  {
    id: '4',
    image: CarouselImageFour,
    subtitle: "Trending:\nTrompe L'œil",
    title: 'Acne Studios, Margiela + More'
  }
]
