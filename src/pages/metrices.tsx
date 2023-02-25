
import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import Divider from "@components/ui/divider";


import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import {useState,useEffect} from "react"

import { useRouter } from "next/router";

import {auth,database} from "@utils/firebase"

import {  ref, child, get } from "firebase/database";


import React from "react";





export default function Home() {
	const router=useRouter()
	const [user,setUser]:any=useState(null)
    
	
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if(user){
				setUser(user);


			}else{
router.push("/signin")
			}
		});
		return () => unsubscribe();
	  }, []);
      useEffect(()=>{
        loadData2()
      })
	
      const loadData2=async()=>{
        const dbRef = ref(database);
	get(child(dbRef, `UserSessions/`)).then((snapshot)=>{
		if (snapshot.exists()) {


            Object.entries(snapshot.val()).forEach(([key,value]:any)=>{
                
                if(user){
                    if(key===user.uid){
                   

                        Object.entries(value).forEach(([key2,value2]:any)=>{
                            if(value2.endDate){
								console.log(key2);
								
                                const date = new Date(Date.parse(value2.endDate));
                                const today = new Date();
                                const weekStart = new Date(today.setDate(today.getDate() - today.getDay()));
                                const weekEnd = new Date(today.setDate(today.getDate() - today.getDay() - 6));
                                if (date >= weekStart && date <= weekEnd) {
                                    console.log(value2);
                                    

                                }
                            }
                        })
                        

                        
                        
                        
    
                    }
                }
                
              
            })
            
            
            

            
            
            
            
            
            
		  }
	})

    }
	return (
		<>
		
			
			<Container >
				<div className="min-h-screen pt-12">

                </div>
				{/* <ProductsFeatured sectionHeading="text-featured-products" />
				<BannerCard
					key={`banner--key${banner[0].id}`}
					banner={banner[0]}
					className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
				/>
				
				
				<Subscription className="bg-opacity-0 px-5 sm:px-16 xl:px-0 py-12 md:py-14 xl:py-16" /> */}


			</Container>
			<Divider className="mb-0" />
		</>
	);
}

Home.Layout = Layout;

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
