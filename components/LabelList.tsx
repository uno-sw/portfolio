interface Props {
  items: string[]
}

const LabelList: React.VFC<Props> = ({ items }) => {
  return (
    <ul className="flex flex-wrap justify-center container mx-auto">
      {items.map(item => (
        <li
          key={item}
          className="m-2 p-3 text-sm font-bold bg-blue-gray-200 rounded"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

export default LabelList
