import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import Subscription from "@components/common/subscription";
import PageHeader from "@components/ui/page-header";
import OrderInformation from "@components/order/order-information";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { toast,Toaster } from 'react-hot-toast'


export default function Order() {
	return (
		<>
		<Toaster/>
			{/* <PageHeader pageHeader="text-page-order" /> */}
			<Container>
				<OrderInformation />
				{/* <Subscription /> */}
			</Container>
		</>
	);
}

Order.Layout = Layout;

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
