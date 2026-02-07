import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { calculateReadingTime } from './utils'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface PostFrontmatter {
  title: string
  date: string
  excerpt: string
  tags: string[]
  author: string
  image?: string
  featured?: boolean
}

export interface Post {
  slug: string
  frontmatter: PostFrontmatter
  content: string
  readingTime: number
}

export interface PostMeta {
  slug: string
  frontmatter: PostFrontmatter
  readingTime: number
}

/**
 * Get all post slugs
 */
export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  return fs.readdirSync(postsDirectory).filter(file => file.endsWith('.mdx'))
}

/**
 * Get a single post by slug
 */
export function getPostBySlug(slug: string): Post | null {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug: realSlug,
    frontmatter: data as PostFrontmatter,
    content,
    readingTime: calculateReadingTime(content),
  }
}

/**
 * Get all posts with metadata (for listing)
 */
export function getAllPosts(): PostMeta[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map(slug => {
      const post = getPostBySlug(slug.replace(/\.mdx$/, ''))
      if (!post) return null
      return {
        slug: post.slug,
        frontmatter: post.frontmatter,
        readingTime: post.readingTime,
      }
    })
    .filter((post): post is PostMeta => post !== null)
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())

  return posts
}

/**
 * Get featured posts
 */
export function getFeaturedPosts(limit: number = 3): PostMeta[] {
  const posts = getAllPosts()
  const featured = posts.filter(post => post.frontmatter.featured)
  
  // If not enough featured posts, fill with latest
  if (featured.length < limit) {
    const nonFeatured = posts.filter(post => !post.frontmatter.featured)
    return [...featured, ...nonFeatured].slice(0, limit)
  }
  
  return featured.slice(0, limit)
}

/**
 * Get all unique tags
 */
export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tags = new Set<string>()
  
  posts.forEach(post => {
    post.frontmatter.tags.forEach(tag => tags.add(tag))
  })
  
  return Array.from(tags).sort()
}

/**
 * Get posts by tag
 */
export function getPostsByTag(tag: string): PostMeta[] {
  const posts = getAllPosts()
  return posts.filter(post => 
    post.frontmatter.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase())
  )
}

/**
 * Search posts
 */
export function searchPosts(query: string): PostMeta[] {
  const posts = getAllPosts()
  const lowerQuery = query.toLowerCase()
  
  return posts.filter(post => {
    const { title, excerpt, tags } = post.frontmatter
    return (
      title.toLowerCase().includes(lowerQuery) ||
      excerpt.toLowerCase().includes(lowerQuery) ||
      tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    )
  })
}

