import { FooterDiv, Header, Paragraph, Icon } from './styles';

const gitLink = 'https://github.com/AndrzejBugdol/PokeApp-VL';

const Footer = () => {
  return (
    <FooterDiv>
      <div style={{ paddingLeft: '2rem' }}>
        <Header>PokeApp</Header>
        <Paragraph>Created by Andrzej Bugdol</Paragraph>
      </div>
      <div style={{ paddingRight: '2rem' }}>
        <a href={gitLink}>
          <Icon className="fa fa-github" />
        </a>
      </div>
    </FooterDiv>
  );
};

export default Footer;
