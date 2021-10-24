const pageTitle = (title?: string): string => {
  const base = 'Sho Uno - Portfolio'
  return title ? `${title} | ${base}` : base 
}

export default pageTitle
