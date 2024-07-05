'use client';

import React from 'react';
import { RxTriangleDown } from 'react-icons/rx';
import s from './index.module.scss';


const Profile: React.FC = () => {
  return (
    <section className={s.container}>
      <h2>Profile</h2>
      <div className={s.component}>
        <div className={s.box}>
          <div className={s.belong}>
            <p>長岡技術科学大学</p>
            <p>情報・経営システム工学分野</p>
          </div>
          <div className={s.status}>
            <div className={s.detail}>
              <p>大学生</p>
              <p>せいべつ：おとこ</p>
              <p>生まれ年：2004年</p>
              <p>誕生日：3月17日</p>
              <p>出身地：愛媛県</p>
            </div>
            <div className={s.intro}>
              <div className={s.name}>
                <p>えいた</p>
              </div>
              <div className={s.like}>
                <p>「デザインや  フロントエンドに  興味があります」</p>
              </div>
              <div className={s.icon}>
                <RxTriangleDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile
