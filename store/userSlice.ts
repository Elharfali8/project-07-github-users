import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { request, gql } from "graphql-request";

const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";

// Define user data type
interface Repository {
  name: string;
  description: string;
  url: string;
}

interface UserData {
  name: string;
  bio: string;
  avatarUrl: string;
  followers: { totalCount: number };
  following: { totalCount: number };
  repositories: { 
    totalCount: number; // ✅ Add this line
    nodes: Repository[];
  };
  gists: {
    totalCount: number
  }
}


interface GitHubUserResponse {
  user: {
    login: string;
    name: string;
    avatarUrl: string;
    bio: string;
    followers: { totalCount: number };
    following: { totalCount: number };
    repositories: { 
      totalCount: number;  // ✅ Add this line
      nodes: { 
        name: string; 
        description: string; 
        url: string; 
      }[]; 
    };
    gists: {
      totalCount: number
    }
  };
}


interface UserState {
  data: UserData | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  data: null,
  loading: false,
  error: null,
};

// Async thunk to fetch user data from GitHub GraphQL API
export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (username: string, { rejectWithValue }) => {
    const query = gql`
      query getUser($username: String!) {
        user(login: $username) {
          login
          name
      avatarUrl
      bio
      url
      repositories(first: 100) {
        totalCount
        nodes {
          name
          description
          stargazerCount
          forkCount
          url
          languages(first: 5) {
            edges {
              node {
                name
              }
              size
            }
          }
        }
      }
      followers {
        totalCount
      }
      following {
        totalCount
      }
      gists {
        totalCount
      }
        }
      }
    `;

    try {
      const variables = { username }; // Pass username as a variable
      const data = await request<GitHubUserResponse>(
        "https://api.github.com/graphql",
        query,
        variables,
        {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        }
      );

      return data.user; // Return the user data
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Failed to fetch user data");
    }
  }
);

// Redux slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action: PayloadAction<UserData>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === "string" ? action.payload : "An error occurred";
      });
  },
});

export default userSlice.reducer;
