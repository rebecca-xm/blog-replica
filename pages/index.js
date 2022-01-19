import styled from 'styled-components';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

export default function Home() {

  const Blog = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0;
  background-color: ${(props) => props.theme.blogBackground};
  `

  const BlogContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 42rem;
  padding: 2.625rem 1.3125rem;
  background-color: ${(props) => props.theme.blogBackground};
  `

  const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  `

  const Title = styled.h1`
  font-family: Montserrat, sans-serif;
  font-size: 32px;
  font-weight: 900;
  line-height: 42px;
  color: #222222;
  background-color: ${(props) => props.theme.titleColor};
  `

  const AboutSection = styled.div`
  display: flex;
  margin-bottom: 3.5rem;
  max-width: 310px;
  font-family: Merriweather, Georgia, serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  align-items: center;
  color: #222222;
  `

  const ProfileImg = styled.img`
  display: flex;
  margin-right: 0.875rem;
  width: 3.5rem;
  height: 3.5rem; 
  border-radius: 50%;
  `

  const Button = styled.button`
  color: white;
  background-color: ${({ theme }) => theme.btnColor};
  font-size: 1em;
  border: none;
  border-radius: 30px;
  width: 50px;
  height: 24px;
  cursor: pointer;
  margin: 20px;
  `

  const Articles = styled.div`
  justify-content: center;
  `

  const Subtitle = styled.h2`
  font-family: Montserrat, sans-serif;
  font-size: 28px;
  font-weight: 900;
  line-height: 31px;
  color: #d23669;
  `

  const PostInfo = styled.small`
  display: block;
  font-family: 'Merriweather', serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 22px;
  color: #222222;
  margin-bottom: -1rem;
  `

  const Paragraph = styled.p`
  font-family: Merriweather, Georgia, serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: #222222;
  padding-bottom: 1.5rem;
  `

  const lightTheme = {
    btnColor: "black",
    blogBackground: "#282c35",
    background: "#282c35",
  };

  const darkTheme = {
    type: "dark",
    btnColor: "black",
    blogBackground: "white",
  };

  const [theme, setTheme] = useState("🌞");

  const themeToggler = () => {
    theme === "🌙" ? setTheme("🌞") : setTheme("🌙");
  };

  return (
    <ThemeProvider theme={theme === "🌙" ? lightTheme : darkTheme}>
      <div className='container'>
        <Blog>
          <BlogContent>
            <Header>
              <Title>Overreacted</Title>
              <Button onClick={themeToggler}>{theme}</Button>
            </Header>
            <AboutSection>
              <ProfileImg
                src="https://64.media.tumblr.com/52e83a909d1eba85caff03b4002da15d/tumblr_ns7ta3nqt61ucsws2o7_400.jpg"
                alt="Will Graham from NBC Hannibal" />
              <p>Personal blog by <a href="">Try & Guess</a>. I explain with words and code.</p>
            </AboutSection>
            <Articles>
              <Subtitle>npm audit: Broken by Design</Subtitle>
              <PostInfo>July 7, 2021 • ☕️☕️☕️ 14 min read</PostInfo>
              <Paragraph>Found 99 vulnerabilities (84 moderately irrelevant, 15 highly irrelevant)</Paragraph>
              <Subtitle>Before You memo()</Subtitle>
              <PostInfo>July 7, 2021 • ☕️☕️☕️ 14 min read</PostInfo>
              <Paragraph>Rendering optimizations that come naturally.</Paragraph>
              <Subtitle>The WET Codebase</Subtitle>
              <PostInfo>July 7, 2021 • ☕️☕️☕️ 14 min read</PostInfo>
              <Paragraph>Come waste your time with me.</Paragraph>
              <Subtitle>Goodbye, Clean Code</Subtitle>
              <PostInfo>July 7, 2021 • ☕️☕️☕️ 14 min read</PostInfo>
              <Paragraph>Let clean code guide you. Then let it go.</Paragraph>
              <Subtitle>My Decade in Review</Subtitle>
              <PostInfo>July 7, 2021 • ☕️☕️☕️ 14 min read</PostInfo>
              <Paragraph>A personal reflection.</Paragraph>
              <Subtitle>What Are the React Team Principles?</Subtitle>
              <PostInfo>July 7, 2021 • ☕️☕️☕️ 14 min read</PostInfo>
              <Paragraph>UI Before API.</Paragraph>
              <Subtitle>On let vs const</Subtitle>
              <PostInfo>July 7, 2021 • ☕️☕️☕️ 14 min read</PostInfo>
              <Paragraph>So which one should I use?</Paragraph>
              <Subtitle>What Is JavaScript Made Of?</Subtitle>
              <PostInfo>July 7, 2021 • ☕️☕️☕️ 14 min read</PostInfo>
              <Paragraph>Getting a closure on JavaScript.</Paragraph>
              <Subtitle>How Does the Development Mode Work?</Subtitle>
              <PostInfo>July 7, 2021 • ☕️☕️☕️ 14 min read</PostInfo>
              <Paragraph>Dead code elimination by convention.</Paragraph>
              <Subtitle>Algebraic Effects for the Rest of Us</Subtitle>
              <PostInfo>July 7, 2021 • ☕️☕️☕️ 14 min read</PostInfo>
              <Paragraph>They’re not burritos.</Paragraph>
              <Subtitle>Preparing for a Tech Talk, Part 3: Content</Subtitle>
              <PostInfo>July 7, 2021 • ☕️☕️☕️ 14 min read</PostInfo>
              <Paragraph>Turning an idea into a talk.</Paragraph>
              <Subtitle>Name It, and They Will Come</Subtitle>
              <PostInfo>July 7, 2021 • ☕️☕️☕️ 14 min read</PostInfo>
              <Paragraph>A change starts with a story.</Paragraph>
              <Subtitle>Writing Resilient Components</Subtitle>
              <PostInfo>July 7, 2021 • ☕️☕️☕️ 14 min read</PostInfo>
              <Paragraph>Four principles to set you on the right path.</Paragraph>
              <Subtitle>A Complete Guide to useEffect</Subtitle>
              <PostInfo>July 7, 2021 • ☕️☕️☕️ 14 min read</PostInfo>
              <Paragraph>Effects are a part of your data flow.</Paragraph>
              <Subtitle>How Are Function Components Different from Classes?</Subtitle>
              <PostInfo>July 7, 2021 • ☕️☕️☕️ 14 min read</PostInfo>
              <Paragraph>They’re a whole different Pokémon.</Paragraph>
            </Articles>
          </BlogContent>
        </Blog>
        <div className='footer'>


        </div>
      </div>
    </ThemeProvider>
  )
}
