"use client"; // Ensure this is added

import Card from "@/components/Card";
import CardArticle from "@/components/CardArticle";
import PieChartComponent from "@/components/PieChartComponent";
import SearchContainer from "@/components/SearchContainer";
import SimpleChart from "@/components/SimpleChart";
import { AppDispatch, RootState } from "@/store";
import { fetchUserData } from "@/store/userSlice";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiGitRepositoryLine } from "react-icons/ri";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import { BsCodeSquare } from "react-icons/bs";


export default function Dashboard() {
  const { data: session } = useSession();
  const [inputValue, setInputValue] = useState('')
  const [username, setUsername] = useState('')
  const dispatch = useDispatch<AppDispatch>()
  const {data, loading, error} = useSelector((store:RootState) => store.user)

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" }); 
  };

  const handleSubmit = () => {
    if (!inputValue) {
      throw new Error("Must provide a username")
    }
    setUsername(inputValue)
  }

  useEffect(() => {
    if (username.trim()) {
      dispatch(fetchUserData(username)); // Dispatch the function with the username
    }
  }, [dispatch, username])

  const totalCounts = data?.repositories?.totalCount ?? 0
  const followers = data?.followers?.totalCount ?? 0
  const following = data?.following?.totalCount ?? 0
  const gists = data?.gists?.totalCount ?? 0  

  if (!session) {
    return (
      <div>
        <p>You are not signed in.</p>
        <button onClick={() => signIn()}>Sign In</button>
      </div>
    );
  }

  return (
    <main className="min-h-[100vh-72px] ">
      {/* <h1>Welcome, {session.user?.name}!</h1>
      <img src={session.user?.image ?? ""} alt="User Avatar" width={50} height={50} />
      <p>Email: {session.user?.email}</p>
      <button onClick={handleSignOut}>Sign Out</button> */}
      <div className="m-container main-container py-12 lg:py-20">
        <SearchContainer
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleSubmit={handleSubmit}
        />
        <div className="my-4 lg:my-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {/* Repos */}
          <CardArticle 
            icon={RiGitRepositoryLine}
            num={totalCounts}
            text="Repos"
            color="#da4a91"
          />
          {/* Followers */}
          <CardArticle 
            icon={FiUsers}
            num={followers}
            text="Followers"
            color="#2caeba"
          />
          {/* Following */}
          <CardArticle 
            icon={FiUserPlus}
            num={following}
            text="Following"
            color="#5d55fa"
          />
          {/* Gists */}
          <CardArticle 
            icon={BsCodeSquare}
            num={gists}
            text="Gists"
            color="#f0b429"
          />
        </div>
        {/* --------- */}
        <div className="grid gap-12 lg:grid-cols-2 mb-4 lg:mb-8">
          <Card title="user" btn="follow" name="youssef elharfali" tagName='elharfali8' desc='web developer' company='Elharfali company' location='Marrakech, MA' link="www.johnsmilga.com" />
          <Card title="followers" />
        </div>
        {/* ---------- */}
        <div className="grid gap-12 lg:grid-cols-2 my-14 lg:my-18">
          <div className="h-[300px] card px-1 py-3 rounded-lg shadow">
            <PieChartComponent />
          </div>
          <div className="h-[300px] card px-1 py-3 rounded-lg shadow">
          <SimpleChart />
            </div>
        </div>
      </div>
    </main>
  );
}
