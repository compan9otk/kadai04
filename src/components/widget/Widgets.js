import Search from '@material-ui/icons/Search'
import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed, } from 'react-twitter-embed';
import './Widgets.css'

function Widgets() {
  return (
    <div className='widgets'>
        <div className='widgets__input'>
            <Search className='widgets__searchIcon'/>
            <input placeholder='キーワード検索' type='text'/>
        </div>

        <div className='widgets__widgetContainer'>
            <h2>いまどうしてる？</h2>

            {/* ライブラリを追加・追記 */}
            <TwitterTweetEmbed tweetId={'1516593225649520640'}/>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="otk_gs23"
              options={{ height:400 }}
            />
            <TwitterShareButton
            url={'https://twitter.com/otk_gs23'}
            options={{text: '課題作成中', via: 'otk_gs23'}}
            />
        </div>

    </div>
  )
}

export default Widgets