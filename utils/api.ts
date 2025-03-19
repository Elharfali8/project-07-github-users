const GITHUB_API_URL = "https://api.github.com/graphql"
const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN


export const fetchUserData = async (username: string) => {
    const query = `#graphql
        query {
            user(login: ${username}) {
            name
            bio
            avatarUrl
            followers {
                totalCount
            }
            following {
                totalCount
            }
            repositories(first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
                nodes {
                    name
                    description
                    url
                }
            }
            }
        }
    `;
     const response = await fetch(GITHUB_API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });
    
      const { data } = await response.json();
      return data.user;
}