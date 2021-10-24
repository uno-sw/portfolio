import clsx from 'clsx'

interface Props {
  heading?: string
  even?: true
  children: React.ReactNode
}

const Section: React.VFC<Props> = ({ heading, even, children }) => {
  return (
    <section
      className={clsx(
        'py-20',
        'text-blue-gray-700',
        even ? 'bg-blue-gray-100' : 'bg-blue-gray-50',
      )}
    >
      {heading && (
        <>
          <h2 className="text-center text-3xl font-bold">{heading}</h2>
          <div className="w-5 h-1 mx-auto my-10 bg-blue-gray-700" />
        </>
      )}
      {children}
    </section>

  )
}

export default Section
