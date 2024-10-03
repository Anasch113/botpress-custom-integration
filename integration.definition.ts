import { IntegrationDefinition, interfaces, z } from '@botpress/sdk'
import { integrationName } from './package.json'

export default new IntegrationDefinition({
  name: "llama-3",
  entities: {
    modelRef: {
      schema: z.object({
        id: z.string(),
      })
    },
  },
  version: '0.0.1',
  readme: 'hub.md',
  icon: 'icon.svg',
})
  .extend(interfaces.llm, ({ modelRef }) => ({
    modelRef
  }))

  