import React from 'react';
import Avatar from '@/components/simple/Avatar';

export interface ContentRowProps {
  url: string;
  leftText: string;
  rightText: string;
}

const ContentRow: React.FC<ContentRowProps> = ({ url, leftText, rightText }) => {
  return (
    <div className="wrapper">
      <div className="left">
        <Avatar circle size="xs" imageSrc={url} />
        <span className="left-text">{leftText}</span>
      </div>
      <span className="right-text">{rightText}</span>

      <style jsx>{`
        .wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--background-color);
        }
        .wrapper:last-child {
          border: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }
        .left {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .left-text {
          padding: 0 2rem;
          text-align: left;
        }
        .right-text {
          text-align: right;
          display: none;
        }
        @media (min-width: 500px) {
          .right-text {
            display: block;
          }
        }
      `}</style>
    </div>
  );
};

export default ContentRow;
