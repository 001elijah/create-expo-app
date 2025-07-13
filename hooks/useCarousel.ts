import { useCallback, useEffect, useRef, useState } from 'react'
import { Dimensions, FlatList, NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import { TCarouselData } from '@/types'

const { width } = Dimensions.get('window')

export const useCarousel = (data: TCarouselData) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const flatListRef = useRef<FlatList>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const scrollToIndex = useCallback(
    (index: number) => {
      if (flatListRef.current) {
        flatListRef.current.scrollToOffset({
          animated: true,
          offset: index * width
        })
      }
    },
    [flatListRef]
  )

  const startAutoScroll = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % data.length
        scrollToIndex(nextIndex)
        return nextIndex
      })
    }, 8000)
  }, [scrollToIndex, data.length])

  const stopAutoScroll = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [intervalRef])

  const resetAutoScroll = () => {
    stopAutoScroll()
    startAutoScroll()
  }

  useEffect(() => {
    startAutoScroll()

    return () => {
      stopAutoScroll()
    }
  }, [startAutoScroll, stopAutoScroll])

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x
    const currentIndex = Math.round(contentOffsetX / width)
    setActiveIndex(currentIndex)
  }

  const handleScrollBeginDrag = () => {
    stopAutoScroll()
  }

  const handleScrollEndDrag = () => {
    resetAutoScroll()
  }

  return {
    activeIndex,
    flatListRef,
    handleScroll,
    handleScrollBeginDrag,
    handleScrollEndDrag
  }
}
