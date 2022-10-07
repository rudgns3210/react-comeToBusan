import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

//이미지파일
import main_banner from './main_banner.png';

//atomize
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { StyleReset } from 'atomize';

import { ThemeProvider, Div, Container } from "atomize";
import { Row, Col } from "atomize";
import { Icon, Button, Image, Input } from "atomize";
import HoverDropdown from './dropDown/HoverDropdown';


const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();

// 최상단 네비바
const theme = {
  grid: {
    containerWidth: {
      xs: "540px",
      sm: "720px",
      md: "960px",
      lg: "1156px",
      xl: "1200px"
    },
    gutterWidth: "12px",
  }
};

// 네비바 안에 div
const menu_div = {
  grid: {
    colCount: 12,
    gutterWidth: 0
  }
};

// 2. Provide the engine to the app
// debug engine needs inlined source maps
ReactDOM.render(
  <StyletronProvider value={engine} debug={debug} debugAfterHydration>

    <StyleReset />


    {/* 최상단 네비바 시작 */}
    <ThemeProvider theme={theme}>
      <Container>
        <Row>
          {/* 작은 이미지 들어가면 좋을 듯 시작*/}
          <Col size={{ xs: 12, xl: 2 }}>
            <Div p="1rem" bg="warning500">
              Come to Busan (Photo)
            </Div>
          </Col>
          {/* 작은 이미지 들어가면 좋을 듯 끝*/}

          {/* 장소 음식 숙소 시작*/}
          <Col size={{ xs: 12, xl: 7 }} >
            <Row >
              <Div d="flex" >
                <Button
                  h="3rem"
                  p={{ x: "5rem" }}
                  textSize="2rem"
                  textColor="info700"
                  hoverTextColor="info900"
                  bg="white"
                  hoverBg="info200"
                  borderColor="info700"
                  hoverBorderColor="info900"
                >
                  장소
                </Button>
                <Button
                  h="3rem"
                  p={{ x: "5rem" }}
                  textSize="2rem"
                  textColor="info700"
                  hoverTextColor="info900"
                  bg="white"
                  hoverBg="info200"
                  borderColor="info700"
                  hoverBorderColor="info900"
                >
                  음식
                </Button>
                <Button
                  h="3rem"
                  p={{ x: "5rem" }}
                  textSize="2rem"
                  textColor="info700"
                  hoverTextColor="info900"
                  bg="white"
                  hoverBg="info200"
                  borderColor="info700"
                  hoverBorderColor="info900"
                >
                  숙소
                </Button>
              </Div>
            </Row>
          </Col>
          {/* 장소 음식 숙소 끝 */}

          {/* 로그인 회원가입 시작 */}
          <Col size={{ xs: 12, xl: 3 }}>
            <Div d="flex">
              <Button
                top="10px"
                h="2rem"
                p={{ x: "rem" }}
                textSize="body"
                textColor="info700"
                hoverTextColor="info900"
                bg="white"
                hoverBg="info200"
                border="1px solid"
                borderColor="info700"
                hoverBorderColor="info900"
                m={{ r: "0.5rem" }}
              >
                로그인
              </Button>
              <Button
                top="10px"
                h="2rem"
                p={{ x: "1.25rem" }}
                textSize="body"
                textColor="info700"
                hoverTextColor="info900"
                bg="white"
                hoverBg="info200"
                border="1px solid"
                borderColor="info700"
                hoverBorderColor="info900"
                m={{ r: "0.5rem" }}
              >
                회원가입
              </Button>
              <Button
                top="10px"
                h="2rem"
                p={{ x: "1.25rem" }}
                textSize="body"
                textColor="info700"
                hoverTextColor="info900"
                bg="white"
                hoverBg="info200"
                border="1px solid"
                borderColor="info700"
                hoverBorderColor="info900"
              >
                Language
              </Button>
            </Div>
          </Col>
          {/* 로그인 회원가입 끝 */}

        </Row>
      </Container>

    </ThemeProvider>
    {/* 최상단 네비바 끝 */}

    {/* 메인 배너 이미지 시작 */}
    <Row>
      <Col>
        <Div
          bgImg={main_banner}
          bgSize="cover"
          bgPos="center"
          h="20rem"
        />
      </Col>
    </Row>
    {/* 메인 배너 이미지 끝 */}

    {/* 자치구 선택 or 검색 버튼 시작 */}
    <Div w="auto" m={{ l: "30rem", r: "30rem", t: "1rem" }}>
      <HoverDropdown />
    </Div>
    {/* 자치구 선택 or 검색 버튼 끝 */}

    <Div>
      <Div d="flex" justify="space-between" m={{ l: "20rem", r: "20rem" }}>
        <Div
          bg="warning700"
          bgImg="https://images.unsplash.com/photo-1561212024-cb9ad0c33195?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=2199&h=594&q=80"
          bgSize="cover"
          bgPos="center"
          h="20rem"
          w="20rem"
          m={{r:"1rem", t:"1rem"}}>assadsadsadsadsadsadsd</Div>
        <Div bg="warning700"
          bgImg="https://images.unsplash.com/photo-1561212024-cb9ad0c33195?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=2199&h=594&q=80"
          bgSize="cover"
          bgPos="center"
          h="20rem"
          w="20rem"
          m={{r:"1rem", t:"1rem"}}>12adsadsadsadsa3</Div>
        <Div bg="warning700"
          bgImg="https://images.unsplash.com/photo-1561212024-cb9ad0c33195?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=2199&h=594&q=80"
          bgSize="cover"
          bgPos="center"
          h="20rem"
          w="20rem"
          m={{r:"1rem", t:"1rem"}}>dsdsadsadsada</Div>
        <Div bg="warning700"
          bgImg="https://images.unsplash.com/photo-1561212024-cb9ad0c33195?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&dpr=1&auto=format&fit=crop&w=2199&h=594&q=80"
          bgSize="cover"
          bgPos="center"
          h="20rem"
          w="20rem"
          m={{r:"1rem", t:"1rem"}}>51sadsadsadsadsad2</Div>
      </Div>
    </Div>

  </StyletronProvider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();