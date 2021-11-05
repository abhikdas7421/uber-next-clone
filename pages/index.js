import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import tw from "tailwind-styled-components";
import Map from "./component/Map";

export default function Home() {
	return (
		<Wrapper>
			<Map />
			<ActionItems>
				{/* {Headers} */}
				<Header>
					<UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />

					<Profile>
						<Name>Abhik Das</Name>
						<UserImage src="https://img.icons8.com/color/96/000000/user-male-circle--v2.png" />
					</Profile>
				</Header>

				{/* {ActionButton} */}

				{/* {InputButton} */}
			</ActionItems>
		</Wrapper>
	);
}

const Wrapper = tw.div`
  flex flex-col h-screen
`;

const ActionItems = tw.div`
	flex-1 p-4
`;

const Header = tw.div`
	flex justify-between intems-center
`;

const UberLogo = tw.img`
	h-28
`;

const Profile = tw.div`
	flex items-center
`;
const Name = tw.div`
	mr-4 w-20 
`;

const UserImage = tw.img`
	h-12 w-12 border border-gray-200 p-px

`;
