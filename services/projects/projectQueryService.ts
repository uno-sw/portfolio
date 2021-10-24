import { Project, ProjectSummary } from '../../types/project'

export default interface ProjectQueryService {
  getAllSlugs(): Promise<string[]>
  getAllSummaries(): Promise<ProjectSummary[]>
  get(slug: string): Promise<Project>
}
