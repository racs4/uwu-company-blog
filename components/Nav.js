import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import uwutech_logo from "../static/images/uwutech_logo.svg";
import uwutech_icon from "../static/images/uwutech_icon.svg";
import ThemePicker from "./ThemePicker";

const MenuItem = styled.span`
  text-transform: uppercase;

  font-style: normal;
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 17px;
  /* identical to box height */

  color: ${({ selected, theme }) =>
    selected ? theme.color.secondary : theme.color.primary};
  opacity: 0.7;

  cursor: pointer;

  transition: all 200ms ease;
  &:hover {
    color: ${({ theme }) => theme.color.secondary};
  }
`;

const Wrapper = styled.nav`
  width: 100%;
  height: 50px;

  margin-top: 60px;
  margin-bottom: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1.2rem;

  .options {
    display: flex;
    align-items: flex-end;

    > * {
      margin-left: 30px;
    }
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;

  & > * {
    margin-right: 10px;
  }
`;

const menu_items = [
  { text: "Projects", link: "/", mobile: true },
  { text: "Posts", link: "/blog", mobile: true },
  { text: "About us", link: "/#about-us", mobile: false },
  { text: "Contact", link: "/#contact", mobile: false },
];

export default function Nav({ theme, whenChooseTheme }) {
  return (
    <Wrapper>
      <Link as={`/`} href={`/`} passHref>
        <Logo>
          <div>
            <Image src={uwutech_icon} alt="UwU Tech logo" />
          </div>
          <div className="mobile-hidden">
            <Image src={uwutech_logo} alt="UwU Tech logo" />
          </div>
        </Logo>
      </Link>
      <div className="options">
        {menu_items.map((item, i) => {
          return (
            <Link key={i} as={item.link} href={item.link} passHref>
              <MenuItem
                className={item.mobile ? "" : "mobile-hidden"}
                selected={i == 0}
              >
                {item.text}
              </MenuItem>
            </Link>
          );
        })}
        <ThemePicker theme={theme} whenChooseTheme={whenChooseTheme} />
      </div>
    </Wrapper>
  );
}
