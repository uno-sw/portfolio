interface Props {
  children: React.ReactNode
}

const Paragraph: React.VFC<Props> = ({ children }) => {
  return <p className="not-last:mb-6">{children}</p>
}

export default Paragraph
