import { promises as fs } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

import ProjectQueryService from './projectQueryService'
import projectIndex from '../../contents/projects/index.json'
import { ProjectSummary, Project } from '../../types/project';

export default class FileProjectQueryService implements ProjectQueryService {
  constructor(private directoryPath: string) {}

  async getAllSlugs(): Promise<string[]> {
    return projectIndex
  }

  async getAllSummaries(): Promise<ProjectSummary[]> {
    const slugs = await this.getAllSlugs()

    return await Promise.all(slugs.map<Promise<ProjectSummary>>(async slug => {
      const parsedData = (await this._getParsedFile(slug)).data
      return {
        title: parsedData.title,
        slug: slug,
        summary: parsedData.summary,
        techStack: parsedData.tech_stack,
        imageSrc: parsedData.image?.src ?? null,
      }
    }))
  }

  async get(slug: string): Promise<Project> {
    const parsed = await this._getParsedFile(slug)
    return {
      title: parsed.data.title,
      slug,
      summary: parsed.data.summary,
      githubUrl: parsed.data.github_url ?? null,
      description: parsed.content,
      techStack: parsed.data.tech_stack,
      productionTime: parsed.data.production_time,
      image: parsed.data.image ?? null,
      video: parsed.data.video ?? null,
      externalVideo: parsed.data.external_video ?? null,
    }
  }

  async _getParsedFile(slug: string): Promise<matter.GrayMatterFile<string>> {
    const path = join(this.directoryPath, slug) + '.md'
    const data = await fs.readFile(path, 'utf8')
    return matter(data)
  }
}
