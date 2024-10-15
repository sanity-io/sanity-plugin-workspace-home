import {HomeIcon} from '@sanity/icons'
import {definePlugin, WorkspaceOptions} from 'sanity'

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
}: WorkspaceHomeConfigProps): WorkspaceOptions => ({
  name: 'home',
  title: 'Home',
  basePath: '/home',
  projectId,
  dataset,
  icon: HomeIcon,
  plugins: [workspaceHome()],
})
