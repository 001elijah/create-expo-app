import { Dimensions } from 'react-native'

// Guideline sizes are based on standard screen mobile device
const guidelineBaseWidth = 428
const guidelineBaseHeight = 926

// Get actual device screen dimensions
const realWidth = Dimensions.get('screen').width
const realHeight = Dimensions.get('screen').height

// Calculate the inner scale factor to account for system UI elements
const innerScale = Dimensions.get('screen').scale / Dimensions.get('window').scale

// Calculate aspect ratios for responsive scaling
const baseRatio = guidelineBaseWidth / guidelineBaseHeight
const realRatio = realWidth / realHeight

// Calculate effective dimensions accounting for different aspect ratios
const width = Dimensions.get('window').width * innerScale
const height = (Dimensions.get('window').height * innerScale) / (realRatio > baseRatio ? realRatio / baseRatio : 1)

// Alternative dimensions without aspect ratio compensation
const width2 = Dimensions.get('window').width * innerScale
const height2 = Dimensions.get('window').height * innerScale

/**
 * Scales a size proportionally based on screen width
 * Best for: Horizontal spacing, margins, paddings, font sizes
 * @param size - The size to scale based on guideline width
 * @returns Scaled size for current device width
 */
const scale = (size: number) => (width / guidelineBaseWidth) * size

/**
 * Scales a size proportionally based on screen height with aspect ratio compensation
 * Best for: Vertical spacing, component heights, margins between vertically stacked elements
 * @param size - The size to scale based on guideline height
 * @returns Scaled size for current device height
 */
const scaleVertical = (size: number) => (height / guidelineBaseHeight) * size

/**
 * Scales a size proportionally based on screen width using alternative calculation
 * Best for: Element widths, horizontal components
 * Note: Uses guidelineBaseHeight as denominator (might be intentional for specific use cases)
 * @param size - The size to scale
 * @returns Scaled width for the current device
 */
const scaleWidth = (size: number) => (width2 / guidelineBaseHeight) * size

/**
 * Scales a size proportionally based on screen height without aspect ratio compensation
 * Best for: Heights that should scale linearly with screen height
 * @param size - The size to scale
 * @returns Scaled height for the current device
 */
const scaleHeight = (size: number) => (height2 / guidelineBaseHeight) * size

/**
 * Moderately scales a size with a customizable scaling factor
 * Best for: Font sizes, icons, small UI elements that shouldn't scale too dramatically
 * @param size - The base size
 * @param factor - Scaling factor (0 = no scaling, 1 = full scaling, 0.5 = moderate scaling)
 * @returns Moderately scaled size
 */
const scaleModerate = (size: number, factor: number = 0.5) => size + (scale(size) - size) * factor

/**
 * Scales an image maintaining an aspect ratio based on target height
 * Best for: Images, logos, icons that need to maintain proportions
 * @param width - Original image width
 * @param height - Original image height
 * @param targetHeight - Desired height for the scaled image
 * @returns Object with scaled width and height maintaining aspect ratio
 */
const scaleImage = (width: number, height: number, targetHeight: number) => ({
  height: targetHeight,
  width: (targetHeight / height) * width
})

export { baseRatio, height, scale, scaleHeight, scaleImage, scaleModerate, scaleVertical, scaleWidth, width }
