interface Props {
  href?: string
  children: React.ReactNode
}

const Anchor: React.VFC<Props> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="underline hover:(text-blue-gray-500 no-underline)"
    >
      {children}
    </a>
  )
}

export default Anchor
