interface Props {
  children: React.ReactNode
}

const Heading: React.VFC<Props> = ({ children }) => {
  return (
    <h3 className="mt-14 mb-6 text-center text-lg font-bold">{children}</h3>
  )
}

export default Heading
