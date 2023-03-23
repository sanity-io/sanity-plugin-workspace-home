import {HomeIcon} from '@sanity/icons'
import type {Tool} from 'sanity'

import WorkspaceHome from '../components/WorkspaceHome'

export const workspaceHomeTool = (title: string): Tool => ({
  title,
  name: 'workspace-home',
  icon: HomeIcon,
  component: WorkspaceHome,
})
