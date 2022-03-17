export type ImageSizeProps = {
  height: number,
  width: number
} | {
  sizes: `(max-width: ${number}px) ${number}px, (min-width: ${number}px) ${number}px`
}
