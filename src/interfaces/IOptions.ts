import type { ConnectOptions } from 'mongoose'

interface IOptions {
  uri?: string
  connectOptions?: ConnectOptions
  migrationsPath?: string
  templatePath?: string
  collection?: string
  autosync?: boolean
  configPath?: string
}

export default IOptions
