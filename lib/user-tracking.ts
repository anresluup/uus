// Simplified user tracking without IP restrictions
export const hasUserSearched = (ip: string): boolean => {
  return false // Always allow searches
}

export const recordUserSearch = (ip: string): void => {
  // No longer track searches
}

export const getUserIP = async (): Promise<string> => {
  // Return a dummy value since we're not tracking IPs
  return "no-tracking"
}

export const checkUserSearchStatus = async (): Promise<boolean> => {
  // Always return false to allow searches
  return false
}

export const recordSearch = async (): Promise<void> => {
  // No longer record searches
}
