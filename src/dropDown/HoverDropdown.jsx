// Basic Dropdown
import React from "react";

import { Div, Dropdown, Anchor, Input, Button, Icon, Container } from "atomize";

//부산 자치구 분류
const menuList = (
  <Div p={{ x: "1rem", y: "0.5rem" }}>
    {["부산진구", "해운대구", "동래구", "중구", "서구", "동구", "영도구", "남구", "북구", "사하구", "금정구", "강서구", "연제구", "수영구", "사상구", "기장군"].map((name, index) => (
      <Anchor d="block" p={{ y: "0.25rem" }}>
        {name}
      </Anchor>
    ))}
  </Div>
);


class HoverDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false,
    };
  }
  render() {
    const { showDropdown } = this.state;
    return (
      <Div d="flex">

        {/* 자치구 드롭다운 박스 시작 */}
        <Dropdown targetHover menu={menuList} m={{r: '1rem'}}>
          마우스를 올려 해당 자치구를 선택해주세요.
        </Dropdown>
        {/* 자치구 드롭다운 박스 시작 */}

        {/* 검색바 시작*/}
        <Input
          placeholder="Search"
          w="30rem"
          suffix={
            <Button
              pos="absolute"
              onClick={() => console.log("clicked")}
              bg="info700"
              hoverBg="info800"
              w="3rem"
              top="0"
              right="0"
              rounded={{ r: "md" }}
            >
              <Icon
                name="Search"
                size="20px"
                color="white"
                cursor="pointer"
              />
            </Button>
          }
        />
        {/* 검색바 끝 */}
      </Div>
    );
  }
}
export default HoverDropdown;
