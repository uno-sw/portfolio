import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ParsedUrlQuery } from 'node:querystring'
import ReactMarkdown from 'react-markdown'

import Anchor from '../../components/Anchor'
import LabelList from '../../components/LabelList'
import Paragraph from '../../components/Paragraph'
import Section from '../../components/Section'
import { projectQueryService } from '../../services/deps'
import type { Project } from '../../types/project'
import pageTitle from '../../utils/pageTitle'
import githubLogo from '../../public/images/GitHub-Mark-64px.png'

interface Param extends ParsedUrlQuery {
  slug: string
}

interface Props {
  project: Project
}

export const getStaticPaths: GetStaticPaths<Param> = async () => {
  const slugs = await projectQueryService.getAllSlugs()

  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<
  Props,
  Param
> = async ({ params }) => {
  const project = await projectQueryService.get(params!.slug)

  return { props: { project } }
}

const ProjectPage: NextPage<Props> = ({ project }) => {
  return (
    <>
      <Head>
        <title>{pageTitle(project.title)}</title>
      </Head>

      <header className="py-24 text-blue-gray-700">
        <div className="flex flex-col items-center">
          <p
            className="
              mb-2
              px-2
              py-1
              rounded
              text-white
              text-sm
              bg-blue-gray-700
            "
          >
            制作物
          </p>
          <h1 className="mb-2 text-4xl font-bold">{project.title}</h1>
          <p className="text-blue-gray-500">{project.summary}</p>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              title="GitHub"
              className="my-12 transform transition-transform hover:scale-125"
            >
              <Image
                src={githubLogo}
                alt="GitHub"
                width={24}
                height={24}
                loading="eager"
              />
            </a>
          )}
          {project.image && (
            <div className="flex mx-4 rounded-lg shadow-lg overflow-hidden">
              <Image
                alt={`${project.title}のスクリーンショット`}
                src={project.image.src}
                width={project.image.width}
                height={project.image.height}
                layout="intrinsic"
                loading="eager"
              />
            </div>
          )}
          {project.video && (
            <div className="mt-20" style={{ maxWidth: project.video.width }}>
              <video
                src={project.video.src}
                controls
                className='w-full rounded-lg shadow-lg'
              />
            </div>
          )}
          {project.externalVideo && (
            <div className="self-stretch mt-20 px-4">
              <div className="max-w-[520px] mx-auto">
                <div className="w-full relative pt-[56.25%]">
                  <iframe
                    className="w-full h-full absolute top-0 left-0"
                    width={project.externalVideo.width}
                    height={project.externalVideo.height}
                    src={project.externalVideo.src}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
      <main>
        <Section even>
          <div
            className="
              flex
              flex-col
              items-center
              max-w-[520px]
              mx-auto
              px-6
              text-justify
              leading-[1.8]
            "
          >
            <ReactMarkdown
              components={{
                p: ({ node, children, ...props }) => (
                  <Paragraph {...props}>{children}</Paragraph>
                ),
                a: ({ node, href, children, ...props }) => (
                  <Anchor href={href} {...props}>{children}</Anchor>
                ),
              }}
            >
              {project.description}
            </ReactMarkdown>
          </div>
        </Section>
        <Section heading="技術スタック">
          <LabelList items={project.techStack} />
        </Section>
        <Section heading="開発期間" even>
          <p className="text-center text-blue-gray-600 font-bold">
            <span className="text-2xl">{project.productionTime.prefix}</span>
            <span className="mx-2 text-7xl">
              {project.productionTime.number}
            </span>
            <span className="text-4xl">{project.productionTime.unit}</span>
          </p>
        </Section>
      </main>
    </>
  )
}

export default ProjectPage
