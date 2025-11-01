import localFont from 'next/font/local'

export const libreBaskerville = localFont({
  src: [
    {
      path: '../../public/fonts/LibreBaskerville-Regular.ttf',
      style: 'normal',
    },
    {
      path: '../../public/fonts/LibreBaskerville-Italic.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-libre-baskerville',
})

export const josefinSans = localFont({
  src: [
    {
      path: '../../public/fonts/JosefinSans-Light.ttf',
      style: 'light',
    },
    {
      path: '../../public/fonts/JosefinSans-Italic.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-josefin-sans',
})
