interface Props {
  children: React.ReactNode
}

const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <>
      {children}
      <footer
        className="p-8 text-center text-sm text-white bg-blue-gray-700"
      >
        <p>&copy; 2021 Sho Uno</p>
      </footer>
    </>
  )
}

export default Layout
