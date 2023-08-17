import React from "react";
import tw from "tailwind-styled-components";

type Props = {
  title: string;
  contents: string;
  isNew?: boolean;
  RegDt: string;
  viewCount: number;
};

const Card = ({ title, contents, isNew, RegDt, viewCount }: Props) => {
  return (
    <CardWrapper>
      <Title>{title}</Title>
      <Contents>{contents}</Contents>
      {isNew && <Badge>NEW</Badge>}
      <RegDtWrapper>
        <small>{RegDt}</small>
        <ViewWrapper>
          <img src="../img/view.png" alt="조회수" />
          <small>{viewCount}</small>
        </ViewWrapper>
      </RegDtWrapper>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = tw.div`
  
`;

const Title = tw.strong`
  block
  text-center
`;

const Contents = tw.p`
  text-center
`;

const Badge = tw.div`
  
`;

const RegDtWrapper = tw.div`
  flex
`;

const ViewWrapper = tw.div`
  flex
`;
