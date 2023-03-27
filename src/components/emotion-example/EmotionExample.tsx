/**  @jsxImportSource @emotion/react */ //emotion패키지 내에서 jsx를 쓰겠다는 명시를 해야함
import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactNode } from "react";

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

const color = "white";

const style = css`
  color: hotpink;
`;

const SomeComponent = ({ children }: { children: ReactNode }) => (
  <div css={style}>
    Some hotpink text.
    {children}
  </div>
);

const anotherStyle = css({
  textDecoration: "underline",
});

const AnotherComponent = () => (
  <div css={[anotherStyle, style]}>Some text with an underline.</div> // 배열로도 여러개의 스타일을 넣을 수 있다.
);

const P = (props: ReactNode) => (
  <p
    css={{
      margin: 0,
      fontSize: 12,
      lineHeight: "1.5",
      fontFamily: "Sans-Serif",
      color: "black",
    }}
    {...props} // <- props contains the `className` prop
  />
);

const ArticleText = (props: ReactNode) => (
  <P
    css={{
      fontSize: 14,
      fontFamily: "Georgia, serif",
      color: "darkgray",
    }}
    {...props} // <- props contains the `className` prop
  />
);

export default function EmotionExample() {
  return (
    <>
      {/* Global 전역적인 css관리 */}
      <Global
        styles={css`
          p {
            color: blue !important;
          }
        `}
      />
      <div
        css={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: ${color};
          }
        `}
      >
        Hover to change color.
      </div>
      {}
      <br />
      <Button>This my button component.</Button>
      <SomeComponent children={undefined} />
      <AnotherComponent />
      <P>ppppp</P>
      <ArticleText>Article</ArticleText>
      <p
        css={css`
          font-size: 30px;
          @media (min-width: 420px) {
            font-size: 50px;
          }
        `}
      >
        Some text!
      </p>
    </>
  );
}
