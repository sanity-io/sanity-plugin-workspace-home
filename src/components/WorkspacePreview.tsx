import {Button, Hotkeys, Stack, Box, Flex, Heading, Card, Text} from '@sanity/ui'
// import {StarIcon} from '@sanity/icons'
import React, {createElement, isValidElement, useMemo} from 'react'
import {isValidElementType} from 'react-is'
import {useActiveWorkspace, WorkspaceSummary} from 'sanity'
import styled from 'styled-components'

const createIcon = (icon: React.ComponentType | React.ReactNode) => {
  if (isValidElementType(icon)) return createElement(icon)
  if (isValidElement(icon)) return icon
  return undefined
}

export const MediaCard = styled(Card)`
  width: 35px;
  height: 35px;

  svg {
    width: 100%;
    height: 100%;
  }
`

export type WorkspacePreviewProps = {
  workspace: WorkspaceSummary
  index: number
}

export default function WorkspacePreview(props: WorkspacePreviewProps) {
  const {icon, title, name, subtitle} = props.workspace
  const {setActiveWorkspace} = useActiveWorkspace()
  const iconComponent = useMemo(() => createIcon(icon), [icon])

  // TODO: Favorites feature
  // get favorite workspace name from localStorage
  //   const favoriteWorkspace = localStorage.getItem('favoriteWorkspace')
  //   save local state to force re-render
  //   const [isFavourite, setIsFavourite] = React.useState(favoriteWorkspace === name)

  // set favorite workspace name to localStorage
  //   const setFavoriteWorkspace = useCallback(() => {
  //     localStorage.setItem('favoriteWorkspace', name)
  //   }, [name])

  return (
    <Card shadow={1} radius={2}>
      <Flex align="center" gap={[2, 3, 4, 4]} paddingX={[2, 3, 4, 4]}>
        <Hotkeys keys={[String(props.index + 1)]} padding={2} />
        <Box flex={1}>
          <Stack>
            <Button mode="bleed" tone="default" onClick={() => setActiveWorkspace(name)}>
              <Flex align="center" gap={[2, 3, 4, 4]}>
                {iconComponent ? <MediaCard>{createIcon(iconComponent)}</MediaCard> : null}
                <Box flex={1}>
                  <Stack space={[1, 2, 3, 3]}>
                    <Heading>{title || name}</Heading>
                    {subtitle ? <Text muted>{subtitle}</Text> : null}
                  </Stack>
                </Box>
              </Flex>
            </Button>
          </Stack>
        </Box>
        {/* <Button
          mode={isFavourite ? 'default' : 'bleed'}
          tone={isFavourite ? 'primary' : 'default'}
          icon={StarIcon}
          title="Favorite"
          onClick={() => {
            setIsFavourite(!isFavourite)
            setFavoriteWorkspace()
          }}
        /> */}
      </Flex>
    </Card>
  )
}
