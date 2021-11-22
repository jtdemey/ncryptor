import styled from "styled-components";
import { PrivateKey } from "../Main/NcryptorApp";
import SectionCard from "../Main/SectionCard";

type KeyDetailsCardProps = {
	privateKey: PrivateKey;
};

const Container = styled.section`
  overflow-y: scroll;
`;

const KeyDetailsCard = ({ privateKey }: KeyDetailsCardProps): JSX.Element => (
  <Container>
    <SectionCard backgroundColor={privateKey.color}>

		</SectionCard>
  </Container>
);

export default KeyDetailsCard;