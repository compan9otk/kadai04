import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className='sidebar'>
        {/* twitter icon */}
        <TwitterIcon className='sidebar__twitterIcon'/>

        {/* SidebarOption */}
        <SidebarOption text='ホーム' Icon={HomeIcon} active/>
        <SidebarOption text='話題を検索' Icon={SearchIcon} />
        <SidebarOption text='通知' Icon={NotificationsNoneIcon} />
        <SidebarOption text='メッセージ' Icon={MailOutlineIcon} />
        <SidebarOption text='ブックマーク' Icon={BookmarkBorderIcon} />
        <SidebarOption text='リスト' Icon={ListAltIcon} />
        <SidebarOption text='プロフィール' Icon={PermIdentityIcon} />
        <SidebarOption text='もっとみる' Icon={MoreHorizIcon} />

        {/* button */}
        <Button variant='outlined' className='sidebar__tweet' fullWidth>
            ツイートする
        </Button>
    </div>
  )
}

export default Sidebar
