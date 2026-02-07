// =============================================================================
// Bug Bounty Counter & Stats
// =============================================================================
// To update your bug bounty count, simply edit the numbers below.
// This is the single source of truth for all stats displayed on the site.
// =============================================================================

export interface BugEntry {
  id: string
  severity: 'critical' | 'high' | 'medium' | 'low' | 'informational'
  platform?: string
  date?: string
}

export interface BugBountyStats {
  totalBugsFound: number
  critical: number
  high: number
  medium: number
  low: number
  informational: number
}

// ─── UPDATE YOUR BUG BOUNTY STATS HERE ──────────────────────────────────────
export const bugBountyStats: BugBountyStats = {
  totalBugsFound: 0,
  critical: 0,
  high: 0,
  medium: 0,
  low: 0,
  informational: 0,
}
// ─────────────────────────────────────────────────────────────────────────────

export interface Certification {
  id: string
  name: string
  issuer: string
  status: 'obtained' | 'in-progress' | 'planned'
  date?: string
  credentialId?: string
}

export const certifications: Certification[] = [
  {
    id: 'sc-200',
    name: 'Security Operations Analyst Associate (SC-200)',
    issuer: 'Microsoft',
    status: 'obtained',
    date: '2025-04',
    credentialId: '522A2FEE631143E7',
  },
  {
    id: 'sc-100',
    name: 'Cybersecurity Architect Expert (SC-100)',
    issuer: 'Microsoft',
    status: 'planned',
  },
  {
    id: 'sc-401',
    name: 'Information Protection & Compliance (SC-401)',
    issuer: 'Microsoft',
    status: 'planned',
  },
]

export function getTotalBugs(): number {
  return bugBountyStats.totalBugsFound
}

export function getStatsByCategory(): { label: string; count: number; color: string }[] {
  return [
    { label: 'Critical', count: bugBountyStats.critical, color: 'text-red-400' },
    { label: 'High', count: bugBountyStats.high, color: 'text-orange-400' },
    { label: 'Medium', count: bugBountyStats.medium, color: 'text-amber-400' },
    { label: 'Low', count: bugBountyStats.low, color: 'text-emerald-400' },
    { label: 'Info', count: bugBountyStats.informational, color: 'text-dark-400' },
  ]
}
