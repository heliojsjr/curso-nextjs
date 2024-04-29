const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Family Guy',
  description: 'Come here and learn more about Family Guy!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

export default RootLayout