import {useActiveWorkspace, useWorkspaces} from 'sanity'
import {Button, Flex, Container, Stack, Heading, Card} from '@sanity/ui'

import WorkspacePreview from './WorkspacePreview'
import {useEffect} from 'react'

export default function WorkspaceHome() {
  const [home, ...workspaces] = useWorkspaces()
  const {setActiveWorkspace} = useActiveWorkspace()

  // Listen to keypress of workspace index
  useEffect(() => {
    const handleKeypress = (event: KeyboardEvent) => {
      const index = parseInt(event.key, 10) - 1
      if (index >= 0 && index < workspaces.length) {
        setActiveWorkspace(workspaces[index].name)
      }
    }

    window.addEventListener('keypress', handleKeypress)

    return () => {
      window.removeEventListener('keypress', handleKeypress)
    }
  }, [workspaces, setActiveWorkspace])

  return (
    <Card tone="transparent" height="fill">
      <Flex direction="column" height="fill" padding={[4, 5, 6, 6]}>
        <Container>
          <Stack space={4}>
            <Heading>Workspaces</Heading>
            {workspaces.map((workspace, index) => (
              <WorkspacePreview key={workspace.name} workspace={workspace} index={index} />
            ))}
          </Stack>
        </Container>
      </Flex>
    </Card>
  )
}
