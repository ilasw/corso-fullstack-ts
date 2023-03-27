
export interface News {
  status: string
  totalResults: number
  articles: Article[]
}

export interface Article {
  source: Source
  author: string | null
  title: string
  description: string | null
  url: string
  urlToImage: string | null
  publishedAt: string
  content: string
}

export interface Source {
  id?: string | null
  name: string
}
