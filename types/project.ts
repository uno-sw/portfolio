export type Project = {
  title: string
  slug: string
  summary: string
  githubUrl?: string
  description: string
  techStack: string[]
  productionTime: {
    prefix: string
    number: string
    unit: string
  }
  image?: {
    src: string
    width: number
    height: number
  }
  video?: {
    src: string
    width: number
  }
  externalVideo?: {
    src: string
    width: number
    height: number
  }
}

export type ProjectSummary = {
  title: string
  slug: string
  summary: string
  techStack: string[]
  imageSrc?: string
}
