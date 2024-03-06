"use client";

import Image from "next/image";
import React, { useState } from "react";

const LikeButton: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleModal = (): void => {
    setShowModal(!showModal);
  };

  const handleOverlayClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ): void => {
    if (event.target === event.currentTarget) {
      setShowModal(false);
    }
  };

  return (
    <div>
      <button className="like-button" onClick={toggleModal}>
        👍
      </button>

      {showModal && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            <h2>Welcome to ing&apos;s ChatGPT-Next-Web-Visionary!</h2>
            <div className="modal-text">
              <p>
                这里是由ing搭建的、基于
                <a href="https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web">
                  ChatGPT-Next-Web
                </a>
                的GPT镜像站，可直接使用GPT-3.5、GPT-4等。
              </p>
              <p>
                建立本镜像站的初衷有很多：
                <br />
                1.GPT-4着实是非常好用的工具，我真心希望身边的人都能用上这个好东西；
                <br />
                2.从科学上网，到注册账号，再到开卡充值Plus，国内直接使用ChatGPT
                Plus的过程过于麻烦，我希望提供一个开箱即用的解决方案；
                <br />
                3.官方提供的20美元套餐过于笨重，对于大多数人的轻量级需求，其性价比并不高。按量付费的api镜像站更加合适。
              </p>
              <p>
                本站接入的GPT-4
                api的价格，约在1元/15000汉字，即平均每对话15000个汉字（包含问题和回答），消耗人民币1元。对于轻度使用来说，成本可忽略不计。所以请放心使用。
              </p>
              <p>
                （请务必点击输入框上方的最后一个按钮，修改使用的模型！默认模型为gpt-3.5-turbo，建议使用gpt-4-0125-Preview）
              </p>
              <p>当然，如果你想支持本站的持续运营，亦是非常欢迎：</p>
            </div>
            <Image width={200} height={200} src="/like.jpg" alt="Like" />
            <button className="close-button" onClick={toggleModal}>
              关闭
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .like-button {
          position: fixed;
          right: 20px;
          bottom: 20px;
          border: none;
          background-color: #4caf50;
          color: white;
          border-radius: 50%;
          cursor: pointer;
          font-size: 24px;
          padding: 15px;
          opacity: 0.5; /* 默认透明度 */
          transition: opacity 0.3s; /* 平滑过渡效果 */
        }

        .like-button:hover {
          opacity: 1; /* 鼠标悬停时透明度 */
        }

        @media (max-width: 600px) {
          .like-button {
            display: none;
          }
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-text {
          display: block;
        }

        .modal-content {
          width: 80%;
          height: 80%;
          overflow-y: auto;
          background-color: white;
          color: black; /* 设置字体颜色为黑色 */
          padding: 20px;
          border-radius: 5px;
          display: flex;
          text-align: left;
          flex-direction: column;
          justify-content: start;
          align-items: center;
        }

        .close-button {
          margin-top: 15px;
          padding: 10px 20px;
          font-size: 18px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          background-color: #000000;
          color: white;
          width: fit-content;
        }
      `}</style>
    </div>
  );
};

export default LikeButton;
