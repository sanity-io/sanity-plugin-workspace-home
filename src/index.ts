import {Config, definePlugin, Plugin} from 'sanity'
import {HomeIcon} from '@sanity/icons'

import {workspaceHomeTool} from './tool'

export const workspaceHome = (title: string): Plugin =>
  definePlugin(() => ({
    name: 'sanity-plugin-workspace-home',
    tools: [workspaceHomeTool(title)],
  }))

type WorkspaceHomeConfigProps = {
  projectId: string
  dataset: string
  title?: string
}

export const workspaceHomeConfig = ({
  projectId = ``,
  dataset = ``,
  title = `Workspace Home`,
}: WorkspaceHomeConfigProps): Config => ({
  name: 'home',
  title: 'Home',
  basePath: '/home',
  projectId,
  dataset,
  icon: HomeIcon,
  plugins: [workspaceHome(title)],
})
