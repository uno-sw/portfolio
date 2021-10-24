import { join } from 'path'

import FileProjectQueryService from './projects/fileProjectQueryService'
import ProjectQueryService from './projects/projectQueryService'

const projectQueryService: ProjectQueryService =
    new FileProjectQueryService(join(process.cwd(), '/contents/projects'))

export {
  projectQueryService
}
