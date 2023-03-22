import {Config, definePlugin} from 'sanity'
import {HomeIcon} from '@sanity/icons'

import {workspaceHomeTool} from './tool'

export const workspaceHome = definePlugin(() => {
  return {
    name: 'sanity-plugin-workspace-home',
    tools: [workspaceHomeTool],
  }
})

type WorkspaceHomeConfigProps = {
  projectId: string
  dataset: string
}

export const workspaceHomeConfig = ({
  projectId = ``,
  dataset = ``,
}: WorkspaceHomeConfigProps): Config => ({
  name: 'home',
  title: 'Home',
  basePath: '/home',
  projectId,
  dataset,
  icon: HomeIcon,
  plugins: [workspaceHome()],
})
