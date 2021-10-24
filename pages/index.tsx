import { GetStaticProps } from 'next'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

import Heading from '../components/Heading'
import LabelList from '../components/LabelList'
import Project from '../components/Project'
import Section from '../components/Section'
import { projectQueryService } from '../services/deps'
import type { ProjectSummary } from '../types/project'
import skillset from '../contents/skillset.json'
import pageTitle from '../utils/pageTitle'
import githubLogo from '../public/images/GitHub-Mark-64px.png'

interface Props {
  projects: ProjectSummary[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = await projectQueryService.getAllSummaries()
  return {
    props: {
      projects,
    },
  }
}

const Home: NextPage<Props> = ({ projects }) => {
  return (
    <>
      <Head>
        <title>{pageTitle()}</title>
      </Head>

      <header
        className="
          flex
          flex-col
          justify-center
          items-center
          py-28
          text-blue-gray-700
        "
      >
        <h1
          className="
            mb-2
            text-cente
            text-6xl
            font-sans
            font-bold
            tracking-widest
          "
        >
          宇野翔
        </h1>
        <p className="mb-8 text-lg font-bold tracking-tight">Sho Uno</p>
        <a
          href="https://github.com/uno-sw"
          title="GitHub"
          className="transform transition-transform hover:scale-125"
        >
          <Image
            src={githubLogo}
            alt="GitHub"
            width={24}
            height={24}
            loading="eager"
          />
        </a>
      </header>
      <main>
        <Section heading="スキルセット" even>
          {skillset.map(skillGroup => (
            <React.Fragment key={skillGroup.title}>
              <Heading>{skillGroup.title}</Heading>
              <LabelList items={skillGroup.items} />
            </React.Fragment>
          ))}
        </Section>
        <Section heading="制作物">
          <div
            className="
              grid
              gap-6
              max-w-960px
              mx-auto
              px-4
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
            "
          >
            {projects.map(project => (
              <Project key={project.slug} project={project} />
            ))}
          </div>
        </Section>
      </main>

    </>
  )
}

export default Home
