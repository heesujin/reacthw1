import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Main = ({ week }) => {
  const circle = [0, 1, 2, 3, 4];
  const random = new Array(7).fill(0).map((v) => Math.floor(Math.random() * 5));
  const avg = random.reduce((acc, cur) => acc + cur + 1, 0) / 7;
  const [average, setAverage] = useState(avg.toFixed(1));
  const reset = () => setAverage("0.0");

  return (
    <All>
      <Title>희수's 일주일은?</Title>
      {week.map((value, index) => {
        return (
          <Weeks>
            <Days key={index}>{value}</Days>
            <>
              {circle.map((v, i) => {
                const number = random[index];
                return (
                  <Circle
                    key={i}
                    style={{
                      background: i <= number ? "#FE8C68" : "#e0e0e0",
                    }}
                  ></Circle>
                );
              })}
            </>
            <Link to={`/detail/${index}`}>
              <Triangle></Triangle>
            </Link>
          </Weeks>
        );
      })}
      <AvgBox>
        <Avg>평균 평점</Avg>
        <Result>{average}</Result>
        <Reset onClick={reset}>reset</Reset>
      </AvgBox>
    </All>
  );
};

const AvgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Avg = styled.p`
  font-size: 30px;
  color: #663845;
`;

const Result = styled.p`
  font-size: 30px;
  margin-top: -20px;
`;

const Reset = styled.button`
  font-size: 15px;
  width: 100px;
  height: 50px;
  background-color: plum;
  border: 0px;
  border-radius: 5px;
`;

const Days = styled.div`
  padding: 16px;
  margin: 5px;
  color: #273248;
`;

const Weeks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const All = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Title = styled.h3`
  text-align: center;
  color: #273248;
  margin-top: 50px;
`;

const Circle = styled.div`
  margin: 3px;
  width: 30px;
  height: 30px;
  background-color: #e0e0e0;
  border-radius: 50%;
  float: left;
`;

const Triangle = styled.div`
  margin-left: 10px;
  width: 0;
  height: 0;
  border-bottom: 18px solid transparent;
  border-top: 18px solid transparent;
  border-left: 25px solid skyblue;
  border-right: 25px solid transparent;
`;

export default Main;
