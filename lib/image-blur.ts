/**
 * Applies a blur effect to an image and returns a data URL
 * @param file The image file to blur
 * @param blurAmount The amount of blur to apply (in pixels)
 * @returns A Promise that resolves to a data URL of the blurred image
 */
export async function blurImage(file: File, blurAmount = 50): Promise<string> {
  return new Promise((resolve, reject) => {
    try {
      const reader = new FileReader()

      reader.onload = (event) => {
        const img = new Image()
        img.crossOrigin = "anonymous"

        img.onload = () => {
          // Create canvas
          const canvas = document.createElement("canvas")
          const ctx = canvas.getContext("2d")

          if (!ctx) {
            reject(new Error("Could not get canvas context"))
            return
          }

          // Set canvas dimensions
          canvas.width = img.width
          canvas.height = img.height

          // Draw original image
          ctx.drawImage(img, 0, 0)

          // Apply blur filter
          ctx.filter = `blur(${blurAmount}px)`
          ctx.drawImage(img, 0, 0)

          // Get data URL
          const blurredDataUrl = canvas.toDataURL(file.type || "image/jpeg")
          resolve(blurredDataUrl)
        }

        img.onerror = () => {
          reject(new Error("Failed to load image"))
        }

        // Set image source
        img.src = event.target?.result as string
      }

      reader.onerror = () => {
        reject(new Error("Failed to read file"))
      }

      // Read file as data URL
      reader.readAsDataURL(file)
    } catch (error) {
      reject(error)
    }
  })
}
