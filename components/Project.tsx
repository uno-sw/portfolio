import Link from 'next/link'
import Image from 'next/image'

import { ProjectSummary } from '../types/project'

interface Props {
  project: ProjectSummary
}

const Project: React.VFC<Props> = ({ project }) => {
  const { slug, title, summary, techStack, imageSrc } = project

  return (
    <div
      className="flex flex-col rounded-xl bg-white shadow-lg overflow-hidden"
    >
      <div className="relative pt-[56.25%] overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={`${title}のスクリーンショット`}
            quality={25}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        ) : (
          <div
            className="
              flex
              justify-center
              items-center
              absolute
              inset-0
              bg-blue-gray-100
              text-blue-gray-300
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" 
              />
            </svg>
          </div>
        )}
      </div>
      <div className="flex-grow flex flex-col px-6 py-5">
        <div className="flex-grow">
          <h3 className="mb-2 text-xl font-bold">{title}</h3>
          <p className="mb-4 text-sm">{summary}</p>
          <ul className="flex flex-wrap -m-1">
            {techStack.map(tech => (
              <li
                key={tech}
                className="m-1 px-2 py-1 rounded text-xs bg-blue-gray-100"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <Link href={`/projects/${slug}`}>
          <a
            className="
              self-start
              mt-6
              px-3
              py-1
              border
              border-blue-gray-500
              rounded
              text-blue-gray-500
              text-sm
              font-bold
              transition-colors
              duration-300
              hover:(text-white bg-blue-gray-500)
            "
          >
            詳細を見る
          </a>
        </Link>
      </div>
    </div>

  )
}

export default Project
