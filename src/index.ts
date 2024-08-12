import { app } from 'electron'
import { emptyImage } from './constants'
import { nativeExtractIcon } from './native'

export async function extractIcon(path: string): Promise<string> {
  const appIconDataURL = await app
    .getFileIcon(path, { size: 'large' })
    .then((icon) => icon.toDataURL())
  if (appIconDataURL !== emptyImage) {
    return appIconDataURL
  }
  return await nativeExtractIcon(path)
}
