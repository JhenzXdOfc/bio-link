import "./globals.css"

export const metadata = {
  title: "ʝɦenzty?— Welcome To Bio Link jhenzty/jxo, Find Out Info About hHim, And Stalk Him!",
  description: "Welcome To Bio Link jhenzty/jxo, Find Out Info About hHim, And Stalk Him!",
  author: "jhenzty",
  keywords: "jhenzty, jhen, jxo, JhenzXdOfc",
    robots: {
    index: true,
    follow: true,
  },
}

export default function Layout({ children }) {
  return (
    <html lang="id">
      <body className="bg-black grid-bg text-white min-h-screen font-sans transition-colors duration-300">
        {children}
      </body>
    </html>
  )
}