import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import tw from "tailwind-styled-components";
import Map from "./component/Map";
import Link from "next/link";

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

				{/* {ActionButtons} */}
				<ActionButtons>
					<Link href="/search">
						<ActionButton>
							<ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
							Ride
						</ActionButton>
					</Link>

					<Link href="/search">
						<ActionButton>
							<ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
							Wheels
						</ActionButton>
					</Link>

					<Link href="/search">
						<ActionButton>
							<ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
							Reserve
						</ActionButton>
					</Link>
				</ActionButtons>

				{/* {InputButton} */}
				<InputButton>Where To?</InputButton>
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

const ActionButtons = tw.div`
	flex 
`;

const ActionButton = tw.div`
	flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl cursor-pointer
`;

const ActionButtonImage = tw.img`
	h-3/5
`;

const InputButton = tw.div`
	h-15 bg-gray-200 text-xl p-4 flex items-center mt-8 mb-4
`;
