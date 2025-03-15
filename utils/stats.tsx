import { IconType } from "react-icons/lib";
import { RiGitRepositoryLine } from "react-icons/ri";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import { BsCodeSquare } from "react-icons/bs";




export type Stats = {
    id?: number;
    icon: IconType;
    num: number;
    text: string;
    color: string;
}

export const stats: Stats[] = [
    {
        id: 1,
        icon: RiGitRepositoryLine,
        num: 256,
        text: 'Repos',
        color: '#da4a91'
    },
    {
        id: 2,
        icon: FiUsers,
        num: 100,
        text: 'Followers',
        color: '#2caeba'
    },
    {
        id: 3,
        icon: FiUserPlus,
        num: 12,
        text: 'Following',
        color: '#5d55fa'
    },
    {
        id: 4,
        icon: BsCodeSquare,
        num: 0,
        text: 'Gists',
        color: '#f0b429'
    },
]