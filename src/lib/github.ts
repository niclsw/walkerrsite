// src/lib/github.ts
export async function getGitHubRepos(username: string) {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
      {
        headers: {
          ...(process.env.GITHUB_TOKEN && {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          }),
        },
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    );
  
    if (!response.ok) {
      throw new Error('Failed to fetch GitHub repos');
    }
  
    return response.json();
  }