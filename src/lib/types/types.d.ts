declare namespace Oh {
  type AppThemeType = 'light' | 'dark' | 'system'
  type SettingsActiveTab = 'workspace' | 'appearance' | 'storage'
  type CollectionViewType = 'grid' | 'list' | 'board'
  type CollectionSortType = 'asc' | 'desc'
  type CollectionSortDateType = 'createdAt' | 'updatedAt'
  type CollectionVisibilityType = 'all' | 'public' | 'private'

  type UserProfile = {
    uid: string
    login: string
    avatar_url: string
    url: string
    site_admin: boolean
    name: string
    company?: string
    location?: string
    email: string
    bio?: string
    created_at: Date | string
    updated_at: Date | string
  }

  type StorageLocationDataType = {
    enabled: boolean
    token: string | null
    profile?: UserProfileType
  }

  type CachedFileType = { filename: string; uri: monaco.editor.ItextModel.uri }
  type CacheType = {
    active: CachedFileType | undefined
    editors:
      | Map<monaco.editor.ITextModel.uri, CachedFileType>
      | SvelteMap<monaco.editor.ITextModel.uri, CachedFileType>
  }

  type Workspace = {
    uid: string
    name: string
    default: boolean
    createdAt: number
    updatedAt: number
    avatar: {
      filename: string
      content: string
    }
  }

  type Settings = {
    theme: ThemeType
    ui: {
      editorSettings: monaco.editor.IEditorOptions
      editor: {
        tabSize: number
        insertSpaces: boolean
        autoSave: boolean
      }
      collection: {
        view: CollectionViewType
        sort: CollectionSortType
        date: CollectionSortDateType
        show: CollectionVisibilityType
      }
      settings: {
        activeTab: SettingsActiveTab
      }
    }
    storage: {
      github: StorageLocationDataType
      gitlab: StorageLocationDataType
    }
  }

  type ProfileLayout = {
    profileId: string
  }

  interface FileNode extends FileNodeType {
    file: {
      active?: boolean
      language: string
      contents: string | Uint8Array
    }
  }

  interface DirectoryNode extends DirectoryNodeType {
    directory: VirtualFileSystem
  }

  interface SymlinkNode extends SymlinkNodeType {
    file: {
      language: string
      symlink: string
    }
  }

  interface VirtualFileSystem {
    TreeType: {
      [key: string]: FileNode | DirectoryNode | SymlinkNode
    }
  }

  type Project = {
    uid: string
    workspaceId: string
    name: string
    description: string
    public: boolean
    active: boolean
    tags: string[]
    files: VirtualFileSystem.TreeType
    createdAt: number | Date
    updatedAt: number | Date
    location: 'local' | 'github'
    owner?: {
      login: string
      avatar_url: string
      html_url: string
    }
  }

  type HotkeyContext = {
    hotkeys: SvelteMap<string, Hotkey>
    register: (uid: string, data: Hotkey) => void
  }

  type Hotkey = {
    uid: string
    label: string
    fn?: () => void
    mod: []
    keys: []
  }

  type ContextDocument = {
    project: Project
    setActiveFile: (filename: string) => void
    openFile: (filename: string) => void
  }

  type EditorContext<T> = {
    project: Project
    editor: T
  }

  type DialogType = 'dialog' | 'alert' | 'prompt'
}
