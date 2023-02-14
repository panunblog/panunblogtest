
 /* eslint-disable-line */
 /* eslint eqeqeq: "off", curly: "error" */

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import Header from '@/components/Header/Header'
import About from '@/components/About/About'
import Blogc from '@/components/BlogCard/Blogc'
import Author from '@/components/AuthorCard/Author'
import Footer from '@/components/Footer/Footer'
import Contact from '@/components/Contact/Contact'
import Link from 'next/link'
import client from '../client'
import groq from 'groq'
import React from "react";
import { useState,useEffect } from 'react'
// import { GetStaticPaths, GetStaticProps } from 'next/types';

import {SlCalender} from 'react-icons/sl'
import Marquee from '@/components/Marquee/Marquee'





const inter = Inter({ subsets: ['latin'] })






const Home=({posts})=> {





 
  return (
    

   <>
   <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="description" content="The Panun Blog is a multimedia platform aimed at providing an
            inclusive forum for the people of Kashmir valley and beyond. Our
            vision is to facilitate a channel of healthy discourse and debate
            within the Kashmiri and non-Kashmiri communities"></meta>
        <title>Panun-blog</title>
        <base target="_blank"></base>
   </Head>
   <Marquee></Marquee>
   
    <Header></Header>
    <About></About>
 
      <Blogc posts={posts}></Blogc>


    <Author></Author>
    <Contact></Contact>
    <Footer></Footer>
   
    

   </>
  )
  
 
}


export async function getStaticProps() {
    const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now() ] | order(publishedAt desc)
    `)
    return {
      props: {
        posts
      },
      
    }
}
















export default Home


