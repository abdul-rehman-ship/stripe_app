import Container from "@components/ui/container";
import Layout from "@components/layout/layout";

import LoginForm from "@components/auth/login-form";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { toast,Toaster } from 'react-hot-toast'


export default function SignInPage() {
	return (
		<>
		<Toaster/>
			{/* <PageHeader pageHeader="Sign In" /> */}
			<Container>
				<div className="py-16 lg:py-20">
					<LoginForm />
				</div>
				{/* <Subscription /> */}
			</Container>
		</>
	);
}

SignInPage.Layout = Layout;

export const getStaticProps = async ({ locale }: any) => {
	return {
		props: {
			...(await serverSideTranslations(locale, [
				"common",
				"forms",
				"menu",
				"footer",
			])),
		},
	};
};
